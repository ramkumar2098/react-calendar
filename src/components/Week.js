import React from 'react';
import { week } from './weekAndMonths';
import style from './Container.module.css';

function Week() {
  return (
    <div className={style.week}>
      {week.map(w => (
        <span key={w}>{w}</span>
      ))}
    </div>
  );
}

export default Week;
