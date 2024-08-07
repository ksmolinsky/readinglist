import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "react-bootstrap";
import { useState } from "react";

export default function Stats({ books }) {
  const [show, setShow] = useState(false);

  const handleGenreClose = () => setShow(false);
  const handleGenreShow = () => setShow(true);

  if (!books.length)
    return (
      <>
        <Button
          variant="outline-primary"
          onClick={handleGenreShow}
          size="lg"
        >
          Reading Progress{" "}
        </Button>
        <Offcanvas
          show={show}
          onHide={handleGenreClose}
          className="h-50 w-75"
          placement="top"
        >
          <OffcanvasHeader closeButton>
          </OffcanvasHeader>
          <OffcanvasBody>Start adding some books to your Reading List!</OffcanvasBody>
        </Offcanvas>
      </>
    );

  const numBooks = books.length;
  const numRead = books.filter((book) => book.read).length;
  const percentage = Math.round((numRead / numBooks) * 100);

  if (numRead === 1)
    return (
      <>
        <Button
          variant="light"
          onClick={handleGenreShow}
          size="lg"
        >
          Reading Progress
        </Button>
        <Offcanvas
          show={show}
          onHide={handleGenreClose}
          className="h-50 w-75"
          placement="top"
        >
          <OffcanvasHeader closeButton>
          </OffcanvasHeader>
          <OffcanvasBody>{`You have read ${numRead} book out of ${numBooks} on your reading list(${percentage}%`}</OffcanvasBody>
        </Offcanvas>
      </>
    );
  return (
    <>
      <Button
        variant="light"
        onClick={handleGenreShow}
        size="lg"
        className="mx-2"
      >
        Reading Progress
      </Button>
      <Offcanvas
        show={show}
        onHide={handleGenreClose}
        className="h-50 w-75"
        placement="top"
      >
        <OffcanvasHeader closeButton>
        </OffcanvasHeader>
        <OffcanvasBody className="stats-message">
          {percentage === 100
            ? "You've read your entire list! Add some more books"
            : `You have read ${numRead} books out of ${numBooks} on your reading list (${percentage}%)`}
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}
