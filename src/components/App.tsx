import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './TopNav';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <Sidebar />
      </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <h1 className="h2">Dashboard</h1>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
