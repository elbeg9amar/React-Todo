// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    
    return (
        <div> 
        {props.datas.map((data) => (
        <Todo
          key={data.id}
          list={data}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
        </div>
    )
}

export default TodoList