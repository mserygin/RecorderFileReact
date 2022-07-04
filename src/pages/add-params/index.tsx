import React, { useState } from "react"

import 'antd/dist/antd.css';
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import styles from "./styles.module.css";
import { FaRegCopy } from 'react-icons/fa'
import { Button } from "@shared/ui/button";
import { addVerificationParamsRequest } from "@api/verification-params";
import { Input } from "@shared/ui/atoms";
import { Title } from "@shared/ui/title";

const ListAdd = styled.div`
  display: flex;
  height: calc(100vh - 110px);
  box-shadow: var(--very-mild-shadow);
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding: 20px;
  border-radius: 15px;

  .link-for-params {
    display: flex;
    gap: 10px;
    margin-top: -20px;
    align-items: center;
  }

  .button_up {
    align-self: end;
  }

  .link-span {
    color: var(--blue)
  }

  .label-input {
    color: var(--text);
    font-size: 18px;
    white-space: nowrap;
  }
`
const Input = styled.input<{
    leftIcon: boolean
    isActive: boolean
    inputAppearance: boolean
    isSimple: boolean
    width?: string
    minWidth?: string
    danger?: boolean
}>`
  border: ${({inputAppearance}) => (inputAppearance ? 'none' : '1px solid var(--search)')};
  color: var(--text);
  outline: none;
  background: ${({inputAppearance}) => (inputAppearance ? 'var(--search)' : 'transparent')};

  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  padding-left: ${({leftIcon}) => (leftIcon ? '30px' : '10px')};
  max-height: 36px;
`

export type ParamsItem = {
    name: string
    label: string
    value: string | number
}


export const listParams: Array<ParamsItem> = [
    {name: "fontSize", label: "Размер шрифта: ", value: "", placeholder: "Укажите значение..."},
    {name: "fontName", label: "Название шрифта: ", value: "", placeholder: "Укажите значение..."},
    {name: "firstLineIndent", label: "Отступ первой строки: ", value: "", placeholder: "Укажите значение..."},
]

type FileParams = {
    [key: string]: string | number
}

const defaultFormValue = (acc: FileParams, cur: ParamsItem) => {
    acc[cur.name] = cur.value;
    return acc;
}

const AddParamsPage = observer(() => {
    const [valueForm, setValueForm] = useState<FileParams>(listParams.reduce(defaultFormValue, {}))

    const [url, setUrl] = useState('')

    const generateUrl = async () => {
        const {data} = await addVerificationParamsRequest({params: valueForm, user: 1})
        setValueForm(listParams.reduce(defaultFormValue, {}))
        setUrl(data)
    }


    const onChangeForm = (name, value) => {
        setValueForm({...valueForm, [name]: value})
    }

    return (
        <ListAdd>
            <Button align={"right"} className="button_up" onClick={generateUrl} text={"Сохранить"}/>
            {url && <>
                <Title size={5}>Ссылка для проверки</Title>
                <div className="link-for-params">
                    <span className='link-span'>{window.location.href + 'upload/' + url}</span>
                    <Button
                        onClick={() => navigator.clipboard.writeText(window.location.href + 'upload/' + url)}
                        icon={<FaRegCopy/>} title={"Копировать"}/>
                </div>
            </>
            }
            <form className={styles.items}>
                {
                    listParams.map(item => (
                        <div className={styles.item}>
                            <span className={'label-input'}>{item.label}</span>
                            <Input placeholder={item.placeholder} inputAppearance={true} type="text" id={item.name}
                                   value={valueForm[item.name]}
                                   onChange={(event) => onChangeForm(item.name, event.target.value)}
                            />
                        </div>
                    ))
                }
            </form>
        </ListAdd>
    )

})

export default AddParamsPage
