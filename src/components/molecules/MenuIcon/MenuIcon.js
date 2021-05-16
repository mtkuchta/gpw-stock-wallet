import { Wrapper } from './MenuIcon.style';

const MenuIcon = ({ isOpen, handleIsOpen }) => {
  return (
    <Wrapper onClick={handleIsOpen}>
      <div className={isOpen ? 'opened' : ''}></div>
      <div className={isOpen ? 'opened' : ''}></div>
      <div className={isOpen ? 'opened' : ''}></div>
    </Wrapper>
  );
};

export default MenuIcon;
