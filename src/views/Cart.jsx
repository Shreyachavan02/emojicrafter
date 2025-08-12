
import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components/NavbarFooter';
import './Home.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('emojicart') || '[]');
    setCart(stored);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container min-h-screen w-full bg-white relative text-gray-800" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #f8fafc 0%, #ffe0f7 100%)",
            }}
          />
          <div className="app-container">
            <h1 className="header gradient-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span role="img" aria-label="cart">🛒</span>
              <span>Saved <span className="header-highlight">Emojis</span></span>
              <span role="img" aria-label="cart">🛒</span>
            </h1>
            <p className="subtitle">
              Here are the emojis you've saved to your cart. Enjoy your custom creations!
            </p>
            <div className="emoji-card-glass" style={{maxWidth: 'unset', width: 'fit-content', margin: '0 auto 32px auto', background: 'rgba(255,255,255,0.45)'}}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
                {cart.length === 0 && <p>No emojis saved yet.</p>}
                {cart.map((item, idx) => (
                  <div key={idx} className="emoji-container card" style={{
                    fontSize: item.size,
                    background: item.bgColor,
                    width: 80,
                    height: 80,
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    margin: 4
                  }}>
                    {item.emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
