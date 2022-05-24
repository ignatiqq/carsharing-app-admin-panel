export interface IEssenseOptions {
    change: {
        data: IEssenseData | null,
        route: string | null,
        id: string | null,
        isLoading: boolean,
        error: string | null
    }
}


export interface IGetDataToChangeOptions {
    id: string,
    route: string
}

export interface IEssenseData {
    [key: string]: any
}