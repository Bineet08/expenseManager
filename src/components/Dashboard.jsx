import React from 'react';

const Dashboard = ({ expenses }) => {
  const safeExpenses = Array.isArray(expenses) ? expenses : [];

  const total = safeExpenses.reduce((sum, exp) => {
    const amt = typeof exp.amount === 'number' ? exp.amount : 0;
    return sum + amt;
  }, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Total Spent</h2>
      <p className="text-2xl font-bold text-red-500">₹{total}</p>
      {safeExpenses.length > 0 && (
        <p className="text-gray-600">
          Average Expense: ₹{(total / safeExpenses.length).toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default Dashboard;
