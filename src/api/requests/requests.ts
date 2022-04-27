import api from "../config";

import type { IConfig } from "./types";

export const getRequest = (url: string, config?: IConfig) => {
    return api.get(url, {
        ...config
    });
} 

export const postRequest = (url: string, config?: IConfig) => {
    return api.post(url, {
        ...config
    })
}