import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { Table, Loader } from 'components';
import { getOrderData } from 'store/tableData/actions';

const Orders = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
    console.log("Orders")
    }, [])

    return (
      <div>123</div>
    )
}

export default Orders;