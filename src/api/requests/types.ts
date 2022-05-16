export interface IConfig {
    headers?: IHeader,
    cache?: "no-store" | "reload" | "no-cache" | "force-cache" ,
    credentials?: "same-origin" | "omit" | "include",
    redirect?: "follow" | "manual" | "error"
    body?: Blob | BufferSource | FormData | URLSearchParams | ReadableStream | string;
}

interface IHeader {
    [key: string]: string
}