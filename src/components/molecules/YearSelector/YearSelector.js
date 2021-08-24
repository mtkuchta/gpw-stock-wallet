import Button from '../../atoms/Button/Button';
import PropTypes from 'prop-types';
import { Wrapper } from './YearSelector.style';

const YearSelector = ({ year, handleChangeYear, currentYear }) => {
  const isNextButtonDisabled = year >= currentYear ? true : false;

  return (
    <Wrapper>
      <Button title="prev" small id="prev" onClick={handleChangeYear} />
      <span>{year}</span>
      <Button title="next" small id="next" onClick={handleChangeYear} disabled={isNextButtonDisabled} />
    </Wrapper>
  );
};

YearSelector.propTypes = {
  year: PropTypes.number,
  handleChangeYear: PropTypes.func,
  currentYear: PropTypes.number,
};

export default YearSelector;
