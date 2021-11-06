import React, {FC,useState} from 'react';
//import './../styles/NavBar.scss';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import {useSelectedDate} from './SelectedDateContext';
import {DateSetter, SelectedDateProvider } from './SelectedDateContext';


interface NavBarProps{
    onChange:DateSetter 
  }

const NavBar: FC<NavBarProps> = ({onChange}) => {
  
    
  const [selectedDate, setDate] = useSelectedDate();

    return (
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                DayJourn
            </Typography>
            <DatePicker
                openTo="day"
                value={selectedDate}
                onChange={(date) => setDate(date || new Date())}
                renderInput={(params) => <TextField {...params} />}
            />
            <Box sx={{ flexGrow: 1 }}/>
            <IconButton aria-label="delete">
                <SettingsIcon />
            </IconButton>
        </Toolbar>
    );
}

export default NavBar;