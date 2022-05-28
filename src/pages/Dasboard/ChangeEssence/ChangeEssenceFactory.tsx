import { v4 as uuidv4 } from "uuid";

import { ChangeCar, ChangeCity, ChangePoint, ChangeRateType } from 'components/ChangeComponents';
import { IChangeRoutes } from "./types";
import styles from "./ChangeEssence.module.scss";
import { EssenseActions } from 'store/changeEssence/types';

interface IChangeEssenceFactory {
  route: string,
  data: any | null,
  action: EssenseActions,
  deleteEssengeHandler: () => void,
  changeEssenseHandler: (data: any) => void,
  createEssenceHandler: (data: any) => void
}

const ChangeEssenceFactory: React.FC<IChangeEssenceFactory> = ({
  data,
  route,
  action,
  deleteEssengeHandler,
  changeEssenseHandler,
  createEssenceHandler
}) => {

  const handlerByAction = action === EssenseActions.CHANGE ? changeEssenseHandler : createEssenceHandler;

  switch (route) {
    case IChangeRoutes.CAR: {
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка автомобиля</h1>
          <ChangeCar
            data={data}
            submitHandler={changeEssenseHandler}
            onDeleteHandler={deleteEssengeHandler}
          />
        </>
      )
    }
      break;

    case IChangeRoutes.CITY: {
      const emptyData = {
        name: "",
        id: ""
      };
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка города</h1>
          <ChangeCity
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </>
      )
    }
      break;

    case IChangeRoutes.POINT: {
      const emptyData = {
        cityId: {
          name: "",
          id: "",
        },
        address: "",
        name: "",
        id: ""
      }
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка точки</h1>
          <ChangePoint
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </>
      )
    }
      break;

    case IChangeRoutes.RATETYPE: {
      const emptyData = {
        unit: "",
        name: "",
        id: ""
      }
      return (
        <>
          <h1 className={styles.changeEssense__title}>Карточка тарифа</h1>
          <ChangeRateType
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
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