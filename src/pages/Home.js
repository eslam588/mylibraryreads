import React from "react";
import  Shelves from "../components/Shelves";
import Buttonadd from "../components/Buttonadd";
import Footer from "../components/Footer";

const Home = (props) => {
		return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
            <div className="back-image"></div>
          </div>
          <Shelves books={props.books}  modifyShelfBook={props.modifyShelfBook} />
          <Buttonadd />
          <Footer />

      </div>
		);
}

export default Home



// update shelf for every book
// const modifyShelfBook = (book, e) => {
//   let whereTo = e.target.value;
//   let isfind = false;
//   const updatedBooks = books.map((boo) => {
//     if (book.id === boo.id) {
//       boo.shelf = whereTo;
//       isfind = true;
//     }
//     return boo;
//   });
//   // push the updatedshelf in array of books
//   if (!isfind) {
//     const updatedShelfBook = { ...book, shelf: whereTo }
//     updatedBooks.push(updatedShelfBook);
//   }
//   setBooks(updatedBooks);
//   //update the book with newshelf in api
//   BooksAPI.update(book, whereTo).then(() => {
//   modifyShelfBook(book, whereTo);
//   });
// };