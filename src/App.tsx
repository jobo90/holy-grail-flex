import React from 'react';
import Nav from './components/Nav';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';
import SidebarRight from './components/SidebarRight';

interface AppProps {}

interface AppState {
  menuOpen: boolean;
  sidebarOpen: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    menuOpen: false,
    sidebarOpen: false,
  };

  handleMenuToggleOpen = () => {
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

  handleSidebarToggleOpen = () => {
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
      <React.Fragment>
        <Nav handleMenuToggleOpen={this.handleMenuToggleOpen} menuOpen={this.state.menuOpen} />
        <div className="holy-grail-container">
          <SidebarLeft
            handleSidebarToggleOpen={this.handleSidebarToggleOpen}
            sidebarOpen={this.state.sidebarOpen}
          />
          <MainContent />
          <SidebarRight />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
