import React from 'react';
import PropTypes from 'prop-types';


 const Book = (props) => {
 const { book ,  modifyShelfBook} = props;


 
  
  return (
    <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : " "})`}}></div>
              <div className="book-shelf-changer">
               <select id={book.id}
											  shelf={book.shelf}
                        onChange = {(e) => modifyShelfBook(book , e.target.value)}
                        defaultValue={book.shelf ? book.shelf : "none"}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
               </select>
              </div>
              </div>
              <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}

Book.propTypes = {
  modifyShelfBook: PropTypes.func,
  book: PropTypes.object
}

export default Book;
