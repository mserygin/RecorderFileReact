import React from 'react'
import { Title } from '../title'
import { ErrorContainer } from './styles'

export type ErrorProps = {
    text: string
    image?: string
    children?: ChildrenType
}

export function Error({ text, image, children }: ErrorProps) {
    return (
        <ErrorContainer>
            {/*<img src={image} alt="\(" />*/}
            <Title size={3} bottomGap="20px">
                {text}
            </Title>
            {children && <div className="error-content">{children}</div>}
        </ErrorContainer>
    )
}
