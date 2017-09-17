import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchButton extends PureComponent {
  render() {
    return(
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    );
  }
}

SearchButton.propTypes = {
}

export default SearchButton;
