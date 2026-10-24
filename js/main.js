/**
 * Rai Muhammad Umais — 2026 Portfolio Scripts
 * Drives theme switching, dynamic content hydration from portfolioData,
 * navigation scroll effects, accessible mobile drawer, and subtle animations.
 */

(function () {
  'use strict';

  // ---- 1. Data Source Resolution ----
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.warn('[Portfolio] PORTFOLIO_DATA not found. Relying on prerendered markup.');
    return;
  }

  // ---- 2. Helpers ----
  const escapeHTML = (str) => {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const externalLinkIcon = `
    <svg class="icon-inline" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>`;

  const downloadIcon = `
    <svg class="icon-inline" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>`;

  // ---- 3. Hydrate Personal & Hero Information ----
  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge && data.personal.status) {
    heroBadge.innerHTML = `
      <span class="status-pulse" aria-hidden="true"></span>
      <span>${escapeHTML(data.personal.status.text)}</span>
    `;
  }

  const heroName = document.getElementById('heroName');
  if (heroName) {
    heroName.textContent = data.personal.name;
  }

  const heroHeadline = document.getElementById('heroHeadline');
  if (heroHeadline) {
    heroHeadline.textContent = data.personal.headline;
  }

  const heroPositioning = document.getElementById('heroPositioning');
  if (heroPositioning) {
    heroPositioning.textContent = data.personal.positioning;
  }

  const heroSupporting = document.getElementById('heroSupporting');
  if (heroSupporting) {
    heroSupporting.textContent = data.personal.supporting;
  }

  // ---- 4. Hydrate About Section ----
  const aboutBioContainer = document.getElementById('aboutBioContainer');
  if (aboutBioContainer && Array.isArray(data.personal.aboutParagraphs)) {
    aboutBioContainer.innerHTML = data.personal.aboutParagraphs
      .map(p => `<p class="about-bio">${escapeHTML(p)}</p>`)
      .join('');
  }

  const aboutStatsContainer = document.getElementById('aboutStatsContainer');
  if (aboutStatsContainer && Array.isArray(data.personal.stats)) {
    aboutStatsContainer.innerHTML = data.personal.stats
      .map(st => `
        <div class="stat-card">
          <span class="stat-value">${escapeHTML(st.value)}</span>
          <span class="stat-label">${escapeHTML(st.label)}</span>
        </div>
      `)
      .join('');
  }

  // ---- 5. Hydrate Featured Systems Shipped (Mini Case Studies) ----
  const featuredGrid = document.getElementById('featuredProjectsGrid');
  if (featuredGrid && Array.isArray(data.featuredProjects)) {
    featuredGrid.innerHTML = data.featuredProjects
      .map((proj, idx) => {
        const stackBadges = proj.stack
          .map(s => `<span class="tech-tag">${escapeHTML(s)}</span>`)
          .join('');

        const highlightsList = proj.highlights
          .map(h => `<li>${escapeHTML(h)}</li>`)
          .join('');

        const linksList = proj.links && proj.links.length
          ? proj.links.map(l => `
              <a href="${escapeHTML(l.url)}" target="_blank" rel="noopener noreferrer" class="btn-link">
                <span>${escapeHTML(l.label)}</span>
                ${externalLinkIcon}
              </a>
            `).join('')
          : '';

        return `
          <article class="case-study-card reveal" data-index="${idx + 1}">
            <div class="card-header">
              <div class="card-meta">
                <span class="badge-status">
                  <span class="dot-live" aria-hidden="true"></span>
                  ${escapeHTML(proj.status)}
                </span>
                <span class="badge-type">${escapeHTML(proj.type)}</span>
                <span class="badge-period">${escapeHTML(proj.period)}</span>
              </div>
              <h3 class="card-title">${escapeHTML(proj.title)}</h3>
              <p class="card-subtitle">${escapeHTML(proj.subtitle)}</p>
            </div>

            <div class="card-body">
              <div class="case-block">
                <h4 class="block-label">Problem Solved</h4>
                <p class="block-text">${escapeHTML(proj.problem)}</p>
              </div>

              <div class="case-block">
                <h4 class="block-label">My Role & Architecture</h4>
                <p class="block-text role-highlight">${escapeHTML(proj.myRole)}</p>
                <ul class="case-highlights">
                  ${highlightsList}
                </ul>
              </div>

              <div class="case-block">
                <h4 class="block-label">Production Stack</h4>
                <div class="tech-tags">
                  ${stackBadges}
                </div>
              </div>
            </div>

            ${linksList ? `
              <div class="card-footer">
                <div class="project-actions">
                  ${linksList}
                </div>
              </div>
            ` : ''}
          </article>
        `;
      })
      .join('');
  }

  // ---- 6. Hydrate Other Projects ----
  const otherProjectsGrid = document.getElementById('otherProjectsGrid');
  if (otherProjectsGrid && Array.isArray(data.otherProjects)) {
    otherProjectsGrid.innerHTML = data.otherProjects
      .map(p => {
        const stackList = p.stack
          .map(s => `<span class="tech-tag tech-tag-sm">${escapeHTML(s)}</span>`)
          .join('');

        const links = p.links && p.links.length
          ? p.links.map(l => `
              <a href="${escapeHTML(l.url)}" target="_blank" rel="noopener noreferrer" class="btn-link btn-link-sm">
                <span>${escapeHTML(l.label)}</span>
                ${externalLinkIcon}
              </a>
            `).join('')
          : '';

        return `
          <div class="sub-project-card reveal">
            <h4 class="sub-project-title">${escapeHTML(p.title)}</h4>
            <p class="sub-project-desc">${escapeHTML(p.desc)}</p>
            <div class="tech-tags">
              ${stackList}
            </div>
            ${links ? `<div class="sub-project-links">${links}</div>` : ''}
          </div>
        `;
      })
      .join('');
  }

  // ---- 7. Hydrate Skills (Production vs Currently Implementing) ----
  const skillsProductionGrid = document.getElementById('skillsProductionGrid');
  if (skillsProductionGrid && data.skills && Array.isArray(data.skills.production)) {
    skillsProductionGrid.innerHTML = data.skills.production
      .map(group => `
        <div class="skill-category-card reveal">
          <h4 class="skill-group-title">${escapeHTML(group.category)}</h4>
          <div class="pill-cloud">
            ${group.items.map(item => `<span class="skill-pill">${escapeHTML(item)}</span>`).join('')}
          </div>
        </div>
      `)
      .join('');
  }

  const skillsLearningList = document.getElementById('skillsLearningList');
  if (skillsLearningList && data.skills && Array.isArray(data.skills.currentlyImplementing)) {
    skillsLearningList.innerHTML = data.skills.currentlyImplementing
      .map(item => `
        <li class="learning-item reveal">
          <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${escapeHTML(item)}</span>
        </li>
      `)
      .join('');
  }

  // ---- 8. Hydrate Education Section ----
  const eduContainer = document.getElementById('educationContainer');
  if (eduContainer && data.education) {
    eduContainer.innerHTML = `
      <div class="edu-card reveal">
        <div class="edu-timeline-marker" aria-hidden="true"></div>
        <div class="edu-content">
          <div class="edu-header">
            <h3 class="edu-degree">${escapeHTML(data.education.degree)}</h3>
            <span class="badge-timeline">${escapeHTML(data.education.expectedGraduation)}</span>
          </div>
          <p class="edu-institution">${escapeHTML(data.education.institution)}</p>
          <div class="edu-meta">
            <span class="badge-sem">${escapeHTML(data.education.timeline)}</span>
            <span class="edu-note">Curriculum focus: Systems engineering, algorithmic problem solving, and software architecture.</span>
          </div>
        </div>
      </div>
    `;
  }

  // ---- 9. Hydrate Achievements & Talks ----
  const achievementsGrid = document.getElementById('achievementsGrid');
  if (achievementsGrid && Array.isArray(data.achievements)) {
    achievementsGrid.innerHTML = data.achievements
      .map(ach => `
        <div class="achievement-card reveal">
          <div class="achievement-top">
            <span class="badge-category">${escapeHTML(ach.category)}</span>
            <span class="achievement-org">${escapeHTML(ach.organization)}</span>
          </div>
          <h4 class="achievement-title">${escapeHTML(ach.title)}</h4>
          <p class="achievement-desc">${escapeHTML(ach.description)}</p>
        </div>
      `)
      .join('');
  }

  // ---- 10. Hydrate Contact Links & Direct Actions ----
  const contactLinksContainer = document.getElementById('contactLinksContainer');
  if (contactLinksContainer && data.contact) {
    contactLinksContainer.innerHTML = `
      <a href="mailto:${escapeHTML(data.contact.email)}" class="contact-card">
        <div class="contact-icon-wrapper" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <div class="contact-details">
          <span class="contact-label">Email Directly</span>
          <span class="contact-value">${escapeHTML(data.contact.email)}</span>
        </div>
        ${externalLinkIcon}
      </a>

      <a href="${escapeHTML(data.contact.linkedin)}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="contact-icon-wrapper" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
        <div class="contact-details">
          <span class="contact-label">LinkedIn</span>
          <span class="contact-value">${escapeHTML(data.contact.linkedinDisplay)}</span>
        </div>
        ${externalLinkIcon}
      </a>

      <a href="${escapeHTML(data.contact.github)}" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="contact-icon-wrapper" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
        <div class="contact-details">
          <span class="contact-label">GitHub</span>
          <span class="contact-value">${escapeHTML(data.contact.githubDisplay)}</span>
        </div>
        ${externalLinkIcon}
      </a>

      <div class="contact-card contact-card-static">
        <div class="contact-icon-wrapper" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div class="contact-details">
          <span class="contact-label">Base Location</span>
          <span class="contact-value">${escapeHTML(data.contact.location)}</span>
        </div>
      </div>
    `;
  }

  // ---- 11. Theme Switcher ----
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  if (themeToggle) {
    const updateThemeIcon = (theme) => {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };

    const initialTheme = html.getAttribute('data-theme') || 'dark';
    updateThemeIcon(initialTheme);

    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  // ---- 12. Navigation & Sticky Blur ----
  const nav = document.getElementById('nav');
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile Navigation Drawer
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- 13. Active Navigation Observer ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ---- 14. Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- 15. Subtle Scroll Reveal Animations (prefers-reduced-motion safe) ----
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReduced) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ---- 16. Dynamic Year in Footer ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

})();
