/* eslint-disable no-lone-blocks */
import { ChangeCar, ChangeCity, ChangePoint, ChangeRateType } from 'components/ChangeComponents';
import { IChangeRoutes } from "./types";

import styles from "./ChangeEssence.module.scss";
import { EssenseActions } from 'store/changeEssence/types';

interface IChangeEssenceFactory {
  route: string,
  action: EssenseActions,
  data: any,
  deleteEssengeHandler: () => void,
  changeEssenseHandler: (data: any) => void,
  createEssenseHandler: (data: any) => void
}

const ChangeEssenceFactory: React.FC<IChangeEssenceFactory> = ({
  data,
  action,
  route,
  deleteEssengeHandler,
  changeEssenseHandler,
  createEssenseHandler
}) => {

  switch (route) {
    case IChangeRoutes.CAR: {
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка автомобиля</h1>
          <ChangeCar
            data={data}
            onChangeHandler={changeEssenseHandler}
            onDeleteHandler={deleteEssengeHandler}
            onCreateHandler={createEssenseHandler}
            action={action}
          />
        </>
      )
    }
      break;

    case IChangeRoutes.CITY: {
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка города</h1>
          <ChangeCity
            data={data}
            onChangeHandler={changeEssenseHandler}
            onDeleteHandler={deleteEssengeHandler}
            onCreateHandler={createEssenseHandler}
            action={action}
          />
        </>
      )
    }
      break;

    case IChangeRoutes.POINT: {
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка точки</h1>
          <ChangePoint
            data={data}
            onChangeHandler={changeEssenseHandler}
            onDeleteHandler={deleteEssengeHandler}
          />
        </>
        
      )
    }
      break;

    case IChangeRoutes.RATETYPE: {
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка тарифа</h1>
          <ChangeRateType
            data={data}
            onChangeHandler={changeEssenseHandler}
            onDeleteHandler={deleteEssengeHandler}
          />
        </>
      )
    }
      break;

    default:
      break;
  }

  return (
    <div>ChangeEssenceFactory</div>
  )
}

export default ChangeEssenceFactory