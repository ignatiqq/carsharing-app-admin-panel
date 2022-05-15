import React, { useCallback, useEffect, useMemo } from 'react';

import CarPlaceholder from "assets/images/CarPlaceholder.png";
import { useAppSelector, useAppDispatch } from 'store';
import type { IPagination } from 'types/requests';
import type { ICars } from './CarModels';
import { setTableCarsData, setTableCarsPagination } from "store/tableData/actions";
import { carNumberFormatter } from 'utils/carNumber';
import styles from "./CarModels.module.scss";

export type CarsTableMappedData = Array<ICarTableMappedItem> | null;

interface ICarTableMappedItem {
    photo: React.ReactElement,
    number: React.ReactElement,
    category: string,
    price: string,
    description: React.ReactElement
}

const сarModelsHeaders = [
    {
        name: "Фотография"
    },
    {
        name: "Номер"
    },
    {
        name: "Категория"
    },
    {
        name: "Цена"
    },
    {
        name: "Описание"
    }
];

const withCarModelsLogic = (Component: React.FC<ICars>) => () => {
    const dispatch = useAppDispatch();

    const { cars, carsData } = useAppSelector(({filtersData, tableData}) => ({
        cars: filtersData.car,
        carsData: tableData.cars
    }))

    useEffect(() => {
        if(cars && cars.data) {
            dispatch(setTableCarsData(cars.data.slice(
                (carsData.pagination.page - 1) * carsData.pagination.limit, carsData.pagination.page * carsData.pagination.limit)
            ));
        }
    }, [cars, carsData.pagination, dispatch])

    const setPagination = useCallback((data: IPagination) => {
        dispatch(setTableCarsPagination(data));
    }, [])

    const mappedData: CarsTableMappedData = useMemo(() => {
        if(carsData.data) {
            return carsData.data.map(item => {
                return {
                    photo: item.thumbnail.path 
                    ? 
                        <img className={styles.tableData__image} src={item.thumbnail.path} alt={item.name} /> 
                    : 
                        <img className={styles.tableData__image} src={CarPlaceholder} alt={item.name} />
                    ,
                    number: 
                        <span className={styles.tableData__number}>
                            { item.number ? carNumberFormatter(item.number) : "Номер"}
                        </span>,
                    category: item?.categoryId ? item.categoryId.name : "Категория",
                    price: `${item.priceMin}₽ - ${item.priceMax}₽`,
                    description: 
                    <div className={styles.tableData__description}>
                        {item.description ? item.description : "Описание"}
                    </div>
                }
            })
        }
        return null;
    }, [carsData])

    return (
        <Component
            isLoading={cars.isLoading}
            error={cars.error}
            data={mappedData}
            pagination={carsData.pagination}
            setPagination={setPagination}
            count={cars?.count}
            head={сarModelsHeaders}
        />
    )
}

export default withCarModelsLogic;