import React from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import MainContent from './components/MainContent';
import SidebarRight from './components/SidebarRight';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="holyGrailContainer">
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </div>
    </React.Fragment>
  );
};

export default App;
