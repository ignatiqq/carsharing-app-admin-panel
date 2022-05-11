export const getSelectedDataById = <T extends {id: string}>(data: Array<T>, id: string) => {
    return data.find(item => item.id === id);
}

export function getRequestGetParams<T>(data: T) {
    let params: {[key: string]: T[keyof T]} = {};
    Object.keys(data).forEach((item) => {
        if(data[item as keyof T]) {
            params = {
                ...params,
                [item]: data[item as keyof T]
            }
        }
    })
    return params;
}
