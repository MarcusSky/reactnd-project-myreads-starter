import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI'

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

class SearchPage extends Component {
  state = {
    books: []
  }

  onQueryChange = (query) => {
    BooksAPI.search(query).then((books) => { 
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar onQueryChange={this.onQueryChange} />
        <SearchResults books={this.state.books} />
    </div>);
  }
}

SearchPage.propTypes = {
}

export default SearchPage;
