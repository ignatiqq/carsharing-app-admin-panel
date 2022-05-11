import { memo } from 'react';
import { 
  Select, 
  Table, 
  CarComponent, 
  SelectWrapper
} from 'components';
import type { IAllCars, IAllCities, IAllPoints, ICurrentCity, ICurrentPoint } from 'store/filtersData/types';
import type { ICarData, IOrderTableData } from 'store/tableData/types';
import type { IPagination } from 'types/requests';
import { getSelectedDataById } from 'utils/DataMapHelper';
import { selectDataHolder } from '../Dashboard';
import styles from "./Orders.module.scss";
import withOrderLogic from './withOrderLogic';

export interface IOrderPageProps {
  applyOrderFilters: (data: any) => void,
  setPointsSelected: (data: ICurrentPoint) => void,
  points: IAllPoints,
  setCarsSelected: (data: ICarData) => void,
  cars: IAllCars,
  setCitiesSelected: (data: ICurrentCity) => void,
  cities: IAllCities,
  pagination: IPagination,
  setPagination: (pagination: IPagination) => void,
  orders: IOrderTableData
}

const Orders: React.FC<IOrderPageProps> = ({
  applyOrderFilters,
  points,
  setPointsSelected,
  cities,
  setCitiesSelected,
  cars,
  setCarsSelected,
  pagination,
  orders,
  setPagination
}) => {

    return (
      <>
      <SelectWrapper
        onApply={applyOrderFilters}
        wrapperClassname={styles.filters}
      >
        <div className={styles.filters__items}>
            <Select
              options={points.data}
              selected={points.data && getSelectedDataById(points.data, orders.filters.pointId)}
              customLabel="name"
              customValue="id"
              clickHandler={setPointsSelected}
              dataHolder={selectDataHolder(points)}
              searchPlaceholder={"Точки"}
            />
            <Select
              options={cities.data}
              selected={cities.data && getSelectedDataById(cities.data, orders.filters.cityId)}
              customLabel="name"
              customValue="id"
              clickHandler={setCitiesSelected}
              dataHolder={selectDataHolder(cities)}
              searchPlaceholder={"Города"}
            />
            <Select
              options={cars.data}
              selected={cars.data && getSelectedDataById(cars.data, orders.filters.carId)}
              customLabel="name"
              customValue="id"
              clickHandler={setCarsSelected}
              dataHolder={selectDataHolder(cars)}
              searchPlaceholder={"Марки"}
            />
          </div>
      </SelectWrapper>
        <Table 
            data={orders?.data?.data} 
            Component={CarComponent} 
            pagination={pagination}
            count={orders?.data?.count}
            setPagination={setPagination}
            isLoading={orders.isLoading}
            error={orders.error}
        />
      </>
    )
}

export default withOrderLogic(memo(Orders));