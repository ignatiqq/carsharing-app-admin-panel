import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { ICarData } from 'store/filtersData/types';
import { Table, CarModelComponent } from "components";
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
  return (
    <>
      <div>
        Hello world
      </div>
      <Table 
        data={data}
        Component={CarModelComponent}
        isLoading={isLoading}
        error={error}
        tableContentStyles={styles.tableContentStyles}
      />
    </>
  )
}

export default withCarModelsLogic(CarModels);