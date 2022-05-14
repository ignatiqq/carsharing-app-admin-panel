import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { ICarData } from 'store/filtersData/types';

import type { ICars } from './CarModels';

const withCarModelsLogic = (Component: React.FC<ICars>) => () => {
    const [carModels, setCarModels] = useState<Array<ICarData> | null>(null);

    const { cars } = useAppSelector(({filtersData}) => ({
        cars: filtersData.car
    }))

    useEffect(() => {
        if(cars && cars.data) {
            setCarModels(cars.data);
        }
    }, [cars])

    return (
        <Component
            isLoading={cars.isLoading}
            error={cars.error}
            data={cars.data}
        />
    )
}

export default withCarModelsLogic;