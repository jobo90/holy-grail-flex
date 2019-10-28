import React from 'react';

import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'

import { NavContainer } from './styles';

export interface NavProps {
  handleMenuToggleOpen(): void;
  menuOpen: boolean;
}

/**
 * This component displays the navbar with the menu items
 */
const Nav: React.FC<NavProps> = props => {
  const handleClick = () => {
    props.handleMenuToggleOpen();
  };

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
        <li className="toggle-container">
          <button className="toggle" type="button" onClick={handleClick}>
            {props.menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
