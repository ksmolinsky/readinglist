import Book from "./Book";




export default function ReadingList({books, onDeleteBook, onReadBook, onStartedBook}) {
    let sortedBooks

    sortedBooks = books
    .slice()
    .sort((a, b) => Number(a.read) - Number(b.read))

  return (
    <div className="list">
      <ul>
        {sortedBooks.map((book) => (
          <Book book={book} onDeleteBook={onDeleteBook} onReadBook={onReadBook} onStartedBook={onStartedBook} key={book.id}/>
        ))}
      </ul>
    </div>
  );
}