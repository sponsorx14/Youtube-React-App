import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: ''
    };
  }
  onSearchTerm(searchTerm){
    this.setState({searchTerm});
    this.props.searchTerm(searchTerm);
  }
  render() {
    return (
      <form className="search-bar" action="">
        <input
          value={this.state.searchTerm}
          onChange={e => this.onSearchTerm(e.target.value)} type="text"
          placeholder='Search'
        />
      </form>
    )
  }
}

export default SearchBar;
