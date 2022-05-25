import Portal from 'components/Dumb/Portal/Portal';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { removeTemporaryNotification } from 'store/notifications/actions';

import { INotificationId, ITemporaryNotification } from 'store/notifications/types';
import TemporaryNotification from '../TemporaryNotification';
import "./wrapperAnimation.scss";

interface ITemporaryNotificationWrapper {
  data: ITemporaryNotification[],
  className?: string
}

const TemporaryNotificationWrapper: React.FC<ITemporaryNotificationWrapper> = ({
  data,
  className
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
    <div className={className}>
      {data.map((item) => (
        <TemporaryNotification
          onClick={deleteNotificationHandler}
          id={item.id}
          type={item.type}
          value={item.value}
        />
      ))}
    </div>
  );

}

export default TemporaryNotificationWrapper