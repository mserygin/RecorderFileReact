import { Message, Title } from '@shared/ui/atoms'

import Input from '@shared/ui/atoms/input'
import SubmitButton from '@shared/ui/atoms/submit-button'
import React, { useEffect, useState } from 'react'
import useTheme from "@shared/lib/hooks/use-theme";
import { loginRequest } from "@api/auth";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const LoginBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  color: var(--text);
  border-radius: 8px;
  padding: 20px;
  row-gap: 20px;

  @media (max-width: 1000px) {
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    height: 100%;
    justify-content: center;
  }
`

const LoginBlock = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useNavigate()
    useEffect(() => {
        history('/')
    }, [])
    useTheme()

    const authAdmin = () => {
        loginRequest({login, password}).then(({data}) => {
            localStorage.setItem('token', data.token)
            history('/')
            window.location.reload();
        }).catch(() => {
            setError('Неверный логин или пароль')
        })
    }


    return (
        <LoginBlockWrapper>
            <Title size={2} align="center">
                Вход в личный кабинет
            </Title>
            <Message type="failure" visible={!!error}>
                {error}
            </Message>
            <Input value={login} setValue={setLogin} title="Логин" placeholder="Введите логин"/>
            <Input
                value={password}
                setValue={setPassword}
                title="Пароль"
                placeholder="Введите пароль"
                type="password"
            />
            <SubmitButton
                text="Вход"
                action={() => authAdmin()}
                completed={false}
                setCompleted={() => null}
                isActive={!!password && !!login}
                isLoading={false}
            />
        </LoginBlockWrapper>
    )
}

export default LoginBlock
