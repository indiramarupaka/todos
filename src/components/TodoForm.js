
import React, { Component } from 'react';


class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state={
            titletext:""
        }
    }

    addTodo=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.titletext);
        this.setState({titletext: ''});


    }
    render(){
        return(


            <div>

                <form onSubmit={this.addTodo}>
                <input text="text"
                value={this.state.titletext}
                onChange={(e) =>this.setState({ titletext:e.target.value})}
               placeholder="enter here"/>
                </form>
            </div>
        )
    }
}
export default TodoForm;