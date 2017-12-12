import React from 'react';
import {
    BrowserRouter, Route
} from 'react-router-dom';
import Layout from './../components/layout/';
import Archieve from './../pages/archieves';

export default () => (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Layout}></Route>
            <Route path="/archieves" exact component={Archieve}></Route>
        </div>
    </BrowserRouter>
);