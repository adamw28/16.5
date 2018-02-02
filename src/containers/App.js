import React from 'react';
import style from './App.css';
import uuid from 'uuid';

const TodoList = props => {
    return ( <div><
        ul >
        list = {
            props.state.todos
        }
        remove = {
            props.removeTodo
        } { props.state.todos.map(todo => this.renderTodo(props.todo)) } <
        /ul>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }],
            currentText: ''
        };
    }
    addTodo() {
        const todo = {
            text: this.state.currentText,
            id: uuid.v4()
        }

        this.setState({
            todos: [...this.state.todos, todo]
        });
    }
    removeTodo(id) {
        const reminder = this.state.todos.filter(todo => todo.id !== id);

        this.setState({
            todos: reminder
        });
    }

    handlePress(ev) {
        this.setState({
            currentText: ev.target.value
        });

    }

    renderTodo(todo) {
        return ( < li key = { todo.id } > { todo.text } < button type = "button"
            onClick = {
                () => { remove=this.removeTodo }
            } > Usuń < /button></li > )
    }

    render() {
        return ( <
            div >
            <
            form className = { style.TodoApp } onSubmit = {
                (event) => { this.addTodo }
            } >
            <
            h1 > Lista rzeczy do zrobienia < /h1> <
            input type = "text"
            id = "title"
            onChange = { this.handlePress.bind(this) }
            /> <
            button type = "button"
            onClick = { this.addTodo.bind(this) } > Add title < /button> < /
            form >
            <
            h1 > Liczba zadań: { this.state.todos.length } < /h1> <
            ul > < TodoList list = { this.state.todos } remove = { removeTodo } / > < /
                        ul >  < /
            div >

        );
    }
}

export default App;