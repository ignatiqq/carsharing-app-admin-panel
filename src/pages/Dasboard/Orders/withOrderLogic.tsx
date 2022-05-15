import React, { useCallback, useEffect, useState } from 'react';

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


    const setPointsSelected = useCallback((data: ICurrentPoint) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                pointId: data.id
            }
        })
    }, [dispatch])
  
    const setCitiesSelected = useCallback((data: ICurrentCity) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                cityId: data.id
            }
        })
    }, [dispatch])

    const setCarsSelected = useCallback((data: ICarData) => {
        setPreparedFilters((prev) => {
            return {
                ...prev,
                carId: data.id
            }
        })
    }, [dispatch])

  
    const applyOrderFilters = useCallback(() => {
        if(preparedFilters.carId) {
            dispatch(setOrderCarFilter(preparedFilters.carId));
        } else if(preparedFilters.cityId) {
            dispatch(setOrderCityFilter(preparedFilters.cityId));
        } else if(preparedFilters.pointId) {
            dispatch(setOrderPointFilter(preparedFilters.pointId));
        }
    }, [preparedFilters, dispatch]);

    const setPagination = useCallback((pagination: IPagination) => {
      dispatch(setOrderPagination(pagination));
    }, [dispatch])

    return (
       <Component
           applyOrderFilters={applyOrderFilters}
           setPointsSelected={setPointsSelected}
           setCarsSelected={setCarsSelected}
           setCitiesSelected={setCitiesSelected}
           pagination={pagination}
           setPagination={setPagination}
           orders={orders}
           points={points}
           cars={cars}
           cities={cities}
           filters={preparedFilters}
       />
    )
}

export default withOrderLogic