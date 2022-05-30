import React, { useEffect } from 'react'
import { useAppDispatch } from 'store'
import { getFiltersData } from 'store/filtersData/actions';

const withDasboardLogic = (Component: React.FC) => () => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getFiltersData());
    }, [])

    return (
        <Component/>
    )
}

export default withDasboardLogic;