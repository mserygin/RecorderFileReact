import { Align, HeaderSize } from '@shared/types'
import React from 'react'
import { CreateHeader } from './create-header'
import { ChildrenWrapper, RedStar, TitleWrapper } from './styles'

export type TitleProps = {
    children: ChildrenType
    width?: string
    size?: HeaderSize
    align?: Align
    bottomGap?: boolean | string
    topGap?: boolean | string
    icon?: React.ReactNode
    iconColor?: string
    colorText?: string
    required?: boolean
    visible?: boolean
}

export function Title(props: TitleProps) {
    const {
        icon,
        iconColor,
        colorText,
        children,
        size = 1,
        required,
        width,
        align = 'center',
        bottomGap = false,
        topGap = false,
        visible = true,
    } = props

    return visible ? (
        <TitleWrapper align={align} bottomGap={bottomGap} topGap={topGap} iconColor={iconColor}>
            {icon}
            <CreateHeader size={size} width={width}>
                {required && <RedStar>*</RedStar>}
                <ChildrenWrapper width={width} colorText={colorText}>{children}</ChildrenWrapper>
            </CreateHeader>
        </TitleWrapper>
    ) : null
}
