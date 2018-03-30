import React from 'react'
import Book from './book';
import { Link } from 'react-router-dom'


class Search extends React.Component {

    searchForBooks = SearchEvent => {
        if(SearchEvent.currentTarget.value) {
            this.props.onSearch(SearchEvent.currentTarget.value)
        } else {
            this.props.onSearch(" ");
        }
    }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={event => this.searchForBooks(event)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.props.results ? this.props.results.map(book => <Book
                    key={book.id}
                    book={book}
                    onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)}/>): <p>No Books Found</p>}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search