/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const app = document.getElementById('root');

ReactDOM.render(<App />, app );