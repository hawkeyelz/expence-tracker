import React from 'react';
import './ExpenseDate.css';
function ExpenseDate(props) {
  const date = new Date(props.date);
  const month = date.toLocaleDateString("en-us", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleDateString("en-us", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
