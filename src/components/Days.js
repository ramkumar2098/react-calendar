import React from 'react';
import style from './Container.module.css';

function Days({ displayDays }) {
  return <div className={style.days}>{displayDays()}</div>;
}

export default Days;
