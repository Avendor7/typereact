import React, {useState} from 'react';
import './../styles/MainWindow.scss';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import BottomStatus from './BottomStatus';
import {Tabs, Tab} from 'react-bootstrap';


function MainWindow() {
    
    const [editorCode, onChange]= useState('');
    
    const options = {

        selectOnLineNumbers: true,
        fontSize: 18,
        padding: {
            top:20,
            bottom: 20
        }
    };
    return (
        <div className="viewbox">
            <div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Home">
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
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <h2>Hello World2</h2>
                    </Tab>
                    <Tab eventKey="contact" title="Contact" >
                        <h2>Hello World3</h2>
                    </Tab>
                </Tabs>
            </div>


            <div className="statusbar">
                <BottomStatus />
            </div>
        </div>
    );
}

export default MainWindow;