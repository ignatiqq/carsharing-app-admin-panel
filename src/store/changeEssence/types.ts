export interface IEssenseOptions {
    change: {
        data: Array<any> | null,
        route: string | null,
        isLoading: boolean,
        error: string | null
    }
}


export interface IGetDataToChangeOptions {
    id: string,
    route: string
}