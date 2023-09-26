import React from "react";
import "./ToDoList.css";
import ItemDate from "./ItemDate";

function ToDoList(props) {
  return (
    <> 
      <div className="expanse-container">
        <ItemDate date={props.date}/>
        <div className="expanse-item">
          <h2 >{props.name}</h2>
          <div className="expanse-price">₹ {props.price}</div>
        </div>
        
      </div>
    
    </>
  );
}

export default ToDoList;
