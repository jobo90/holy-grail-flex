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
    font-family: 'Titillium Web', sans-serif;
    min-height: 100vh;
  }

  p {
    margin: 20px 0;
  }

  .holyGrailContainer {
    display: flex;
    flex: 1;
    min-width: 100vw;
  }
`;

export const HeaderContainer = styled.header`
  background: #eca400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #333;
    font-size: 1.3em;
    padding: 20px;
    text-decoration: none;
  }

  a:hover {
    color: #125cd3;
  }

  > .menuItemsContainer {
    display: flex;
    list-style: none;
  }

  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.main`
  background: #00a8e8;
  flex: 1;
  padding: 20px;
`;

export const SidebarLeftContainer = styled.nav`
  background: #db535e;
  flex: 0 0 12em;
`;

export const SidebarRightContainer = styled.div`
  background: #22aaa1;
  flex: 0 0 12em;
`;
