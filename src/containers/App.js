import React, { Component } from 'react';

import Header from './Header';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSortChange = this.onSortChange.bind(this);
  }

  onSortChange(e) {
    const option = e.target.value;
  }

  renderCards() {
    const cards = [1, 2, 3, 4, 5];
    const cardItems = cards.map(card => <Card />);

    return cardItems;
  }

  render() {
    const cardItems = this.renderCards();

    return (
      <div className="container">
        <Header onSortChange={this.onSortChange} />
        {cardItems}
      </div>
    );
  }
}

export default App;