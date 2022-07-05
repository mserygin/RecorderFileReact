import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import styled from 'styled-components'

const LinkHash = styled.a`
  font-size: 14px;
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
            render: value => <LinkHash target="_blank" href={'https://document-check.serygin.ru/upload/' + value}>{value}</LinkHash>
        },
        {
            title: 'Ссылка на документ',
            align: "center",
            field: 'link_document',
            render: value => <a target="_blank" href={value}>{value.slice(52)}</a>
        },
    ]
}

export default getMeReportsColumn
