/*
    ./src/index.js
    which is the webpack entry file
    //yarn start
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';


import Layout from './layout';
import Routes from './routes';

const app = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <Routes/>
    </HashRouter>,
app );