import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelfChanger';
import BookCover from './BookCover';

class Book extends PureComponent {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover bookCoverUrl={this.props.bookCoverUrl} />
          <ShelfChanger />
        </div>
        <div className="book-title">{this.props.bookName}</div>
        <div className="book-authors">
        {this.props.bookAuthors.map((author) => (
          <span>{author}</span>
        ))}
        </div>
    </div>);
  }
}

Book.propTypes = {
  bookCoverUrl: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  bookAuthors: PropTypes.array.isRequired,
}

export default Book;
