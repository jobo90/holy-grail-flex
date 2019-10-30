import React from 'react';
import { NavLink } from 'react-router-dom';

import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

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
          <NavLink exact to="/" activeClassName="selected">Logo</NavLink>
        </li>
        <li className="item">
          <NavLink to="/a" activeClassName="selected">A</NavLink>
        </li>
        <li className="item">
          <NavLink to="/b/c" activeClassName="selected">B</NavLink>
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
