import { ContextMenu } from '@shared/ui/context-menu'
import useOnClickOutside from '@shared/lib/hooks/use-on-click-outside'
import React, { useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styled from 'styled-components'
import { HeaderContextMenu } from '../molecules/'
import { FiUser } from 'react-icons/fi'

const UserInfoWrapper = styled.div`
    position: relative;
    z-index: 10;

    & > .user-info-plate {
        display: flex;
        align-items: center;
        color: var(--text);
        background: transparent;
        padding: 15px;
        border-radius: var(--brLight);
        cursor: pointer;
        position: relative;
        user-select: none;

        &:hover {
            background: var(--almostTransparent);
        }
    }
`

const UserInfo = () => {
    const [isVisible, setIsVisible] = useState(false)

    const userInfoRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(userInfoRef, () => setIsVisible(false))

    const handleVisible = () => {
        setIsVisible((prev) => !prev)
    }

    return  (
        <UserInfoWrapper ref={userInfoRef} tabIndex={1}>
            <div className="user-info-plate" onClick={handleVisible}>
                <FiUser/>
                <FiChevronDown />
            </div>
            <ContextMenu isVisible={isVisible}>
                <HeaderContextMenu />
            </ContextMenu>
        </UserInfoWrapper>
    )
}

export default UserInfo
