import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Routes from './../../routes';



export default class Layout extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: 23,
            title: "My React",
            hobbies: ["Playing","Watching Movies", "Listening Music"],
        }
    }
    onGreet(){
        alert("hello");
    }
    onChangeTitle(value) {
        this.setState({ title: value })
    }

    render(){

        return (
            <div>
                <Header
                    title={this.state.title} 
                    initialAge={this.state.age} 
                    initialHobbies={this.state.hobbies} 
                    greet={this.onGreet}
                    changeTitle={this.onChangeTitle.bind(this)}
                />
                <Footer />
            </div>
        );
    }
}