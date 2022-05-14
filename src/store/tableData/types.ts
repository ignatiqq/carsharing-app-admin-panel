import type { IPagination } from 'types/requests';
import type { ICarData } from "store/filtersData/types";

export interface ITableData {
    order: IOrderTableData,
    cars: ICarsTableData
}

export interface IOrderTableData {
    data: IOrderDataInfo | null,
    pagination: IPagination,
    filters: IOrderTableFilters
    isLoading: boolean,
    error: string | null
}

export interface ICarsTableData {
    data: Array<ICarData> | null,
    pagination: IPagination
}

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

export interface IOrderObject {
    id: string,
    name: string
}

export interface IOrderDataInfo {
    data: Array<IOrderData>,
    count: number
}

export interface IOrderTableFilters {
    cityId: string,
    pointId: string,
    carId: string
}

export interface IQueryFilter {
    page?: number,
    offset?: number,
    limit?: number,
    sort?: string,
    [key: string]: string | number | undefined
}
