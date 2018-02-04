import React, { Component } from 'react';

import Loader from '../components/Loader';

// Build the main landing page, which features the main 'Load' button
const LoadView = (props) => {
  const {
    onLoadClick,
    isLoadButtonClicked,
  } = props;

  const activeClass = (isLoadButtonClicked ? 'active' : '');

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <div className="load-container">
            <h1 className="load-container__heading">Get insurance data now!</h1>
          </div>
            <button className="cta cta__load" onClick={onLoadClick}>
              Load it &nbsp; &rarr;
              <Loader isLoadButtonClicked={isLoadButtonClicked} />
            </button>
        </div>
      </div>
    </div>
  );
}

export default LoadView;