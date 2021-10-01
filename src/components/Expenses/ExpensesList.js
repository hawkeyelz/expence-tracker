import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  const expenseItems = props.items.map((expense) => ( 
      <ExpenseItem
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
  ));

  if (props.items.length ===0){
      return <p className="expenses-list__fallback">No Expense Items Found</p>
  }

  return <div>
   {<ul className="expenses-list"> {expenseItems}</ul>}
   </div>
};

export default ExpensesList;
