import React from 'react';

// Build the loading spinner structure
const Loader = (props) => {
  const { isLoadButtonClicked } = props;

  const activeClass = (isLoadButtonClicked ? 'loader--active' : '');

  return (
    <div className={`loader ${activeClass}`}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;