import { postRequest } from "api/requests/requests";

interface ILogin {
    username: string,
    password: string,
    secret: string
}

const authorization = {
    login: ({username, password, secret}: ILogin) => {
        return postRequest("/db/auth", JSON.stringify({username, password}),
        {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Basic ${secret}`
            },
        })
    }
}

export default authorization;