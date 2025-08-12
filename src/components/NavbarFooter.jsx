import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="mascot" style={{fontSize: '2rem', marginRight: '8px'}}>�‍🎨</span>
        Emojicrafter
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link" style={{marginLeft: '24px', fontWeight: 500, textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center'}}>
          <span role="img" aria-label="home" style={{marginRight: '6px'}}>🏠</span> Home
        </Link>
        <Link to="/cart" className="navbar-link" style={{marginLeft: '24px', fontWeight: 500, textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center'}}>
          <span role="img" aria-label="cart" style={{marginRight: '6px'}}>🛒</span> Cart
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span style={{fontSize: '0.98em', opacity: 0.85, marginBottom: 4}}>
          Emojicrafter lets you create, customize, and download your favorite emojis with style! Express yourself and share the fun. 🎨✨
        </span>
        <span style={{fontSize: '0.98em', opacity: 0.85, display: 'flex', alignItems: 'center', gap: '4px'}}>
          &copy; {new Date().getFullYear()} Emojicrafter <span className="footer-icon" role="img" aria-label="sparkle"></span>
        </span>
        <span className="footer-links">
          <a href="https://github.com/Shreyachavan02/emojicrafter" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon" role="img" aria-label="github">🐙</span> GitHub
          </a>
          <a href="mailto:shreyachavan02@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon" role="img" aria-label="email">✉️</span> Email
          </a>
        </span>
      </div>
    </footer>
  );
}
