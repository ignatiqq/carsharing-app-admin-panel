import { getRequest, putRequest } from "api/requests/requests";
import type { IEssenseData } from "store/changeEssence/types";
import type { IQueryFilter } from "store/tableData/types";
import { paramsToString } from "utils/requestHelper";

interface IEssenseChangeData {
    id: string, 
    route: string,
}

interface IEssenseChangePostData extends IEssenseChangeData {
    data: IEssenseData
}

const tableData = {

    orders: (params: IQueryFilter) => {
        const getParams = paramsToString(params);

        return getRequest(`/db/order?${getParams}`, {
            headers: {
                authorization: true
            }
        })
    },

    cities: (params: IQueryFilter) => {
        const getParams = paramsToString(params);

        return getRequest(`/db/city?${getParams}`)
    },

    points: (params: IQueryFilter) => {
        const getParams = params ? paramsToString(params) : "";

        return getRequest(`/db/point?${getParams}`)
    },

    rateTypes: (params: IQueryFilter) => {
        const getParams = params ? paramsToString(params) : "";

        return getRequest(`/db/rateType?${getParams}`)
    },

    cars: (params: IQueryFilter) => {
        const getParams = params ? paramsToString(params) : "";
        
        return getRequest(`/db/car?${getParams}`)
    },

    getChangeDataById: ({id, route}: IEssenseChangeData) => {
        return getRequest(`/db/${route}/${id}`)
    },

    putChangeDataById: ({id, route, data }: IEssenseChangePostData) => {
        return putRequest(`/db/${route}/${id}`, {
            headers: {
                authorization: true
            }
        }, data);
    }

}

export default tableData;