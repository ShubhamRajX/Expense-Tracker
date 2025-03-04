import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure this line exists
import App from './App';
import reportWebVitals from './reportWebVitals';  // Ensure this line is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top", // You can change it to "bottom", "left", "right"
//     },
//   },
// };

reportWebVitals();
