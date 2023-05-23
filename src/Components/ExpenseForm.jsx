import React, { useState } from 'react'
import "./Expenses.css"
import { useDispatch } from 'react-redux';
import { addExpense } from '../Redux/Features';
function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: Math.random().toString(),
            title,
            amount: +amount,
            date,
        };

        onAddExpense(expense);

        setTitle('');
        setAmount('');
        setDate('');
        dispatch(addExpense(expense)) 
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
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <button type="submit" className='AddExpenseBttn'>Add Expense</button>
            </form>
        </div>
    )
};

export default ExpenseForm

