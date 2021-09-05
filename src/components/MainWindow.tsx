import React, {useState} from 'react';
import './../styles/MainWindow.scss';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import BottomStatus from './BottomStatus';

import {Tabs, Tab, Box, Typography} from '@mui/material';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import { orange } from '@mui/material/co';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function MainWindow() {

    const [editorCode, onChange]= useState('');
    
    const options = {

        selectOnLineNumbers: true,
        fontSize: 18,
        padding: {
            top:20,
            bottom: 20
        }
    };


    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
    <div className="viewbox">
        <ThemeProvider theme={dark}>
             <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="editor">
                        <MonacoEditor
                            height="100%"
                            width="100%"
                            language="javascript"
                            theme="vs-dark"

                            value={editorCode}
                            options={options}
                            onChange={onChange}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
            </Box>
        </ThemeProvider>
      </div>
    );
  }

