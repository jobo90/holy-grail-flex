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
    margin: 20px 0;
  }

  .holyGrailContainer {
    display: flex;
    flex: 1;
    margin-top: 70px;
  }
`;

export const NavContainer = styled.nav`
  background: #102a43;
  display: flex;
  clear: both;
  position: fixed;
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
  flex: 1;
  padding: 20px;
`;

export const SidebarLeftContainer = styled.div`
  background: #334e68;
  color: #f0f4f8;
  flex: 0 0 12em;
  padding: 20px;
`;

export const SidebarRightContainer = styled.div`
  background: #334e68;
  color: #f0f4f8;
  flex: 0 0 12em;
  padding: 20px;
`;
