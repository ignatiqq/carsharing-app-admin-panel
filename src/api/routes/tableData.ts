import { getRequest } from "api/requests/requests";

import type { IQueryFilter } from "store/tableData/types";
import { paramsToString } from "utils/requestHelper";

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
    }

}

export default tableData;