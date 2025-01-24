import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',  // Dark Grey
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '50px', // Add some space above the footer
  };

  const linkStyle = {
    color: '#FFA500', // Orange Highlight
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '10px', // Space between links
    marginRight: '10px'
  };

  return (
    <footer style={footerStyle}>
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:info@ladykaystationery.com" style={linkStyle}>info@ladykaystationery.com</a></p>
      <p>Phone: <a href="tel:+15551234567" style={linkStyle}>+27 6831 5981 </a></p>
      <p>Address: 123 Main Street, Anytown, USA</p>
      <p>© {new Date().getFullYear()} Lady Kay Stationery</p>
    </footer>
  );
};

export default Footer;