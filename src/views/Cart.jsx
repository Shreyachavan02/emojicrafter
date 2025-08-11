
import React, { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('emojicart') || '[]');
    setCart(stored);
  }, []);

  return (
    <div className="cart-page" style={{ padding: 32 }}>
      <h2>Saved Emojis</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {cart.length === 0 && <p>No emojis saved yet.</p>}
        {cart.map((item, idx) => (
          <div key={idx} style={{
            fontSize: item.size,
            background: item.bgColor,
            width: 80,
            height: 80,
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            {item.emoji}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
