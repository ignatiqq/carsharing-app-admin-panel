
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
    categoryId: Partial<ICarDataCategoryId>,
    colors: Array<string>,
    createdAt?: number,
    description: string,
    id: string,
    name: string,
    number: string,
    priceMax: number,
    priceMin: number,
    tank: number,
    thumbnail: ICardDataThumbnail,
    updatedAt?: number
}

export interface ICarDataCategoryId {
    name: string,
    description: string,
    id: string
}

export interface ICardDataThumbnail {
    size: number,
    path: string,
    originalname: string,
    mimetype: string
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
    carCategories: IAllCarCategories,
    orderStatus: IAllOrderStatus
}

export interface IAllOrderStatus {
    data: IOrderStatusData | null,
    isLoading: boolean,
    error: string | null
}

export interface IOrderStatusData {
    data: Array<IOrderStatusItem>,
    count: number
}

export interface IOrderStatusItem {
    name: string,
    id: string
}