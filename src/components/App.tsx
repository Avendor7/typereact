import React, {useState, FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../styles/App.css';
import Sidebar from './Sidebar';
import DayNav from './DayNav';
import MainWindow from './MainWindow';
import {Nav} from 'react-bootstrap';
import { SelectedDateProvider } from './SelectedDateContext';

const App:FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  

  function handleChange(newSelectedDate: Date){
    setSelectedDate(newSelectedDate);
    
  }

  return (
    <SelectedDateProvider>
      <div className="App">
      
        <div className="container-fluid">
          <div className="row">
            <div className="position-fixed bg-dark">
              <Sidebar/>
            </div>
            
            <main className="mainWindow">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
              <DayNav/>
              <MainWindow />
            </main>
          </div>
        </div>
        
      </div>
    </SelectedDateProvider>
  );
}

export default App;
