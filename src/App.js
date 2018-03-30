import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link, Route } from "react-router-dom"
import './App.css'
import BookShelf from './Bookshelf';
import Search from './search'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.setState(prevState => {
        prevState.books.map(pBook => {
          if(pBook.id === book.id) {
            pBook.shelf = shelf
            return pBook;
          } else {
            return pBook;
          }
        })
      })
    });
  }

  onBookSearch = (SearchQuery) => {
    BooksAPI.search(SearchQuery).then(response => {
      if(response.error) {
        this.setState({
          searchResults: false
        })
      } else {
        this.setState({
          searchResults: response.map(book => {
            for (let i = 0; i < this.state.books.length; i++) {
              if(book.id === this.state.books[i].id) {
                book.shelf = this.state.books[i].shelf;
              }
            }
            return book;
          })
        })
      }
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((r) => {
      this.setState({
        books: r
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search 
          onSearch={this.onBookSearch} 
          results={this.state.searchResults}
          onBookUpdate={this.updateBooks}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <BookShelf 
                title="Currently Reading" 
                onBookUpdate={this.updateBooks}
                books={this.state.books.filter(book => {
                  return book.shelf === "currentlyReading";
                })}
              />
              <BookShelf 
                title="Want To Read" 
                onBookUpdate={this.updateBooks}
                books={this.state.books.filter(book => {
                  return book.shelf === "wantToRead";
                })}
              />
              <BookShelf 
                title="Read" 
                onBookUpdate={this.updateBooks}
                books={this.state.books.filter(book => {
                  return book.shelf === "read";
                })}
              />
            </div>
            <div className="open-search">
              <Link
                to="/search"
              >Add a Book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
