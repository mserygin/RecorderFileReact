import axios, { AxiosResponse } from "axios"

export type FileParams = {
    [key: string]: string | number
}

export const uploadFileRec = (file: File, params: FileParams): Promise<AxiosResponse> => {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('data', JSON.stringify(params))

    return axios({
        method: "post",
        url: "http://185.17.122.164:3037/check-text/",
        // url: "http://localhost:5000/check-text/",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"},
    })
}

export const uploadFileReport = (file: File): Promise<AxiosResponse> => {
    const formData = new FormData();
    formData.append('file', file)

    return axios({
        method: "post",
        url: "http://localhost:3022/files/upload",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"},
    })
}




