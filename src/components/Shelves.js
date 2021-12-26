import React from 'react'
import Shelf from './Shelf';

const Shelves = (props) => {

    const currentlyReading = props.books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = props.books.filter((book) => book.shelf === "wantToRead");
    const Read = props.books.filter((book) => book.shelf === "read");

    return (
        <div className="list-books-content">
            <Shelf title="Currently Reading" books={currentlyReading}  modifyShelfBook={props.modifyShelfBook} />
            <Shelf title="Want To Read"   books={wantToRead}   modifyShelfBook={props.modifyShelfBook} />
            <Shelf title="Read"   books={Read}  modifyShelfBook={props.modifyShelfBook} />
        </div>
    )
}

export default Shelves;