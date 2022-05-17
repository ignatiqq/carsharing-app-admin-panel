import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { Table, Loader, Paginator, Select, SelectWrapper } from "components";
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

  // const CarModelsTableHeader =
  //   (
  //     <>
  //       <div className={styles.CarModelTable__header}>
  //         <div>Список моделей</div>
  //         <div className={styles.CarModelTable__header__countWrapper}><span>Всего: </span> {count ? count : <Loader />}</div>
  //       </div>
  //       <SelectWrapper
  //       onReset={resetOrderFilters}
  //       onApply={applyOrderFilters}
  //       wrapperClassname={styles.filters}
  //     >
  //     <div className={styles.filters__items}>
  //         <Select
  //           options={points.data}
  //           selected={points.data && getSelectedDataById(points.data, filters.pointId)}
  //           customLabel="name"
  //           customValue="id"
  //           clickHandler={setPointsSelected}
  //           dataHolder={selectDataHolder(points)}
  //           searchPlaceholder={"Точки"}
  //         />
  //         <Select
  //           options={cities.data}
  //           selected={cities.data && getSelectedDataById(cities.data, filters.cityId)}
  //           customLabel="name"
  //           customValue="id"
  //           clickHandler={setCitiesSelected}
  //           dataHolder={selectDataHolder(cities)}
  //           searchPlaceholder={"Города"}
  //         />
  //         <Select
  //           options={cars.data}
  //           selected={cars.data && getSelectedDataById(cars.data, filters.carId)}
  //           customLabel="name"
  //           customValue="id"
  //           clickHandler={setCarsSelected}
  //           dataHolder={selectDataHolder(cars)}
  //           searchPlaceholder={"Марки"}
  //         />
  //       </div>
  //   </SelectWrapper>
  //     </>
  //   );

    const Pagintation = (
      <div className={styles.pagination}>
        {
          data &&
          pagination &&
          count &&
          setPagination ? (
            <Paginator
              page={pagination.page}
              limit={pagination.limit}
              count={count}
              setPagination={setPagination}
            />
          )
          :
          null
        }
      </div>
  );

  return (
    <>
      <Table 
        data={data}
        isLoading={isLoading}
        error={error}
        head={head}
        // customHead={CarModelsTableHeader}
        className={styles.customTableStyles}
      />
      {Pagintation}
    </>
  )
}

export default withCarModelsLogic(CarModels);