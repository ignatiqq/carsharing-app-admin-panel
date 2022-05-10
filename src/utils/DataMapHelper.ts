export const getSelectedDataById = <T extends {id: string}>(data: Array<T>, id: string) => {
    return data.find(item => item.id === id);
}