import React from "react";
import Table from "@shared/ui/table";
import getMeReportsColumn from "@pages/reports/lib/get-me-reports-column";
import { observer } from "mobx-react-lite";
import { reportsState } from "@store";

const MeReports = observer(() => {
    return (
        <Table
            indentationForHeight={'68px'}
            columns={getMeReportsColumn()}
            data={reportsState.listMeReports}
        />
    )
})

export default MeReports
