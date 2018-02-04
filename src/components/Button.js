import React, { Component } from 'react';

// Build the card action buttons
const Button = (props) => {
  const { buttonType } = props;

  let buttonText;
  let buttonClass;
  let iconClass;

  switch(buttonType) {
    case 'buy':
      buttonText = 'Buy Now';
      buttonClass = 'cta__buy';
      iconClass = 'fa-bolt';
      break;
    case 'quote':
      buttonText = 'Get Quote';
      buttonClass = 'cta__quote';
      iconClass = 'fa-arrow-down';
      break;
  }

  return (
    <div className="card-main__cta">
      <button className={`cta ${buttonClass}`}>
        <i className={`fa ${iconClass} cta__icon}`} aria-hidden="true"></i> &nbsp;{buttonText}
      </button>
    </div>
  );
}

export default Button;