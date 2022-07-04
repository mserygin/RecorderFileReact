import Select, { SelectPage } from '@widgets/select'
import { ColumnProps, TableCatalogType, TableSearchType, TableSortType } from '@shared/ui/table/types'
import React from 'react'
import { FaSort } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { Column, HeaderWrapper } from '../atoms'

interface Props {
    sort: TableSortType
    setSort: React.Dispatch<React.SetStateAction<TableSortType>>
    columns: ColumnProps[]
    search: TableSearchType
    filter: TableCatalogType
    setFilter: React.Dispatch<React.SetStateAction<TableCatalogType>>
    setSearch: React.Dispatch<React.SetStateAction<TableSearchType>>
}

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
  justify-content: center;
`

const Header = ({ columns, search, setSearch, filter, setFilter, sort, setSort }: Props) => {
    return (
        <HeaderWrapper>
            {columns.map((column) => {
                return (
                    <Column
                        overflow={!!column.catalogs ? 'visible' : 'hidden'}
                        width={column.width}
                        title={column.title}
                        clickable={column.search}
                        align={column.align}
                        key={column.title}
                        className={column.priority?.toString() ?? 'one'}
                        onClick={() => {
                            if (column.search) {
                                setSearch({ value: '', column })
                            }

                            if (column.sort) {
                                setSort((prev) => {
                                    const result = !prev?.value ? 'desc' : prev.value === 'desc' ? 'asc' : null
                                    // sortPopUp(result)
                                    return !result ? null : { column, value: result }
                                })
                            }
                        }}
                    >
                        {!column.catalogs && column.title}
                        {!column.catalogs && !column.sort && column.search && (
                            <FiSearch
                                className="icon"
                                style={{
                                    color: column.field === search?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                }}
                            />
                        )}
                        {column.sort && (
                            <FaSort
                                className="icon"
                                style={{
                                    color: column.field === sort?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                }}
                            />
                        )}
                        {column.catalogs && (
                            <FilterWrapper>
                                <Select
                                    appearance={false}
                                    items={column.catalogs ?? []}
                                    setSelected={(page: any) =>
                                        setFilter((prev) => {
                                            if (page) {
                                                prev = { ...prev, [column.field]: { column, value: page } }
                                                return prev
                                            }
                                            return prev
                                        })
                                    }
                                    selected={filter?.[column.field]?.value}
                                    placeholder={column.title}
                                />
                            </FilterWrapper>
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}

export default Header
