import React from 'react';
import style from './App.css';
import uuid from 'uuid';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(event){
        event.preventDefault();
        console.log(event);
        const todo = {
            text: eventy.target.value,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        const Title = props => <h1>{props.title}</h1>
        console.log(todo);
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
        
            <form className={style.TodoApp} onSubmit={(event)=>{this.addTodo}}>
                <input type="text" id="title" />
                <button>Add title</button>
            </form>
        
        );
    }
}

export default App;