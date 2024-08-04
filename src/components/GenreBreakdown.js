import { Chart } from "react-google-charts";
;

export default function GenreBreakdown({books}) {
    const totalFantasy = books.filter((book) => book.genre.includes("Fantasy")).length
    const totalLiterary = books.filter((book) => book.genre.includes("Literary")).length
    const totalSciFi = books.filter((book) => book.genre.includes("Science Fiction")).length
    const totalMystery = books.filter((book) => book.genre.includes("Mystery")).length
    const totalNonFiction = books.filter((book) => book.genre.includes("Non-Fiction")).length
  

    const data = [
        ["Genre", "Books in Genre"],
        ["Fantasy", totalFantasy],
        ["Literary", totalLiterary],
        ["Science Fiction", totalSciFi],
        ["Mystery", totalMystery],
        ["Non Fiction", totalNonFiction]
    ]
    
    const options = {
        title: "Genre Breakdown",
    };

    return (
        <Chart 
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />

    )
}