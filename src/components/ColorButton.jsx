import React from "react";
import "./ColorButton.css";

function ColorButton({ bgColor, setBgColor }) {
    return (
        <button
            className="color-button"
            style={{ backgroundColor: bgColor, transition: "transform 0.15s, box-shadow 0.2s" }}
            onClick={() => setBgColor(bgColor)}
            tabIndex={0}
            aria-label={`Select color ${bgColor}`}
            title={bgColor}
            onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setBgColor(bgColor);
            }}
            onMouseDown={e => e.currentTarget.style.transform = "scale(1.2)"}
            onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        />
    );
}

export default ColorButton;