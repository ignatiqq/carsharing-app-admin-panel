import type { IPagination } from 'types/requests';
import type { ICarData, ICurrentPoint } from "store/filtersData/types";
import type { ICurrentCity } from 'store/filtersData/types';

export interface ITableData {
    order: IOrderTableData,
    cars: ICarsTableData,
    cities: ICityTableData,
    points: IPointTableData,
    rateTypes: IRateTypeTableData
}

export interface IRateTypeTableData {
    data: IRateTypeDataInfo | null,
    pagination: IPagination,
    isLoading: boolean,
    error: string | null
}

export interface IRateTypeDataInfo {
    data: Array<IRateTypeInfoItem>,
    count: number
}

export interface IRateTypeInfoItem {
    name: string,
    unit: string,
    id: string
}

export interface IPointTableData {
    data: IPointDataInfo | null,
    pagination: IPagination,
    isLoading: boolean,
    error: string | null
}

export interface IPointDataInfo {
    data: Array<ICurrentPoint>,
    count: number
}

export interface ICityTableData {
    data: ICityDataInfo | null,
    pagination: IPagination,
    isLoading: boolean,
    error: string | null
}

export interface ICityDataInfo {
    data: Array<ICurrentCity>,
    count: number
}

export interface IOrderTableData {
    data: IOrderDataInfo | null,
    pagination: IPagination,
    filters: IOrderTableFilters
    isLoading: boolean,
    error: string | null
}

export interface ICarsDataInfo {
    data: Array<ICarData>,
    count: number
}

export interface ICarsTableData {
    data: ICarsDataInfo | null,
    pagination: IPagination,
    filters: ICarTableFilters,
    isLoading: boolean,
    error: string | null
}

export interface ICarTableFilters {
    categoryId: string
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

export interface ICarRequestResponse {
    fileds: object,
    data: ICarData
}