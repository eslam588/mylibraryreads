import React from 'react'

 const Book = (props) => {
 const { book , books , modifyShelfBook} = props;


//   const handleChange = (e) => {
//     const bookId = book.id;
//     if (e.target.value !== book.shelf) {
//       modifyShelfBook(bookId, e);
//     }
//  };

//   let isBookFound = false;
//   let SearchBookShelf;
//   if (Book) {
//     const SearchBook = books.filter((b) => b.id === book.id);
//     if (SearchBook.length) {
//       isBookFound = true;
//       SearchBookShelf = SearchBook[0].shelf;
//     }
//   }
  
  return (
    <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193,                                                                            backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
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

export default Book;
