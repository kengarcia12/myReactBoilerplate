import React from 'react';
import { Route,Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './../layout';
import Archieve from './../components/pages/archieves';
import Feature from './../components/pages/featured';
import Settings from './../components/pages/settings';

export default () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Switch>
            <Route path="/" exact component={Layout}></Route>
            <Route path="/archieves" exact component={Archieve}></Route>
            <Route path="/featured" exact component={Feature}></Route>
            <Route path="/settings" exact component={Settings}></Route>
        </Switch>
    </MuiThemeProvider>
);