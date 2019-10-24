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
    min-height: 100vh;
  }

  p {
    margin: 25px 0;
  }

  .holyGrailContainer {
    display: flex;
    flex: 1;
    line-height: 1.8;
    margin-top: 63px;
  }

  @media all and (max-width: 800px) {
    .holyGrailContainer {
      flex-flow: row wrap;
    }
    
    .holyGrailContainer > * {
      flex: 1 auto;
    }
  }
`;

export const NavContainer = styled.nav`
  background: #102a43;
  display: flex;
  clear: both;
  position: fixed;
  /* position: sticky; */
  /* top: 0; */
  /* height: 70px; */

  .menu {
    align-items: center;
    display: flex;
    list-style: none;
    width: 100vw;
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
  @media all and (max-width: 750px) {
    .menu {
      flex-wrap: wrap;
      max-width: 100%;
    }

    .toggle {
      display: block;
      order: 1;
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
      order: 2;
      display: none;
    }

    .item.active {
      display: block;
    }
  }
`;

export const MainContainer = styled.main`
  background: #f0f4f8;
  /* flex: 1; */
  padding: 20px;
`;

export const SidebarLeftContainer = styled.div`
  button {
    background: none;
    border: none;
    fill: #f0f4f8;
  }

  button:focus {
    outline: none;
  }

  background: #334e68;
  color: #f0f4f8;
  flex: 0 0 1em;
  padding: 20px;

  .open {
    margin-top: 20px;
    width: 200px;
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
