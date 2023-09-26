import React,{useState} from "react";
import "./InputDataForm.css";
export default function InputDataForm(props) {
  const [newTitle,setNewTitle]=useState();
  const [newAmount,setnewAmount]=useState();
  const [newDate,setnewDate]=useState();

  const submitHandler=(event)=>{
    event.preventDefault();
    const objdata={
     itemname:newTitle,
      price:newAmount,
      date: new Date(newDate),
    }
    props.getSavedData(objdata);
    console.log(objdata);
    setNewTitle('');
    setnewAmount('');
    setnewDate('');

}
const titleChangeHandler=(event)=>{
  setNewTitle(event.target.value)
}
const amountChangeHandler=(event)=>{
  setnewAmount(event.target.value)
}
const dateChangeHandler=(event)=>{
  setnewDate(event.target.value)
}
  return (
    <div>
  
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="1" step="1" value={newAmount}  onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={newDate} onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
