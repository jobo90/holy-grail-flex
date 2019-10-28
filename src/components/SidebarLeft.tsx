import React from 'react';

import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

import { SidebarLeftContainer } from './styles';

export interface SidebarLeftProps {
  handleSidebarToggleOpen(): void;
  sidebarOpen: boolean;
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
            <h3>Sidebar</h3>
            <p>Menu item 1</p>
            <p>Menu item 2</p>
            <p>Menu item 3</p>
            <p>Menu item 4</p>
            <p>Menu item 5</p>
            <p>Menu item 6</p>
            <p>Menu item 7</p>
            <p>Menu item 8</p>
            <p>Menu item 9</p>
            <p>Menu item 10</p>
            <p>Menu item 11</p>
            <p>Menu item 12</p>
            <p>Menu item 13</p>
            <p>Menu item 14</p>
            <p>Menu item 15</p>
            <p>Menu item 16</p>
            <p>Menu item 17</p>
            <p>Menu item 18</p>
            <p>Menu item 19</p>
            <p>Menu item 20</p>
          </React.Fragment>
        )}
      </div>
    </SidebarLeftContainer>
  );
};

export default SidebarLeft;
