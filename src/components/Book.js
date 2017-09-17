import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelfChanger';
import BookCover from './BookCover';

class Book extends PureComponent {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover
            width={this.props.width}
            height={this.props.height}
            bookCoverUrl={this.props.bookCoverUrl}
          />
          <ShelfChanger />
        </div>
        <div className="book-title">{this.props.bookName}</div>
        <div className="book-authors">{this.props.bookAuthor}</div>
    </div>);
  }
}

Book.propTypes = {
  bookCoverUrl: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Book;
