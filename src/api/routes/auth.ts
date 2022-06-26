import { postRequest } from "api/requests/requests";

export interface IUserLoginData {
    username: string,
    password: string
}

export interface IUserRefreshData {
    refreshToken: string,
    secret: string
}

interface ILogin extends IUserLoginData {
    secret: string
}

const authorization = {
    login: ({username, password, secret}: ILogin) => {
        return postRequest("/auth/login",
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Basic ${secret}`
            },
        }, JSON.stringify({username, password}))
    },
    refresh: ({refreshToken, secret}: IUserRefreshData) => {
        return postRequest("/auth/refresh",
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Basic ${secret}`
            }
        }, JSON.stringify({refresh_token: refreshToken}))
    },
    logout: () => {
        return postRequest("/auth/logout", {
            headers: {
                authorization: true
            }
        })
    }
}

export default authorization;