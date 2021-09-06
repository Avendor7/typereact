import React, {useState, FC} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../styles/App.css';
import Sidebar from './Sidebar';
import DayNav from './DayNav';
import MainWindow from './MainWindow';
import { SelectedDateProvider } from './SelectedDateContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {lightTheme, darkTheme} from './theme';
const App:FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  

  function handleChange(newSelectedDate: Date){
    setSelectedDate(newSelectedDate);
    
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <SelectedDateProvider>
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="position-fixed bg-dark">
                <Sidebar/>
              </div>
              <main className="mainWindow">
                <DayNav/>
                <MainWindow />
              </main>
            </div>
          </div>
        </div>
      </SelectedDateProvider>
    </ThemeProvider>
  );
}

export default App;
