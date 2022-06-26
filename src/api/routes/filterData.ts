import { getRequest } from "api/requests/requests"

const filterData = {
    getCities: () => getRequest(`/db/city`),
    getPoints: () => getRequest(`/db/point`),
    getCars: () => getRequest(`/db/car`),
    getCarCategories: () => getRequest(`/db/category`),
    getOrderStatuses: () => getRequest(`/db/orderStatus`)
}   

export default filterData;