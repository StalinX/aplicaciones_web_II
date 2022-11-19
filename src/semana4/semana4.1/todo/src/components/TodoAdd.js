import React, { useState } from 'react'

function TodoAdd({addTodo}) {
    const [userInput, setUserInput] = useState("sadsad");
  
    const insertChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const insertSubmit = (e)=>{
        e.preventDefault();
        if(userInput.trim() !== "" ){
            addTodo(userInput);
            setUserInput("");
        }
    }
    return (
    <div className='caja' style={{ margin: 20}} >
        <form onSubmit={insertSubmit}>
            <input type="text" value ={userInput} 
                onChange = {insertChange}
            />
            <button> Añadir Tarea </button>

        </form>

    </div>

  )




}

export default TodoAdd;