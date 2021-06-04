import React from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNav from './MyNav';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <Sidebar/>
    </div>
  );
}

export default App;
