import React from "react";
import "./NewExpanse.css";
import InputDataForm from "./InputDataForm";

const NewExpense = (props) => {

  const savedData = (newData) => {
    const showData = {
      ...newData,
      id: Math.random().toString()
    };
    props.onAddExpense(showData)
    console.log(showData);
  };

  return (
    <div className="new-expense">
      <InputDataForm getSavedData={savedData} />
    </div>
  );
};

export default NewExpense;

