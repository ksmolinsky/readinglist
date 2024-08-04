import { Button } from "react-bootstrap"


export default function AddBookButton({handleShowAddBook, showAddBook}){
return <div className="book-button">
    <Button variant="outline-primary" onClick={handleShowAddBook}>{showAddBook ? "Close" : "Add Book" }</Button>
    </div>
}