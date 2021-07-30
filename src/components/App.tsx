import React, {useState, FC} from 'react';
import * as dateFns from 'date-fns';
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import DayNav from './DayNav';
import MainWindow from './MainWindow';


const App:FC = () =>{

  const [selectedDate, setSelectedDate] = useState(new Date());

  let start = dateFns.startOfWeek(selectedDate);
  let end = dateFns.endOfWeek(selectedDate);

  //loop through dates between start and end of a week
  const getDaysArray = (start: Date , end: Date) => {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
  };

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
            <DayNav />
            <MainWindow />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
