import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
 import Sharpeners from '../images/sharpeners.webp';
import Pen  from '../images/pen2.webp';
 import colors from '../images/colors.webp';
import oneone from '../images/112.webp';
import pp from '../images/pp.webp';
import pritt from '../images/pritt.webp';
import crayons from '../images/crayons.webp';
import stickynotes from '../images/stickynotes.webp';
import casep from '../images/casep.jpeg';
import green from '../images/green.jpeg';
import calculator  from '../images/calculator.jpg';
import bb from '../images/bb.jpeg';
import sets from '../images/sets.jpeg';
import paint from '../images/paint.jpeg';
import pink  from  '../images/pink .jpeg';
import blue from '../images/blue.jpeg';



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
           name: "Pritt Glue Stick Large 43gr ",
            description: "Value Pack of 3.",
           price: 150.00,
            image: pritt,
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
            price: 49.99,
            image: oneone,
          },
          {
            id: 6,
            name:"Monami Wax Crayons Retractable Assorted (Pack 12)",
            description:"",
            price: 119.99,
            image: crayons,
               },
               {
                id: 7,
                name:"Colorful Sticky Notes (Post-its)",
                description:"The edges of the sticky notes are crisp, and the stack is slightly staggered showing each of the edges of the sticky notes.",
                price: 99.99,
                image: stickynotes,
                   },
                 {
                id:8,
                name:"Large Capacity Pencil Case",
                description:"Gift Pen Bag Pen Box Pencil Cases Storage Student School Office Supplies",
                price: 80.00,
                image: casep,
                 },  
                {
               id:9,
               name:"Layers A4 File Folder ",
               description:"Storage Bag Test Paper Desktop Tool School Stationery Office Supplies",
               price: 129.99,
               image: green,
                },
                {
                 id:10,
                 name:"Scientific Calculator",
                 description:"Data handling and Regression analysis Random Integers What's in the box 1 x Casio FX-82ZA Plus II Scientific Calculator Black & Product Manual",
                 price:319.99,
                 image: calculator,
                },
            {
            id:10,
            name:"Treeline A3 Upright Lever Arch File Black ",
            description:"Each",
            price:100.00,
            image:bb,
            },
            {
           id:11,
           name:"CROXLEY CREATE Maths Set",
           description:"11 Piece",
           price:69.00,
           image:sets,    
            },
            {
                id:12,
                name:"CROXLEY CREATE Beginners Paintbrush",
                description:"4 Piece Set",
                price:250.00,
                image:paint,
                },
         {
           id:13,
           name :" 2 Hole Punch",
           description:"Rexel V230 Pink ",
           price:120.00,
           image:pink,
         }, 
         {
           id:14,
           name:"STAPLER MINI BLUE",
           description:"",
           price:150.00,
           image:blue,
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