/*
    ./src/index.js
    which is the webpack entry file
    //yarn start
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/index';
import Routes from './routes';

const app = document.getElementById('root');

ReactDOM.render(<Routes />, app );