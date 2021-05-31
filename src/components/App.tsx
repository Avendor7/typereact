import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Sidebar/>
    </div>
  );
}

export default App;
