import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import NavTabs from './NavTabs';
import MainWindow from './MainWindow';

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
            <MainWindow />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
