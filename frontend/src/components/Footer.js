import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const footerStyle = {
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
       textAlign: 'center',
      marginTop: '50px',
  };

   const linkStyle = {
     color: '#FFA500',
      textDecoration: 'none',
     fontWeight: 'bold',
     marginLeft: '10px',
      marginRight: '10px'
  };
  const socialIconStyle = {
      color: 'white',
      margin: '0 10px',
     fontSize: '24px',
    transition: 'color 0.3s'
  }
  return (
    <footer style={footerStyle}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@ladykaystationery.com" style={linkStyle}>info@ladykaystationery.com</a></p>
         <p>Phone: <a href="tel:+15551234567" style={linkStyle}>+27 6831 5981 </a></p>
         <p>Address: 123 Main Street, Anytown, USA</p>

          <div className='social-icons'>
            <a href="https://www.facebook.com/yourpage" style={socialIconStyle}><FaFacebook/></a>
            <a href="https://twitter.com/yourpage" style={socialIconStyle}><FaTwitter/></a>
             <a href="https://www.instagram.com/yourpage" style={socialIconStyle}><FaInstagram/></a>
              <a href="https://www.linkedin.com/in/yourpage" style={socialIconStyle}><FaLinkedin/></a>
        </div>
          <p>© {new Date().getFullYear()} Lady Kay Stationery</p>
    </footer>
  );

};

export default Footer;