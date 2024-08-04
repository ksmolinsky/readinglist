export default function Stats ({ books }) {
    if (!books.length)
        return (
        <p className="stats">
            <em>Start adding some books to your reading list!</em>
        </p>
        );

    const numBooks = books.length;
    const numRead = books.filter((book) => book.read).length
    const percentage = Math.round((numRead/numBooks) * 100)

    if (numRead === 1)
        return (
    <p className="stats">
        <em>{`You have read ${numRead} book out of ${numBooks} on your reading list (${percentage}%)`}</em>
    </p>
    )
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You've read your entire list! Add some more books" : `You have read ${numRead} books out of ${numBooks} on your reading list (${percentage}%)`}
            </em>
        </footer>
    )
}