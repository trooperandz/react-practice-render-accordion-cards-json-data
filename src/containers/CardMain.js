import React, { Component } from 'react';

import Branding from '../components/Branding';
import Pricing from '../components/Pricing';

const CardMain = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Branding />
      </div>
      <div className="col-sm-6">
        <Pricing />
      </div>
    </div>
  );
}

export default CardMain;