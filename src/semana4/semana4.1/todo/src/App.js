import React, {useState} from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import datos from './datos.json'

function App() {

  const [todos, setTodos  ] = useState(datos);
  const completada = (id) =>{

   setTodos( todos.map((todo)=>{
    return todo.id === +(id) ? {...todo, completed: !todo.completed} :  {...todo}
  }))
  }

  const deleteItem = (id)=>{
    setTodos([...todos].filter(todo => todo.id !== id)) 
  }

  const addTodo = (newTodo) =>{
    console.log(newTodo);
    let newItem = {id: +new Date(), task: newTodo, completed:false};

    setTodos([...todos, newItem])
  }
  return(
    <div className='container'>
     <TodoAdd addTodo={addTodo} />
     <TodoList todos = {todos} completada= {completada} deleteItem = {deleteItem}/>
    </div>
  )
}

export default App;
