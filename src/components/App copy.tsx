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
import {Paper} from '@mui/material';
import {lightTheme, darkTheme} from './theme';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const App:FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  

  function handleChange(newSelectedDate: Date){
    setSelectedDate(newSelectedDate);
    
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={darkTheme}>
        <SelectedDateProvider>
          <Paper elevation={0} square className="App">
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
          </Paper>
        </SelectedDateProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
