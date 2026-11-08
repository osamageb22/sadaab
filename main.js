(() => {
  'use strict';

  const data = window.portfolioData;
  if (!data) {
    document.body.innerHTML = '<main class="fatal-error"><h1>Portfolio content could not be loaded.</h1><p>Check that <code>assets/js/content.js</code> exists and is uploaded with the website.</p></main>';
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const safeUrl = (url = '') => /^(https?:|mailto:)/i.test(url) ? url : '#';
  const external = (url, label, cls = '') => `<a class="${cls}" href="${esc(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const list = items => (items || []).map(item => `<li>${esc(item)}</li>`).join('');
  const reveal = (selector = '.reveal') => document.querySelectorAll(selector).forEach(el => el.classList.add('reveal'));

  // HERO + ABOUT
  $('#heroIntro').textContent = data.heroIntro;
  $('#heroLinks').innerHTML = [
    external(data.orcid, '<span class="link-icon">iD</span> ORCID'),
    external(data.linkedin, '<span class="link-icon">in</span> LinkedIn'),
    `<a href="mailto:${esc(data.email)}"><span class="link-icon">@</span> Email</a>`
  ].join('');
  $('#aboutLead').textContent = data.about[0] || '';
  $('#aboutBody').innerHTML = (data.about.slice(1) || []).map(paragraph => `<p>${esc(paragraph)}</p>`).join('');
  $('#profileFacts').innerHTML = [
    ['CURRENT ROLE', data.role],
    ['RESEARCH BASE', `${data.affiliation}, ${data.institution}`],
    ['ACADEMIC DISCIPLINE', 'Genetic Engineering & Biotechnology'],
    ['LOCATION', data.location]
  ].map(([label, value]) => `<div class="fact-item"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('');

  // RESEARCH INTERESTS
  const researchSymbols = ['⌘', '⌬', '⌁', '◈', '⟡', '∿'];
  $('#researchGrid').innerHTML = data.researchInterests.map((item, index) => `
    <article class="research-card reveal">
      <div class="card-topline"><span class="card-number">${esc(item.number)}</span><span class="card-symbol">${researchSymbols[index % researchSymbols.length]}</span></div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.description)}</p>
      <div class="evidence"><span>CV EVIDENCE</span><p>${esc(item.evidence)}</p></div>
    </article>`).join('');

  // EXPERIENCE TIMELINE
  $('#experienceTimeline').innerHTML = data.experience.map((item, index) => `
    <article class="timeline-item reveal">
      <div class="timeline-marker"><span>${String(index + 1).padStart(2, '0')}</span></div>
      <div class="timeline-date">${esc(item.period)}</div>
      <div class="timeline-content">
        <div class="timeline-meta">${esc(item.institution)}</div>
        <h3>${esc(item.role)}</h3>
        <h4>${esc(item.organization)}</h4>
        <ul class="responsibility-list">${list(item.responsibilities)}</ul>
      </div>
    </article>`).join('');

  // PROJECTS
  $('#projectGrid').innerHTML = data.projects.map((item, index) => `
    <article class="project-card reveal ${index === 0 ? 'project-featured' : ''}">
      <div class="project-top"><span class="project-number">${esc(item.number)}</span><span class="project-category">${esc(item.category)}</span></div>
      <div class="project-status"><span class="status-dot"></span>${esc(item.status)}</div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.description)}</p>
      <div class="project-contribution"><span>PROJECT RECORD</span><p>${esc(item.contribution)}</p></div>
      <div class="project-footer"><span>RESEARCH PORTFOLIO</span><span>↗</span></div>
    </article>`).join('');

  // EDUCATION
  $('#educationList').innerHTML = data.education.map((item, index) => `
    <article class="education-item reveal">
      <div class="education-period"><span>${esc(item.period)}</span><small>${esc(item.level)}</small></div>
      <div class="education-main"><span class="education-index">0${index + 1} / ACADEMIC RECORD</span><h3>${esc(item.degree)}</h3><h4>${esc(item.institution)}</h4><p class="education-department">${esc(item.department)}</p>
        <div class="education-result">${esc(item.result)}</div>
        ${item.thesis ? `<div class="thesis-block"><span>${index === 0 ? 'MASTER’S THESIS' : 'UNDERGRADUATE PROJECT'}</span><p>${esc(item.thesis)}</p></div>` : ''}
        <p class="education-detail">${esc(item.detail)}</p>
      </div>
    </article>`).join('');

  // SCHOLARLY OUTPUT
  $('#manuscriptList').innerHTML = data.manuscripts.map((item, index) => `
    <article class="output-item reveal"><div class="output-meta"><span>0${index + 1}</span><span>${esc(item.status)}</span></div><h3>${esc(item.title)}</h3><p class="authors">${esc(item.authors)}</p><p class="output-outlet">${esc(item.outlet)}</p><p class="output-note">${esc(item.note)}</p></article>`).join('');
  $('#conferenceList').innerHTML = data.conferenceContributions.map((item, index) => `
    <article class="output-item reveal"><div class="output-meta"><span>0${index + 1}</span><span>${esc(item.year)} · CONFERENCE</span></div><h3>${esc(item.title)}</h3><p class="authors">${esc(item.authors)}</p><p class="output-outlet">${esc(item.event)} · ${esc(item.organizer)}</p>${item.link ? external(item.link, 'EVENT WEBSITE ↗', 'text-link') : ''}</article>`).join('');

  // SKILLS + TRAINING + ENGAGEMENT
  $('#skillsGrid').innerHTML = data.skills.map((group, index) => `
    <article class="skill-group reveal"><div class="skill-group-head"><span>0${index + 1}</span><h3>${esc(group.category)}</h3></div><div class="skill-tags">${group.items.map(skill => `<span>${esc(skill)}</span>`).join('')}</div></article>`).join('');
  $('#trainingList').innerHTML = data.training.map(item => `
    <article class="compact-item"><div class="compact-year">${esc(item.year)}</div><div><h4>${esc(item.title)}</h4><p>${esc(item.provider)}</p><small>${esc(item.detail)}</small></div></article>`).join('');
  $('#affiliationList').innerHTML = data.affiliations.map(item => `
    <article class="compact-item"><div class="compact-year">${esc(item.period)}</div><div><h4>${esc(item.title)}</h4><p>${esc(item.organization)}</p></div></article>`).join('');
  $('#distinctionList').innerHTML = data.distinctions.map(item => `<article class="distinction-item"><span class="distinction-star">✳</span><p>${esc(item)}</p></article>`).join('');

  // CONTACT + FOOTER
  $('#contactEmail').href = `mailto:${data.email}`;
  $('#contactEmail').textContent = data.email;
  $('#contactLinks').innerHTML = [
    external(data.linkedin, 'LINKEDIN ↗'),
    external(data.orcid, 'ORCID ↗'),
    `<a href="assets/files/cv.pdf" target="_blank" rel="noopener">CURRICULUM VITAE ↓</a>`
  ].join('');
  $('#year').textContent = new Date().getFullYear();

  // Mobile navigation
  const menuToggle = $('#menuToggle');
  const nav = $('#primaryNav');
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  // Theme switch; default is the dark research interface.
  const themeToggle = $('#themeToggle');
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('sadaab-portfolio-theme'); } catch (_) { /* Local file previews may restrict storage. */ }
  if (storedTheme === 'light') document.documentElement.dataset.theme = 'light';
  const updateThemeButton = () => {
    const light = document.documentElement.dataset.theme === 'light';
    themeToggle.innerHTML = light ? '<span class="theme-icon">☾</span>' : '<span class="theme-icon">☼</span>';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  };
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    if (next === 'light') document.documentElement.dataset.theme = 'light';
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('sadaab-portfolio-theme', next); } catch (_) { /* Theme still switches for this page view. */ }
    updateThemeButton();
  });

  // Subtle scroll reveal; all content remains visible if observer is unavailable.
  reveal();
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
})();
