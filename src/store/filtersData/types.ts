
export interface IAllCities {
    data: Array<ICurrentCity> | null,
    count: number | null,
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
    count: number | null,
    isLoading: boolean,
    error: string | null
}

export interface IAllCars {
    data: Array<ICarData> | null,
    count: number | null,
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

export interface ICarCategoriesData {
    updatedAt: number,
    createdAt: number,
    name: string,
    description: string,
    id: string
}

export interface IAllCarCategories {
    data: Array<ICarCategoriesData> | null,
    count: number | null,
    isLoading: boolean,
    error: string | null
}

export interface IFiltersData {
    city: IAllCities,
    point: IAllPoints,
    car: IAllCars,
    carCategories: IAllCarCategories
}