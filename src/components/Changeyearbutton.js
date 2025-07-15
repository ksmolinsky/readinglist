import { Button } from "react-bootstrap"



export default function Changeyearbutton({currentYearsList, lastYearsList, books}){

if (books === (currentYearsList)) {
    return <div className ="book-buttons"> 
        <Button variant="primary" onClick={lastYearsList} size="lg">2024 List</Button>

    </div>
}
return <div className="book-buttons">
    <Button variant="primary" onClick={currentYearsList} size="lg">Current List</Button> {""}
    <Button variant="primary" onClick={lastYearsList} size="lg">2024 List</Button>

    </div> 
}