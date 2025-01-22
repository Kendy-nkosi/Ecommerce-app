import React, { useState, useEffect, useContext } from 'react';
 import { CartContext } from '../context/CartContext';

function ProductList() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
           .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
              <ul>
                 {products.map(product => (
                     <li key={product.id}>
                       {product.name} - ${product.price}
                         <button onClick={() => addToCart(product)}>Add to Cart</button>
                   </li>
               ))}
           </ul>
       </div>
     );
 }

export default ProductList;