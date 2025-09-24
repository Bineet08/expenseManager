import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Others");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense({
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setAmount("");
    setCategory("Others");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md mb-4"
    >
      <h2 className="text-lg font-semibold mb-2">Add Expenses</h2>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Expense Title"
          className="border p-2 rounded flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded w-32"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Category...
          </option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
