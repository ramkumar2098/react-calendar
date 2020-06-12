import React from 'react';
import { months } from './weekAndMonths';

function Month({ month }) {
  return <span>{months[month]}</span>;
}

export default Month;
