import React from 'react';
import style from './App.css';
import uuid from 'uuid';

class TodoList extends React.Component{
    
    removeItem(id){
        this.props.remove(id)
    }

    render(){
        return ( 
            <ul> {
                this.props.todos.map((todo) => {
                    return ( 
                        <div key={todo.id}>
                            {todo.text}
                            <button onClick={this.removeItem.bind(this, todo.id)}>Remove</button>
                        </div>
                        );
                    })
                };
            </ul>
        );
    }
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

    render() {
        return (
            <div>
                <form 
                    className={style.TodoApp}
                    onSubmit={(event) => {this.addTodo} }>
                    <h1> Lista rzeczy do zrobienia</h1> 
                    <input type="text" id="title" onChange={ this.handlePress.bind(this) } />
                    <button type="button" onClick={ this.addTodo.bind(this) }>Add title</button>
                </form>
                <h1> Liczba zadań: {this.state.todos.length} </h1> 
            
                <TodoList todos={this.state.todos} remove={this.removeTodo.bind(this)} />
                
            </div>

        );
    }
}

export default App;