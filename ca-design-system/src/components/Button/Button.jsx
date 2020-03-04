import React, { Component } from 'react';
import '../fonts.css';
import '../Button/Button.css';

//set button styles
const styles = [
  'btn-primary',
  'btn-secondary',
  'btn-success',
  'btn-warning',
  'btn-danger'
];

//set button sizes
const sizes = [
  'btn-md',
  'btn-sm',
  'btn-lg'
];

//button props
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled
}) => {

  //sets default to first item in the styles array
  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
  //sets default to first item in the sizes array
  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return (
      <button
        onClick={onClick}
        type={type}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        disabled={disabled}>
        {children}
      </button>
    )
}
