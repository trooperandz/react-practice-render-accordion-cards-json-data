import React, { Component } from 'react';

// Build the bottom-left bulleted feature list for each card
const FeatureList = () => {
  return (
    <div className="card-secondary__wrapper">
      <div className="col-xs-12">
        <div className="card-secondary__header text-left">
          <i className="fa fa-bars card-secondary__header--icon" aria-hidden="true"></i>
          <h3 className="card-secondary__header--heading">Features</h3>
        </div>
      </div>
      <div className="col-xs-6">
        <ul className="card-secondary__feature-list">
          <li className="card-secondary__feature-list--item">Buy Online</li>
          <li className="card-secondary__feature-list--item">Local Agents</li>
          <li className="card-secondary__feature-list--item">Rideshare</li>
          <li className="card-secondary__feature-list--item">Immediate Coverage</li>
        </ul>
      </div>
      <div className="col-xs-6">
        <ul className="card-secondary__feature-list">
          <li className="card-secondary__feature-list--item">Important things</li>
          <li className="card-secondary__feature-list--item">Important things</li>
          <li className="card-secondary__feature-list--item">Important things</li>
          <li className="card-secondary__feature-list--item">Important things</li>
        </ul>
      </div>
    </div>
  );
}

export default FeatureList;