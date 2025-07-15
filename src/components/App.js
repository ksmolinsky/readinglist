import { useState } from 'react'
import AddBook from './AddbookForm'
import ReadingList from './ReadingList'
import Header from './header'
import AddBookButton from './Addbookbutton'
import StatButtons from './statButtons'
import Changeyearbutton from './Changeyearbutton'
import { currentBookList } from '../shared/BookList'
import  { bookList2024 } from '../shared/2024BList'


export default function App() {
  
const [books, setBooks] = useState(currentBookList);
const [showAddBook, setShowAddBook] = useState(false)

function handleShowAddBook() {
    setShowAddBook(show => !show);
}

function handleAddBook(book) {
  setBooks((books) => [...books, book]);
  setShowAddBook(false)
}

function handleDeleteBook(id) {
  setBooks((books) => books.filter((book)=> book.id !== id))
}

function handleReadBook(id) {
  setBooks((books)=> books.map((book) => book.id === id ? {...book, read: !book.read} : book))
}

function handleStartedBook(id) {
  setBooks((books)=> books.map((book) => book.id === id ? {...book, started: !book.started} : book))

}

function lastYearsList() {
  setBooks(bookList2024)
}

function currentYearsList() {
  setBooks(currentBookList)
}

  return <div className='app'>

  <Header />
  {showAddBook && <AddBook onAddBook={handleAddBook} />}
  <AddBookButton handleShowAddBook={handleShowAddBook} showAddBook={showAddBook} books={books}/>
  <Changeyearbutton currentYearsList={currentYearsList} lastYearsList={lastYearsList} books={books}/>
  <ReadingList books={books} onDeleteBook={handleDeleteBook} onReadBook={handleReadBook} onStartedBook={handleStartedBook}/>
  <StatButtons books={books}/>
  
  
  
  </div>
}
