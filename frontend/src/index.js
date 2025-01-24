import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

console.log("Rendering BrowserRouter");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
   </CartProvider>
);
