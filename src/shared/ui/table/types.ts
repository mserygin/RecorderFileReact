import { SelectPage } from '@widgets/select'
import { Align } from '@shared/types'

interface IndexedProperties {
    [key: string]: any
}


export type SortType = 'desc' | 'asc' | null

export type TableSearchType = {value: string; column: Nullable<ColumnProps>} | null
export type TableCatalogType = {[field: string]: {value: SelectPage; column: Nullable<ColumnProps>}} | null
export type TableSortType = {value: SortType; column: Nullable<ColumnProps>} | null

export type ColumnType = 'date' | 'rub'

export interface ColumnProps {
    title: string
    field: string
    priority?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
    showFull?: boolean
    width?: string
    align?: Align
    search?: boolean
    sort?: boolean
    catalogs?: SelectPage[]
    type?: ColumnType
    render?: (value: any, obj: IndexedProperties) => ChildrenType
}

export interface TableProps {
    columns: ColumnProps[]
    data: Nullable<IndexedProperties[]>
    maxOnPage?: number
    onRowClick?: (obj: IndexedProperties) => void
    loading?: boolean
    indentationForHeight?: string
    nameBodyForScroll?: string
    onChangeFilter?: () => (field: string, value: string | number) => void
}
