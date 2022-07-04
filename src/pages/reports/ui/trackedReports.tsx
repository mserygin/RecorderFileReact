import React from "react";
import Table from "@shared/ui/table";
import getTrackedReportsColumn from "@pages/reports/lib/get-tracked-reports-column";
import { observer } from "mobx-react-lite";
import { reportsState } from "@store";

const TrackedReport = observer(() => {
    return (
        <Table
            indentationForHeight={'68px'}
            columns={getTrackedReportsColumn()}
            data={reportsState.listTrackedReports}
        />
    )
})

export default TrackedReport
