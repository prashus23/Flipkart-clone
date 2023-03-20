import React from "react";
import "./customButton.css";


function CustomButton({ children, width, height, callback, style,icon,iconPosition }) {
  const styles = {...style , width: width, height: height};

  return (
    <button
      style={styles}
      
      onClick={callback}
      className="customButton"
    >
   <div className="btnIcons"> {iconPosition==='left' && icon}</div> {children} <div className="btnIcons">{ iconPosition==='right' && icon}</div>
    </button>
  );
}

export default CustomButton;
