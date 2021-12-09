import React from 'react';
import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';
import { Wrapper } from './YearSelector.style';

const YearSelector = React.forwardRef(({ year, handleChangeYear, currentYear }, ref) => {
  const isNextButtonDisabled = year >= currentYear ? true : false;

  return (
    <Wrapper ref={ref}>
      <Button title="prev" small id="prev" onClick={handleChangeYear} />
      <span>{year}</span>
      <Button title="next" small id="next" onClick={handleChangeYear} disabled={isNextButtonDisabled} />
    </Wrapper>
  );
});

YearSelector.propTypes = {
  year: PropTypes.number,
  handleChangeYear: PropTypes.func,
  currentYear: PropTypes.number,
};

export default YearSelector;
