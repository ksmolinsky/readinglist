import { Chart } from "react-google-charts";
import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from "react-bootstrap";
;


export default function GenreBreakdown({books}) {
const [show, setShow] = useState(false);

const handleGenreClose = () => setShow(false);
const handleGenreShow = () => setShow(true);

const totalFantasy = books.filter((book) =>
  book.genre.includes("Fantasy")
).length;
const totalLiterary = books.filter((book) =>
  book.genre.includes("Literary")
).length;
const totalSciFi = books.filter((book) =>
  book.genre.includes("Science Fiction")
).length;
const totalMystery = books.filter((book) =>
  book.genre.includes("Mystery")
).length;
const totalNonFiction = books.filter((book) =>
  book.genre.includes("Non-Fiction")
).length;

  const data = [
    ["Genre", "Books in Genre"],
    ["Fantasy", totalFantasy],
    ["Literary", totalLiterary],
    ["Science Fiction", totalSciFi],
    ["Mystery", totalMystery],
    ["Non Fiction", totalNonFiction],
  ];

  return (
    <>
      <Button variant="light" onClick={handleGenreShow} size="lg" className="mx-2">
        Genre Breakdown
      </Button>
      <Offcanvas show={show} onHide={handleGenreClose} className="h-50 w-75" placement="top">
        <OffcanvasHeader closeButton>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
          />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

