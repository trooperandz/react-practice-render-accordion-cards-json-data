import React, { Component } from 'react';

/**
 * Build the bottom-right description area of each card.
 * Container props:
 *   detailBody = main product description
 *   disclaimerText = brand disclaimer
 *   disclaimerVisible = show the disclaimer true/false rule
 */
const Description  = (props) => {
  const { cardData } = props;

  let { name, detail_body, action: { disclaimer_text, disclaimer_visible } = {} } = cardData;

  detail_body = detail_body || 'Description currently unavailable';
  disclaimer_text = disclaimer_visible ? disclaimer_text : null;

  return (
    <div className="card-secondary__wrapper">
      <div className="col-xs-12">
        <div className="card-secondary__header text-left">
          <i className="fa fa-book card-secondary__header-icon" aria-hidden="true"></i>
          <h3 className="card-secondary__header-heading">Why {name}?</h3>
        </div>
      </div>
      <div className="col-xs-12">
        <p className="card-secondary__description">{detail_body}</p>
        <p className="card-secondary__disclaimer">{disclaimer_text}</p>
      </div>
    </div>
  );
}

export default Description;