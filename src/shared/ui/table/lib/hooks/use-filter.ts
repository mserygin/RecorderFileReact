/* eslint-disable no-console */
import { FilterElementList } from '@shared/ui/added-elements-list'
import { TableCatalogType, TableSearchType, TableSortType } from '@shared/ui/table/types'
import normalizeString from '@shared/lib/normalize-string'
import { useCallback, useEffect, useState } from 'react'
import displayWithType from '../display-with-type'

interface IndexedProperties {
    [key: string]: any
}


const findWhatToDelete = (filterList: FilterElementList, matchStr: string) => {
    if (!filterList) return null

    return Object.keys(filterList).find((key) => {
        return filterList[key].title === matchStr
    })
}

const useFilter = (data: Nullable<IndexedProperties[]>, onChangeFilter?: (params: {[key: string]: string | number}) => void) => {

    const [search, setSearch] = useState<TableSearchType>(null)
    const [filter, setFilter] = useState<TableCatalogType>(null)
    const [sort, setSort] = useState<TableSortType>(null)
    const [filterList, setFilterList] = useState<FilterElementList>(null)
    const [resultData, setResultData] = useState(data)

    const onRemoveOne = useCallback(
        (id: string) => {
            setFilter((prev) => {
                if (prev && prev[id]) delete prev[id]
                return { ...prev }
            })

            if (id === search?.column?.field) setSearch(null)

            if (id === sort?.column?.field) setSort(null)
        },
        [search, filter, sort],
    )

    const onRemoveAll = useCallback(() => {
        setFilter(null)
        setSearch(null)
        setSort(null)
    }, [])

    useEffect(() => {
        if (!!filter) {
            if (!filterList)
                setFilterList((prev) => {
                    const el = Object.values(filter)[0].column
                    prev = { [el?.field ?? '']: { id: el?.field ?? '', title: 'Фильтр: ' + el?.title ?? '' } }

                    return { ...prev }
                })
            else {
                const newEl = Object.values(filter).find((el) => !filterList[el.column?.field ?? ''])
                if (newEl) {
                    setFilterList((prev) => {
                        const id = newEl.column?.field ?? ''
                        const title = 'Фильтр: ' + newEl.column?.title ?? ''
                        if (prev) prev[id] = { id, title }
                        return { ...prev }
                    })
                }
            }
        }

        if (!!search) {
            setFilterList((prev) => {
                const id = search.column?.field ?? ''
                const title = 'Поиск'

                if (prev) prev[id] = { id, title }
                else prev = { [id]: { id, title } }
                return { ...prev }
            })
        }

        if (!!sort) {
            setFilterList((prev) => {
                const id = sort.column?.field ?? ''
                const title = 'Сортировка'
                if (prev) prev[id] = { id, title }
                else prev = { [id]: { id, title } }
                return { ...prev }
            })
        }
    }, [search, filter, sort])

    useEffect(() => {
        const field = search?.column?.field
        if (!!search && field && !!onChangeFilter) {
            onChangeFilter({ [field]:  search.value })
        } else {
            if (onChangeFilter) {
                onChangeFilter({})
            }
        }
    }, [search])

    useEffect(() => {
        if (!!onChangeFilter) {
            if (filter) {
                let paramsFilter: {[key: string]: string | number} = {}
                Object.keys(filter).map(item => {
                    paramsFilter = { ...paramsFilter, [item]: filter[item].value.id }
                })
                onChangeFilter(paramsFilter)
            } else {
                onChangeFilter({})
            }
        }
    }, [filter])

    useEffect(() => {
        const col = sort?.column?.field ?? ''
        if (!!onChangeFilter) {
            if (!!sort && sort.value) {
                onChangeFilter({ [col]: sort.value.toUpperCase() })
            } else {
                onChangeFilter({})
            }
        }
    }, [sort?.value])

    useEffect(() => {
        setResultData(data)
    }, [data])

    return {
        sort,
        setSort,
        search,
        setSearch,
        resultData,
        filter,
        setFilter,
        filterList,
        setFilterList,
        onRemoveOne,
        onRemoveAll,
    }
}

export default useFilter
