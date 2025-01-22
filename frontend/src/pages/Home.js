import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
   return (
     <div>
        <h2>Welcome to my E-Commerce Store!</h2>
        <p>Explore our great selection of products.</p>
        <Link to="/login"><button>Login</button></Link>  
        <Link to="/register"><button>Register</button></Link> {/* added buttons with links */}
      </div>
 );
}

export default Home;