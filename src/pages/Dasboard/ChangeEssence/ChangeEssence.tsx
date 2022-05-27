import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import ChangeEssenceFactory from "./ChangeEssenceFactory";
import {  Loader, ModalStandart } from 'components';
import styles from "./ChangeEssence.module.scss";
import { useAppDispatch, useAppSelector } from 'store';
import { deleteDataToChange, getDataToChange, sendDataToChange, setDataToChangeEssenseId, setDataToChangeRouteName } from 'store/changeEssence/actions';

const ChangeEssence = () => {

  const [showData, setShowData] = useState<boolean>(false);

  const params = useParams();
  const dispatch = useAppDispatch();

  const { changeData, changeRequestLoading } = useAppSelector(({essenceOptions}) => ({
    changeData: essenceOptions.change,
    changeRequestLoading: essenceOptions.change.changeRequestLoading,
  }))

  useEffect(() => {
    if(params && params.id && params.route) {
      dispatch(getDataToChange({
        id: params.id,
        route: params.route
      }));
      dispatch(setDataToChangeRouteName(params.route));
      dispatch(setDataToChangeEssenseId(params.id));
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

  return (
    <>
      <div>
        {
          changeData.isLoading || !showData ?
            <Loader />
          : !changeData.error && changeData.data && params.route ?
          <div className={styles.wrapper}>
            <ChangeEssenceFactory
              route={params.route}
              data={changeData.data}
              changeEssenseHandler={changeEssenseHandler}
              deleteEssengeHandler={deleteEssengeHandler}
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