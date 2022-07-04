import { makeAutoObservable } from "mobx"
import { getReportsRequest } from "@api/report";

export type ReportT =  {
    id: number,
    student_id: number,
    standard_id: number,
    hash: string,
    creator_id?: number,
    link_document: string
}


class Reports {
    listMeReports: Array<ReportT> = [];
    listTrackedReports: Array<ReportT> = [];

    constructor() {
        makeAutoObservable(this)
    }

    * getReports(userId: number) {
        const {data} = yield getReportsRequest(userId)
        this.listMeReports = (data.meReport)
        this.listTrackedReports = (data.trackedReport)
    }
}

export default new Reports();
