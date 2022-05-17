import React, { useEffect, useMemo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from "store";
import { getTableRateTypesData, setTableRateTypesPagination } from 'store/tableData/actions';
import { IRateTypesTable } from './RateTypesTable';
import type { IPagination } from 'types/requests';
import styles from "./RateTypesTable.module.scss";

export type RateTypesTableMappedData = Array<IRatyTypesTableMappedItem> | null;

interface IRatyTypesTableMappedItem {
    name: React.ReactElement,
    unit: React.ReactElement,
}

const head = [
    {
        name: "Название"
    },
    {
        name: "Длительность"
    }
]

const withRateTypesLogic = (Component: React.FC<IRateTypesTable>) => () => {

    const dispatch = useAppDispatch();

    const { rateTypesData } = useAppSelector(({tableData}) => ({
        rateTypesData: tableData.rateTypes
    }))

    useEffect(() => {
        if(rateTypesData.pagination) {
            dispatch(getTableRateTypesData(rateTypesData.pagination));
        }
    }, [rateTypesData.pagination, dispatch])

    const setPagination = useCallback((pagination: IPagination) => {
        dispatch(setTableRateTypesPagination(pagination));
      }, [dispatch])

    const mappedData = useMemo(() => {
        if(rateTypesData?.data) {
            return rateTypesData.data.data.map(item => {
                return {
                    name: <div className={styles.customTableCell}>{item?.name ? item.name : "Название не указано"}</div>,
                    unit: <div className={styles.customTableCell}>{item?.unit ? item.unit : "Длительность не указана"}</div>
                }
            })
        }
        return null;
    }, [rateTypesData.data])

    return (
        <Component 
            isLoading={rateTypesData.isLoading}
            error={rateTypesData.error}
            count={rateTypesData.data && rateTypesData.data.count}
            data={mappedData}
            head={head}
            pagination={rateTypesData.pagination}
            setPagination={setPagination}
        />
    )
}

export default withRateTypesLogic;