import React from 'react';

// The star rating svg markup, used in the top left of each card
const Star = (props) => {
  return (
    <div className="card-main__branding--rating-star">
      <svg width="27" height="auto" viewBox="0 0 15.6 14.99">
        <path d="M7.8,0,9.95,5.31l5.66.42-4.33,3.7L12.62,15,7.8,12,3,15,4.33,9.42,0,5.73l5.66-.42Z" fill="#fec43e" />
      </svg>
    </div>
  );
}

export default Star;