import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import APage from './components/APage';
import BPage from './components/BPage';
import ErrorPage from './components/ErrorPage';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';
import SidebarRight from './components/SidebarRight';
import SecondaryNav from './components/SecondaryNav';
import SubCategory from './components/SubCategory';

interface AppProps {}

interface AppState {
  menuOpen: boolean;
  sidebarOpen: boolean;
}

/**
 * This component contains the state + methods for the menu and sidebar to open / close as well as the main content and the right sidebar
 */
class App extends React.Component<AppProps, AppState> {
  state = {
    menuOpen: false,
    sidebarOpen: false,
  };

  private handleMenuToggleOpen = () => {
    const buttons = document.querySelectorAll('.item');

    if (this.state.menuOpen) {
      for (let i = 0, len = buttons.length; i < len; i++) {
        buttons[i].classList.remove('active');
      }
    } else {
      for (let i = 0, len = buttons.length; i < len; i++) {
        buttons[i].classList.add('active');
      }
    }

    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  private handleSidebarToggleOpen = () => {
    const container = document.querySelector('.sidebar-content-container');

    if (this.state.sidebarOpen && container) {
      container.classList.remove('open');
    } else if (container) {
      container.classList.add('open');
    }

    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav handleMenuToggleOpen={this.handleMenuToggleOpen} menuOpen={this.state.menuOpen} />
          <div className="holy-grail-container">
            <Switch>
              <Route exact path="/">
                <SidebarLeft
                  handleSidebarToggleOpen={this.handleSidebarToggleOpen}
                  sidebarOpen={this.state.sidebarOpen}
                  content={'Starting page menu'}
                />
                <MainContent />
              </Route>
              <Route path="/a">
                <SidebarLeft
                  handleSidebarToggleOpen={this.handleSidebarToggleOpen}
                  sidebarOpen={this.state.sidebarOpen}
                  content={'Content for page A'}
                />
                <APage />
              </Route>

              <Redirect exact from="/b" to="/b/c" />

              <Route path="/b/:subCategory">
                <SidebarLeft
                  handleSidebarToggleOpen={this.handleSidebarToggleOpen}
                  sidebarOpen={this.state.sidebarOpen}
                  content={`Content for page ${window.location.pathname}`}
                />
                <SecondaryNav />
                <BPage />
                <SubCategory />
              </Route>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
            <SidebarRight />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
