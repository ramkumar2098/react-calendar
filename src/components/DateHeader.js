import React from 'react';
import Left from './Left';
import Right from './Right';
import Date from './Date';
import style from './Container.module.css';

function DateHeader(props) {
  return (
    <div className={style.dates}>
      <Left {...props} />
      <Date {...props} />
      <Right {...props} />
    </div>
  );
}

export default DateHeader;
