import React from 'react';

import { NavContainer } from './styles';

export interface NavProps {}

function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  console.log('Clicked!')
}

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
          <button onClick={handleClick}>Open</button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
