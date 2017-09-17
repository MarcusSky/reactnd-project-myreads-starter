import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BookCover extends PureComponent {
  render() {
    const bookCoverUrl = this.props.bookCoverUrl;

    const style = {
      width: "100%",
      height: "100%",
      backgroundSize: "100% 100%",
      backgroundImage: "url(" + bookCoverUrl + ")"
    }

    return (
      <div className="book-cover" style={style}>
      </div>);
  }
}

BookCover.propTypes = {
  bookCoverUrl: PropTypes.string.isRequired,
}

export default BookCover;
