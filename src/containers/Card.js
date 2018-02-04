import React, { Component } from 'react';

import CardMain from './CardMain';
import CardSecondary from './CardSecondary';
import SortChevron from '../components/SortChevron';

// Create each card container; we need state for the accordion action
export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardOpen: false,
    }

    this.onCardRevealChange = this.onCardRevealChange.bind(this);
  }

  onCardRevealChange(e) {
    console.log('card reveal icon clicked!');
    this.setState({
      isCardOpen: !this.state.isCardOpen,
    });
  }

  render() {
    return (
      <div className="card">
        <CardMain />
        <CardSecondary isCardOpen={this.state.isCardOpen} />
        <SortChevron onCardRevealChange={this.onCardRevealChange} isCardOpen={this.state.isCardOpen} />
      </div>
    );
  }
}
