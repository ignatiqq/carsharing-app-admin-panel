import React, { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { getTablePointsData, setTablePointsPagination } from 'store/tableData/actions';
import { IPointsTable } from './PointsTable';
import type { IPagination } from 'types/requests';

export type PointsTableMappedData = Array<IPointTableMappedItem> | null;

interface IPointTableMappedItem {
    city: string,
    name: string,
    address: string
}

const head = [
    {
        name: "Город"
    },
    {
        name: "Адрес"
    },
    {
        name: "Место"
    }
];

const withPointsTableLogic = (Component: React.FC<IPointsTable>) => () => {

    const dispatch = useAppDispatch();

    const { pointsData } = useAppSelector(({tableData}) => ({
        pointsData: tableData.points
    }))

    useEffect(() => {
        if(pointsData.pagination) {
            dispatch(getTablePointsData());
        }
    }, [pointsData.pagination, dispatch])

    const mappedData = useMemo(() => {
        if(pointsData?.data) {
            return pointsData.data.data.map(item => {
                return {
                    city: item?.cityId ? item.cityId.name : "Город не указан",
                    address: item.address ? item.address : "Адрес не указан",
                    name: item.name ? item.name: "Место не указан",
                }
            })
        }
        return null;
    }, [pointsData.data])

    const setPagination = (pagination: IPagination) => {
        dispatch(setTablePointsPagination(pagination));
      }

    return (
        <Component
            isLoading={pointsData.isLoading}
            error={pointsData.error}
            data={mappedData}
            count={pointsData?.data && pointsData.data.count}
            head={head}
            pagination={pointsData.pagination}
            setPagination={setPagination}
        />
    )
}

export default withPointsTableLogic