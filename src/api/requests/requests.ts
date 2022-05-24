import makeRequest from "../config";

import type { IConfig } from "./types";

export const getRequest = (url: string, config?: IConfig) => {
    return makeRequest({
        url,
        method: "GET",
        headers: config?.headers
    });
} 

export const postRequest = <T>(url: string, config?: IConfig, body?: T) => {
    return makeRequest({
        url,
        method: "POST",
        body,
        headers: config?.headers
    })
}

export const putRequest = <T>(url: string, config?: IConfig, body?: T) => {
    return makeRequest({
        url,
        method: "PUT",
        body,
        headers: config?.headers
    })
}