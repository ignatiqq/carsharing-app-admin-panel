import { getRequest } from "api/requests/requests";

import type { IQueryFilter } from "store/tableData/types";

const tableData = {

    orders: ({page, limit, offset, sort}:IQueryFilter) => {
        return getRequest(`/db/order?page=${page}&limit=${limit}`, {
            headers: {
                authorization: true
            }
        })
    }

}

export default tableData;