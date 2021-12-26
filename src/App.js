import React, { useState ,useEffect } from 'react'
import * as BooksAPI from "./BooksAPI";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import './App.css'

const BooksApp = () => {

  const [books , setBooks] = useState([]);

	useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
		});
  }, [])
  // update shelf for every book
  const modifyShelfBook = (book, uptdateShelf) => {
    // let whereTo = uptdateShelf;
    let isfind = false;
    const updatedBooks = books.map((boo) => {
      if (book.id === boo.id) {
        boo.shelf = uptdateShelf;
        isfind = true;
      }
      return boo;
    });
    // push the updatedshelf in array of books
    if (!isfind) {
      updatedBooks.push({ ...book, shelf: uptdateShelf });
    }
    setBooks(updatedBooks);
    //update the book with newshelf in api
    BooksAPI.update(book, uptdateShelf).then(() => {
    modifyShelfBook(book, uptdateShelf);
    });
  };

  
    return (
      <div className="app">
         <Routes>
            <Route path="/" exact element={<Home modifyShelfBook={modifyShelfBook} books={books}/>} />
            <Route path="/search" exact element={<Search originBooks={books} modifyShelfBook={modifyShelfBook} />} />
        </Routes>    
      </div>
    )
  }


export default BooksApp

