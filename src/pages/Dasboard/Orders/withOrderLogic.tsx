import React, { useCallback, useEffect, useMemo, useState } from 'react';
import isEqual from 'lodash.isequal';

import { useAppDispatch, useAppSelector } from 'store';
import { 
    setOrderCarFilter,
    setOrderCityFilter,
    setOrderPointFilter
} from 'store/tableData/actions';
import { getRequestGetParams } from 'utils/DataMapHelper';
import type { 
    ICurrentCity,
    ICurrentPoint,
    ICarData
} from 'store/filtersData/types';
import type { IPagination } from 'types/requests';
import { getOrderData, setOrderPagination } from 'store/tableData/actions';
import type { IOrderPageProps } from './Orders';
import { IOrderTableFilters } from 'store/tableData/types';
import { orderMappedData } from './TableData';

export type OrderTableMappedData = Array<IOrderTableMappedItem> | null;

interface IOrderTableMappedItem {
    image: React.ReactElement
}

const withOrderLogic = (Component: React.FC<IOrderPageProps>) => () => {
    const [preparedFilters, setPreparedFilters] = useState<IOrderTableFilters>({
        pointId:  "",
        cityId: "",
        carId: ""
    });

    const dispatch = useAppDispatch();

    const { 
        orders, 
        pagination,
        cars,
        points,
        cities,
      } = useAppSelector(({tableData, filtersData}) => ({
          orders: tableData.order,
          pagination: tableData.order.pagination,
          cars: filtersData.car,
          points: filtersData.point,
          cities: filtersData.city,
      }))
      
    useEffect(() => { 
        if(pagination.page && pagination.limit) {
            const params = getRequestGetParams(orders.filters);
            dispatch(getOrderData({page: pagination.page, limit: pagination.limit, ...params}))
        }
     }, [pagination, orders.filters,  dispatch]);

     useEffect(() => {
        if(orders.filters) {
            const filterValues: IOrderTableFilters = {pointId: "", cityId: "", carId: ""};
            Object.entries(orders.filters).forEach(([key, value]) => {
                filterValues[key as keyof IOrderTableFilters] = value
            })
            setPreparedFilters(filterValues);
        }
     }, [orders.filters])


    const setPointsSelected = (data: ICurrentPoint) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                pointId: data.id
            }
        })
    }
  
    const setCitiesSelected = (data: ICurrentCity) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                cityId: data.id
            }
        })
    }

    const setCarsSelected = (data: ICarData) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                carId: data.id
            }
        })
    }

  
    const applyOrderFilters = () => {
        if(!isEqual(orders.filters, preparedFilters)) {
            dispatch(setOrderPagination({...pagination, page: 1}));
            dispatch(setOrderCarFilter(preparedFilters.carId));
            dispatch(setOrderCityFilter(preparedFilters.cityId));
            dispatch(setOrderPointFilter(preparedFilters.pointId));
        }
    }

    const resetOrderFilters = () => {
        setPreparedFilters({
            pointId:  "",
            cityId: "",
            carId: ""
        })
        dispatch(setOrderPagination({...pagination, page: 1}));
        dispatch(setOrderCarFilter(""));
        dispatch(setOrderCityFilter(""));
        dispatch(setOrderPointFilter(""));
    }

    const setPagination = (pagination: IPagination) => {
      dispatch(setOrderPagination(pagination));
    }

    const mappedData: OrderTableMappedData = useMemo(() => orderMappedData(orders.data), [orders.data])

    return (
       <Component
           applyOrderFilters={applyOrderFilters}
           resetOrderFilters={resetOrderFilters}
           setPointsSelected={setPointsSelected}
           setCarsSelected={setCarsSelected}
           setCitiesSelected={setCitiesSelected}
           pagination={pagination}
           setPagination={setPagination}
           data={mappedData}
           points={points}
           cars={cars}
           cities={cities}
           filters={preparedFilters}
           count={orders?.data && orders.data?.count}
           isLoading={orders.isLoading}
           error={orders.error}
       />
    )
}

export default withOrderLogic