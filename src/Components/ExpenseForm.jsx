import React,{useState} from 'react'
import "./Expenses.css"
function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const expense = {
        id: Math.random().toString(),
        title,
        amount: +amount,
      };
  
      onAddExpense(expense);
  
      setTitle('');
      setAmount('');
    };
  return (
    <div className='MainExpense'>
           <form onSubmit={handleSubmit} className='MainExpenseWrap'>
      <div className='TitleDiv'>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='ExpenseInput'
        />
      </div>
      <div className='AmountDiv'>
        <label>Amount:</label>
        <input
          type="alphanumeric"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='ExpenseInput'
        />
      </div>
      <button type="submit" className='AddExpenseBttn'>Add Expense</button>
    </form>
    </div>
  )
}

export default ExpenseForm