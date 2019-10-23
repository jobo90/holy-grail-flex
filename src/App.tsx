import React from 'react';
import Nav from './components/Nav';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';
import SidebarRight from './components/SidebarRight';

interface AppProps {}

interface AppState {
  menuOpen: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    menuOpen: false
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
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <Nav handleMenuToggleOpen={this.handleMenuToggleOpen} menuOpen={this.state.menuOpen} />
        <div className="holyGrailContainer">
          <SidebarLeft />
          <MainContent />
          <SidebarRight />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
