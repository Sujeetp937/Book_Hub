import React, { useState } from "react";
import BookCard from "./components/BookCard";
import SkeletonCard from "./components/SkeletonCard";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();

      if (data.docs.length === 0) {
        setError("No books found!");
      } else {
        setBooks(data.docs);
      }
    } catch (err) {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesYear = yearFilter
      ? book.first_publish_year?.toString() === yearFilter
      : true;
    const matchesAuthor = authorFilter
      ? book.author_name?.some((a) =>
          a.toLowerCase().includes(authorFilter.toLowerCase())
        )
      : true;
    return matchesYear && matchesAuthor;
  });

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/bookhub-logo.png" alt="logo" />
          <span>BOOKHUB</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Book Of Choice.</h1>
        <p>
          Search millions of books instantly and filter by year or author.
        </p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        {/* Filters */}
        <div className="filter-container">
          <div className="filter-box">
            <label>Year:</label>
            <input
              type="text"
              placeholder="e.g. 2005"
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            />
          </div>
          <div className="filter-box">
            <label>Author:</label>
            <input
              type="text"
              placeholder="e.g. Rowling"
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Book Results */}
      <div className="container">
        {loading && (
          <div className="book-grid">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && <p className="error">{error}</p>}

        {!loading && filteredBooks.length > 0 && (
          <>
            <h2 className="results-heading">Your Search Result</h2>
            <div className="book-grid">
              {filteredBooks.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
