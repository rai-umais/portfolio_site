# Rai Muhammad Umais Kharal — Portfolio

A premium, dark-themed static portfolio website deployed on **Vercel**.

## 🗂 Project Structure

```
portfolio/
├── index.html          # Main (and only) HTML page
├── css/
│   └── style.css       # All styles — dark/light theme, animations
├── js/
│   └── main.js         # Theme toggle, scroll reveals, nav logic
├── images/
│   └── pth.jpeg        # Profile photo
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Deploy on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the GitHub repository
4. **Framework Preset**: select `Other` (no framework)
5. Leave **Build Command** empty and **Output Directory** as `.`
6. Click **Deploy**

That's it — Vercel will serve `index.html` as the root page with all static assets.

## 🛠 Local Development

```bash
# Any static server works. For example with Python:
python -m http.server 8080

# Then open http://localhost:8080
```

## ✨ Features

- **Dark / Light theme** toggle with localStorage persistence
- **Scroll-reveal animations** via IntersectionObserver
- **Responsive design** — mobile nav with hamburger menu
- **Glassmorphism** project cards with accent glow effects
- **Premium typography** — Cormorant Garamond, Outfit, DM Mono
- **Zero dependencies** — pure HTML, CSS, JS

## 📄 License

Personal portfolio — all rights reserved.
