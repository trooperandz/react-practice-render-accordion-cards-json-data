import React from 'react';

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
