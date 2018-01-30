import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
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

    onTextInputChange(text) {
        this.setState({ newTodo: text });
    }

    onCreatePressed() {
        this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' });
    }

    render() {
        return (
            <View>
                <Text>"Todo" is working!</Text>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    placeholder="Input here..."
                    placeholderTextColor="grey"
                    clearButtonMode="always"
                    onChangeText={this.onTextInputChange}
                    value={this.state.newTodo}
                />
                <TouchableOpacity
                    onPress={this.onCreatePressed}
                >
                    <Text style={styles.Text}>Create</Text>
                </TouchableOpacity>
                <View style={styles.View}>
                    {this.state.todos.map((todo, i) =>
                        (<Text key={i} style={styles.Text}>{todo}</Text>)
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    View: {

    },
    Text: {

    }
});
export default Todo;