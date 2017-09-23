import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI'

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

class SearchPage extends Component {
  state = {
    searchBooks: [],
    currentBooks: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BooksAPI.getAll().then((books) => { this.updateState(books) });
  }

  updateState(books) {
    this.setState({currentBooks: books})
  }

  onQueryChange = (query) => {
    BooksAPI.search(query).then((searchBooks) => {
      this.setState({searchBooks: this.filterBooks(searchBooks)})
    })
  }

  filterBooks(searchBooks) {
    const currentBooksIds = this.state.currentBooks.map((x) => (x.id));
    const difference = searchBooks.filter(x => !currentBooksIds.includes(x.id));

    return difference;
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar onQueryChange={this.onQueryChange} />
        <SearchResults searchBooks={this.state.searchBooks} />
    </div>);
  }
}

SearchPage.propTypes = {
}

export default SearchPage;
