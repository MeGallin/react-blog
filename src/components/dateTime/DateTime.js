import React, { useEffect, useState } from 'react';
import moment from 'moment';

function DateTime() {
  const [dateTime, setDateTime] = useState(
    moment().format('MMMM Do YYYY, h:mm:ss a'),
  );

  useEffect(() => {
    setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
  }, [dateTime]);

  return <div>{dateTime}</div>;
}

export default DateTime;
