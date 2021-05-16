import { useState } from 'react';
import Menu from '../../molecules/Menu/Menu';

import { Logo, Wrapper } from './Navigation.style';
import MenuIcon from '../../molecules/MenuIcon/MenuIcon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Logo>
        <h1>GPW </h1>
        <h1>Stock Wallet</h1>
      </Logo>
      <MenuIcon isOpen={isOpen} handleIsOpen={handleIsOpen} />
      <Menu handleIsOpen={handleIsOpen} isOpen={isOpen} />
    </Wrapper>
  );
};

export default Navigation;
