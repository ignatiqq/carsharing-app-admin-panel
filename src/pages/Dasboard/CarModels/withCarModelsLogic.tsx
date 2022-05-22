import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CarPlaceholder from "assets/images/CarPlaceholder.png";
import { useAppSelector, useAppDispatch } from 'store';
import type { IPagination } from 'types/requests';
import type { ICars } from './CarModels';
import type { ICarTableFilters } from 'store/tableData/types';
import { getTableCarsData, setTableCarsPagination, setTableCarsFilter } from "store/tableData/actions";
import { getRequestGetParams } from 'utils/DataMapHelper';
import { carNumberFormatter } from 'utils/carNumber';
import styles from "./CarModels.module.scss";
import { ICarCategoriesData } from 'store/filtersData/types';
import isEqual from 'lodash.isequal';
import { getDashboardChangeLink } from 'utils/getDashboardType';

import dasboardStyles from "pages/Dasboard/Dashboard.module.scss";

export type CarsTableMappedData = Array<ICarTableMappedItem> | null;

interface ICarTableMappedItem {
    photo: React.ReactElement,
    number: React.ReactElement,
    category: string,
    price: string,
    description: React.ReactElement,
    action: React.ReactElement
}

const head = [
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
    },
    {
        name: "Изменить"
    }
];

const withCarModelsLogic = (Component: React.FC<ICars>) => () => {
    const [preparedFilters, setPreparedFilters] = useState<ICarTableFilters>({
        categoryId:  ""
    });

    const dispatch = useAppDispatch();

    const location = useLocation();

    const { carsData, carCategories } = useAppSelector(({tableData, filtersData}) => ({
        carsData: tableData.cars,
        carCategories: filtersData.carCategories
    }))

    useEffect(() => {
        if(carsData.pagination.page && carsData.pagination.limit) {
            const params = getRequestGetParams(carsData.filters);

            dispatch(getTableCarsData({
                page: carsData.pagination.page, 
                limit: carsData.pagination.limit,
                ...params
            }));
            
        }
    }, [carsData.pagination, carsData.filters, dispatch])

     useEffect(() => {
        if(carsData.filters) {
            const filterValues: ICarTableFilters = {categoryId:  ""};

            Object.entries(carsData.filters).forEach(([key, value]) => {
                filterValues[key as keyof ICarTableFilters] = value
            })
            setPreparedFilters(filterValues);
        }
     }, [carsData.filters])


    const setCarCategorySelected = (data: ICarCategoriesData) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                categoryId: data.id
            }
        })
    }
  
    const applyCarsFilters = () => {
        if(!isEqual(carsData.filters, preparedFilters)) {
            dispatch(setTableCarsPagination({...carsData.pagination, page: 1}));
            dispatch(setTableCarsFilter(preparedFilters.categoryId));
        }
    }

    const resetCarsFilters = () => {
        setPreparedFilters({
            categoryId: ""
        })
        dispatch(setTableCarsPagination({...carsData.pagination, page: 1}));
        dispatch(setTableCarsFilter(""));
    }

    const setPagination = (data: IPagination) => {
        dispatch(setTableCarsPagination(data));
    }

    const mappedData: CarsTableMappedData = useMemo(() => {
        if(carsData && carsData.data) {
            return carsData.data.data.map(item => {
                return {
                    photo: item.thumbnail.path 
                    ? 
                        <div className={styles.tableData__image_wrapper}>
                            <img className={styles.tableData__image} src={item.thumbnail.path} alt={item.name} /> 
                        </div>
                    : 
                        <div className={styles.tableData__image_wrapper}>
                            <img className={styles.tableData__image} src={CarPlaceholder} alt={item.name} />
                        </div>
                    ,
                    number: 
                        <span className={styles.tableData__number}>
                            { item.number ? carNumberFormatter(item.number) : "Номер не указан"}
                        </span>,
                    category: item?.categoryId ? item.categoryId.name : "Категория не указана",
                    price: `${item.priceMin}₽ - ${item.priceMax}₽`,
                    description: 
                    <div className={styles.tableData__description}>
                        {item.description ? item.description : "Описание не указано"}
                    </div>,
                    action: 
                        <Link to={getDashboardChangeLink(location.pathname, item.id)} className={dasboardStyles.changeButton}>
                            Изменить
                        </Link>
                }
            })
        }
        return null;
    }, [carsData])

    return (
        <Component
            isLoading={carsData.isLoading}
            error={carsData.error}
            data={mappedData}
            carsData={carsData}
            carCategories={carCategories}
            pagination={carsData.pagination}
            setPagination={setPagination}
            count={carsData?.data && carsData.data.count}
            head={head}
            filters={preparedFilters}
            setCarCategorySelected={setCarCategorySelected}
            applyCarsFilters={applyCarsFilters}
            resetCarsFilters={resetCarsFilters}
        />
    )
}

export default withCarModelsLogic;