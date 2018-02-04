import React from 'react';

// Build the sort icon, which waits patiently at the bottom of each card
const SortChevron = (props) => {
  const {
    onCardRevealChange,
    isCardOpen,
  } = props;

  const openClass = (isCardOpen ? '' : 'sort-chevron--closed');

  return (
    <div className={`sort-chevron ${openClass}`} onClick={onCardRevealChange}></div>
  );
};

export default SortChevron;
