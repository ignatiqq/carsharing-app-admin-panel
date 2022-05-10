import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

import { CarComponent, Table } from 'components';
import { getOrderData, setOrderPagination } from 'store/tableData/actions';
import type { IPagination } from 'types/requests';
import { setOrderCityFilter, setOrderCarFilter, setOrderPointFilter } from "store/tableData/actions";
import type { ITableFilters } from 'components/Table/Table';
import { getSelectedDataById } from 'utils/DataMapHelper';


const Orders = () => {
    const [filters, setFilters] = useState<Array<ITableFilters> | null>(null);

    const dispatch = useAppDispatch();

    const { 
      orders, 
      ordersIsLoading, 
      ordersRequestError, 
      pagination,
      cars,
      points,
      cities,
      orderGetFilters
    } = useAppSelector(({tableData, filtersData}) => ({
        orders: tableData.order.data,
        ordersIsLoading: tableData.order.isLoading,
        ordersRequestError: tableData.order.error,
        pagination: tableData.order.pagination,
        cars: filtersData.car.data,
        points: filtersData.point.data,
        cities: filtersData.city.data,
        orderGetFilters: tableData.order.filters
    }))

    useEffect(() => {
      if(orderGetFilters) {
        if(cars && points && cities) {
          setFilters([
            {
              data: cars, 
              selected: getSelectedDataById(cars, orderGetFilters.car), 
              onChange: (data) => dispatch(setOrderCarFilter(data.id))},
            {
              data: points, 
              selected: getSelectedDataById(points, orderGetFilters.point), 
              onChange: (data) => dispatch(setOrderPointFilter(data.id))},
            {
              data: cities, 
              selected: getSelectedDataById(cities, orderGetFilters.city), 
              onChange: (data) => dispatch(setOrderCityFilter(data.id))}
          ]);
        }
      }
    }, [cars, points, cities, orderGetFilters])

    useEffect(() => { 
      if(pagination.page && pagination.limit) {
        dispatch(getOrderData({page: pagination.page, limit: pagination.limit}))
      }
    }, [pagination, orderGetFilters]);

    const setPagination = (pagination: IPagination) => {
      dispatch(setOrderPagination(pagination));
    }

    return (
      <>
        {
          <Table 
              data={orders?.data} 
              Component={CarComponent} 
              pagination={pagination}
              count={orders?.count}
              setPagination={setPagination}
              isLoading={ordersIsLoading}
              error={ordersRequestError}
              filters={filters}
          />
        }
      </>
    )
}

export default Orders;