import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

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
    filteredExps = [...props.expenses].filter((expense)=> new Date(expense.date).getFullYear().toString() == filterYearValue);
    setFilteredExpenses([...filteredExps]);
    console.log([...filteredExps]);
    setTimeout(()=>{console.log('TIMER OUT', filteredExpenses)},30)
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={filteredYearHandler}
          selected={filterValue}
        />
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
