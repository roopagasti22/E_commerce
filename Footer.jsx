import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// Import the CSS file
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="link-list">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/womens" className="link">Women's</Link></li>
            <li><Link to="/mens" className="link">Men's</Link></li>
            <li><Link to="/shop" className="link">Shop</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li><Link to="/login" className="link">Login</Link></li>
            <li><Link to="/Reg" className="link">Register</Link></li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="link-list">
            <li><p className="link">Email: support@yourcompany.com</p></li>
            <li><p className="link">Phone: (123) 456-7890</p></li>
            <li><p className="link">Address: 123 Your Street, City</p></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Company Name. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
