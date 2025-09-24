import React from 'react'

const ExpenseList = ({ expenses, deleteExpense }) => {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return (
      <p className="text-gray-600 text-center">No expenses.</p>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Expense List</h2>
      <ul className="divide-y">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center py-2"
          >
            <div>
              <p className="font-medium">{exp.title}</p>
              <p className="text-sm text-gray-500">
                {exp.category} • {exp.date}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-red-500">₹{exp.amount}</span>
              <button
                onClick={() => deleteExpense(exp.id)}
                className="text-sm text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
