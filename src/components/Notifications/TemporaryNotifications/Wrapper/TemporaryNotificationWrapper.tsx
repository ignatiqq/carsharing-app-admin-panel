import React, { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useAppDispatch } from 'store';
import { removeTemporaryNotification } from 'store/notifications/actions';

import { INotificationId, ITemporaryNotification } from 'store/notifications/types';
import TemporaryNotification from '../TemporaryNotification';
import "./wrapperAnimation.scss";

interface ITemporaryNotificationWrapper {
  data: ITemporaryNotification[]
}

const TemporaryNotificationWrapper: React.FC<ITemporaryNotificationWrapper> = ({
  data
}) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(data && data[0]) {
      console.log(data);
      const timeId = setTimeout(() => {
        deleteNotificationHandler({id: data[0].id});
      }, 5000);

      return () => clearTimeout(timeId);
    }
  }, [data])

  const deleteNotificationHandler = (id: INotificationId) => {
    console.log(id)
    dispatch(removeTemporaryNotification(id));
  }

  return (
    <TransitionGroup>
      {
        data.map(item => (
          <CSSTransition key={item.id} timeout={1000} className="notfication-animate">
            <TemporaryNotification 
              onClick={deleteNotificationHandler}
              id={item.id}
              type={item.type}
              value={item.value}
            />
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  )

}

export default TemporaryNotificationWrapper