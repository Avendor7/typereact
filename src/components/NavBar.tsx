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
import Popover from '@mui/material/Popover';

interface NavBarProps{
    onChange:DateSetter 
  }

const NavBar: FC<NavBarProps> = ({onChange}) => {
  
    
    const [selectedDate, setDate] = useSelectedDate();
    
    //popover stuff
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    //end popover stuff
    
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
            <IconButton aria-label="delete" aria-describedby={id} onClick={handleClick}>
                <SettingsIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
        </Toolbar>
    );
}

export default NavBar;