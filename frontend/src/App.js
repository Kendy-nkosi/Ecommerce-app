import React from 'react';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'; // Import the Routes, and Route
import ProductList from './pages/ProductList'
import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./pages/Home";
import Cart from "./components/Cart";


function App() {
  return (
     <div>
         <Header/>
        <main>
            <Routes> {/* new routes here */}
                 <Route path="/" element={<Home/>} />
                 <Route path="/products" element={<ProductList/>} />
                <Route path="/login" element={<Auth />} />
                 <Route path="/register" element={<Register />} />
                 <Route path="/cart" element={<Cart />} />
           </Routes>
        </main>
     </div>
   );
 }
export default App;