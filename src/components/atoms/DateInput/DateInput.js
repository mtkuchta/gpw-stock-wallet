import { StyledDate, DateContainer } from './DateInput.style';
import PropTypes from 'prop-types';

import React from 'react';

const DateInput = React.forwardRef(({ title, ...rest }, ref) => {
  return (
    <DateContainer>
      <p>{title}: </p>
      <StyledDate ref={ref} type="date" id="date" required {...rest} />
    </DateContainer>
  );
});

DateInput.propTypes = {
  title: PropTypes.string,
};

export default DateInput;
