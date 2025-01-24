import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CartPage() {
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
        <div className="cart-page">  {/* Added className */}
            {cart.length === 0 ? (
                   <div className="cart-empty">
                        <FaShoppingCart className="cart-icon-empty"/>
                         <p className="cart-empty-message">Your shopping cart is empty</p>
                          <Link to='/productslist'> <button className='cart-continue-shopping'>Continue Shopping</button></Link>
                   </div>
               ) : (
                 <div>
                      <h2>Shopping Cart</h2>
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
                     <button onClick={handleCheckout}>Checkout</button>
                   </div>
            )}

        </div>
    );
}

export default CartPage;