import React from 'react'

import type { ICurrentPoint } from 'store/filtersData/types';
import type { IPagination } from 'types/requests';
import withPointsTableLogic from './withPointsTableLogic';
import { Table, PointsTableComponent } from 'components';

export interface IPointsTable {
  isLoading: boolean,
  error: string | null,
  data: Array<ICurrentPoint> | null,
  pagination?: IPagination,
  setPagination?: (data: IPagination) => void
  count: number | null
}

const PointsTable: React.FC<IPointsTable> = ({
  isLoading,
  error,
  data,
  pagination,
  setPagination,
  count
}) => {
  return (
    <Table
      data={data}
      Component={PointsTableComponent}
      pagination={pagination}
      setPagination={setPagination}
      error={error}
      count={count}
      isLoading={isLoading}
    />
  )
}

export default withPointsTableLogic(PointsTable);