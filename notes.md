📚 BookFinder (BookHub) – Notes
🔑 Project Overview

React-based web app to search books using OpenLibrary API.

Users can filter by author or publish year.

Shows book title, author(s), edition count, and first publish year.

Deployed on Netlify → bookhub12-app.netlify.app

🛠 Tech Stack

React.js (Frontend)

OpenLibrary API (Data)

CSS (Styling)

Netlify (Deployment)

⚙ How It Works

User searches a book → API request sent to OpenLibrary.

Results displayed → cover image, title, author, editions, publish year.

Filters applied → refine results by author or year.

Skeleton loaders shown during API fetch.

If no cover available → custom fallback image cover_not_found.jpg.

If no results → error message shown.

📂 Main Files

App.jsx → Main logic (search, filters, API fetch, error handling).

BookCard.jsx → Displays each book’s details + fallback cover.

SkeletonCard.jsx → Placeholder cards during loading.

App.css → Styling (navbar, hero, search bar, grid, cards).

📖 Example

Search: Harry Potter

Shows multiple editions with details about J.K. Rowling.

Filter: Year = 1997 → shows first edition.

Missing cover → shows “Cover Not Available” image.

✨ Features

🔍 Search by title

📖 Filter by author/year

🖼 Cover fallback image

⏳ Skeleton loading animation

❌ Error handling

📱 Responsive design
