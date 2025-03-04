import React from "react";

const ExpenseList = ({ transactions, deleteTransaction }) => {
  return (
    <ul>
      {transactions.map((txn) => (
        <li key={txn.id}>
          <span>{txn.text} - ₹{txn.amount} ({txn.category})</span>
          <button onClick={() => deleteTransaction(txn.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
