import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import  CartContext  from './context/CartContext';
import Header from './components/Header';
import ProductsList from "./pages/ProductList";
import  Login from "./components/Login";
import Signup from './components/Signup';
import Home from "./pages/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './components/Cart'; // Import Cart


function App() {
   const [cartItems, setCartItems] = useState([]); // Example cart state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => { // useEffect is now imported
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedLoggedIn === 'true') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const RequireAuth = ({ children }) => {
        const navigate = useNavigate();
        if (!isLoggedIn) {
            navigate('/login');
            return null;
        }
        return children;
    }

    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/productslist" element={<ProductsList />} />
            </Routes>
            <Footer />
            <Cart />
        </div>
    );
}

export default App;