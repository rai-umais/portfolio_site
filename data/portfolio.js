/**
 * Portfolio Data Source of Truth for 2026
 * Sourced directly from Rai Muhammad Umais's CV.
 *
 * @typedef {Object} ProjectLink
 * @property {string} label
 * @property {string} url
 *
 * @typedef {Object} FeaturedProject
 * @property {string} title
 * @property {string} subtitle
 * @property {string} period
 * @property {string} status
 * @property {string} type
 * @property {string} problem
 * @property {string} myRole
 * @property {string[]} highlights
 * @property {string[]} stack
 * @property {ProjectLink[]} links
 *
 * @typedef {Object} OtherProject
 * @property {string} title
 * @property {string} desc
 * @property {string[]} stack
 * @property {ProjectLink[]} [links]
 *
 * @typedef {Object} Achievement
 * @property {string} category
 * @property {string} title
 * @property {string} organization
 * @property {string} description
 *
 * @typedef {Object} PortfolioData
 * @property {Object} personal
 * @property {FeaturedProject[]} featuredProjects
 * @property {OtherProject[]} otherProjects
 * @property {Object} skills
 * @property {Object} education
 * @property {Achievement[]} achievements
 * @property {Object} contact
 */

const portfolioData = {
  personal: {
    name: "Rai Muhammad Umais",
    headline: "Full-Stack & AI Developer",
    positioning: "Software Engineering student designing, building, and deploying production software for real clients.",
    supporting: "Founder & Lead Engineer of Maktab (multi-tenant school ERP). Currently in 5th semester at FAST-NUCES Lahore (graduating July 2028).",
    location: "Sheikhupura, Punjab, Pakistan (Open to Lahore)",
    status: {
      isOpenToWork: true,
      text: "Seeking full-time Full-Stack or AI Engineering roles (Pakistani companies / Lahore / Remote)"
    },
    aboutParagraphs: [
      "I am a Software Engineering student at FAST-NUCES Lahore (graduating July 2028, currently in 5th semester) who designs, builds, deploys, and supports production software for real clients.",
      "I built Maktab, a multi-tenant school ERP, solo between May and August 2026, and onboarded its first live client within a week of completion. I am currently extending that client's website with a multilingual (English, Urdu, Roman Urdu) RAG chatbot.",
      "I am seeking a full-time full-stack or AI engineering role at a forward-thinking Pakistani company."
    ],
    stats: [
      { label: "Current Semester", value: "5th Sem" },
      { label: "Expected Graduation", value: "July 2028" },
      { label: "Primary Shipped SaaS", value: "Maktab.cloud" }
    ],
    avatarUrl: "./images/pth.jpeg",
    resumeUrl: "./Rai_Muhammad_Umais_CV_.pdf"
  },

  featuredProjects: [
    {
      title: "Maktab: Multi-Tenant School ERP / Portal (SaaS)",
      subtitle: "Founder & Lead Engineer",
      period: "May 2026 – Present",
      status: "Live in Production",
      type: "Multi-Tenant SaaS Platform",
      problem: "K-12 private schools struggle with fragmented administration, manual admissions, and high software costs, requiring unified management with individual school subdomains on a secure shared infrastructure.",
      myRole: "Founder & Lead Engineer — Designed, built, and deployed solo end-to-end between May and August 2026; onboarded first client within a week of completion.",
      highlights: [
        "Architected multi-tenant isolation where each school operates on its own dedicated subdomain over a shared single platform (e.g., bluebells.maktab.cloud).",
        "Delivered teacher portal, assisted admissions, dynamic timetable scheduling, teacher hiring workflows, sub-admin accounts, and robust role-based access control (RBAC).",
        "Engineered full backend and frontend with FastAPI, PostgreSQL, Redis, Celery, Next.js, TypeScript, and Tailwind CSS.",
        "Deployed with Docker on a Hetzner VPS with Cloudflare R2 object storage."
      ],
      stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Hetzner VPS", "Cloudflare R2"],
      links: [
        { label: "Platform", url: "https://maktab.cloud" },
        { label: "Knowledge Base", url: "https://know.maktab.cloud" }
      ]
    },
    {
      title: "BlueBells School System: Deployment, Website & AI Assistant",
      subtitle: "Client Project, Sheikhupura",
      period: "2026 – Present",
      status: "Live in Production",
      type: "Client Production System & AI Assistant",
      problem: "BlueBells School required immediate digital operational infrastructure, a public web presence, and automated multilingual inquiry handling for prospective parents.",
      myRole: "Lead Client Engineer & AI Developer",
      highlights: [
        "First Maktab client onboarded within a week of platform completion; live in production serving ~30 students and 5 teachers.",
        "Designed and launched the school's official public website (bluebellsskp.com).",
        "Developing an AI Website Assistant (launching within weeks): a multilingual RAG chatbot (English, Urdu, Roman Urdu) answering parents' questions directly from verified school content with source links, built with Python, FastAPI, and an LLM API."
      ],
      stack: ["Python", "FastAPI", "Multilingual RAG", "LLM APIs", "Next.js", "Tailwind CSS"],
      links: [
        { label: "Public Website", url: "https://bluebellsskp.com" },
        { label: "School Portal", url: "https://bluebells.maktab.cloud" }
      ]
    },
    {
      title: "Furniture Store Website with Admin Backend",
      subtitle: "Real Client Project",
      period: "Completed",
      status: "Live in Production",
      type: "E-Commerce & Inventory Management",
      problem: "Furniture retail client needed a modern digital catalog storefront coupled with an administrative backend for inventory and store management.",
      myRole: "Full-Stack Developer & UI Designer",
      highlights: [
        "Designed the user interface and built both the customer-facing storefront and administrative control panel end-to-end.",
        "Deployed for client production on Vercel."
      ],
      stack: ["Full-Stack Web", "Admin Backend", "UI/UX Design", "Vercel"],
      links: [
        { label: "Live Client Store", url: "https://furnit-5star.vercel.app" }
      ]
    }
  ],

  otherProjects: [
    {
      title: "QR-Based Attendance System",
      desc: "Fast, automated proxy-resistant attendance tracking system built with Python.",
      stack: ["Python", "Flask", "PostgreSQL"],
      links: [
        { label: "GitHub", url: "https://github.com/rai-umais/QR_Automated_Attendance_System" }
      ]
    },
    {
      title: "Expense Tracker",
      desc: "Financial management tool featuring month-wise and category-wise budget analytics and expense tracking.",
      stack: ["Python", "Budget Analytics"],
      links: []
    },
    {
      title: "Email Sender Web App",
      desc: "Automated communication utility web application built with Python, Flask, and SMTP protocol.",
      stack: ["Python", "Flask", "SMTP"],
      links: []
    },
    {
      title: "VORTX Gaming Store",
      desc: "Interactive game vendor marketplace website for browsing and purchasing titles.",
      stack: ["React", "Node.js", "MSSQL"],
      links: []
    }
  ],

  skills: {
    production: [
      {
        category: "Languages",
        items: ["Python", "C++", "Java"]
      },
      {
        category: "Backend & Databases",
        items: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "MSSQL", "Redis", "Celery"]
      },
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS"]
      },
      {
        category: "DevOps & Deployment",
        items: ["Docker", "Hetzner VPS", "Cloudflare R2", "Git", "GitHub", "Vercel"]
      },
      {
        category: "Engineering Practice",
        items: ["Requirements Specification", "Software Design & Analysis", "RBAC", "Multi-Tenant Architecture"]
      }
    ],
    currentlyImplementing: [
      "LLM APIs & Prompt Design",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings & Semantic Search",
      "Vector Databases",
      "Multilingual AI (English, Urdu, Roman Urdu)",
      "LangChain",
      "LangGraph"
    ]
  },

  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "FAST-NUCES, Lahore, Pakistan",
    timeline: "Currently in 5th semester",
    expectedGraduation: "Expected July 2028",
    statusBadge: "Undergraduate · 5th Semester"
  },

  achievements: [
    {
      category: "Competition",
      title: "Participant — Softech 2025",
      organization: "FAST-NUCES",
      description: "Competed in the prestigious Softech programming competition at FAST-NUCES."
    },
    {
      category: "Speaking & Mentorship",
      title: "Speaker — Career Counselling Session",
      organization: "KIPS Academy, Sheikhupura",
      description: "Guided students on university admissions, selecting academic disciplines aligned with aptitude and interest, and elevating work standards."
    },
    {
      category: "Speaking & Community",
      title: "Speaker — Parent Awareness Session",
      organization: "BlueBells School",
      description: "Facilitated discussions on constructive parent-school collaboration to nurture growth environments for students."
    }
  ],

  contact: {
    email: "raiumaiskharal@gmail.com",
    github: "https://github.com/rai-umais",
    githubDisplay: "github.com/rai-umais",
    linkedin: "https://www.linkedin.com/in/rai-umais-9aa927246/",
    linkedinDisplay: "linkedin.com/in/rai-umais",
    portfolioUrl: "https://raiworks.vercel.app",
    portfolioDisplay: "raiworks.vercel.app",
    location: "Sheikhupura, Punjab, Pakistan (open to Lahore)",
    phonePrivateNote: "Phone number (+92 324 5870619) kept off public web display for privacy."
  }
};

// Global fallback for script tag inclusion
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = portfolioData;
}
