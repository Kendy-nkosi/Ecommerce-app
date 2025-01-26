import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductList from "./pages/ProductList";
import  Login from "./components/Auth";
import Signup from './components/Signup';
import Home from "./pages/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './pages/cart'; // Changed import path


  function App() {
    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
               <Route path="/productslist" element={ <ProductList /> } />
               <Route path="/cart" element={<Cart />} />
           </Routes>
            <Footer />
       </div>
   );

   }
export default App;