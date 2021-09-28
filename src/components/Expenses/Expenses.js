import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState(new Date().getFullYear());
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filteredYearHandler = (filterYearValue) => {
    setFilterValue(filterYearValue);
    setFilteredExpenses(
      [...props.expenses].filter(
        (expense) => expense.date.getFullYear().toString() === filterYearValue
      )
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filteredYearHandler}
          selected={filterValue}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
