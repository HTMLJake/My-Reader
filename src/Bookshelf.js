import React from 'react';
import PropTypes from 'prop-types';
import Book from "./book"

class BookShelf extends React.Component {
    state = {
        book: []
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(returnedBook =>
                            <Book key={returnedBook.id}
                            onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)}
                            book={returnedBook}/>
                        )}
                        
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
}

export default BookShelf;