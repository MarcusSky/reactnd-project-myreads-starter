import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchButton extends PureComponent {
  render() {
    return(
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    );
  }
}

SearchButton.propTypes = {
}

export default SearchButton;
