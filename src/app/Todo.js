import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import TodoForm from './todo-form';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }

    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onCreatePressed = this.onCreatePressed.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:8139/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
  }

  onTextInputChange(text) {
    this.setState({ newTodo: text });
  }

  onCreatePressed() {
    // this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' });
    fetch('http://localhost:8139/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todo => {
        const todos = [...this.state.todos, todo];
        this.setState({ todos });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TodoForm
          onCreatePressed={this.onCreatePressed}
          onTextInputChange={this.onTextInputChange}
          value={this.state.newTodo}
        /> */}
        <View style={styles.View}>
          {this.state.todos.map((todo) =>
            (<Text key={todo.id} style={styles.Text}>{todo.name}</Text>)
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20
  // },
  // form: {
  //   flexDirection: 'row'
  // },
  // textInput: {
  //   flex: 0.7,
  //   width: 100,
  //   height: 80
  // },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // buttonText: {
  //   fontSize: 18
  // }
});

export default Todo;
