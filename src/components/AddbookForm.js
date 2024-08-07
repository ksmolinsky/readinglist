import { useState } from "react";
import { Button, Form, FormControl, FormLabel, FormSelect, Row, Col } from "react-bootstrap";

export default function AddBook({onAddBook}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("https://");

  function handleSubmit(e) {
    e.preventDefault();

    if (!author || !title ) return




    const newBook = {
      id: Date.now(),
      title,
      image: `${image}`,
      genre,
      author

    };
    console.log(newBook)

    onAddBook(newBook)

    setTitle("");
    setAuthor("")
    setImage("")
  }


  return (
    // <div className="book-button">
    // <Button variant="outline-primary" size="lg"> Add Book </Button>
    // </div>

    <Form onSubmit={handleSubmit} className="mx-3 my-3">
      <Row>
        <Col sm={3} className="my-1">
          <FormLabel>Book Title</FormLabel>
          <FormControl
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col sm={3} className="my-1">
          <FormLabel>Author </FormLabel>
          <FormControl
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Col>
        <Col sm={3} className="my-1">
          <FormLabel>Genre</FormLabel>
          <FormSelect value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option>Choose Genre</option>
            <option value="Literary">Literary</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Non-Fiction">Non Fiction</option>
          </FormSelect>
        </Col>
        <Col sm={3} className="my-1">
          <FormLabel>🌄 Image URL</FormLabel>
          <FormControl
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Col>
        <Col xs="auto" className="my-3">
          <Button type="submit" size="lg">Add</Button>
        </Col>
      </Row>
    </Form>
  );
}
