import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectionChangeHandler = (event) => {
    setFilteredYear(event);
  };

  const items = props.exp.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const filteredItems = props.exp.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectionChange={selectionChangeHandler}
        />
        {/* {filteredItems.length === 0 ? <p>No expenseses found</p> : filteredItems} */}
        {/* {filteredItems.length === 0 && <p>No expenseses found</p>} */}
        {/* {filteredItems.length > 0 && filteredItems} */}
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </li>
  );
}

export default Expenses;
