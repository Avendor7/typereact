import React, {useState} from 'react';
import axios from 'axios';
import './../styles/MainWindow.scss';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import BottomStatus from './BottomStatus';

import {Tabs, Tab, Box, Typography, IconButton} from '@mui/material';
import {TabList, TabContext} from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function MainWindow() {

    //const [editorCode, onChange]= useState('');
    
    const options = {

        selectOnLineNumbers: true,
        fontSize: 18,
        padding: {
            top:20,
            bottom: 20
        }
    };

    const [value, setValue] = React.useState('');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    React.useEffect(() => {
      axios.get('http://localhost:3000/users').then((response) => {
        setValue(response.data[0].days[0].content);
      });
    }, []);

    return (
    <div className="viewbox">
        <Box sx={{ width: '100%' }}>
          
          <div className="editor">
                    <MonacoEditor
                        height="100%"
                        width="100%"
                        language="javascript"
                        theme="vs-dark"
                        value={value}
                        options={options}
                        
                    />
                </div>
        </Box>
      </div>
    );
  }

