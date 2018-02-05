import React, { Component } from 'react';

import Branding from '../components/Branding';
import Pricing from '../components/Pricing';

// Build the top half of the card
const CardMain = (props) => {
  const { cardData } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <Branding cardData={cardData} />
      </div>
      <div className="col-sm-6">
        <Pricing cardData={cardData} />
      </div>
    </div>
  );
}

export default CardMain;