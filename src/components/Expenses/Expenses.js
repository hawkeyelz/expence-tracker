import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState(new Date().getFullYear());
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  let filteredExps = props.expenses;

  const filteredYearHandler = (filterYearValue) => {
    setFilterValue(filterYearValue);
    // setFilteredExpenses(
    //   [...props.expenses].filter(
    //     (expense) => new Date(expense.date).getFullYear().toString() === filterYearValue
    //   )
    // );
    filteredExps = [...props.expenses].filter((expense)=> new Date(expense.date).getFullYear().toString() === filterYearValue);
    setFilteredExpenses([...filteredExps]);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filteredYearHandler}
          selected={filterValue}
        />
        <ExpensesChart Expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
