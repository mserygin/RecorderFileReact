import React, { useEffect } from 'react'
import { AiOutlineReload } from 'react-icons/ai'
import styled from 'styled-components'
import { Button, Error, Loading } from '.'

const WrapperBlock = styled.div<{ loading: boolean }>`
    width: 100%;
    padding: 10px;
    height: 100%;

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0; 
        transition: 0.2s;
        opacity: ${({ loading }) => (loading ? 1 : 0)};
        visibility: ${({ loading }) => (loading ? 'visible' : 'hidden')};
        transform: scale(${({ loading }) => (loading ? '1' : '0.98')});
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;

        img {
            width: 40px;
        }
    }

    .content {
        transition: 0.2s;
        opacity: ${({ loading }) => (loading ? 0 : 1)};
        visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
        transform: scale(${({ loading }) => (loading ? '0.98' : '1')});
        height: 100%;
    }

    .reload {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text);

        & > * + * {
            margin-top: 10px;
        }
    }
`

interface Props {
    children?: JSX.Element[] | JSX.Element | string | null
    load: () => void
    loading?: boolean
    error: string | null
    data: any | null
    deps?: any[]
    noDataCheck?: boolean
    loadEveryVisit?: boolean
}

const Wrapper = ({ children, load, error, data, deps = [], noDataCheck = false, loadEveryVisit = false }: Props) => {
    useEffect(() => {
        if (!data || loadEveryVisit) load()
    }, deps)

    return (
        <WrapperBlock loading={!!error || !data}>
            <span className="loading">
                {!error ? (
                    <Loading />
                ) : (
                    <div className="reload">
                        <Error text={error} image={noDataCheck}>
                            {!noDataCheck && (
                                <Button onClick={() => load()} text="Загрузить снова" icon={<AiOutlineReload />} />
                            )}
                        </Error>
                    </div>
                )}
            </span>
            <div className="content">{children}</div>
        </WrapperBlock>
    )
}

export default Wrapper
