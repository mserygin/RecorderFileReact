import AddParamsPage from "@pages/add-params";
import { GrChapterAdd } from 'react-icons/gr';


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
        title: "Задать параметры",
        icon: GrChapterAdd,
    },
]
