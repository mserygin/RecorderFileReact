import React, { useEffect } from "react"

import 'antd/dist/antd.css';
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { FormBlock } from "@shared/ui/atoms";
import { SliderPage } from "@widgets";
import MeReports from "./ui/meReports";
import TrackedReport from "./ui/trackedReports";
import { reportsState } from "@store";


const ReportsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 110px);

  .slider-list-reports {
    margin-top: 10px;
    padding: 1px;
  }
`


const ReportsPage = observer(() => {
    useEffect(() => {
        reportsState.getReports(localStorage.getItem('token'))
    }, [])
    return (
        <ReportsWrapper>
            <FormBlock maxWidth="1500px">
                <SliderPage
                    pages={[
                        {
                            title: 'Мои отчеты',
                            content: <MeReports/>,
                        },
                        {
                            title: 'Отслеживаемые отчеты',
                            content: <TrackedReport/>,
                        },
                    ]}
                    className="slider-list-reports"
                />
            </FormBlock>
        </ReportsWrapper>
    )

})

export default ReportsPage
