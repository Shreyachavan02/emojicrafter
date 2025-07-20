import React from 'react';
import "./Home.css";
import { useState } from 'react';
import EmojiButton from '../components/EmojiButton';
import ColorButton from '../components/ColorButton';    


function Home() {

const [emoji,setEmoji] = useState("😊");
const [sliderValue, setSliderValue] = useState(80);
const [bgColor, setBgColor] = useState("#ffffff");


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
        <h1 className="header">Welcome to <span className="header-highlight">Emojicrafter!!!</span></h1>
     <p>

            Emojicrafter is a fun and interactive platform where you can create, customize, and share your own emojis. Whether you're looking to express your feelings, add some flair to your messages, or just have fun, Emojicrafter has got you covered!
     </p>

<div className="emoji-container card" style={{
  fontSize: `${sliderValue}px`,
  backgroundColor: bgColor,
  transition: 'background-color 0.3s, font-size 0.3s',
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  borderRadius: '16px',
  width: '120px',
  height: '120px',
  margin: '0 auto 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'all',
}}>
  {emoji}
</div>


<div className="slider-container">
        <input type="range" min="0" max="100"
          className="slider"
          onChange={(e) => {
             setSliderValue(e.target.value);}}
          value={sliderValue}
        />
      </div>

<div className="emoji-picker">
  <EmojiButton emoji= {"😊" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"😇" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"😀" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"😌" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"🤗" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"🥳" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"🥰" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"😍" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"😎" } setEmoji={setEmoji} />
  <EmojiButton emoji= {"🤔" } setEmoji={setEmoji} />
</div><br></br>

<div className="color-picker">
  <ColorButton bgColor={"#c91e1eff"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#f0f0f0"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#c11396"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#ffcc00"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#00ccff"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#ff6699"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#100404ff"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#00ff00"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#0000ff"} setBgColor={setBgColor} />
  <ColorButton bgColor={"#800080"} setBgColor={setBgColor} />
</div>
</div>
</div>
  );
}

export default Home;
