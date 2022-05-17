import { memo } from 'react';

import { 
  Select, 
  Table, 
  Paginator, 
  SelectWrapper
} from 'components';
import type { IAllCars, IAllCities, IAllPoints, ICurrentCity, ICurrentPoint } from 'store/filtersData/types';
import type { ICarData } from 'store/filtersData/types';
import type { IOrderTableFilters } from 'store/tableData/types';
import type { IPagination } from 'types/requests';
import type { OrderTableMappedData } from '../Orders/withOrderLogic';
import { getSelectedDataById } from 'utils/DataMapHelper';
import { selectDataHolder } from '../Dashboard';
import styles from "./Orders.module.scss";
import withOrderLogic from './withOrderLogic';

export interface IOrderPageProps {
  filters: IOrderTableFilters,
  applyOrderFilters: (data: any) => void,
  resetOrderFilters: () => void
  setPointsSelected: (data: ICurrentPoint) => void,
  points: IAllPoints,
  setCarsSelected: (data: ICarData) => void,
  cars: IAllCars,
  setCitiesSelected: (data: ICurrentCity) => void,
  cities: IAllCities,
  pagination: IPagination,
  setPagination: (pagination: IPagination) => void,
  data: OrderTableMappedData,
  count: number | null,
  isLoading: boolean,
  error: string | null
}

const Orders: React.FC<IOrderPageProps> = ({
  filters,
  applyOrderFilters,
  resetOrderFilters,
  points,
  setPointsSelected,
  cities,
  setCitiesSelected,
  cars,
  setCarsSelected,
  pagination,
  data,
  count,
  setPagination,
  isLoading,
  error
}) => {

    const OrdersTableHeader = (
        <SelectWrapper
          onReset={resetOrderFilters}
          onApply={applyOrderFilters}
          wrapperClassname={styles.filters}
        >
        <div className={styles.filters__items}>
            <Select
              options={points.data}
              selected={points.data && getSelectedDataById(points.data, filters.pointId)}
              customLabel="name"
              customValue="id"
              clickHandler={setPointsSelected}
              dataHolder={selectDataHolder(points)}
              searchPlaceholder={"Точки"}
            />
            <Select
              options={cities.data}
              selected={cities.data && getSelectedDataById(cities.data, filters.cityId)}
              customLabel="name"
              customValue="id"
              clickHandler={setCitiesSelected}
              dataHolder={selectDataHolder(cities)}
              searchPlaceholder={"Города"}
            />
            <Select
              options={cars.data}
              selected={cars.data && getSelectedDataById(cars.data, filters.carId)}
              customLabel="name"
              customValue="id"
              clickHandler={setCarsSelected}
              dataHolder={selectDataHolder(cars)}
              searchPlaceholder={"Марки"}
            />
          </div>
      </SelectWrapper>
    );

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
            customHead={OrdersTableHeader}
            className={styles.orderTable}
        />
        {Pagintation}
      </>
    )
}

export default withOrderLogic(memo(Orders));