import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const navigate = useNavigate();
    const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails')) || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the order placement logic
        console.log({
            ...shippingDetails,
            paymentMethod,
        });
        alert('Order placed successfully!');
        // Optionally clear localStorage and navigate to home or order summary
        localStorage.removeItem('shippingDetails');
        navigate('/');
    };

    return (
        <div className="checkout-container">
            <h2>Payment Method</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Payment Method:</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default PaymentMethod; 