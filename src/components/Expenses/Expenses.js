import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState(new Date().getFullYear());
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
  
  const filteredYearHandler = (filterYearValue) => {
    setFilterValue(filterYearValue);
    setFilteredExpenses([...props.expenses].filter(((expense)=>expense.date.getFullYear().toString() === filterYearValue)));
  };


  const expenseItems = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={filteredYearHandler} selected={filterValue}/>
        {expenseItems}
      </Card>
    </div>
  );
}

export default Expenses;
