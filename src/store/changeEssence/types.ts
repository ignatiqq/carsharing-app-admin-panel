export interface IEssenseOptions {
    change: {
        data: {[key: string]: any} | null,
        route: string | null,
        isLoading: boolean,
        error: string | null
    }
}


export interface IGetDataToChangeOptions {
    id: string,
    route: string
}