import { Align, Direction } from '@shared/types'
import React, { HtmlHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

type BaseProps = HtmlHTMLAttributes<HTMLButtonElement>

export type ButtonProps = BaseProps & {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick?: (event: any) => void
    isChosen?: boolean
    width?: string
    minWidth?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    align?: Align
    direction?: Direction
    isActive?: boolean
    fixedInMobile?: boolean
    height?: string
}

export function Button(props: ButtonProps) {
    const {
        icon,
        text,
        onClick,
        width,
        minWidth,
        background,
        textColor,
        hoverBackground,
        align,
        isChosen,
        shrinkTextInMobile,
        fixedInMobile,
        direction = 'horizontal',
        isActive = true,
        height,
        ...restProps
    } = props

    return (
        <ButtonWrapper
            text={!!text}
            onClick={(e) => isActive && onClick?.(e)}
            isChosen={isChosen}
            width={width}
            minWidth={minWidth}
            background={background}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            align={align}
            direction={direction}
            isActive={isActive}
            fixedInMobile={fixedInMobile}
            height={height}
            {...restProps}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}
