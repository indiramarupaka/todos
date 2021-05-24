import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <div className="todo">
          <div className="status">
            <p
              style={{
                textDecoration: this.props.todo.complete ? "line-through" : "",
              }}
            >
              {this.props.todo.title}
            </p>

            <button className="complete" onClick={()=>this.props.completeTodo(this.props.todo.id)}>complete</button>
            <button className="delete" onClick={()=>this.props.deleteTodo(this.props.todo.id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
