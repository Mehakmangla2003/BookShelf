import axios from "axios"
import { useState, useEffect } from "react"
import BookCard from "./BookCard"
import '../css/Book.css'
import PropTypes from 'prop-types';

const Books = ({role}) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        console.log("Books data:", res.data);
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  

  return (
    <div className="book-list">
       {books.map((book) => (
        <BookCard key={book.id || book.name} book={book} role = {role} />
      ))}
    </div>
  )
}

export default Books

Books.propTypes = {
  role: PropTypes.string.isRequired,
};
