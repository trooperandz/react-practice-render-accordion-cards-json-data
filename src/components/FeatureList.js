import React, { Component } from 'react';

import FeatureListItem from './FeatureListItem';

// Build the bottom-left bulleted feature list for each card
const FeatureList = (props) => {
  const { cardData: { features, features_html } } = props;

  let featureItems;

  if (features) {
    featureItems = (
      <ul className="card-secondary__featurelist">
        {features.map(feature => <FeatureListItem feature={feature} />)}
      </ul>
    );
  } else if (features_html) {
    featureItems = (
      <div dangerouslySetInnerHTML={{ __html: features_html }} />
    );
  }

  return (
    <div className="card-secondary__wrapper">
      <div className="col-xs-12">
        <div className="card-secondary__header text-left">
          <i className="fa fa-bars card-secondary__header-icon" aria-hidden="true"></i>
          <h3 className="card-secondary__header-heading">Features</h3>
        </div>
      </div>
      <div className="col-xs-12">
        {featureItems}
      </div>
    </div>
  );
}

export default FeatureList;