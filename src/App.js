import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';

import Bookshelf from './components/Bookshelf';
import SearchButton from './components/SearchButton';

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    BooksAPI.getAll().then((books) => { this.updateState(books) });
  }

  updateState(books) {
    const {currentlyReading, wantToRead, read} = this.filterBooks(books);

    this.setState({books: { currentlyReading, wantToRead, read }})
  }

  filterBooks(books) {
    const currentlyReading = books.filter((book) => book.shelf == "currentlyReading")
    const wantToRead = books.filter((book) => book.shelf == "wantToRead")
    const read = books.filter((book) => book.shelf == "read")

    return {currentlyReading, wantToRead, read};
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            books={this.state.books.currentlyReading}
            title="Currently Reading" />

          <Bookshelf
            books={this.state.books.wantToRead}
            title="Want to Read" />

          <Bookshelf
            books={this.state.books.read}
            title="Read" />
        </div>

        <SearchButton />
      </div>);
  }
}

export default BooksApp
