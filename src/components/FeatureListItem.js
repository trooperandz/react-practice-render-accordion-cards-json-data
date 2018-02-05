import React from 'react';

// Build a singe list item for each feature
const FeatureListItem = ({ feature }) => {
  return (
    <li className="card-secondary__featurelist-item card-secondary__featurelist-item--floated">
      {feature.name}
    </li>
  );
}

export default FeatureListItem;