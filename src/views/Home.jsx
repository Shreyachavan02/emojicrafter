import React from 'react';
import "./Home.css";
import { useState } from 'react';

function Home() {

const [emoji,setEmoji] = useState("😊");


  return (
    <div className="container min-h-screen w-full bg-white relative text-gray-800">
      {/* Circuit Board - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
            radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
            radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
        }}
      />

      <div className="app-container">
        <h1 className="header">Welcome to <span class="header-highlight">Emojicrafter!!!</span></h1>
     <p>

            Emojicrafter is a fun and interactive platform where you can create, customize, and share your own emojis. Whether you're looking to express your feelings, add some flair to your messages, or just have fun, Emojicrafter has got you covered!
     </p>
<div className="emoji-container">{emoji}</div>

<div className="emoji-picker">
<div className="emoji-option">😊</div>
<div className="emoji-option">😇</div>
<div className="emoji-option">😃</div>
<div className="emoji-option">😌</div>
<div className="emoji-option">🤗</div>
<div className="emoji-option">🥳</div>
<div className="emoji-option">🥰</div>
<div className="emoji-option">🤩</div>
<div className="emoji-option">😍</div>




</div>


 </div>
    </div>
  );
}

export default Home;
