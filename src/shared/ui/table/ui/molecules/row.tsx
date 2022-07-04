import displayWithType from '@shared/ui/table/lib/display-with-type'
import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import { useModal } from '@widgets'
import { RowWrapper } from '../atoms'
import Column from '../atoms/column'
import RowModal from './row-modal'

interface IndexedProperties {
    [key: string]: any
}

interface Props {
    el: { [key: string]: any }
    index: number
    columns: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
}

const Row = ({ columns, el, index, onRowClick = null }: Props) => {
    const { open } = useModal()
    const defaultOnClick = () => open(<RowModal title={'Информация'} obj={el} columns={columns} />)
    return (
        <RowWrapper isCursor={!!onRowClick} even={index % 2 === 0} onClick={() => (onRowClick ? onRowClick(el) : defaultOnClick())}>
            {columns.map((column) => {
                return (
                    <Column
                        width={column.width}
                        className={column.priority?.toString() ?? 'one'}
                        key={column.field}
                        align={column.align}
                    >
                        {column.render
                            ? column.render(displayWithType(el[column.field], column.type), el)
                            : displayWithType(el[column.field], column.type)}
                    </Column>
                )
            })}
        </RowWrapper>
    )
}

export default Row
