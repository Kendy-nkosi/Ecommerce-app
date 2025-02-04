import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartDropdown.css';

function CartDropdown({ cartItems = [] }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item, index) => (
                        <div key={item.id + '-' + index} className="cart-item"> {/* Ensure unique keys */}
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                                <span className="name">{item.name}</span>
                                <span className="price">{item.quantity} x ${item.price}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <button onClick={handleCheckout}>GO TO CHECKOUT</button>
        </div>
    );
}

export default CartDropdown;