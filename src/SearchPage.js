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
    const currentBooks = this.state.currentBooks.map((x) => ({id: x.id, shelf: x.shelf}));
    const updatedSearchBooks = searchBooks.map((searchBook) => {
      const currentBook = currentBooks.find((y) => (y.id === searchBook.id))

      if (currentBook) { searchBook.shelf = currentBook.shelf }

      return searchBook;
    });

    return updatedSearchBooks;
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar onQueryChange={this.onQueryChange} />
        <SearchResults searchBooks={this.state.searchBooks} />
    </div>);
  }
}

export default SearchPage;
