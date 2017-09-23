import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from '../BooksAPI'

class ShelfChanger extends PureComponent {
  render() {
    return (
      <div className="book-shelf-changer">
      <select
        defaultValue={this.props.currentShelf || "none"}
        onChange={(e) => ( this.props.onShelfChange(this.props.bookId, e.target.value) )}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
    </div>);
  }
}

ShelfChanger.propTypes = {
  bookId: PropTypes.string.isRequired,
  currentShelf: PropTypes.string.isRequired
}

export default ShelfChanger;
