import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    color: #222;
    font-family: 'Titillium Web', sans-serif;
    overflow-y: hidden;
  }

  .selected {
    background: #6294c4;
    color: #fff;
  }

  .holy-grail-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 100vh;
    line-height: 1.8;
  }

  @media all and (max-width: 800px) {
    .holy-grail-container {
      flex-flow: row wrap;
      overflow-y: auto;
    }
  }
`;

export const NavContainer = styled.nav`
  background: #102a43;
  display: flex;
  flex-flow: row nowrap;

  .menu {
    flex: 1 0 auto;
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
    user-select: none;
    transition: color 0.3s ease;

    &:hover {
      color: #9fb3c8;
    }
  }

  .toggle-container {
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

    .toggle-container {
      display: block;
      margin-right: 20px;
    }

    .toggle {
      background: none;
      border: none;
      fill: #f0f4f8;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
      }
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
  overflow-y: auto;

  p {
    margin: 25px 0;
  }
`;

export const SidebarLeftContainer = styled.div`
  align-items: flex-start;
  background: #334e68;
  /* bottom: 0; */
  color: #f0f4f8;
  display: flex;
  padding: 20px;
  flex: 0 0 50px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow-y: auto;

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
    /* max-width: 200px; */
    flex: 0 0 200px;
    overflow-y: auto;
  }

  .open {
    margin-top: 20px;
    min-width: 240px;
  }

  @media all and (max-width: 800px) {
    flex: 1;
    overflow: hidden;

    &.is-open {
      min-width: 200px;
      flex: 1;
      overflow-y: auto;
    }
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
