import React, { Component } from 'react';

const Description  = () => {
  return (
    <div className="card-secondary__wrapper">
      <div className="col-xs-12">
        <div className="card-secondary__header text-left">
          <i className="fa fa-book card-secondary__header--icon" aria-hidden="true"></i>
          <h3 className="card-secondary__header--heading">Why Choose Us?</h3>
        </div>
      </div>
      <div className="col-xs-12">
        <p className="card-secondary__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <p className="card-secondary__disclaimer">Price shown is a soft quote based on the Liberty Mutual insurance product in you state.</p>
      </div>
    </div>
  );
}

export default Description;