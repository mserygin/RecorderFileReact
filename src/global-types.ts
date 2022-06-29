import { ReactNode } from 'react'

declare global {
    type Nullable<T> = T | null | undefined
    type ChildrenType = Nullable<ReactNode[] | ReactNode | string>

    type EmptyObject = Record<string, never>

    type ServerListRequest<TFilter extends Record<string, unknown> | EmptyObject> = {
        filter?: TFilter
        limit?: number
        page?: number
    }
}

export {}
