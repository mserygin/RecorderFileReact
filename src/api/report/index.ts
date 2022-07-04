import Api from "@api/index";

type ReportT = {
    id?: number,
    standardId: string,
    linkDocument: string,
    studentId: string
}

export const addReportRequest = (data : ReportT) => Api.post(`reports/add`, data)

export const getReportsRequest = (userId: number) => Api.get(`reports/all/${userId}`)
