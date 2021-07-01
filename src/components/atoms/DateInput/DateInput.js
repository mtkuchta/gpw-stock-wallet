import { StyledDate, DateContainer } from './DateInput.style';

import React from 'react';

const DateInput = React.forwardRef(({ title, ...rest }, ref) => {
  return (
    <DateContainer>
      <p>{title}: </p>
      <StyledDate ref={ref} type="date" id="date" required {...rest} />
    </DateContainer>
  );
});

export default DateInput;
