import React from 'react';

import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

import { SidebarLeftContainer } from './styles';

export interface SidebarLeftProps {
  handleSidebarToggleOpen(): void;
  sidebarOpen: boolean;
  content: string;
}

/**
 * This component displays the left sidebar
 */
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
            {props.content}
          </React.Fragment>
        )}
      </div>
    </SidebarLeftContainer>
  );
};

export default SidebarLeft;
