import KeyValue from '@shared/ui/atoms/key-value'
import { ColumnProps } from '@shared/ui/table/types'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

interface IndexedProperties {
    [key: string]: any
}


const RowModalWrapper = styled.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`

interface Props {
    title: string
    obj: IndexedProperties
    columns: ColumnProps[]
}

const RowModal = ({ title, obj, columns }: Props) => {
    return (
        <RowModalWrapper>
            <Title size={3} align="left" bottomGap>
                {title}
            </Title>
            {columns.map((column) => {
                return (
                    <KeyValue
                        keyStr={column.title}
                        value={column.render ? column.render(obj[column.field], obj) : obj[column.field]}
                        key={column.title}
                    />
                )
            })}
        </RowModalWrapper>
    )
}

export default RowModal
