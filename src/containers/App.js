import React, { Component } from 'react';

import LoadView from './LoadView';
import Header from './Header';
import Card from './Card';
import cardJSON from '../store/carrier_cards.json';

// The MOTHER-SHIP component, all roads/components lead to here
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadButtonClicked: false,
      cardItems: null,
    }

    this.onSortChange = this.onSortChange.bind(this);
    this.onLoadClick = this. onLoadClick.bind(this);
  }

  // Simulate an asynchronous data load when the lading page load button is clicked
  onLoadClick() {
    this.setState({
      isLoadButtonClicked: true // Trigger the loading spinner
    });

    setTimeout(() => {
      this.setState({
        cardItems: cardJSON,
      });
    }, 3000);
  }

  onSortChange(e) {
    const option = e.target.value;
  }

  // Return an array of <Card /> instances
  renderCards() {
    // This is just some destructuring fun; first, extract the main cardItems property from state.
    // Then pull out the nested carrier_cards property, and rename it to a shorter 'cards'.
    // Then set cards equal to default value of {} if undefined to ensure no 'undefined' destructuring error!
    const { cardItems: {carrier_cards: cards} = {} } = this.state;

    if (cards && cards.length) {
      return cards.map((card) => {
        return <Card cardData={card} />
      });
    }

    return null;
  }

  // Show the main landing page with load button by default; after cards are loaded, show cards
  render() {
    const { isLoadButtonClicked, cardItems } = this.state;

    if (cardItems) {
      return (
        <div className="container">
          <Header onSortChange={this.onSortChange} />
          {this.renderCards()}
        </div>
      );
    }

    return (
      <LoadView
        onLoadClick={this.onLoadClick}
        isLoadButtonClicked={isLoadButtonClicked}
      />
    );
  }
}
