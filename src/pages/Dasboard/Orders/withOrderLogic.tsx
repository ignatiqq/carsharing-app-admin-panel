import React, { useCallback, useEffect } from 'react';

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

const withOrderLogic = (Component: React.FC<IOrderPageProps>) => () => {

    const dispatch = useAppDispatch();

    const { 
        orders, 
        pagination,
        cars,
        points,
        cities,
      } = useAppSelector(({tableData, filtersData}) => ({
          orders: tableData.order,
          ordersIsLoading: tableData.order.isLoading,
          ordersRequestError: tableData.order.error,
          pagination: tableData.order.pagination,
          cars: filtersData.car,
          points: filtersData.point,
          cities: filtersData.city,
          orderGetFilters: tableData.order.filters
      }))

    const setPointsSelected = useCallback((data: ICurrentPoint) => {
        dispatch(setOrderPointFilter(data.id));
    }, [dispatch])
  
    const setCitiesSelected = useCallback((data: ICurrentCity) => {
        dispatch(setOrderCityFilter(data.id));
    }, [dispatch])
  
    const setCarsSelected = useCallback((data: ICarData) => {
        dispatch(setOrderCarFilter(data.id));
    }, [dispatch])
  
    const applyOrderFilters = useCallback(() => {
      const params = getRequestGetParams(orders.filters);
      dispatch(getOrderData({page: pagination.page, limit: pagination.limit, ...params}))
    }, [pagination.page, pagination.limit, orders.filters, dispatch])

    useEffect(() => { 
       if(pagination.page && pagination.limit) {
         dispatch(getOrderData({page: pagination.page, limit: pagination.limit}))
       }
    }, [pagination, dispatch]);

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
       />
    )
}

export default withOrderLogic