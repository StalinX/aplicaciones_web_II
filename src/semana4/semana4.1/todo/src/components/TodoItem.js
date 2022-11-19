import React from 'react'

 function TodoItem({todo, completada, deleteItem}) {
    const getStyle= ()=>{
        return{
           textDecoration: todo.completed ? 'line-through': 'none',
           margin: '20 px',
           border:  '1px solid #ffffff',
           backgroundColor: '#CCF7E3'
        }
    }
  
    return (
    <div style={getStyle()}>
        <input type = 'checkbox' checked = {todo.completed}
        onChange={()=>completada(todo.id)} 
        />
        
        {todo.task}
            
            <button className = 'add-btn' 
            onClick={()=> deleteItem(todo.id)}
            > X </button>
        
    </div>
  )
}
export default TodoItem;

<button className = 'add-btn' > X </button>