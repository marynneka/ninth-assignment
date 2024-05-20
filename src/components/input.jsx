import React from "react";

const Input = ({ type, placeholder, value, handleChange, label }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={label}
      onChange={handleChange}
    />
    
  );
};

export default Input
