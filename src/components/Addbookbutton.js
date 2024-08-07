import { Button } from "react-bootstrap"



export default function AddBookButton({handleShowAddBook, showAddBook}){
    
return <div className="book-buttons">
    <Button variant="primary" onClick={handleShowAddBook} size="lg">{showAddBook ? "Close" : "Add to Reading List" }</Button> {""}
    </div>
}