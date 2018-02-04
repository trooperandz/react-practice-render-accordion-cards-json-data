import React, { Component } from 'react';

import SelectDropdown from '../components/SelectDropdown';

// Build the top, main heading of the page; the sort dropdown lives here
const Header = () => {
  return (
    <div className="row">
      <div className="header">
        <div className="col-sm-6">
          <div className="header__heading-wrapper">
            <h3 className="header__heading">You just compared <strong>145 rates</strong> in .5 minutes!</h3>
          </div>
        </div>
        <div className="col-sm-6 text-right">
          <div className="header__dropdown-wrapper">
            <SelectDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;