import React from 'react';
import Month from './Month';
import Year from './Year';

function Date(props) {
  return (
    <span style={{ cursor: 'pointer' }} onClick={props.goToToday}>
      <Month {...props} />, <Year {...props} />
    </span>
  );
}

export default Date;
