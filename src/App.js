import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Bookshelf from './components/Bookshelf';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchBar';

class BooksApp extends React.Component {
  state = { showSearchPage: false }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBar />
        ) : (
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
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
