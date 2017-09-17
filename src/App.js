import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';

import Bookshelf from './components/Bookshelf';
import SearchButton from './components/SearchButton';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            books={[1,2,3,4]}
            title="Currently Reading" />

          <Bookshelf
            books={[1,2,3,4]}
            title="Want to Read" />

          <Bookshelf
            books={[1,2,3,4]}
            title="Read" />
        </div>

        <SearchButton />
      </div>);
  }
}

export default BooksApp
