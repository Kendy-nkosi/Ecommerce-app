import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import ProductsList from './pages/ProductList';
import Cart from './pages/cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/dashboard';
import Checkout from './components/Checkout';
import PaymentMethod from './components/PaymentMethod';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer'; // Import Footer component
import { SearchProvider } from './context/CartContext';

function App() {
    return (
        <AuthProvider>
            <SearchProvider>
                <Router>
                    <div className="app-container">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/productslist" element={<ProductsList />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/payment-method" element={<PaymentMethod />} />
                        </Routes>
                        <Footer /> {/* Add Footer component */}
                    </div>
                </Router>
            </SearchProvider>
        </AuthProvider>
    );
}

export default App;