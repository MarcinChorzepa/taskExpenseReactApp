import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [buttonToggle, setButtonToggle] = useState(true);
  const newExpenseHandler = (newExpenseData) => {
    const returnValue = {
      ...newExpenseData,
      id: Math.random(10).toString(),
    };

    props.onAddExpense(returnValue);
  };
  const showHandler = () => {
    setButtonToggle((prev) => !prev);
  };

  const expenseFormToggle =
    buttonToggle ? (
      <button onClick={showHandler}>Add New Expense</button>
    ) : (
      <ExpenseForm
        onSaveExpenseData={newExpenseHandler}
        showToggle={showHandler}
      />
    );

  return <div className="new-expense">{expenseFormToggle}</div>;
};

export default NewExpense;
