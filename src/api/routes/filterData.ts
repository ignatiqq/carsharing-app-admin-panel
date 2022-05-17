import { getRequest } from "api/requests/requests"

const filterData = {
    getCities: () => {
        return getRequest(`/db/city`);
    },
    getPoints: () => {
        return getRequest(`/db/point`);
    },
    getCars: () => {
        return getRequest(`/db/car`);
    },
    getCarCategories: () => {
        return getRequest(`/db/category`);
    }
}   

export default filterData;