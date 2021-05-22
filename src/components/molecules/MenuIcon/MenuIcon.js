import { Wrapper } from './MenuIcon.style';
import PropTypes from 'prop-types';

const MenuIcon = ({ isOpen, handleIsOpen }) => {
  return (
    <Wrapper onClick={handleIsOpen}>
      <div className={isOpen ? 'opened' : ''}></div>
      <div className={isOpen ? 'opened' : ''}></div>
      <div className={isOpen ? 'opened' : ''}></div>
    </Wrapper>
  );
};

MenuIcon.propTypes = {
  isOpen: PropTypes.bool,
  handleIsOpen: PropTypes.func,
};

export default MenuIcon;
