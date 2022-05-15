import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { ICarData } from 'store/filtersData/types';
import { Table, CarModelComponent, Loader } from "components";
import styles from "./CarModels.module.scss";
import { IPagination } from 'types/requests';

export interface ICars {
  data: Array<ICarData> | null,
  isLoading: boolean,
  error: string | null,
  pagination: IPagination,
  setPagination: (data: IPagination) => void,
  count: number | null
}

const CarModels: React.FC<ICars> = ({
  data,
  isLoading,
  error,
  pagination,
  setPagination,
  count
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

  return (
    <Table 
      data={data}
      Component={CarModelComponent}
      isLoading={isLoading}
      error={error}
      tableContentStyles={styles.tableContentStyles}
      Header={CarModelsTableHeader}
      pagination={pagination}
      setPagination={setPagination}
      count={count}
    />
  )
}

export default withCarModelsLogic(CarModels);