# Rai Muhammad Umais — Portfolio 2026

A modern, high-performance static portfolio website deployed on **Vercel**.
Designed with a warm editorial paper-and-ink aesthetic, single typed data architecture, WCAG AA accessibility, and real production case studies.

## 🗂 Project Structure

```text
portfolio/
├── index.html                     # Semantic HTML5 markup & SEO meta tags
├── favicon.svg                    # SVG Favicon (Warm Paper & Forest Green)
├── Rai_Muhammad_Umais_CV_.pdf     # Current Resume PDF (Single Source of Truth)
├── data/
│   └── portfolio.js               # Single typed data source of truth (edit here!)
├── css/
│   └── style.css                  # Warm editorial design system (Paper & Ink, WCAG AA)
├── js/
│   └── main.js                    # Hydration, mobile drawer, reveals
├── images/
│   └── pth.jpeg                   # Profile portrait
├── vercel.json                    # Vercel deployment configuration
├── .gitignore                     # Git ignore rules
└── README.md                      # Documentation
```

## 🛠 Local Development

Any static web server works. Zero build step or npm dependencies required:

```bash
# Using Python:
python -m http.server 8080

# Or using Node (npx):
npx serve .
```

Then visit: [http://localhost:8080](http://localhost:8080)

## ✏️ How to Update Content in the Future

All site content is centralized in **`data/portfolio.js`**.
To add or update projects, experiences, skills, achievements, or contact links:

1. Open `data/portfolio.js`.
2. Update the corresponding field or array (e.g. `featuredProjects`, `skills`, `achievements`).
3. Save the file.
4. Refresh your browser — the website will automatically hydrate with your new data without requiring manual HTML editing.

## ✨ Features & Architecture

- **Warm Editorial Aesthetic**: Calm, printed-paper feel with a warm off-white background (`#F6F1E7`), ivory surfaces (`#FBF8F2`), warm charcoal ink typography (`#2A2622`), thin warm borders (`#D9D0BF`), and a restrained forest green accent (`#265440`).
- **Single Typed Data Architecture**: Complete data separation in `data/portfolio.js` for single-point editing.
- **Featured Systems & Case Studies**:
  - **Maktab: Multi-Tenant School ERP / Portal (SaaS)** (Live in Production)
  - **Collabify: Full-Stack Project Management & Freelance Marketplace** (React 18, Spring Boot 3, PostgreSQL, WebSockets)
  - **BlueBells School System: Deployment, Website & AI Assistant** (Live in Production)
  - **Furniture Store Website with Admin Backend** (Live Client Project)
- **Focused Other Projects**: QR Attendance System, Expense Tracker, Email Sender, and VORTX Gaming Store (with direct verified GitHub links).
- **Honest Skill Categorization**: Clear separation between production-tested tools and AI technologies currently in active implementation.
- **WCAG AA Compliant**: Every color pair tested and verified against WCAG AA/AAA standards.
- **Accessible & Responsive**: Fully responsive from 360px up, keyboard navigable with visible focus rings, and respects `prefers-reduced-motion`.
- **Zero Heavy Dependencies**: Pure semantic HTML5, vanilla modern CSS3, and vanilla ES6+ JS for instant loading.

## 📄 License

Personal portfolio — all rights reserved.
