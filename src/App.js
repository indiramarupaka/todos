import "./App.css";
import Todo from "./components/Todo.js";
import { Component } from "react";
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id:1,title: "indira  first Todo", complete: false },
        { id:2,title: "indira  second Todo", complete: false },
        { id:3,title: "indira  third Todo", complete: false },
      ],
    };
  }
  addTodo=(title)=>{
    console.log(title);
    let todos=[...this.state.todos];
    let id=todos[todos.length-1]?[todos.length-1]['id']+1:0;
    let newTodo={
      id,
      title,
      complete:false

    };
    todos.push(newTodo);
    this.setState({todos});
  }
  completeTodo =(id)=>{
    let todos=[...this.state.todos];
    todos.filter(todo=>{
      if(todo.id===id){
        todo.complete=true;
      }
    });
  }

  deleteTodo=(id)=>{
    let todos=[...this.state.todos];
    todos.filter((todo,index)=>{
      if(todo.id===id){
        todos.splice(index,1);
      }

    });
    this.setState({todos});

  };
  render() {
    return (
      <div>
        <header className="header">App Management for TODO</header>
<div className="todolist">
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} todo={todo}completeTodo={(id)=>this.completeTodo(id)} 
          deleteTodo={(id)=>this.deleteTodo(id)} />
        ))}

        <TodoForm addTodo={(todo) => this.addTodo(todo)}/>
      </div>
      </div>
    );
  }
}
export default App;
