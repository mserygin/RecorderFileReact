import { Error } from '@shared/ui/error'
import { Loading } from '@shared/ui/loading'
// import Pagination from '@shared/ui/pagination'
import { TableCatalogType, TableProps } from '@shared/ui/table/types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from '../molecules'

const BodyWrapper = styled.div<{indentationForHeight}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  height: ${({indentationForHeight}) => `calc(100% - ${indentationForHeight})`};
  overflow: auto;

  .page-indicator {
    width: 100px;
    background: var(--mild-theme);
    padding: 3px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
    font-weight: 600;
  }
`

const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  img {
    width: 35px;
    height: 35px;
  }
`

const Body = ({data, loading, columns, maxOnPage, onRowClick, filter, indentationForHeight, nameBodyForScroll}: TableProps & { filter: TableCatalogType }) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pages = Math.ceil((data?.length ?? 0) / (maxOnPage ?? 1)) - 1
    const result = maxOnPage ? data?.slice(currentPage * maxOnPage, (currentPage + 1) * maxOnPage) : data

    useEffect(() => {
        setCurrentPage(0)
    }, [filter])

    return !loading ? (
        <BodyWrapper indentationForHeight={indentationForHeight} className={nameBodyForScroll}>
            {result?.map((el, i) => {
                return <Row onRowClick={onRowClick} columns={columns} el={el} key={i} index={i}/>
            })}
            {!result?.length && <Error text="Нет данных"/>}
            {/*<Pagination*/}
            {/*    pages={pages}*/}
            {/*    condition={!!maxOnPage && !!result?.length}*/}
            {/*    currentPage={currentPage}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*/>*/}
        </BodyWrapper>
    ) : (
        <LoadingWrapper>
            <Loading/>
        </LoadingWrapper>
    )
}

export default Body
