import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  // Load saved transactions from LocalStorage
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  // Update LocalStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Function to add new transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  return (
    <div className="container">
      <h1>Smart Expense Tracker</h1>
      <ExpenseForm addTransaction={addTransaction} />
      <ExpenseChart transactions={transactions} />
      <ExpenseList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
};

export default App;
