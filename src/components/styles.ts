import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    color: #222;
    display: flex;
    flex-direction: column;
    font-family: 'Titillium Web', sans-serif;
  }

  .holy-grail-container {
    display: flex;
    line-height: 1.8;
    margin-top: 63px;
  }

  @media all and (max-width: 800px) {
    .holy-grail-container {
      flex-flow: row wrap;
    }
  }
`;

export const NavContainer = styled.nav`
  background: #102a43;
  position: fixed;
  width: 100%;

  .menu {
    width: 100%;
    align-items: center;
    display: flex;
    list-style: none;
  }

  a {
    color: #f0f4f8;
    font-size: 1.3em;
    padding: 20px;
    text-decoration: none;
    display: block;
  }

  a:hover {
    color: #9fb3c8;
  }

  .toggle {
    display: none;
  }

  .logo {
    margin-right: auto;
  }

  /* Mobile menu */
  @media all and (max-width: 600px) {
    .menu {
      flex-wrap: wrap;
    }

    .toggle {
      display: block;
      margin-right: 20px;
    }

    .toggle button {
      background: none;
      border: none;
      fill: #f0f4f8;
    }

    .toggle button:focus {
      outline: none;
    }

    .toggle button:hover {
      cursor: pointer;
    }

    .item {
      width: 100%;
      text-align: center;
      order: 1;
      display: none;
    }

    .item.active {
      display: block;
    }
  }
`;

export const MainContainer = styled.main`
  background: #f0f4f8;
  padding: 20px;

  p {
    margin: 25px 0;
  }
`;

export const SidebarLeftContainer = styled.div`
  align-items: flex-start;
  background: #334e68;
  color: #f0f4f8;
  display: flex;
  flex: 0 0 1em;
  padding: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    fill: #f0f4f8;
  }

  button:focus {
    outline: none;
  }

  &.is-open {
    min-width: 240px;
  }

  .open {
    margin-top: 50px;
    width: 240px;
  }

  @media all and (max-width: 800px) {
    flex: 1;
  }
`;

export const SidebarRightContainer = styled.div`
  background: #334e68;
  color: #f0f4f8;
  flex: 0 0 12em;
  padding: 20px;

  @media all and (max-width: 800px) {
    flex: 1;
  }
`;
