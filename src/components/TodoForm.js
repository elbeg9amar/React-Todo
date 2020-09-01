import React from 'react'
import { render } from '@testing-library/react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }
    handleChanges = (e) => {
        this.setState({
            task:e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}


export default TodoForm