// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This imports global styles
import App from './App';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
