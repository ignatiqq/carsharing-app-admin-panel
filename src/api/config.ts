import axios, { AxiosPromise } from "axios";

interface IMaketRequestParams<T> {
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: T,
    headers?: any
}

function makeRequest<T>({url, method, body, headers}: IMaketRequestParams<T>): AxiosPromise<T> {

    if(headers?.authorization) {
        headers.authorization = "hello";
    }

    return axios({
        url,
        method,
        data: body,
        headers: {
            ...headers,
            "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        }
    })
}

export default makeRequest;