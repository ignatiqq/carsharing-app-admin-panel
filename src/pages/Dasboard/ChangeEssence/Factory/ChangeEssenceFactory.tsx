import { ChangeCar, ChangeCity, ChangeOrder, ChangePoint, ChangeRateType } from 'components/ChangeComponents';
import { IChangeRoutes } from "../types";
import { EssenseActions } from 'store/changeEssence/types';
import ChangeComponentWrapper from './ChangeComponentWrapper';

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
        <ChangeComponentWrapper title="Карточка автомобиля">
          <ChangeCar
            data={data}
            submitHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </ChangeComponentWrapper>
      )
    }
      break;

    case IChangeRoutes.CITY: {
      const emptyData = {
        name: "",
        id: ""
      };
      return (
        <ChangeComponentWrapper title="Карточка города">
          <ChangeCity
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </ChangeComponentWrapper>
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
        <ChangeComponentWrapper title='Карточка точки'>
          <ChangePoint
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </ChangeComponentWrapper>
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
        <ChangeComponentWrapper title='Карточка точки'>
          <ChangeRateType
            data={action === EssenseActions.CHANGE ? data : emptyData}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
            action={action}
          />
        </ChangeComponentWrapper>
      )
    }
      break;

    case IChangeRoutes.ORDER: {
      return (
        <ChangeComponentWrapper title="Карточка заказа">
          <ChangeOrder 
            data={data}
            submitEssenceHandler={handlerByAction}
            onDeleteHandler={deleteEssengeHandler}
          />
        </ChangeComponentWrapper>
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