// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>How Do</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/work">Work with Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/add-listing">Add a Listing</a></li>
            <li><a href="/claim-listing">Claim Listing</a></li>
            <li><a href="/post-query">Post a Query</a></li>
            <li><a href="/add-blog">Add a Blog Post</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/blog">Blog Posts</a></li>
            <li><a href="/store">Shop / Store</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/invite">Invite Friends</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Other</h3>
          <ul>
            <li><a href="/f4g">f4®G+oA</a></li>
            <li><a href="/email">Email ID</a></li>
            <li><a href="/invite">Invite</a></li>
            <li><a href="/queries">Other Queries</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Purple Cues Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
