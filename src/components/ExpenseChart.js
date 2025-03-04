import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React from "react";

// ✅ Register required Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  const categories = ["Food", "Travel", "Shopping", "Other"];

  const categoryTotals = categories.map((category) =>
    transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  // ✅ Define the 'options' before using it
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Change to "bottom", "left", "right" if needed
      },
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        data: categoryTotals,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return <Pie data={data} options={options} />;
};

export default ExpenseChart;
