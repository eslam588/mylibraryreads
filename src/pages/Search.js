import React ,{useState , useEffect }  from 'react';
import * as BooksAPI from "../BooksAPI";
import {Link} from "react-router-dom";

const Search = (props) => {
  
   const [enterValue , setEnterValue] = useState("");
   const [searchBooks , setSearchBooks] = useState([]);
   const {modifyShelfBook} = props;
    
   
   useEffect(() => {
    if (enterValue.length > 0) {
      BooksAPI.search(enterValue).then((books) => {   
             setSearchBooks(books); 
      });
    }
    else {
      return
    }
   }, [enterValue])

    const newSearch = (e) => {
    setEnterValue(e.target.value)
   } 


  return (

          <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                     <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                  
                  <input type="text" placeholder="Search by title or author" value={enterValue} onChange={(e) => newSearch(e)} />
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">    
                 { searchBooks.length ? (              
                   searchBooks.map((book) => (
                    <li key={book.id}>
                       <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193,  backgroundImage:`url(${book.imageLinks? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : ""})`}}></div>
                                    <div className="book-shelf-changer">
                                    <select  
                                         book = {book}
                                         onChange = {(e) => modifyShelfBook(book , e.target.value)}
                                         defaultValue="none">
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                          </div>
                    </li> 
          ))): (<h3>No Resaults</h3>) 
        }    
                </ol>
              </div>
           </div>
  )
}

export default Search;