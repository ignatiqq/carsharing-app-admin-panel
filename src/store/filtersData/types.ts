import type { IPagination } from 'types/requests';

export interface IAllCities {
    data: Array<ICurrentCity> | null,
    pagination: IPagination,
    isLoading: boolean,
    error: string | null
}

export type ICurrentCity = {
    id: string,
    updatedAt?: number,
    createdAt?: number,
    name: string
}

export type ICurrentPoint = {
    id: string,
    name: string,
    address: string,
    cityId: {
        name: string,
        id: string
    }
}

export interface IAllPoints {
    data: Array<ICurrentPoint> | null,
    isLoading: boolean,
    error: string | null
}

export interface IAllCars {
    data: IAllCarsData | null,
    isLoading: boolean,
    error: string | null
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

export interface IAllCarsData {
    count: number,
    data: Array<ICarData>,
}

export interface IFiltersData {
    city: IAllCities,
    point: IAllPoints,
    car: IAllCars
}