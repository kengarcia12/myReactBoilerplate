import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


import Title from './../common/title';
import Menu from './../common/menu';




export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            age: this.props.initialAge,
            hobbies: this.props.initialHobbies,
            open: this.props.initOpen
        }
    }


    handleClick() {
        this.setState({ 
            age: this.state.age + 10,
            hobbies: this.state.hobbies + "haha"
        });
    }
    handleChangeTitle(){
        this.props.changeTitle(this.state.title)
    }

    handleOnChangeTitle(event) {
        this.setState({ title: event.target.value })
    }
    handleToggle(){
        this.setState({ open: !this.state.open })
    }
    render(){
        return (
           <div>
                <AppBar title={this.state.title} >
                    <FlatButton label="Menu" secondary={true}  onClick={this.handleToggle.bind(this)}/>
                </AppBar>
                <Menu initOpen={this.state.open} />
            
                <div className="container">
                    <span>{this.state.age}</span>
                    <a className="navbar-brand" href="#"><Title title={this.props.title} /></a>
                    <ul className="nav navbar-nav">
                        { this.props.initialHobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                    </ul>
                    <button onClick={this.handleClick.bind(this)}>Add age</button>
                    <button onClick={this.props.greet}>Greet</button>
                    
                    <input type="text" onChange={this.handleOnChangeTitle.bind(this)} value={this.state.title}/>
                    <button onClick={this.handleChangeTitle.bind(this)} >Change Title</button>
                </div>
            </div>
        );
    }
}

