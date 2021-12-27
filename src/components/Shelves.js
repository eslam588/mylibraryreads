import React from 'react'
import Shelf from './Shelf';

const Shelves = (props) => {
    const {modifyShelfBook} = props;
    const SHELVES = [
        {
          title: 'Currently Reading',
          id: 'currentlyReading'
        },
        {
          title: 'Want To Read',
          id: 'wantToRead'
        },
        {
          title: 'Read',
          id: 'read'
        }
        ];
   
    return (
        <div className="list-books-content">
         { SHELVES.map((SHELF)=> {
          const shelfbooks = props.books.filter((book) => book.shelf === SHELF.id)
             return <Shelf key={SHELF.id} title= {SHELF.title} books={shelfbooks}  modifyShelfBook={modifyShelfBook}/>
          })
         }
        </div>
    )
}

export default Shelves;
