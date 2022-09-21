import React from "react";

const Button = ({ name, color, bgcolor, customFunc }) => {
  return (
    <div
      style={{ color: color, backgroundColor: bgcolor }}
      onClick={customFunc}
    >
      {name}
    </div>
  );
};

export default Button;
