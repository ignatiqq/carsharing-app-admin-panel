import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ChangeCar, Loader } from 'components';
import styles from "./ChangeEssence.module.scss";
import { useAppDispatch, useAppSelector } from 'store';
import { deleteDataToChange, getDataToChange, sendDataToChange, setDataToChangeEssenseId, setDataToChangeRouteName } from 'store/changeEssence/actions';
import { ICarData } from 'store/filtersData/types';

const ChangeEssence = () => {

  const params = useParams();
  const dispatch = useAppDispatch();

  const { changeData } = useAppSelector(({essenceOptions}) => ({
    changeData: essenceOptions.change
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
    <div>
      {
        changeData.isLoading ?
          <Loader />
        : !changeData.error && changeData.data ?
        <div className={styles.wrapper}>
          {
            changeData.route === "car" ?
            <ChangeCar 
              onChangeHandler={changeEssenseHandler}
              onDeleteHandler={deleteEssengeHandler}
              {...changeData.data as ICarData} 
            />
              :
            "Ne car"
          }
        </div>
        :
        <div className={classNames('error-text', styles.requestError)}>{changeData.error}</div>
      }
    </div>
  )
}

export default ChangeEssence;