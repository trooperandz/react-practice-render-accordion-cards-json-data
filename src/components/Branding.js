import React, { Component } from 'react';

import Star from './Star';
import FeatureIcon from './FeatureIcon';

// Build the little gray feature icons for display in the top left portion of each card
const Branding = (props) => {
  const { cardData } = props;

  return (
    <div>
      <img className="card-main__img" src="img/logo-carrier-sm-default.png" alt="Brand Image" />
      <div className="card-main__branding">
        <h2 className="card-main__branding--heading">{cardData.name}</h2>
        <div className="card-main__branding--rating">
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="card-main__branding--features">
          <FeatureIcon feature='IconFeaturesSR22'/>
          <FeatureIcon feature='IconFeaturesRoadside'/>
          <FeatureIcon feature='IconFeaturesRideshare'/>
          <FeatureIcon feature='IconFeaturesRentersBundle'/>
          <FeatureIcon feature='IconFeaturesRateLock'/>
        </div>
      </div>
    </div>
  );
}

export default Branding;