import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames';

import ChangeEssenceFactory from "./ChangeEssenceFactory";
import {  Loader, ModalStandart } from 'components';
import styles from "./ChangeEssence.module.scss";
import { useAppDispatch, useAppSelector } from 'store';
import { deleteDataToChange, getDataToChange, sendDataToChange, setDataToChangeAction, setDataToChangeEssenseId, setDataToChangeRouteName } from 'store/changeEssence/actions';
import { EssenseActions } from 'store/changeEssence/types';

const ChangeEssence = () => {

  const [showData, setShowData] = useState<boolean>(false);

  const params = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { changeData, changeRequestLoading } = useAppSelector(({essenceOptions}) => ({
    changeData: essenceOptions.change,
    changeRequestLoading: essenceOptions.change.changeRequestLoading,
  }))

  const pageAction = useMemo(() => {
    const splitedPathname = location.pathname.split("/");
    const action = splitedPathname[splitedPathname.length - 2];
    if(Object.values(EssenseActions).includes(action as EssenseActions)) {
      return action
    }
  }, [])

  useEffect(() => {
    if(params && params.id && params.route) {
      dispatch(getDataToChange({
        id: params.id,
        route: params.route
      }));
      dispatch(setDataToChangeRouteName(params.route));
      dispatch(setDataToChangeEssenseId(params.id));
      dispatch(setDataToChangeAction(pageAction as EssenseActions));
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
  
  const createEssenseHandler = () => {

  }

  return (
    <>
      <div>
        {
          changeData.isLoading || !showData ?
            <Loader />
          : !changeData.error && changeData.data && params.route && changeData.action ?
          <div className={styles.wrapper}>
            <ChangeEssenceFactory
              route={params.route}
              data={changeData.data}
              action={changeData.action}
              changeEssenseHandler={changeEssenseHandler}
              deleteEssengeHandler={deleteEssengeHandler}
              createEssenseHandler={createEssenseHandler}
            />
          </div>
          :
          <div className={classNames('error-text', styles.requestError)}>{changeData.error}</div>
        }
      </div>
      {
        changeRequestLoading &&
        <ModalStandart isOpen={changeRequestLoading}>
          <div className={styles.Modal__loaderWrapper}>
            <Loader />
          </div>
        </ModalStandart>
      }
    </>
  )
}

export default ChangeEssence;