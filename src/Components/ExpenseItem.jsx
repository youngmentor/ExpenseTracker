import React from 'react'
import "./Expenses.css"
function ExpenseItem({ expense, onDeleteExpense }) {
    const { id, title, amount } = expense;

    const handleDelete = () => {
      onDeleteExpense(id);
    };
    return (
        <div className='ExpenseItem'>
          <p className='one'>{title}</p>
          <p className='two'> ₦{amount}</p>
          <button onClick={handleDelete} className='DeleteBttn'>Delete</button>
        </div>
      );
}

export default ExpenseItem