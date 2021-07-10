import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import SubNav from './SubNav';
import NavTabs from './NavTabs';



function App() {
  return (
    <div className="App">
     
      <div className="container-fluid">
        <div className="row">
          <div className="position-fixed sidebar bg-dark">
            <Sidebar />
          </div>
          <main className="mainWindow">
            <NavTabs />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
