import React from "react";
import './CreateTodoButton.css'


const onClick = () => {
  return alert("Hola");
}

const CreateTodoButton = ()=>(
  <section className="addtodo">
    <button className="buttonadd" type="Submit"
      onClick={() =>{
        onClick();
}}> Anadir Tarea</button>
  </section >
)
export { CreateTodoButton }