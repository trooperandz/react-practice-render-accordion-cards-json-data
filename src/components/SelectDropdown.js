import React, { Component } from 'react';

// Build the
class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="select-dropdown">
        <label className="select-dropdown__label" htmlFor="select-dropdown">Sort By:</label>
        <select value={this.state.value} onChange={this.handleChange} className="select-dropdown__select" id="select-dropdown">
          <option className="select-dropdown__option" value="">Select...</option>
          <option className="select-dropdown__option" value="test1">Test 1</option>
          <option className="select-dropdown__option" value="test2">Test 2</option>
        </select>
      </div>
    );
  }
}

export default SelectDropdown;