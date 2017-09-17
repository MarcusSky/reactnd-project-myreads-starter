import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BookCover extends PureComponent {
  render() {
    const width = this.props.width;
    const height = this.props.height;
    const bookCoverUrl = this.props.bookCoverUrl;

    const style = {
      width: width,
      height: height,
      backgroundImage: "url(" + bookCoverUrl + ")"
    }

    return (
      <div className="book-cover" style={style}>
      </div>);
  }
}

BookCover.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bookCoverUrl: PropTypes.string.isRequired,
}

export default BookCover;
