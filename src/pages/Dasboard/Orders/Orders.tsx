import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

import { CarComponent, Loader, Table } from 'components';
import { getOrderData } from 'store/tableData/actions';

const Orders = () => {

    const dispatch = useAppDispatch();

    const { orders, ordersIsLoading, ordersRequestError } = useAppSelector(({tableData}) => ({
      orders: tableData.order.data,
      ordersIsLoading: tableData.order.isLoading,
      ordersRequestError: tableData.order.error
    }))

    useEffect(() => {
      if(!orders) {
        dispatch(getOrderData({page: 1, limit: 5}))
      }
    }, [orders])

    return (
      <>
        {
          !ordersIsLoading && orders && orders.data.length > 0 ?
          <Table data={orders.data} Component={CarComponent} />
          : ordersRequestError ?
          <div className="error-text">{ordersRequestError}</div>
          :
          <Loader />
        }
      </>
    )
}

export default Orders;