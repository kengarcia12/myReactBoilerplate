import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props){
        super(props);

    }
   
    render(){
        return(
            <div>
            <Drawer open={this.props.initOpen}>
                <MenuItem><Link to="/archieves">Archieves</Link></MenuItem>
                <MenuItem><Link to="/featured">Featured</Link></MenuItem>
                <MenuItem><Link to="/settings">Settings</Link></MenuItem>
            </Drawer>
            </div>
        )
    }
}