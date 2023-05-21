import React, { useState, useEffect } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import "./App.css"
const App = () => {
  const [expenses, setExpenses] = useState([]);


  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    // localStorage.setItem('expenses', JSON.stringify(expenses));

  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    console.log(id);
  };
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  useEffect(() => {
    const storeExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storeExpenses) {
      setExpenses(storeExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);


  return (
    <div className='MainApp'>
      <div className='LeftApp'>

      </div>
      <div className='RightApp'>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      <p>Total Expenses: ₦{totalExpenses}</p>
      </div>
    </div>
  );
};

export default App;
