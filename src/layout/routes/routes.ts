import AddParamsPage from "@pages/add-params";
import UploadFilePage from "@pages/upload-file";
import { UploadOutlined, AppstoreAddOutlined, SnippetsOutlined } from "@ant-design/icons";
import ReportsPage from "@pages/reports";


export type RouterType = {
    component: any
    roles: string[]
    path: string
    redirect: any
    exact?: boolean
    icon?: any
    isNavbar: boolean
    title?: string
}


export const routes: RouterType[] = [
    {
        component: AddParamsPage,
        roles: [''],
        path: "/",
        redirect: AddParamsPage,
        isNavbar: true,
        title: "Параметры проверки",
        icon: AppstoreAddOutlined,
    },
    {
        component: UploadFilePage,
        roles: [''],
        path: "/upload/:hash",
        redirect: UploadFilePage,
        isNavbar: false,
        title: "Загрузка файла",
        icon: UploadOutlined,
    },
    {
        component: ReportsPage,
        roles: [''],
        path: "/reports",
        redirect: ReportsPage,
        isNavbar: true,
        title: "Отчеты",
        icon: SnippetsOutlined,
    },
]
