import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { getTablePointsData } from 'store/tableData/actions';
import { IPointsTable } from './PointsTable';

const withPointsTableLogic = (Component: React.FC<IPointsTable>) => () => {

    const dispatch = useAppDispatch();

    const { pointsData } = useAppSelector(({tableData}) => ({
        pointsData: tableData.points
    }))

    useEffect(() => {
        if(pointsData.pagination) {
            dispatch(getTablePointsData());
        }
    }, [pointsData.pagination])

    return (
        <Component
            isLoading={pointsData.isLoading}
            error={pointsData.error}
            data={pointsData?.data && pointsData.data.data}
            count={pointsData?.data && pointsData.data.count}
        />
    )
}

export default withPointsTableLogic