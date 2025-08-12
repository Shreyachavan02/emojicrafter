import React from 'react';  
import "./Home.css";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiButton from '../components/EmojiButton';
import ColorButton from '../components/ColorButton';
import { Navbar, Footer } from '../components/NavbarFooter';
import '../components/NavbarFooter.css';



function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [sliderValue, setSliderValue] = useState(80);
  const [bgColor, setBgColor] = useState("#ffffff");
  const emojiRef = useRef();
  const navigate = useNavigate();

  const handleSave = () => {
    const cart = JSON.parse(localStorage.getItem('emojicart') || '[]');
    cart.push({ emoji, size: `${sliderValue}px`, bgColor });
    localStorage.setItem('emojicart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-screen w-full bg-white relative text-gray-800">
        <div style={{ flex: 1 }}>
          <div className="app-container">
            <h1 className="header gradient-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span role="img" aria-label="sparkles">✨</span>
              <span>Welcome to <span className="header-highlight">Emojicrafter</span></span>
              <span role="img" aria-label="sparkles">✨</span>
            </h1>
            <p className="subtitle">
              Emojicrafter is a fun and interactive platform where you can create, customize, and share your own emojis. Whether you're looking to express your feelings, add some flair to your messages, or just have fun, Emojicrafter has got you covered!
            </p>
            <div className="emoji-card-glass">
              <div
                ref={emojiRef}
                className="emoji-container card"
                style={{
                  fontSize: `${sliderValue}px`,
                  backgroundColor: bgColor,
                  transition: 'background-color 0.3s, font-size 0.3s',
                  userSelect: 'all',
                }}
              >
                {emoji}
              </div>
              <button className="download-btn" onClick={handleSave}>
                Save Emoji
              </button>
            </div>
            <div className="controls-flex">
              <div className="emoji-picker">
                {[
                  "😊", "😇", "😀", "😌", "🤗", "🥳", "🥰", "😍", "😎", "🤔", "😂", "😭", "😜", "😡", "😱", "😴", "🤩", "😏", "😅", "😬",
                  "😃", "😆", "😋", "😝", "😚", "😘", "😗", "😙", "😛", "😕", "😟", "😢", "😤", "😠", "😳", "😵", "😷", "🤒", "🤕", "🤑"
                ].map(e => (
                  <EmojiButton key={e} emoji={e} setEmoji={setEmoji} />
                ))}
              </div>
              <div className="color-picker">
                {[
                  "#c91e1eff", "#f0f0f0", "#c11396", "#ffcc00", "#00ccff", "#ff6699", "#100404ff", "#00ff00", "#0000ff", "#800080",
                  "#fffbe7", "#ffe0f7", "#e0ffe7", "#e7e0ff", "#ffb347", "#b0e0e6", "#ffb6c1", "#e6e6fa", "#f5fffa", "#ffe4e1"
                ].map(c => (
                  <ColorButton key={c} bgColor={c} setBgColor={setBgColor} />
                ))}
              </div>
            </div>
            <div className="slider-container">
              <input
                type="range"
                min="40"
                max="120"
                className="slider"
                onChange={e => setSliderValue(e.target.value)}
                value={sliderValue}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;