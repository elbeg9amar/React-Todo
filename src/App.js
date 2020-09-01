import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super ();
    this.state = {
      datas: todoData,
      toggleCompleted: () => {},
    }
  }

  toggleCompleted = (listId) =>{
    this.setState({
      data: this.state.datas.map((data) => {
        if (data.id === listId){
          return {
            ...data, 
            completed: !data.completed
          }
        } else {
          return data
        }
      })
    })
  }
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }
    this.setState({
      datas: [...this.state.datas, newTask]
    })
  }
  render() {
    return (
      <div className="App">
        <header><h1>Todo List: MVP</h1></header>
        <TodoForm addTask={this.addTask}/>

        <TodoList datas={this.state.datas} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
