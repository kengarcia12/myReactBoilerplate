import React from 'react';
import Title from './title';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            age: this.props.initialAge,
            hobbies: this.props.initialHobbies
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

    render(){
        return (
           
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <span>{this.state.age}</span>
                    <a className="navbar-brand" href="#"><Title title={this.props.title} /></a>
                    </div>
                    <ul className="nav navbar-nav">
                        { this.props.initialHobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                    </ul>
                </div>
                
                <button onClick={this.handleClick.bind(this)}>Add age</button>
                <button onClick={this.props.greet}>Greet</button>
               
                <input type="text" onChange={this.handleOnChangeTitle.bind(this)} value={this.state.title}/>
                <button onClick={this.handleChangeTitle.bind(this)} >Change Title</button>

            </nav>
        );
    }
}

