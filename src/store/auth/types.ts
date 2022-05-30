export interface ITokenInfo {
    userId: string,
    access_token: string,
    refresh_token: string,
    expires_in: string
}

export interface IAuth {
    data: ITokenInfo | null,
    isLoading: boolean,
    requestLoaded: boolean,
    error: string | null
}