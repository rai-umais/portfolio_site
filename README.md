# Rai Muhammad Umais Kharal — Portfolio

A Flask-powered personal portfolio website with earthy warm aesthetics.

## Project Structure

```
portfolio/
├── app.py                  # Flask application
├── requirements.txt
├── data/
│   └── projects.json       # Auto-created when you add projects
├── templates/
│   └── index.html          # Main HTML template
└── static/
    ├── css/
    │   └── style.css       # All styles
    └── js/
        └── main.js         # Animations + project CRUD
```

## Setup & Run

```bash
# 1. Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the app
python app.py
```

Open http://127.0.0.1:5000 in your browser.

## Features

- Smooth scroll-reveal animations on every section
- Animated hero with floating geometric shapes
- Add / delete projects directly from the website (no code edits needed)
- Projects persist in `data/projects.json`
- Fully responsive (mobile hamburger menu)
- Earthy warm color scheme: cream, brown, gold

## Deploying to the Web

To share your portfolio URL on your resume, deploy to one of:
- **Render** (free): Connect GitHub repo → select Python/Flask
- **Railway** (free tier): `railway up`
- **Vercel** (with serverless adapter)
- **PythonAnywhere** (free): Upload files via web interface

For production, set `debug=False` in `app.py`.
