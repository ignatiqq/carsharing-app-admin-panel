export interface IOrderData {
    id?: string,
    orderStatusId: string | null,
    cityId: IOrderObject | null,
    pointId: IOrderObject | null,
    carId: IOrderObject | null,
    color: string,
    dateFrom: number | null,
    dateTo: number | null,
    rateId: IOrderObject | null,
    price: number,
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean
}

export interface IOrderObject {
    id: string,
    name: string
}

export interface ITableData {
    order: {
        data: Array<IOrderData> | null,
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