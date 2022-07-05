import React, { useEffect, useState } from "react"

import 'antd/dist/antd.css';
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useParams } from "react-router";
import { getParamsByHashRequest } from "@api/verification-params";
import FileUpload from "@pages/upload-file/FileUpload";
import { uploadFileRec, uploadFileReport } from "@api/upload-file";
import { Button } from "@shared/ui/button";
import { Loading } from "@shared/ui/loading";
import { addReportRequest } from "@api/report";
import { useModal } from "@widgets";
import ListParams from "@pages/upload-file/ui/list-params";
import ListNotes from "@pages/upload-file/ui/list-notes";

const ListAdd = styled.div`
  display: flex;
  height: calc(100vh - 110px);
  box-shadow: var(--very-mild-shadow);
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  color: var(--text);
`

const UploadFilePage = observer(() => {
    const [params, setParams] = useState({})
    const [file, setFile] = useState<File | null>(null);
    const [listNotes, setListNotes] = useState<{ [key: string]: Array<number> } | null>(null);
    const [error, setError] = useState(null);
    const [linkReport, setLinkReport] = useState('');
    const [isShowLoading, setIsShowLoading] = useState(false);
    const [isCheckedFile, setIsCheckedFile] = useState(false)
    const {hash} = useParams();
    const {open} = useModal()


    const saveFile = (file: File) => setFile(file)

    const loading = async () => {
        setListNotes(null)
        setLinkReport('')
        if (!file) return;

        try {
            setIsShowLoading(true)
            const response = await uploadFileRec(file, params);
            setIsCheckedFile(true)
            setIsShowLoading(false)
            const listNo = await response.data.reduce((acc: any, cur: any) => {
                cur.listProblemsPage.forEach((i: number) => {
                    if (acc[i] !== null) {
                        acc[i] = acc[i] ? [...acc[i], cur.name] : [cur.name]
                    }
                })
                return acc
            }, {})

            if (Object.keys(listNo).length === 0) {
                const {data} = await uploadFileReport(file)
                setLinkReport(data.linkReport)
                addReportRequest({standardId: hash, linkDocument: data.linkReport, studentId: localStorage.getItem('token')})
            } else {
                setListNotes(response.data)
            }
        } catch (e) {
            setError('Ошибка запроса, попробуй позже');
        }
    }

    useEffect(async () => {
        const {data} = await getParamsByHashRequest(hash)
        setParams(data.params)
    }, [hash])

    return (
        <ListAdd>
            <Button
                text="Параметры проверки"
                background="transparent"
                textColor="var(--grey)"
                align="right"
                width="100%"
                onClick={() => open(<ListParams listParams={params}/>)}
            />
            <div className="form_file_upload">
                <FileUpload onUpload={saveFile} onChange={setIsCheckedFile}/>
            </div>
            <Button
                textColor='#fff'
                background={!isCheckedFile ? "var(--reallyBlue)" : "var(--green)"}
                text={!isCheckedFile ? "Проверить" : "Проверено"}
                onClick={loading}
            />
            {!!linkReport && !!isCheckedFile && <a target="_blank" href={linkReport}>Получить отчет</a>}
            {
                !!listNotes && !!isCheckedFile && <Button
                    text="Показать ошибки"
                    background="transparent"
                    textColor="var(--red)"
                    align="center"
                    width="100%"
                    onClick={() => open(<ListNotes listNotes={listNotes}/>)}
                />
            }
            <div className="block-notes">{isShowLoading && <Loading width={50} height={50}/>}</div>
        </ListAdd>
    )

})

export default UploadFilePage
