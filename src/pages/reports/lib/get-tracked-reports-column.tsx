import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'

const getTrackedReportsColumn = (): ColumnProps[] => {
    return [
        {
            title: 'Идентификатор',
            align: "center",
            field: 'id',
        },
        {
            title: 'Ссылка на документ',
            align: "center",
            field: 'link_document',
            render: value => <a target="_blank" href={value}>{value.slice(35)}</a>
        },
    ]
}

export default getTrackedReportsColumn
