import { getRequest } from "api/requests/requests";

const tableData = {

    orders: () => {
        return getRequest("/api/order", {
            headers: {
                authorization: true
            }
        })
    }

}

export default tableData;