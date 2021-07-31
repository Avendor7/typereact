import React, {useState, FC} from 'react';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import DayNav from './DayNav';
import MainWindow from './MainWindow';


const App:FC = () =>{

  const [selectedDate, setSelectedDate] = useState(new Date());

  

  function handleChange(newSelectedDate: Date){
    setSelectedDate(newSelectedDate);
    
  }
console.log(selectedDate);
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="position-fixed bg-dark">
            <Sidebar selectedDate={selectedDate} onChange={handleChange}/>
          </div>
          <main className="mainWindow">
            <DayNav selectedDate={selectedDate} onChange={handleChange}/>
            <MainWindow />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
