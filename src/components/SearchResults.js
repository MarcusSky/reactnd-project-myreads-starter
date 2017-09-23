import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import * as BooksAPI from '../BooksAPI';

import Book from './Book';

class SearchResults extends PureComponent {
  onShelfChange = (bookId, shelfName) => {
    BooksAPI.update({id: bookId}, shelfName);
  }

  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {this.props.books.map((book)=> (
          <li key={book.id}>
            <Book
              onShelfChange={this.onShelfChange}
              currentShelf={book.shelf}
              bookId={book.id}
              bookName={book.title}
              bookAuthors={book.authors || []}
              bookCoverUrl={book.imageLinks.thumbnail} />
          </li>
        ))}
        </ol>
    </div>);
  }
}

SearchResults.propTypes = {
}

export default SearchResults;
