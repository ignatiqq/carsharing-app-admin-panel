import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import { getTablePointsData, setTablePointsPagination } from 'store/tableData/actions';
import { IPointsTable } from './PointsTable';
import type { IPagination } from 'types/requests';
import { DashboardChangeLink } from 'components';
import { getDashboardChangeLink } from 'utils/getDashboardType';
import { EssenseActions } from 'store/changeEssence/types';


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
    },
    {
        name: "Изменить"
    }
];

const withPointsTableLogic = (Component: React.FC<IPointsTable>) => () => {

    const dispatch = useAppDispatch();
    const location = useLocation();

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
                    action: 
                        <DashboardChangeLink link={getDashboardChangeLink({
                            pathname: location.pathname, 
                            action: EssenseActions.CHANGE,  
                            id: item.id
                        })}>
                            Изменить
                        </DashboardChangeLink>
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