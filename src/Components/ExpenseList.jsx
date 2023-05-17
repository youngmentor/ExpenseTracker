import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div className='ExpensesList'>
            <p className='list'>Expenses Table</p>
            <p>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onDeleteExpense={onDeleteExpense}
                    />
                ))}
            </p>
        </div>
    )
}

export default ExpenseList