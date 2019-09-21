import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../../actions/ui';

import style from './notification.scss';

const Notification = () => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  if (!notification.isShown) return null;
  return (
    <div className={style.notification}>
      {notification.message}
      <button type="button" className={style.close} onClick={() => dispatch(hideNotification())}>&#10005;</button>
    </div>
  );
};

export default Notification;
