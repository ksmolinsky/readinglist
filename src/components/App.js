import { useState } from 'react'
import AddBook from './AddbookForm'
import ReadingList from './ReadingList'
import Header from './header'
import AddBookButton from './Addbookbutton'
import Stats from './Stats'
import GenreBreakdown from './GenreBreakdown'


const initialBooks = [
  {
    id: 1,
    title: "Dune Messiah",
    author: "Frank Herbert",
    genre: "Science Fiction",
    image: "https://m.media-amazon.com/images/I/817Xh+bqwOL._SL1500_.jpg",
    started: true,
    read: true,
  },
  {
    id: 2,
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    image: "https://m.media-amazon.com/images/I/81BEAzy3raL._SL1500_.jpg",
    genre: "Fantasy",
    started: true,
    read: true,
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image: "https://m.media-amazon.com/images/I/71w6CaOT+cL._SL1500_.jpg",
    genre: "Literary",
    started: true,
    read: true,
  },
  {
    id: 4,
    title: "Lord of Chaos",
    author: "Robert Jordan",
    image: "https://m.media-amazon.com/images/I/81GLEgxYU8L._SL1500_.jpg",
    genre: "Fantasy",
    started: true,
    read: false
  },
  {
    id: 5,
    title: "Rabbit Run",
    author: "John Updike",
    image: "https://m.media-amazon.com/images/I/61tLhwxcsKL._SL1200_.jpg",
    genre: "Literary",
    started: false,
    read: false
  },
  {
    id: 6,
    title: "Enders Game",
    author: "Orson Scott Card",
    image: "https://m.media-amazon.com/images/I/81+IUsYtGTL._SL1500_.jpg",
    genre: "Science Fiction",
    started: false,
    read: false
  },
  {
    id: 7,
    title: "Midnight's Children",
    author: "Salman Rushdie",
    image: "https://m.media-amazon.com/images/I/91guqbWJEQL._SL1500_.jpg",
    genre: "Literary",
    started: false,
    read: false
  },
  {
    id: 8,
    title: "The Wizard of Earthsea",
    author: "Ursula K Le Guin",
    image: "https://m.media-amazon.com/images/I/81VxGPk9YFL._SL1500_.jpg",
    genre: "Fantasy",
    started: false,
    read: false
  },
  {
    id: 9,
    title: "The End of Drum Time",
    author: "Hanna Pylvainen",
    image: "https://m.media-amazon.com/images/I/81ZIamwWhUL._SL1500_.jpg",
    genre: "Literary",
    started: false,
    read: false

  },
  {
    id: 10, 
    title: "Fire Weather",
    author: "John Vaillant",
    image: "https://m.media-amazon.com/images/I/81lcrLCVgsL._SL1500_.jpg",
    genre: "Non-Fiction",
    started: false,
    read: false
  },
  {
    id: 11,
    title: "The Spy Who Came in from the Cold",
    author: "John Le Carre",
    image: "https://m.media-amazon.com/images/I/81J0Z7nEOnL._SL1500_.jpg",
    genre: "Mystery",
    started: false,
    read: false

  }
];

export default function App() {
  
  const [books, setBooks] = useState(initialBooks);
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

  return <div className='app'>

  <Header />
  {showAddBook && <AddBook onAddBook={handleAddBook} />}
  <AddBookButton handleShowAddBook={handleShowAddBook} showAddBook={showAddBook}/>
  <ReadingList books={books} onDeleteBook={handleDeleteBook} onReadBook={handleReadBook} onStartedBook={handleStartedBook}/>
  <Stats books={books}/>
  <GenreBreakdown books={books} />
  
  </div>
}
