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
    /* min-width: 100vw; */
  }
`;

export const NavContainer = styled.nav`
  background: #eca400;
  display: flex;
  /* justify-content: space-between;
  align-items: center; */

  a {
    color: #333;
    font-size: 1.3em;
    display: block;
    padding: 20px;
    text-decoration: none;
  }

  a:hover {
    color: #125cd3;
  }

  .menu {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    width: 100vw;
  }

  .toggle {
    order: 1;
  }

  .item {
    width: 100%;
    text-align: center;
    order: 2;
    /* display: none; */
  }
`;

export const MainContainer = styled.main`
  background: #00a8e8;
  flex: 1;
  /* padding: 20px; */
`;

export const SidebarLeftContainer = styled.div`
  background: #db535e;
  flex: 0 0 12em;
`;

export const SidebarRightContainer = styled.div`
  background: #22aaa1;
  flex: 0 0 12em;
`;
