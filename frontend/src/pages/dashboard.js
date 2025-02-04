import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/dashboard.css'; // Assuming you have a CSS file for styling

function Dashboard() {
    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkScheme) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, []);

    return (
        <div className="dashboard-container">
            <h2>User Dashboard</h2>
            <div className="dashboard-content">
                <div className="dashboard-section">
                    <h3>Welcome User</h3>
                    <p>Manage your account, view orders, and explore more.</p>
                </div>
                <div className="dashboard-section">
                    <h3>Order Summary</h3>
                    <p>You have no new orders at the moment.</p>
                </div>
                <div className="dashboard-section">
                    <h3>Shipping Addresses</h3>
                    <button>Add New Address</button>
                    <ul>
                        <li>123 Main St, Springfield</li>
                        <li>456 Elm St, Shelbyville</li>
                    </ul>
                </div>
                <div className="dashboard-section">
                    <h3>Account Options</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/productslist">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/change-password">Change Password</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
