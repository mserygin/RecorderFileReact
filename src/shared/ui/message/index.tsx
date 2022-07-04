import { Align, MessageType } from '@shared/types'
import React from 'react'
import { MessageWrapper } from './styles'

export type MessageProps = {
    type: MessageType
    children?: ChildrenType
    title?: string
    icon?: React.ReactNode
    visible?: boolean
    align?: Align
    width?: string
    maxWidth?: string
}

export function Message({
    type,
    children,
    width,
    maxWidth,
    align = 'left',
    visible = true,
}: MessageProps) {
    return visible ? (
        <MessageWrapper type={type} align={align} width={width} maxWidth={maxWidth}>
            {children && <div className="info-text">{children}</div>}
        </MessageWrapper>
    ) : null
}
