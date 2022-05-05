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
        return postRequest("/auth/login", JSON.stringify({username, password}),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Basic ${secret}`
            },
        })
    },
    refresh: ({refreshToken, secret}: IUserRefreshData) => {
        return postRequest("/auth/refresh", JSON.stringify({refresh_token: refreshToken}),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Basic ${secret}`
            }
        })
    }
}

export default authorization;