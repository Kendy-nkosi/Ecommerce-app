// frontend/src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            setCart(cart.map(item =>
                 item.id === product.id ? { ...item, quantity: item.quantity + 1} : item
            ));
        } else {
             setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
       setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity} : item
       ));
    };

    const clearCart = () => {
        setCart([]);
    };


    return (
       <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
       </CartContext.Provider>
   );
};