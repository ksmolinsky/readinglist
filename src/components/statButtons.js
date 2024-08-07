import GenreBreakdown from "./GenreBreakdown"
import Stats from "./Stats"

export default function StatButtons({books}) {
  
    return <footer className="stats">
    <GenreBreakdown books={books} /> {""}
    <Stats books={books} />
    </footer>
}