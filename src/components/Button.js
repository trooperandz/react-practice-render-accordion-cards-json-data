import React, { Component } from 'react';

// Build the card action buttons
const Button = (props) => {
  const { buttonType, cardData } = props;

  let buttonText = cardData.action.link_text || cardData.action.link_copy;
  let buttonClass;
  let iconClass;
  const rateClass = (cardData.rate ? '' : 'cta--norate');

  switch(buttonText) {
    case 'Buy Online Now':
      buttonText = 'Buy Now';
      buttonClass = 'cta__buy';
      iconClass = 'fa-bolt';
      break;
    case 'Get Quote':
      buttonText = 'Get Quote';
      buttonClass = 'cta__quote';
      iconClass = 'fa-arrow-down';
      break;
  }

  return (
    <div className="card-main__cta">
      <button className={`cta ${buttonClass} ${rateClass}`} >
        <i className={`fa ${iconClass} cta__icon}`} aria-hidden="true"></i> &nbsp;{buttonText}
      </button>
    </div>
  );
}

export default Button;