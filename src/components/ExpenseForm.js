import React, { useState } from "react";

const ExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      category,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Expense Name" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
