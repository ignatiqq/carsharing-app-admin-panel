import { EssenseActions } from "store/changeEssence/types"

const getDashboardType = (pathname: string) => {
    return pathname.split("/")[pathname.split("/").length - 1]    
}

interface IGetDasboardChangeLink {
    pathname: string,
    action: EssenseActions,
    id?: string
}

export const getDashboardChangeLink = ({pathname, action, id = ""}: IGetDasboardChangeLink) => {
    return `/dashboard/${getDashboardType(pathname)}/${action}${id ? `/${id}` : ""}`
}