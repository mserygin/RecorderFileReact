import ToggleArea, { ToggleItem } from '@shared/ui/organisms/toggle-area'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from "@shared/ui/button";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeaderContextMenuWrapper = styled.div`
  .user-info-plate {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--theme);
    box-shadow: var(--files-shadow);
    border-radius: 5px;
    overflow: hidden;
    color: var(--text);

    .avatar-and-name {
      padding: 7px;
      display: flex;
      align-items: center;

      b {
        font-size: 0.8em;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    & > .buttons {
      display: flex;
      align-items: center;

      button {
        background: var(--theme);
        border-radius: 0;
        width: 100%;

        &:hover {
          background: var(--search);
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .user-info-plate {
      padding: 10px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const HeaderContextMenu = () => {
    const history = useNavigate()

    const {theme, switchTheme} = useTheme()
    const [toggles, setToggles] = useState<ToggleItem[]>([
        {
            title: 'Темная тема',
            state: theme !== 'light',
            action: (state: boolean) => switchTheme(state),
        },
    ])

    useEffect(() => {
        setToggles([
            {
                title: 'Темная тема',
                state: theme !== 'light',
                action: (state: boolean) => switchTheme(state),
            },
        ])
    }, [theme])

    const logout = async () => {
        await localStorage.setItem('token', '')
        history('/')
        window.location.reload();
    }


    return (
        <HeaderContextMenuWrapper>
            <ToggleArea title={''} toggles={toggles} setToggles={setToggles}/>
            <Button
                align="left"
                icon={<FiLogOut/>}
                onClick={logout}
                text="Выйти"
                width="100%"
                background="var(--schedule)"
            />
        </HeaderContextMenuWrapper>
    )

}

export default HeaderContextMenu
