import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <div className="cart-empty">
          <FaShoppingCart className="cart-icon-empty"/>
          <p className="cart-empty-message">Your shopping cart is empty</p>
          <Link to='/productslist'> <button className='cart-continue-shopping'>Continue Shopping</button></Link>
        </div>
      ) : (
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>R{item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="cart-qty-input"
                    />
                  </td>
                  <td>R{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total-row">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">R{getTotal().toFixed(2)}</span>
          </div>
          <button className="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}
export default CartPage;
