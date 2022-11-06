import React from "react";


function TodoItem (props){
    return (
        
        <li>
            <span> 7 </span>
            <p>{props.text}</p>
            <span> x </span>
        </li>
    );
}

export {TodoItem}