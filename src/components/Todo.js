import React from  'react'
import styled from 'styled-components'

const StyledBox = styled.div`
.list {
  background-color: #e64944;
  width: 45%;
  text-align: left;
  margin: 4px 0;
  padding-left: 8px;
  cursor: pointer;
}
.list.completed {
  background-color: blue;
  text-decoration: line-through;
}

`

const Todo = (props) => {
    return (
        <StyledBox 
        onClick={() => props.toggleCompleted(props.list.id)}
        
        >
             <p className={`list${props.list.completed ? " completed":""}`}>{props.list.task}</p>
        </StyledBox>
    )
}

export default Todo