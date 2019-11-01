import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SecondaryNavProps {}

const SecondaryNav: React.SFC<SecondaryNavProps> = () => {
  return (
    <div>
      <ul className="menu">
        <li className="item">
          <NavLink to="/b/c" activeClassName="selected">C</NavLink>
        </li>
        <li className="item">
          <NavLink to="/b/d" activeClassName="selected">D</NavLink>
        </li>
        <li className="item">
          <NavLink to="/b/c">E</NavLink>
        </li>
        <li className="item">
          <NavLink to="/b/c">F</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNav;
