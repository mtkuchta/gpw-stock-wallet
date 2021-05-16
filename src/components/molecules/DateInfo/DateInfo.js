import { Wrapper, StyledDate, StyledClock } from './DateInfo.style';
import { useState, useEffect } from 'react';

const DateInfo = () => {
  const [time, setTime] = useState({ day: '', month: '', year: '', clock: '' });

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      const dateArr = date.toString().split(' ');
      setTime({ day: dateArr[2], month: dateArr[1], year: dateArr[3], clock: dateArr[4] });
    }, 1000);

    return () => clearInterval(time);
  }, []);

  return (
    <Wrapper>
      <StyledDate>{`${time.day} ${time.month} ${time.year}`}</StyledDate>
      <StyledClock>{time.clock}</StyledClock>
    </Wrapper>
  );
};

export default DateInfo;
