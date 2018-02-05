import React, { Component } from 'react';

import Button from './Button';

// Build the top-right cost/pricing info portion of each card
const Pricing = (props) => {
  const { cardData } = props;

  const rate = (cardData.rate ? cardData.rate.toFixed(2) : null);

  const getPriceMarkup = () => {
    if (rate) {
      return (
        <div className="card-main__pricing">
          <div className="card-main__pricing--verified">Verified Price</div>
          <div className="card-main__pricing--cost">${rate}</div>
          <div className="card-main__pricing--timeline">/ mo</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="text-right">
      {getPriceMarkup()}
      <Button buttonType="quote" cardData={cardData} />
    </div>
  );
}

export default Pricing;