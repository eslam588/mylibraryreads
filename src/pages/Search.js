import React ,{useState , useEffect }  from 'react';
import * as BooksAPI from "../BooksAPI";
import {Link} from "react-router-dom";
const Search = (props) => {
  
   const [enterValue , setEnterValue] = useState("");
   const [searchBooks , setSearchBooks] = useState([]);
   const {modifyShelfBook , originBooks} = props;
    
   const getSearchBooksWithShelves=(books) => {
     BooksAPI.getAll().then((allBooksOnShelves)=> {
      //this will include book's id and shelf like this => {bookId : shelf}  
      let booksOnShelves = {};
      allBooksOnShelves.forEach((book) =>{
        booksOnShelves[book.id] = book.shelf;
      });

      const SearchBooksWithShelves = books.map((book) => {
        const shelf = booksOnShelves[book.id];
        if (shelf) {
          // then it is on one of the shelves
          return {...book , shelf:shelf}
        }
        else {
          //then it has a shelf 'none'
          return {...book , shelf: 'none'}
        }
      })
       setSearchBooks(SearchBooksWithShelves);
    });
  
   }
   

   useEffect(() => {
    if (enterValue.length > 0) {
      BooksAPI.search(enterValue).then((books) => {   
        getSearchBooksWithShelves(books) 
      });
    }
    else {
      setSearchBooks([]);
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
                              <div className="book-cover" style={{ width: 128, height: 193,  backgroundImage:`url(${book.imageLinks? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : " "})`}}></div>
                                    <div className="book-shelf-changer">
                                    <select  
                                         
                                         book = {book}
                                         id = {book.id}
                                         defaultValue={book.shelf || 'none'}
                                         onChange = {(e) => modifyShelfBook(book , e.target.value)}
                                          >
                                         
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


         