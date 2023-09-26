import React from "react";
import ToDoList from "./ToDoList";

export default function MapToDo(props) {
  return props.anima.map((abc) => (
    <ToDoList date={abc.date} name={abc.itemname} price={abc.price} />
  ));
}
