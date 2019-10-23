import React from 'react';
import Nav from './components/Nav';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';
import SidebarRight from './components/SidebarRight';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="holyGrailContainer">
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </div>
    </React.Fragment>
  );
};

export default App;
