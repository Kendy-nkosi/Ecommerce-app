import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
 import Sharpeners from '../images/sharpeners.webp';
import Pen  from '../images/pen2.webp';
 import colors from '../images/colors.webp';
import oneone from '../images/112.webp';
import pp from '../images/pp.webp'


function ProductList() {
    const { addToCart } = useContext(CartContext);


    const products = [
        {
            id: 1,
            name: "30pcs Mini Pencil Sharpeners ",
            description: " Colorful, Portable & Handheld for Everyday Office Use",
            price: 37.99,
            image: Sharpeners,
        },
        {
            id: 2,
            name: "Elegant Pen Set",
            description: "A set of finely crafted pens that writes smoothly.",
            price: 15.50,
            image: Pen,
        },
        {
            id: 3,
            name: "Watercolor Paint Set",
            description: "Vibrant watercolors for painting your creative designs.",
            price: 22.00,
            image:colors ,
        },
        {
            id: 4,
           name: "Leather Journal",
            description: "A durable, stylish journal with a leather cover.",
           price: 29.99,
            image: "https://m.media-amazon.com/images/I/81z1q1gI6mL._AC_UF894,1000_QL80_.jpg",
        },
         {
           id: 5,
            name: "Staedtler Tradition 110 Pencils 2B Box 12",
           description: "Markers that make writing and drawing a pleasure",
             price: 149.99,
             image:pp,
         },
          {
              id: 6,
            name: "Art Eraser",
            description: "A high quality eraser that is good for all your needs",
            price: 8.00,
            image: oneone,
          },
    ];
    return (
        <div className="featured-products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className='product-image'/>
                        <h3>{product.name}</h3>
                       <p>{product.description}</p>
                         <p>Price: ${product.price}</p>
                           <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
           </div>
        </div>
   );
}

export default ProductList;