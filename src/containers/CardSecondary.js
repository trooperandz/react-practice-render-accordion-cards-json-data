import React, { Component } from 'react';

import FeatureList from '../components/FeatureList';
import Description from '../components/Description';
import FeatureIcon from '../components/FeatureIcon';

// Build the bottom half of the card
const CardSecondary = (props) => {
  const { isCardOpen } = props;

  const openClass = (isCardOpen ? 'card-secondary--open' : '');
  console.log('CardSecondary props: ', props);
  return (
    <div className="row">
      <div className={`card-secondary ${openClass}`}>
        <div className="col-sm-6">
          <FeatureList />
        </div>
        <div className="col-sm-6">
          <Description />
        </div>
      </div>
    </div>
  );
}

export default CardSecondary;