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
          <div className="col-sm-3 col-md-2 position-fixed sidebar">
            <Sidebar />
          </div>
          <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 gx-0 main">
            <NavTabs />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
