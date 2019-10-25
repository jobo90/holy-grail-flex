import React from 'react';

import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

import { SidebarLeftContainer } from './styles';

export interface SidebarLeftProps {
  handleSidebarToggleOpen(): void;
  sidebarOpen: boolean;
}

const SidebarLeft: React.FC<SidebarLeftProps> = props => {
  const handleClick = () => {
    props.handleSidebarToggleOpen();
  };

  return (
    <SidebarLeftContainer className={props.sidebarOpen ? 'is-open' : ''} >
      <button type="button" onClick={handleClick}>
        {props.sidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className="sidebar-content-container">
        {props.sidebarOpen && (
          <React.Fragment>
            <h3>Sidebar</h3>
            <p>Menu item 1</p>
            <p>Menu item 2</p>
            <p>Menu item 3</p>
          </React.Fragment>
        )}
      </div>
    </SidebarLeftContainer>
  );
};

export default SidebarLeft;
