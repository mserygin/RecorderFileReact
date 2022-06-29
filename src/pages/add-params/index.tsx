import React from "react"

import 'antd/dist/antd.css';
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const ListAdd = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 110px);
  .list-user-table{
    overflow: hidden;
    height: 100%;
  }
`
export type ParamsItem = {
    name: string
    label: string
    value: string | number
}


export const listParams: Array<ParamsItem> = [
    {name: "fontSize", label: "Размер шрифта", value: 0},
    {name: "fontName", label: "Название шрифта", value: ""},
    {name: "firstLineIndent", label: "Отступ первой строки", value: 0},
]

const AddParamsPage = observer(() => {

    return (
        <ListAdd>

        </ListAdd>
    )

})

export default AddParamsPage
