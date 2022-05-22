const getDashboardType = (pathname: string) => {
    return pathname.split("/")[pathname.split("/").length - 1]    
}

export const getDashboardChangeLink = (pathname: string, id: string) => {
    return `/dashboard/${getDashboardType(pathname)}/change/${id}`
}