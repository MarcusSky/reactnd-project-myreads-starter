import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelfChanger';
import BookCover from './BookCover';

class Book extends PureComponent {
  onShelfChange = (bookId, shelfName) => {
    this.props.onShelfChange(bookId, shelfName)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover bookCoverUrl={this.props.bookCoverUrl} />
          <ShelfChanger bookId={this.props.bookId}
            currentShelf={this.props.currentShelf}
            onShelfChange={this.onShelfChange}
          />
        </div>
        <div className="book-title">{this.props.bookName}</div>
        <div className="book-authors">
        {this.props.bookAuthors.map((author) => (
          <span key={author}>{author}</span>
        ))}
        </div>
    </div>);
  }
}

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookCoverUrl: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  bookAuthors: PropTypes.array.isRequired,
}

export default Book;
