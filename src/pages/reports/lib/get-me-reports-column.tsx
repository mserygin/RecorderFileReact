import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import styled from 'styled-components'

const LinkHash = styled.a`
  font-size: 10px;
  color: var(--text);
`

const getMeReportsColumn = (): ColumnProps[] => {
    return [
        {
            title: 'Идентификатор',
            align: "center",
            field: 'id',
        },
        {
            title: 'Стандарт',
            align: "center",
            field: 'hash',
            render: value => <LinkHash target="_blank" href={'http://localhost:8080/upload/' + value}>{value}</LinkHash>
        },
        {
            title: 'Ссылка на документ',
            align: "center",
            field: 'link_document',
            render: value => <a target="_blank" href={value}>{value.slice(35)}</a>
        },
    ]
}

export default getMeReportsColumn
