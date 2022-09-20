import React from "react";

const Button = ({ name, size, color, bgcolor, customFunc, borderRadius }) => {
  return (
    <button
      type="button"
      style={{
        color: color,
        backgroundColor: bgcolor,
        borderRadius: borderRadius,
      }}
      onClick={customFunc}
      className={`text-${size} p-3 hover:drop-shadow-xl outline-none`}
    >
      {name}
    </button>
  );
};

export default Button;
