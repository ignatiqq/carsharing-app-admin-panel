import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { v4 as uuidv4 } from "uuid";

import ChangeEssenceFactory from "./Factory/ChangeEssenceFactory";
import {  Loader, ModalStandart } from 'components';
import styles from "./ChangeEssence.module.scss";
import { useAppDispatch, useAppSelector } from 'store';
import { 
  deleteDataToChange, 
  getDataToChange, 
  sendDataToChange, 
  setDataToChangeAction, 
  setDataToChangeEssenseId, 
  setDataToChangeRouteName,
  createEssenceData,
  clearChangeEssenseData
} from 'store/changeEssence/actions';
import { EssenseActions } from 'store/changeEssence/types';

const ChangeEssence = () => {

  const [showData, setShowData] = useState<boolean>(false);

  const params = useParams();
  const dispatch = useAppDispatch();

  const { changeData, actionLoading } = useAppSelector(({essenceOptions}) => ({
    changeData: essenceOptions.change,
    actionLoading: essenceOptions.change.actionLoading,
  }))

  useEffect(() => {
    if(params.action === EssenseActions.CHANGE && params.id && params.route) {
      dispatch(getDataToChange({
        id: params.id,
        route: params.route
      }));
      dispatch(setDataToChangeRouteName(params.route));
      dispatch(setDataToChangeEssenseId(params.id));
      dispatch(setDataToChangeAction(params.action as EssenseActions));
    } else if(params.action === EssenseActions.CREATE && params.route) {
        dispatch(setDataToChangeRouteName(params.route));
        dispatch(setDataToChangeAction(params.action as EssenseActions));
        dispatch(clearChangeEssenseData());
    }
  }, [params]);

  useEffect(() => {
    if(changeData.route) {
      setShowData(changeData.route === params.route);
    } else {
      setShowData(true);
    }
  }, [changeData])

  const changeEssenseHandler = <T extends {}>(data: T) => {
    dispatch(sendDataToChange({
      id: changeData.id,
      route: changeData.route,
      data: data
    }));
  }

  const deleteEssengeHandler = () => {
    if(changeData.id && changeData.route) {
      dispatch(deleteDataToChange({
        id: changeData.id,
        route: changeData.route
      }))
    }
  }

  const createEssenceHandler = <T extends {}>(data: T) => {
    dispatch(createEssenceData({
      data: {
        ...data,
        id: uuidv4(),
      },
      route: changeData.route
    }))
  }

  return (
    <>
      <div>
        {
          changeData.isLoading || !showData ?
            <Loader />
          : !changeData.error && params.route && changeData.action ?
          <div className={styles.wrapper}>
            <ChangeEssenceFactory
              route={params.route}
              data={changeData.data}
              action={changeData.action}
              changeEssenseHandler={changeEssenseHandler}
              deleteEssengeHandler={deleteEssengeHandler}
              createEssenceHandler={createEssenceHandler}
            />
          </div>
          :
          <div className={classNames('error-text', styles.requestError)}>{changeData.error}</div>
        }
      </div>
      {
        actionLoading &&
        <ModalStandart isOpen={actionLoading}>
          <div className={styles.Modal__loaderWrapper}>
            <Loader />
          </div>
        </ModalStandart>
      }
    </>
  )
}

export default ChangeEssence;