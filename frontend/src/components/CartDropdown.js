import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartDropdown() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
    if (cart.length === 0) {
        return <div className="cart-dropdown">
             <p className="cart-empty-message">Your cart is empty.</p>
             </div>;
    }

    return (
        <div className='cart-dropdown'>
          <h2>Shopping Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                   {item.name} - ${item.price} - Quantity:
                     <input
                        type="number"
                         min="1"
                         value={item.quantity}
                         onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                   <button  className='cart-item-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
               </li>
             ))}
             </ul>
             <div className='cart-buttons'>
               <button onClick={clearCart} disabled={cart.length === 0} >Clear Cart</button>
               <button onClick={handleCheckout} disabled={cart.length === 0}>Checkout</button>
             </div>
        </div>
        );

 const handleCheckout = async () => {
      try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                      'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ cart }),
              });

              const data = await response.json();
                alert(data.message);
              clearCart()
            } catch (error) {
                 alert("Error processing checkout");
          }
  };
}
export default CartDropdown;