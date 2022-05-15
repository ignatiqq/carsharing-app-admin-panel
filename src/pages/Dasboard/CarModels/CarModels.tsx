import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { ICarData } from 'store/filtersData/types';
import { Table, CarModelComponent, Loader } from "components";
import styles from "./CarModels.module.scss";

export interface ICars {
  data: Array<ICarData> | null,
  isLoading: boolean,
  error: string | null
}

const CarModels: React.FC<ICars> = ({
  data,
  isLoading,
  error
}) => {

  const CarModelsTableHeader = () => {
    return (
      <div className={styles.CarModelTable__header}>
        Всего: {data?.length ? data.length : <Loader className={styles.CarModelTable__loader} />}
      </div>
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
    />
  )
}

export default withCarModelsLogic(CarModels);