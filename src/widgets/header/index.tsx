import React from 'react'
import { HeaderWrapper, UserInfo } from './ui'

const Header = () => {

    return (
        <HeaderWrapper>
            <UserInfo />
        </HeaderWrapper>
    )
}

export default React.memo(Header)
