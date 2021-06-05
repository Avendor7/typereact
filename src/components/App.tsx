import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import SubNav from './SubNav';


function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
            <SubNav />
            <h1 className="h2">Blah</h1>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
