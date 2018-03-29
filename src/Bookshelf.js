import React from 'react';
import PropTypes from 'prop-types';
import Book from "./book"

class BookShelf extends React.Component {
    state = {
        book: [],
        selectValue: "none"
    }

    UpdateSelectState = (event, book) => {
        let eValue = event.currentTarget.value;
        this.setState({selectValue: eValue})
        this.props.onBookUpdate(book, eValue);
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(returnedBook =>
                            <Book key={returnedBook.id} onSelect={this.UpdateSelectState} book={returnedBook}/>
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