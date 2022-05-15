import { memo } from 'react';
import { 
  Select, 
  Table, 
  OrderCarComponent, 
  SelectWrapper
} from 'components';
import type { IAllCars, IAllCities, IAllPoints, ICurrentCity, ICurrentPoint } from 'store/filtersData/types';
import type { ICarData } from 'store/filtersData/types';
import type { IOrderTableData, IOrderTableFilters } from 'store/tableData/types';
import type { IPagination } from 'types/requests';
import { getSelectedDataById } from 'utils/DataMapHelper';
import { selectDataHolder } from '../Dashboard';
import styles from "./Orders.module.scss";
import withOrderLogic from './withOrderLogic';

export interface IOrderPageProps {
  filters: IOrderTableFilters,
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
  filters,
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

    const OrdersTableHeader = (
        <SelectWrapper
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
    
    return (
      <>
        <Table 
            data={orders?.data?.data} 
            isLoading={orders.isLoading}
            error={orders.error}
            customHead={OrdersTableHeader}
        />
      </>
    )
}

export default withOrderLogic(memo(Orders));