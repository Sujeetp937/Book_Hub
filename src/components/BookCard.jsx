import React from "react";
import "../App.css";

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
  ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
  : "/cover_not_found.jpg"; 


  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
      <p><strong>Total Editions:</strong> {book.edition_count || "N/A"}</p>
      <p><em>First Publish Year:</em> {book.first_publish_year || "N/A"}</p>
    </div>
  );
};

export default BookCard;
