import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class Bookshelf extends PureComponent {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {this.props.books.map((book) => (
              <li>
                <Book
                  bookName={book.title}
                  bookAuthors={book.authors}
                  bookCoverUrl={book.imageLinks.thumbnail} />
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array
}

export default Bookshelf;
