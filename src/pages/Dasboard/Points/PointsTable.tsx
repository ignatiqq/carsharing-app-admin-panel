import React from 'react'

import type { IPagination } from 'types/requests';
import type { PointsTableMappedData } from './withPointsTableLogic';
import withPointsTableLogic from './withPointsTableLogic';
import { DashboardChangeLink, Table, TableHead, TablePagination, ErrorComponent } from 'components';
import type { ITableHead } from 'components/Table/Table/Table';
import styles from "./PointsTable.module.scss";
import { getDashboardChangeLink } from 'utils/getDashboardType';
import { EssenseActions } from 'store/changeEssence/types';

export interface IPointsTable {
  isLoading: boolean,
  error: string | null,
  data: PointsTableMappedData,
  pagination: IPagination,
  setPagination: (data: IPagination) => void
  count: number | null,
  head: ITableHead
}

const PointsTable: React.FC<IPointsTable> = ({
  isLoading,
  error,
  data,
  pagination,
  setPagination,
  count,
  head
}) => {

  const customHead = (
    <>
      <TableHead isLoading={isLoading} count={count} />
      <div className={styles.tableHeader__button_create}>
        <DashboardChangeLink
          link={getDashboardChangeLink({
            pathname: window.location.pathname,
            action: EssenseActions.CREATE,
          })}>
          Создать
        </DashboardChangeLink>
      </div>
    </>
  );

  const Pagintation = (
    <>
        <TablePagination 
          dataLength={data && data?.length}
          count={count} 
          pagination={pagination} 
          isLoading={isLoading}  
          setPagination={setPagination}
        />
    </>
  );

  if(error) {
    return (
    <ErrorComponent
      title="Что то пошло не так" 
      description='Попробуйте перезагрузить страницу'
    />
    )
  }

  return (
    <>
      <Table
        data={data}
        error={error}
        isLoading={isLoading}
        head={head}
        customHead={customHead}
        className={styles.customTableStyle}
        cellStyles={styles.customTableStyle__cell}
      />
      {Pagintation}
    </>
  );
}

export default withPointsTableLogic(PointsTable);