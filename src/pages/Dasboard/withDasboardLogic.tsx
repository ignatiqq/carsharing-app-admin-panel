import React, { useEffect } from 'react'
import { useAppDispatch } from 'store'
import { getFiltersData } from 'store/filtersData/actions';

const withDasboardLogic = (Component: React.FC) => () => {

    const dispatch = useAppDispatch();

    const filtersDataPagination = {
        page: 1,
        limit: 20
    }

    useEffect(() => {
        dispatch(getFiltersData(filtersDataPagination));
    }, [])

    return (
        <Component/>
    )
}

export default withDasboardLogic;