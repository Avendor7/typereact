import React, {useState} from 'react';
import './../styles/MainWindow.scss';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import BottomStatus from './BottomStatus';

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
            <div className="statusbar">
                <BottomStatus />
            </div>
        </div>
    );
}

export default MainWindow;