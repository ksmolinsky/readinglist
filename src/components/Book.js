import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button,
  ButtonGroup,
} from "react-bootstrap";


export default function Book({ book, onDeleteBook, onReadBook, onStartedBook }) {
  if (book.read) {
    return (
      <Card style= {{backgroundColor: "green", color: "white"}} >
        <Button className="x-button" variant="outline-danger" onClick={()=> onDeleteBook(book.id)}>❌</Button>
        <em className="current">Finished!</em>
        <CardImg src={book.image} className="book-image" />
        <CardBody >
          <CardTitle>{book.title}</CardTitle>
          <CardText>by {book.author}</CardText>
        </CardBody>
         <Button variant="outline-success" size="lg" value={book.read} onClick={()=> onReadBook(book.id)}>Back to TBR</Button>
      </Card>
    )
  }

  if (book.started && !book.read) {
    return(
    <Card style= {{backgroundColor: "yellow"}} >
        <Button className="x-button" variant="outline-danger" onClick={()=> onDeleteBook(book.id)}>❌</Button>
        <em className="current">Currently Reading</em>
        <CardImg src={book.image} className="book-image" />
        <CardBody >
          <CardTitle>{book.title}</CardTitle>
          <CardText>by {book.author}</CardText>
        </CardBody>
        <ButtonGroup>
          <Button variant="outline-secondary" size="lg" value={book.started} onClick={()=> onStartedBook(book.id)}>Back to TBR</Button>
         <Button variant="outline-success" size="lg" value={book.read} onClick={()=> onReadBook(book.id)}>Finished</Button>
         </ButtonGroup>
      </Card>
    )

  }

  return (
      <Card >
        <Button className="x-button" variant="outline-danger" onClick={()=> onDeleteBook(book.id)}>❌</Button>
        <CardImg src={book.image} className="book-image" />
        <CardBody >
          <CardTitle>{book.title}</CardTitle>
          <CardText>by {book.author}</CardText>
        </CardBody>
        <ButtonGroup>
          <Button variant="outline-warning" size="lg" value={book.started} onClick={()=> onStartedBook(book.id)}>Started</Button>
         <Button variant="outline-success" size="lg" value={book.read} onClick={()=> onReadBook(book.id)}>Finished</Button>
         </ButtonGroup>
      </Card>
  );
}
