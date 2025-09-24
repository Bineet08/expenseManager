// App.jsx
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    try {
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    if (!expense.name || !expense.amount) return; // prevent empty expense
    setExpenses([{ id: Date.now(), ...expense }, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="container mx-auto p-4">
        <Dashboard expenses={expenses} />
        <ExpenseForm addExpense={ addExpense } />
        <ExpenseList expenses={ expenses } deleteExpense={ deleteExpense } />
      </div>
    </div>
  );
}

export default App;
