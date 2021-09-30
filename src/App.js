import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
function App() {
  const [expenses, setExpenses] = useState(
  [
    {
      id: 1,
      title: "Car Insurance",
      amount: 237.98,
      date: new Date(2021, 1, 26),
    },
    { id: 2, title: "Elctric ", amount: 325.98, date: new Date(2021, 1, 21) },
    { id: 3, title: "Emergence Vet Visit", amount: 115.47, date: new Date(2019, 3, 17) },
    { id: 4, title: "TV", amount: 63.75, date: new Date(2020, 11, 26) },
    { id: 5, title: "New Car", amount: 32592.32, date: new Date(2019, 5, 23) }
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses(() => [...expenses, expenseData]); 

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
