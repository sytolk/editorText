import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'

export default function CodemirrorEditor(props) {

    console.log("Is Electron: " + navigator.userAgent.toLowerCase());

    const openFile = (filePath) => {
        window.require('electron').shell
            .openPath(filePath)
            .then(() => {
                console.log('File successfully opened ' + filePath);
                return true;
            })
            .catch(e => {
                console.log('Opening path ' + filePath + ' failed with ' + e);
            });
    };
    openFile("/Users/sytolk/_localhost-2020_06_13_21_58_58-dump.sql");
    return (
        <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
                console.log("change");
            }}
        />
    );
}
