import React from 'react'
import styled from 'styled-components'
import useFilter from './lib/hooks/use-filter'
import { TableProps } from './types'
import { Body, Header, Search } from './ui'
import AddedElementsList from "@shared/ui/added-elements-list";

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--files-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    max-height: 100%;
    height: 100%;
`

const Table = ({ columns, data, maxOnPage, onRowClick, loading = false, indentationForHeight, nameBodyForScroll, onChangeFilter }: TableProps) => {
    const {
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
    } = useFilter(data, onChangeFilter)

    return (
        <TableWrapper>
            <AddedElementsList
                setList={setFilterList}
                padding="0 10px"
                list={filterList}
                onRemoveOne={onRemoveOne}
                onRemoveAll={onRemoveAll}
            />
            <Search search={search} setSearch={setSearch} focus={true}/>
            <Header
                sort={sort}
                setSort={setSort}
                columns={columns}
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
            />
            <Body
                nameBodyForScroll={nameBodyForScroll}
                indentationForHeight={indentationForHeight}
                loading={loading}
                onRowClick={onRowClick}
                filter={filter}
                columns={columns}
                data={resultData}
                maxOnPage={maxOnPage}
            />
        </TableWrapper>
    )
}

export default Table
