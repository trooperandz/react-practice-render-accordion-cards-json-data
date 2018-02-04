import React, { Component } from 'react';

import Button from './Button';

// Build the top-right cost/pricing info portion of each card
const Pricing = () => {
  return (
    <div className="text-right">
      <div className="card-main__pricing">
        <div className="card-main__pricing--verified">Verified Price</div>
        <div className="card-main__pricing--cost">$145.50</div>
        <div className="card-main__pricing--timeline">/ mo</div>
      </div>
      <Button buttonType="quote" />
    </div>
  );
}

export default Pricing;