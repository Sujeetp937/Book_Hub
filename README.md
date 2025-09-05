# 📚 BookFinder WebApp (BookHub)

BookFinder, also called **BookHub**, is a React-based web application that allows users to **search books**, **view details**, and **filter results** using the [OpenLibrary API](https://openlibrary.org/developers/api).  
It provides a smooth and user-friendly interface with skeleton loaders, error handling, and fallback cover images when book covers are missing.  

🔗 **Live Demo:** [BookHub on Netlify](https://bookhub12-app.netlify.app/)

---

## 🚀 Features
- 🔍 **Search Books** by title using the OpenLibrary API  
- 🧑‍🎓 **Filter Results** by author or first publish year  
- 📖 Displays book **title, author(s), edition count, and publish year**  
- 🖼️ Uses **cover images** if available, otherwise shows a custom **“Cover Not Available”** image  
- ⏳ **Skeleton Loading** effect while fetching results  
- ❌ Error handling for empty searches or no results  
- 📱 Responsive design for mobile and desktop  

---



---

## 🛠️ Tech Stack
- **Frontend:** React.js, JavaScript, CSS  
- **API:** [OpenLibrary API](https://openlibrary.org/developers/api)  
- **Deployment:** Netlify  

---

## 📂 Project Structure
book-finder/
│── public/
│ ├── bookhub-logo.png
│ ├── hero-bg.jpg
│ └── cover_not_found.jpg
│
│── src/
│ ├── App.jsx
│ ├── App.css
│ └── components/
│ ├── BookCard.jsx
│ └── SkeletonCard.jsx
│
│── package.json
│── README.md

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder

2.Install dependencies
npm install

3.Run the app locally
npm run dev

4.Open in browser
http://localhost:5173

📖 Example Usage
Search for Harry Potter → results will display multiple editions, with details about the author (J.K. Rowling), editions, and publish year.
Filter by year (e.g., 1997) to see first edition books.
If a cover is missing, a ‘Cover Not Available’ image will be shown.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

👨‍💻 Developed by Sujeet Pal



