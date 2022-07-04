import React, { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import styles from "./styles.module.css";
import { Title } from "@shared/ui/title";
import styled from 'styled-components'

type PropType = {
    onUpload: (file: File) => void
    onChange: () => void
}

const UploadArea = styled.div`
  border-radius: 15px;
  box-shadow: var(--light-box-shadow);
`


const FileName = styled.div`
  padding: 20px;
  color: var(--text);
`


const FileUpload: React.FC<PropType> = ({onUpload, onChange}) => {
    const [fileName, setFileName] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value || event.target.files === null) return;
        setFileName(event.target.files[0].name);
        onUpload(event.target.files[0]);
        onChange(false)
    }

    const dragPreventDefault = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            setFileName(files[0].name);
            onUpload(files[0]);
        }
    }

    return (
        <UploadArea
            onDragOver={dragPreventDefault}
            onDragEnter={dragPreventDefault}
            onDragLeave={dragPreventDefault}
            onDrop={fileDrop}
        >
            <input type="file" name="file" id="file" className={styles.input_file} onChange={handleChange}/>
            <label htmlFor="file">
                <div className={styles.dragger}>
                    <InboxOutlined className={styles.icon}/>
                    <Title size={4}>Нажмите или перетащите файл в эту область, чтобы загрузить</Title>
                    {
                        fileName && (
                            <FileName>
                                {fileName}
                            </FileName>
                        )
                    }

                </div>
            </label>

        </UploadArea>
    )
}

export default FileUpload;
