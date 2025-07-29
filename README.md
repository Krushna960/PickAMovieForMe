# 🎬 PickAMovieForMe

**Live Site:** [pickamovieforme.netlify.app](https://pickamovieforme.netlify.app/)  
**GitHub Repo:** [github.com/Krushna960/PickAMovieForMe](https://github.com/Krushna960/PickAMovieForMe)

---

## 📌 Project Overview

**PickAMovieForMe** is a clean and responsive movie suggestion site built using HTML, CSS, and JavaScript, powered by **The Movie Database (TMDB) API**. It helps users discover popular movies, explore trending actors, and get detailed info with just a click.

---

## ✨ Features

- 🔍 **Search Movies** by name  
- 🎞️ **Popular Movies** section with posters  
- 👨‍🎤 **Top Actors Page**  
  - View popular actors  
  - Click actor to see movies they starred in
- 📱 **Responsive design** for desktop and mobile  
- 🧾 **Detailed Movie Info** on poster click (using TMDB API)
- 🎨 Clean UI and intuitive layout

---

## 🚀 Tech Stack

- HTML5  
- CSS3 (Media Queries for responsiveness)  
- JavaScript (ES6)  
- [TMDB API](https://www.themoviedb.org/) for movie data  
- [Netlify](https://netlify.com) for hosting

---

## 📁 Folder Structure

PickAMovieForMe/
│
├── index.html # Homepage
├── topActor.html # Top Actors page
├── styles.css # Styling
├── script.js # Main JS file for homepage
├── actor.js # JS for actor functionality
└── README.md # Project documentation



---

## 🛠️ Setup Instructions

> ⚠️ This is a **frontend-only project** — you don’t need Node.js or any bundlers.

1. **Clone the repo**
   ```bash
   git clone https://github.com/Krushna960/PickAMovieForMe.git

2. Open the project folder
You can directly open index.html in your browser.

3. Add your TMDB API key

Open script.js , topactor.html and genre.html

Replace this line:

javascript
Copy code
const API_KEY = "your_api_key_here";
with your TMDB API key.

✅ Do NOT commit your real API key to GitHub. For public repos, replace it with a placeholder like:

js
Copy code
const API_KEY = "REPLACE_WITH_YOUR_API_KEY";

4. un locally

You can use the Live Server extension in VS Code, or just double-click index.html.




🌐 Deployment
This project is hosted on Netlify.

To deploy manually:

1. Build or zip your folder

2. Go to https://app.netlify.com

3. Click "Add new site → Deploy manually"

4. Drag & drop your project folder

5. Done 🎉

To enable Continuous Deployment from GitHub:

# Connect Netlify to your GitHub repo

# Any git push will auto-deploy the site




📅 Future Plans

🔐 Add login functionality (optional)

📂 Add more categories like "Upcoming", "Top Rated"

🌍 Add genre-based filters

❤️ Save favorites using localStorage



🙌 Credits

Movie data from The Movie Database (TMDB)

Project developed by Krushna garole




📃 License
This project is open source and available under the MIT License.
