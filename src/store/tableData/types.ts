export interface IOrderData {
    id: string,
    orderStatusId: string | null,
    cityId: IOrderObject | null,
    pointId: IOrderObject | null,
    carId: ICarData | null,
    color: string,
    dateFrom: number | null,
    dateTo: number | null,
    rateId: IOrderObject | null,
    price: number,
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean,
}

export interface ICarData {
    categoryId: {
        name: string,
        description: string,
        id: string
    },
    colors: Array<string>,
    createdAt: number,
    description: string,
    id: string,
    name: string,
    number: string,
    priceMax: number,
    priceMin: number,
    tank: 55,
    thumbnail: {
        size: number,
        path: string,
        originalname: string,
        mimetype: string
    },
    updatedAt: number
}


export interface IOrderObject {
    id: string,
    name: string
}

export interface IOrderDataInfo {
    data: Array<IOrderData>,
    count: number
}

export interface ITableData {
    order: {
        data: IOrderDataInfo | null,
        isLoading: boolean,
        error: string | null
    }
}

export interface IQueryFilter {
    page?: number,
    offset?: number,
    limit?: number,
    sort?: string
}