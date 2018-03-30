import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <li key={this.props.book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:
                            this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail })` : undefined }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf ? this.props.book.shelf : "none"} onChange={event => this.props.onBookUpdate(this.props.book, event.currentTarget.value)}>
                                <option value="moveTo" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors ? this.props.book.authors.map(a => <p key={a}>{a}</p>) : ""}</div>
                </div>
            </li>
        )
    }
}

export default Book;