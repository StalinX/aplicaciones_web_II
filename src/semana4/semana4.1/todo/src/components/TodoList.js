import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos, completada, deleteItem}) {
  return (
    <div>
        {
                todos.map((todo, index) =>(
                    <TodoItem key={`todo-${index}`} todo = {todo} completada ={completada} deleteItem ={deleteItem}/>
                ))
        }
    </div>
  )
}

export default TodoList;