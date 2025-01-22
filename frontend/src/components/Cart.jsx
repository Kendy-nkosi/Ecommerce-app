import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

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

      return (
            <div>
              <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                      <p>Your cart is empty.</p>
                ) : (
                         <ul>
                          {cart.map((item) => (
                             <li key={item.id}>
                                {item.name} - ${item.price} - Quantity:
                                     <input
                                             type="number"
                                           min="1"
                                          value={item.quantity}
                                           onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                     />
                                     <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                   </li>
                               ))}
                            </ul>
                      )}
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
          );
    }

    export default Cart;