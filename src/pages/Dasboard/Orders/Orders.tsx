import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

import { CarComponent, Table } from 'components';
import { getOrderData, setOrderPagination } from 'store/tableData/actions';
import type { IPagination } from 'types/requests';

const filters = [
  {
    data: [],
    selected: "",
    placeholder: "За неделю"
  },
  {
    data: [],
    selected: "",
    placeholder: "Elantra"
  },
  {
    data: [],
    selected: "",
    placeholder: "Ульяновск"
  },
  {
    data: [],
    selected: "",
    placeholder: "В процессе"
  }
];

const Orders = () => {

    const dispatch = useAppDispatch();

    const { orders, ordersIsLoading, ordersRequestError, pagination } = useAppSelector(({tableData}) => ({
      orders: tableData.order.data,
      ordersIsLoading: tableData.order.isLoading,
      ordersRequestError: tableData.order.error,
      pagination: tableData.order.pagination,
    }))

    useEffect(() => {
      if(pagination.page && pagination.limit) {
        dispatch(getOrderData({page: pagination.page, limit: pagination.limit}))
      }
    }, [pagination]);

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