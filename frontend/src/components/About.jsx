import React from 'react';
import imageone from '../images/imageone.webp';

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={imageone} alt="Lady Kay's Stationery" />
      </div>
      <div className="about-content">
        <h2>About Lady Kay's Stationery</h2>
        <p>
          Welcome to Lady Kay's Stationery, a purveyor of fine writing instruments, beautiful papers, and delightful desk accessories. Founded with a passion for the art of handwritten communication and a love for the tactile joy of quality materials, Lady Kay's strives to inspire creativity and elevate the everyday.
        </p>
        <p>
          We believe that in a world of digital communication, taking the time to put pen to paper is a meaningful act. Whether you're crafting a heartfelt letter, sketching a new idea, or simply jotting down a to-do list, our carefully curated collection is designed to enhance your experience.
        </p>
        <p>
          At Lady Kay's, we are committed to sourcing the finest products from around the globe, from renowned pen makers to artisan paper mills. We are dedicated to providing exceptional customer service and helping you find the perfect tools to express yourself.
        </p>

        <h3>Our Mission</h3>
        <p>
          To rekindle the joy of handwritten communication and inspire creativity through exquisite stationery.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have questions or need assistance? Contact us at <a href="mailto:kendynkosi18063@gmail.com">kendynkosi18063@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default About;
