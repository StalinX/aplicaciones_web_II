import React from "react";
import './TodoItem.css'


function TodoItem (props){
    return (
        
        <div className="TodoItem">
        <li>
            <div className="items">
           <span className="item">7</span>
            <p>{props.text}</p> 
            <span>x</span>
            </div>
            
        </li>
        </div>
    );
}

export {TodoItem}