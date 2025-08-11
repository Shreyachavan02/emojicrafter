import React from "react";
import "./EmojiButton.css";

function EmojiButton({ emoji, setEmoji }) {
    return (
        <button
            className="emoji-option"
            onClick={() => setEmoji(emoji)}
            tabIndex={0}
            aria-label={`Select emoji ${emoji}`}
            title={emoji}
            onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setEmoji(emoji);
            }}
            style={{ transition: "transform 0.15s" }}
            onMouseDown={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
            <span style={{ fontSize: "1.5rem" }}>{emoji}</span>
        </button>
    );
}

export default EmojiButton;