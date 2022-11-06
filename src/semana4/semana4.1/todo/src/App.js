//import './App.css';
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

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
      <CreateTodoButton></CreateTodoButton>
   </>
  );
}

export default App;
