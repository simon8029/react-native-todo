import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    const { value } = event.target;
    this.setState({ newTodo: value });
  }

  onButtonClick(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            id="input_"
            className=""
            value={this.state.newTodo}
            placeholder="new todo"
            onChange={this.onInputChange} />
          <button id="" className="" onClick={this.onButtonClick}>Create</button>
        </form>
        <div id="" className="">
          {this.state.todos.map((todo) =>
            <li key={todo}>{todo}</li>
          )}
        </div>
      </div>
    );
  }
}
