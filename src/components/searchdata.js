import React, { useState } from 'react'
import axios from 'axios'

const SearchData = () => {
  const [searchTitle, setSearchTitle] = useState('')
  const [books, setBooks] = useState([])

  const handleSearch = () => {
    axios.get(`/books/search/${searchTitle}`)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="text" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {books.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Published Date: {book.published_date}</p>
          <p>Pages: {book.pages}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchData