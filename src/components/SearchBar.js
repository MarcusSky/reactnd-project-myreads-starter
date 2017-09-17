import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: ''
  }

  onQueryChange() {
    this.props.onQueryChange(this.state.query);
  }

  render() {
    return(
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input className='search-contacts'
              type='text' 
              onChange={(e) => {
                const that = this;
                this.setState({ query: e.target.value });

                setTimeout(function() {
                  that.onQueryChange()
                }, 250)
              }}
              value={this.state.query}
              placeholder='Search by title' />
          </div>
        </div>
    );
  }
}

SearchBar.propTypes = {
}

export default SearchBar;
