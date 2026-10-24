# Rai Muhammad Umais — Portfolio 2026

A modern, high-performance static portfolio website deployed on **Vercel**.
Refreshed for 2026 with a deep-navy identity, single typed data architecture, WCAG AA accessibility, and real production case studies.

## 🗂 Project Structure

```text
portfolio/
├── index.html                     # Semantic HTML5 markup & SEO meta tags
├── favicon.svg                    # SVG Favicon
├── Rai_Muhammad_Umais_CV_.pdf     # Current Resume PDF (Single Source of Truth)
├── data/
│   └── portfolio.js               # Single typed data source of truth (edit here!)
├── css/
│   └── style.css                  # Modern navy design system (dark/light, WCAG AA)
├── js/
│   └── main.js                    # Hydration, theme toggle, mobile drawer, reveals
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

## ✨ 2026 Features & Improvements

- **Single Typed Data Architecture**: Complete data separation in `data/portfolio.js` for single-point editing.
- **Production Systems Shipped**: Mini case studies for real client systems (**Maktab Multi-Tenant ERP SaaS**, **BlueBells School System & AI Assistant**, **Furniture Store Storefront & Admin**).
- **Honest Skill Categorization**: Clear separation between production-tested tools and AI technologies currently in active implementation.
- **Deep Navy Design System**: Professional, calm aesthetic with deep navy base, slate surfaces, off-white typography, and restrained sky accent.
- **WCAG AA Compliant**: All text and interactive button states pass contrast standards in both dark and light modes.
- **Accessible & Responsive**: Fully responsive from 360px up, keyboard navigable with visible focus rings, and respects `prefers-reduced-motion`.
- **CV Download**: Direct download button serving `Rai_Muhammad_Umais_CV_.pdf`.
- **Zero Heavy Dependencies**: Pure semantic HTML5, vanilla modern CSS3, and vanilla ES6+ JS for maximum speed and instant loading.

## 📄 License

Personal portfolio — all rights reserved.
