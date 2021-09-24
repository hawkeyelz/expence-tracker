import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';
function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 237.98,
      date: new Date(2021, 1, 26),
    },
    { id: 2, title: "Elctric", amount: 325.98, date: new Date(2021, 1, 21) },
    { id: 3, title: "Gas", amount: 284.47, date: new Date(2021, 1, 23) },
    { id: 4, title: "Trash", amount: 63.75, date: new Date(2021, 1, 18) },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
