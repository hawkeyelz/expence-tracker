import React from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
  const expenseItem = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <Card className="expenses">{expenseItem}</Card>;
}

export default Expenses;
