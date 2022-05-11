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
    }

}

export default tableData;