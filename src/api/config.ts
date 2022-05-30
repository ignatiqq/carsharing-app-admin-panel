import axios, { AxiosPromise } from "axios";
import Cookies from "js-cookie";

interface IMaketRequestParams<T> {
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    body?: T,
    headers?: any
}

function makeRequest<T>({url, method, body, headers}: IMaketRequestParams<T>): AxiosPromise<T> {

    if(headers?.authorization) {
        headers.authorization = `Bearer ${Cookies.get("access_token")}`;
    }

    return axios({
        url: `${process.env.REACT_APP_API_URL}${url}`,
        method,
        data: body,
        headers: {
            ...headers,
            "X-Api-Factory-Application-Id": process.env.REACT_APP_APPLICATION_ID,
        }
    })
}

export default makeRequest;