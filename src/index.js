/*
    ./client/index.js
    which is the webpack entry file
    //yarn start
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Layout from './components/layout/index';

const app = document.getElementById('root');

ReactDOM.render(<Layout />, app );