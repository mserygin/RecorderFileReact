import React, { useState } from "react";
import style from './style.module.css';
import styled from 'styled-components'
import { routes } from "@layout/routes/routes";
import { useLocation } from "react-router-dom";
import useResize from "@shared/lib/hooks/use-resize";
import { LeftsideBarWrapper } from "@widgets/navbar/atoms";
import LeftSideBarListWrapper from "./atoms/leftside-bar-list-wrapper";
import LeftSideBarItemWrapper from "./atoms/leftside-bar-item-wrapper";

const BaseNavbar = styled.div`
  background: var(--theme);
  box-shadow: var(--light-box-shadow);
  min-width: 265px !important;
  width: 265px !important;


  .linkNavbar:hover {
    color: var(--text);
    cursor: pointer;
  }

  .menuItem {
    padding: 12px 30px;
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 15px;
  }

  .linkNavbar:hover .menuItem {
    color: var(--content);
    background-color: var(--settings);
    border-radius: 15px;
  }


  .linkNavbar {
    font-family: Roboto, serif;
    text-decoration: none;
    color: var(--text);
  }

  .linkNavbarActive {

    color: var(--text);
    background-color: var(--settings);
    border-radius: 15px;
    text-decoration: none;
    padding: 12px 30px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`

type PropsType = {
    visible: boolean
}


const Navbar: React.FC<PropsType> = ({visible}) => {

    const location = useLocation()
    const {height} = useResize()

    const [active, setActive] = useState<string>(location.pathname)

    const getComponentByName = (Com: any) => <Com/>

    return (
        <BaseNavbar className={`${(visible) && style.mobileNavbar} `}>

            <LeftsideBarWrapper height={height}>
                <div className={style.collapsed}>
                    <img src={} alt="Логотип"/>
                </div>
                <LeftSideBarListWrapper>
                    {routes.map(({path, isNavbar, title, icon}, key) => isNavbar && (
                        <LeftSideBarItemWrapper
                            onClick={() => setActive(path)}
                            to={path}
                            key={key}
                            $isCurrent={path === active}
                        >
                            {getComponentByName(icon)}
                            <strong>{title}</strong>
                        </LeftSideBarItemWrapper>
                    ))}
                </LeftSideBarListWrapper>
            </LeftsideBarWrapper>
        </BaseNavbar>
    )
}

export default Navbar
