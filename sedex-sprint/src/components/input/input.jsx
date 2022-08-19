import React from 'react';

const Input = ({ value, text, type, onChange }) => {
  return (
    <input
      defaultValue={value}
      type={type}
      placeholder={text}
      onChange={onChange}
    />
  );
};

export default Input;
