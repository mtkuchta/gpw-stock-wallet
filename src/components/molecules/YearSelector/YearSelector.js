import Button from '../../atoms/Button/Button';

import { Wrapper } from './YearSelector.style';

const YearSelector = ({ year, handleChangeYear }) => {
  return (
    <Wrapper>
      <Button title="prev" small id="prev" onClick={handleChangeYear} />
      <span>{year}</span>
      <Button title="next" small id="next" onClick={handleChangeYear} />
    </Wrapper>
  );
};

export default YearSelector;
