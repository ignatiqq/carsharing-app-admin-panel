import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { Table, CarModelComponent, Loader, Paginator } from "components";
import styles from "./CarModels.module.scss";
import { IPagination } from 'types/requests';
import type { ITableHead } from 'components/Table/Table';
import type { CarsTableMappedData } from './withCarModelsLogic';

export interface ICars {
  data: CarsTableMappedData | null,
  isLoading: boolean,
  error: string | null,
  pagination: IPagination,
  setPagination: (data: IPagination) => void,
  count: number | null,
  head: ITableHead
}

const CarModels: React.FC<ICars> = ({
  data,
  isLoading,
  error,
  pagination,
  setPagination,
  count,
  head
}) => {

  const CarModelsTableHeader = () => {
    return (
      <>
        <div className={styles.CarModelTable__header}>
          <div>Список моделей</div>
          <div className={styles.CarModelTable__header__countWrapper}><span>Всего: </span> {count ? count : <Loader />}</div>
        </div>
      </>
    )
  }

  const Pagintation = () => {
    return (
      <div className={styles.CarModelTable__pagination}>
        {
          pagination &&
          count &&
          setPagination &&
          data && (
            <Paginator
              page={pagination.page}
              limit={pagination.limit}
              count={count}
              setPagination={setPagination}
            />
          )
        }
      </div>
    );
  };

  return (
    <>
      <Table 
        data={data}
        Component={CarModelComponent}
        isLoading={isLoading}
        error={error}
        tableContentStyles={styles.tableContentStyles}
        Header={CarModelsTableHeader}
        head={head}
        pagination={pagination}
        setPagination={setPagination}
        count={count}
      />
      {<Pagintation />}
    </>
  )
}

export default withCarModelsLogic(CarModels);