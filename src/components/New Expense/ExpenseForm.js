import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //individual state approch examples
  //const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  //valid state management
  const currentDate = new Date().toJSON().slice(0, 10);

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: currentDate,
  });

  const [addNewExpense, setAddNewExpense] = useState(false);

  // change handlers
  const titleChangeHandler = (event) => {
    //individual state example updating a state
    // setEnteredTitle(event.target.value);

    setUserInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    setAddNewExpense(false);
    event.preventDefault();
    props.onExpenseData(userInput);
    //clear form
    setUserInput(() => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  };


  const toggleNewExpenseForm = () => {
    setAddNewExpense(true);
    setUserInput(() => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  };

  const cancelNewExpenseForm = () => {
    setAddNewExpense(false);
    setUserInput(() => {
      return {
        title: "",
        amount: "",
        date: "",
      }
      });
  }

  if (!addNewExpense) {
    return  <button onClick={toggleNewExpenseForm}>Add New Expnese</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            type="date"
            min="2019-01-01"
            max="2099-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelNewExpenseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
