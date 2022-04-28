export interface IUserInfo {
    userId: string,
    access_token: string,
    refresh_token: string
}

export interface IAuth {
    userInfo: IUserInfo | null,
    isLoading: boolean,
    error: string | null
}