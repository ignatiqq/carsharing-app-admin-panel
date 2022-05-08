import { getRequest } from "api/requests/requests"

import { IQueryFilter } from "store/tableData/types";

const filterData = {
    getCities: ({page, limit}: IQueryFilter) => {
        return getRequest(`/db/city?page=${page}&limit=${limit}`);
    },
    getPoints: ({page, limit}: IQueryFilter) => {
        return getRequest(`/db/point?page=${page}&limit=${limit}`);
    },
    getCars: ({page, limit}: IQueryFilter) => {
        return getRequest(`/db/car?page=${page}&limit=${limit}`);
    }
}   

export default filterData;