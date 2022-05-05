import makeRequest from "../config";

import type { IConfig } from "./types";

export const getRequest = (url: string, config?: IConfig) => {
    return makeRequest({
        url,
        method: "GET",
        headers: config?.headers
    });
} 

export const postRequest = (url: string, config?: IConfig, body?: string) => {
    return makeRequest({
        url,
        method: "POST",
        body,
        headers: config?.headers
    })
}