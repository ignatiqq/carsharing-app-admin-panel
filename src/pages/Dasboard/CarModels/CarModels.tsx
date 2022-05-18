import React from 'react';

import withCarModelsLogic from "./withCarModelsLogic";
import { Table, Loader, Paginator, Select, SelectWrapper } from "components";
import { selectDataHolder } from '../Dashboard';
import { getSelectedDataById } from 'utils/DataMapHelper';
import styles from "./CarModels.module.scss";
import { IPagination } from 'types/requests';
import type { ITableHead } from 'components/Table/Table';
import type { CarsTableMappedData } from './withCarModelsLogic';
import type { ICarsTableData, ICarTableFilters } from 'store/tableData/types';
import { IAllCarCategories, ICarCategoriesData } from 'store/filtersData/types';

export interface ICars {
  data: CarsTableMappedData | null,
  isLoading: boolean,
  error: string | null,
  pagination: IPagination,
  setPagination: (data: IPagination) => void,
  count: number | null,
  head: ITableHead,
  filters: ICarTableFilters,
  carsData: ICarsTableData,
  carCategories: IAllCarCategories,
  setCarCategorySelected: (data: ICarCategoriesData) => void,
  applyCarsFilters: () => void,
  resetCarsFilters: () => void
}

const CarModels: React.FC<ICars> = ({
  data,
  isLoading,
  error,
  pagination,
  setPagination,
  count,
  head,
  filters,
  carsData,
  carCategories,
  setCarCategorySelected,
  applyCarsFilters,
  resetCarsFilters
}) => {

    const CarModelsTableHeader = (
      <>
        <div className={styles.CarModelTable__header}>
          <div>Список моделей</div>
          <div className={styles.CarModelTable__header__countWrapper}>
            <span>Всего: </span> {count ? count : <Loader />}
          </div>
        </div>
        <SelectWrapper
          onReset={resetCarsFilters}
          onApply={applyCarsFilters}
          wrapperClassname={styles.filters}>
          <div className={styles.filters__items}>
            <Select
              options={carCategories.data}
              selected={carCategories.data && getSelectedDataById(carCategories.data, filters.categoryId)}
              customLabel="name"
              customValue="id"
              clickHandler={setCarCategorySelected}
              dataHolder={selectDataHolder(carsData)}
              searchPlaceholder={'Категория'}
            />
          </div>
        </SelectWrapper>
      </>
    );

    const Pagintation = (
      <div className={styles.pagination}>
        {
          data &&
          pagination &&
          count &&
          setPagination && (
            <Paginator
              page={pagination.page}
              limit={pagination.limit}
              count={count}
              setPagination={setPagination}
              className={isLoading ? styles.paginationDisabled : ""}
            />
          )
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
          customHead={CarModelsTableHeader}
          className={styles.customTableStyles}
        />
        {Pagintation}
      </>
    )
}

export default withCarModelsLogic(CarModels);