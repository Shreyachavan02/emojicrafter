import React from "react";
import "./NavbarFooter.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="mascot" style={{fontSize: '2rem', marginRight: '8px'}}>�‍🎨</span>
        Emojicrafter
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
