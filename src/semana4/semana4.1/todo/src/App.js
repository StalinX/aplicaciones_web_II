//import './App.css';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton} from "./CreateTodoButton"

const todos = [
  {description:'Aprebnder REact', completed: false},
  {description:'Aprebnder Angular', completed: false},
  {description:'Aprebnder Vue', completed: false},
]



function App() {
  return (
    <>
      <TodoCounter/>
        
     <TodoSearch/>
      
      <TodoList>
        {todos.map((todo) =>(
          <TodoItem key={todo.description} text={todo.description}/>
        ))}
        
      </TodoList>
      <CreateTodoButton/>
   </>
  );
}

export default App;
