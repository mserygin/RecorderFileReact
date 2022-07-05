import React from "react"
import { Layout } from 'antd'
import { Route, Routes } from "react-router-dom"
import RoleBasedRouting from "./routes/index"
import useTheme from '@shared/lib/hooks/use-theme'
import { Navbar, Header } from '@widgets'
import { routes } from "./routes/routes"
import styled from 'styled-components'
import GlobalStyles from "../global-styles";
import { Modal } from "@widgets/modal";
import LoginPage from "@pages/login";
import useResize from "@shared/lib/hooks/use-resize";

const {Content} = Layout


const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  background: var(--theme);
  overflow: hidden;
  margin-left: 1px;

  .page-content {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: calc(100% - 50px);
    padding: 20px;

    ::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (max-width: 1000px) {
    font-size: 0.9em;
  }
`

const App = () => {
    useTheme()
    const { width, height } = useResize()

    const isAuthenticated = !!localStorage.getItem('token')

    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <GlobalStyles/>
            {isAuthenticated ? <>
            { width > 1000 && <Navbar visible={true}/>}
                <ContentWrapper>
                    <Header/>
                    <Content className="page-content">
                        <Routes>
                            <Route>
                                {routes.map((route, key) =>
                                    RoleBasedRouting(
                                        {
                                            path: route.path,
                                            component: route.component,
                                            redirect: route.redirect,
                                            roles: route.roles,
                                            exact: route.exact,
                                            key: key
                                        }
                                    )
                                )}
                            </Route>
                        </Routes>
                    </Content>
                </ContentWrapper>
                <Modal/>
                </> : <LoginPage/>}
        </div>
    )
}

export default App
