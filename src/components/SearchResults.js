import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Book from './Book';

class SearchResults extends PureComponent {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {this.props.books.map((book)=> (
          <li key={book.id}>
            <Book
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
