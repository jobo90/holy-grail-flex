import React from 'react';

import { NavContainer } from './styles';

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <NavContainer>
      <ul className="menu">
        <li className="logo">
          <a href="/#">Logo</a>
        </li>
        <li className="item">
          <a href="/#">Home</a>
        </li>
        <li className="item">
          <a href="/#">Shop</a>
        </li>
        <li className="item">
          <a href="/#">About Us</a>
        </li>
        <li className="item">
          <a href="/#">Contact</a>
        </li>
        <li className="toggle">
          <a href="/#">Open</a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
