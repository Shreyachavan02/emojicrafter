import "./ColorButton.css";
function ColorButton({ bgColor, setBgColor  }) {
    return (
        <div
            className="color-button"
            onClick={() => {
                setBgColor(bgColor);

            }}
            style={{ backgroundColor: bgColor }}
        >
            
        </div>
    );
}
export default ColorButton;