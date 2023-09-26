import React,{useState} from "react";
import MapToDo from "./components/main_page/MapToDo";
import NewExpense from "./components/NewExpense/NewExpense";

const newExpData = [
  { itemname: "Books", price: 500, date: new Date(2023, 6, 1) },
  { itemname: "pen", price: 200, date: new Date(2023, 27, 6) },
  { itemname: "Bag", price: 74, date: new Date(2023, 11, 8) },
  { itemname: "Laptop", price: 118000, date: new Date(2023, 1, 7) },
];
function App() {
  const [newLIst,setNewList]=useState(newExpData);
  
  const addExpenseHandler = (expense) => {
    console.log(expense);
     const updatedExpanse=[expense,...newLIst];
     setNewList(updatedExpanse);
  }
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler} />
    <MapToDo anima={newLIst}/> 
</>

      );
}
export default App;
