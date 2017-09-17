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
                  bookName="To Kill a Mockingbird"
                  bookAuthor="Harper Lee"
                  width={128}
                  height={193}
                  bookCoverUrl="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" />
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
