import React from 'react';

import { HeaderContainer } from './styles';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <div className="logo"><a href="/#">Logo</a></div>
      <ul className="menuItemsContainer">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Shop</a>
        </li>
        <li>
          <a href="/#">About Us</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
