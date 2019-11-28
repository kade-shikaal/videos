import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchText: "" };

  onInputChange = event => {
    this.setState({ searchText: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //call prop everytime the form is submitted
    this.props.onFormSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        {/* search-bar class is custom */}
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchText}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
