
import './style.css'

import profileImage from './assets/Profile.jpg'
import aboutImage from './assets/about.jpg'
import { credentials } from './credentials.js'
import { projects } from './projects.js'

// When your CV is ready: put it in portfolio/public/ named resume.pdf,
// then change this to true to show the "Download CV" button.
const HAS_RESUME = false

document.querySelector('#app').innerHTML = `
<header class="site-header">
  <div class="nav-container">
    <a href="#home" class="logo">DM</a>

    <nav class="nav-links">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="#contact" class="nav-contact">Contact</a>
    </nav>

    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>

<main>
  <section id="home" class="page-section hero-section">
    <div class="page-inner hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">HELLO, I'M</p>
        <h1>Dran Magdaraog</h1>
        <h2>Web Developer &amp; UI/UX Designer</h2>

        <p class="hero-text">
          I create clean, responsive digital experiences with
          a focus on usability, simplicity, and thoughtful design.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="button button-dark">
            View My Projects <span>↗</span>
          </a>
          <a href="#contact" class="button button-light">Contact Me</a>
        </div>
      </div>

      <div class="hero-photo">
        <img src="${profileImage}" alt="Portrait of Dran Magdaraog" />
      </div>
    </div>

    <a href="#about" class="scroll-down">
      <span>Scroll Down</span>
      <span>↓</span>
    </a>
  </section>

  <section id="about" class="page-section">
    <div class="page-inner">
      <div class="section-top">
        <div>
          <p class="eyebrow">ABOUT ME</p>
          <h2 class="section-title">
            Turning ideas into<br />
            functional digital experiences.
          </h2>
        </div>
      </div>

      <div class="about-layout">
        <div class="about-copy">
          <p class="about-lead">
            I'm an Information Technology student and aspiring
            developer who enjoys creating clean, practical,
            and user-friendly digital experiences.
          </p>

          <p>
            I enjoy combining development and design to build
            straightforward solutions that are easy to understand
            and comfortable to use.
          </p>

          <div class="about-info">
            <div>
              <span>Name</span>
              <strong>Dran Magdaraog</strong>
            </div>
            <div>
              <span>Email</span>
              <strong class="email-value">dranrebdmagaraog@gmail.com</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Northern Samar, Philippines</strong>
            </div>
          </div>
        </div>

        <div class="about-photo">
          <img src="${aboutImage}" alt="Workspace photograph for the About section" />
        </div>
      </div>

      <div class="skills-area">
        <div class="skills-heading">
          <p class="eyebrow">MY SKILLS</p>
          <h3>Technologies I work with</h3>
        </div>

        <div class="skills-grid">
          <div class="skill-column">
            <h4>Frontend</h4>
            <div class="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div class="skill-column">
            <h4>Backend</h4>
            <div class="skill-list">
              <span>Node.js</span>
            </div>
          </div>

          <div class="skill-column">
            <h4>Database</h4>
            <div class="skill-list">
              <span>MySQL</span>
            </div>
          </div>

          <div class="skill-column">
            <h4>Tools</h4>
            <div class="skill-list">
              <span>Figma</span>
              <span>Canva</span>
              <span>Git</span>
              <span>Android Studio</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>Photoshop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="page-section">
    <div class="page-inner">
      <div class="section-top project-section-top">
        <div>
          <p class="eyebrow">SELECTED WORK</p>
          <h2 class="section-title">My Projects</h2>
          <p class="section-description">
            A selection of projects that reflect my interest
            in practical applications and clean user experiences.
          </p>
        </div>

        <div class="project-filters" aria-label="Filter projects">
          <button class="filter-button active" data-filter="all" aria-pressed="true">
            All
          </button>
          <button class="filter-button" data-filter="mobile" aria-pressed="false">
            Mobile App
          </button>
          <button class="filter-button" data-filter="software" aria-pressed="false">
            Web / Desktop Software
          </button>
        </div>
      </div>

      <div class="projects-grid">
      </div>

      <p class="empty-projects empty-project-list" hidden>
        No projects have been added here yet.
        Check back later for updates.
      </p>
    </div>
  </section>

  <section id="certificates" class="page-section">
    <div class="page-inner">
      <div class="section-top project-section-top">
        <div>
          <p class="eyebrow">RECOGNITION</p>
          <h2 class="section-title">Certificates &amp; Achievements</h2>
          <p class="section-description">
            Courses I've completed and milestones I've reached
            along the way as a student and developer.
          </p>
        </div>

        <div class="project-filters credential-filters" aria-label="Filter certificates and achievements">
          <button class="filter-button active" data-filter="all" aria-pressed="true">
            All <span class="filter-count" data-count="all"></span>
          </button>
          <button class="filter-button" data-filter="certificate" aria-pressed="false">
            Certificates <span class="filter-count" data-count="certificate"></span>
          </button>
          <button class="filter-button" data-filter="achievement" aria-pressed="false">
            Achievements <span class="filter-count" data-count="achievement"></span>
          </button>
        </div>
      </div>

      <div class="credentials-grid"></div>

      <p class="empty-projects empty-credentials" hidden></p>
    </div>
  </section>

  <section id="resume" class="page-section">
    <div class="page-inner">
      <div class="section-top">
        <div>
          <p class="eyebrow">RESUME</p>
          <h2 class="section-title">My Resume</h2>
          <p class="section-description">
            An overview of my education and current technical skills.
          </p>
        </div>

        ${HAS_RESUME ? `
        <a href="/resume.pdf" class="button button-dark" download>
          Download CV <span>↓</span>
        </a>` : ''}
      </div>

      <div class="resume-grid">
        <div class="resume-block">
          <p class="eyebrow">EDUCATION</p>

          <div class="timeline-item">
            <div class="timeline-date">PRESENT</div>
            <div>
              <h3>Bachelor's Degree in Information Technology</h3>
              <p>University of Eastern Philippines</p>
            </div>
          </div>
        </div>

        <div class="resume-block">
          <p class="eyebrow">TECHNICAL SKILLS</p>

          <div class="resume-skill-grid">
            <div>
              <h4>Frontend</h4>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>

            <div>
              <h4>Backend</h4>
              <p>Node.js</p>
            </div>

            <div>
              <h4>Database</h4>
              <p>MySQL</p>
            </div>

            <div>
              <h4>Tools</h4>
              <p>Figma · Canva</p>
              <p>Git · Android Studio</p>
              <p>Postman · VS Code</p>
              <p>Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="page-section contact-section">
    <div class="page-inner">
      <div class="contact-grid">
        <div class="contact-copy">
          <p class="eyebrow">GET IN TOUCH</p>
          <h2 class="contact-title">Let's Work<br />Together</h2>

          <p>
            Have a project, idea, or opportunity in mind?
            Feel free to reach out and send me a message.
          </p>

          <div class="contact-info">
            <div>
              <span>Email</span>
              <a href="mailto:dranrebdmagaraog@gmail.com">
                dranrebdmagaraog@gmail.com
              </a>
            </div>

            <div>
              <span>Location</span>
              <p>Northern Samar, Philippines</p>
            </div>

            <div>
              <span>Response Time</span>
              <p>Usually within 24–48 hours</p>
            </div>
          </div>
        </div>

        <form
          id="contact-form"
          class="contact-form"
          action="https://formspree.io/f/myezrqea"
          method="POST"
        >
          <div class="form-group">
            <label for="name">NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autocomplete="name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">EMAIL</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autocomplete="email"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button type="submit" class="button button-dark form-submit">
            Send Message <span>↗</span>
          </button>

          <p id="form-message" class="form-message" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="#home" class="logo">DM</a>
      <p>Building better digital experiences.</p>
    </div>

    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#certificates">Certificates</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </nav>

    <p class="copyright">© 2026 Dran Magdaraog</p>
  </div>
</footer>

<div class="project-modal" id="project-modal" aria-hidden="true">
  <div class="modal-overlay" data-close-project></div>

  <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
    <button class="modal-close" aria-label="Close" data-close-project>×</button>

    <div class="modal-heading">
      <p class="eyebrow" id="project-modal-label"></p>
      <h2 id="project-modal-title"></h2>
      <p id="project-modal-subtitle"></p>
    </div>

    <div class="project-gallery">
      <div class="gallery-main">
        <img id="project-modal-img" alt="" />
      </div>
      <div class="gallery-thumbnails" id="project-modal-thumbs" aria-label="Project screenshots"></div>
    </div>

    <div class="modal-details">
      <div>
        <p class="eyebrow">OVERVIEW</p>
        <p id="project-modal-overview"></p>
      </div>
      <div>
        <p class="eyebrow">KEY FEATURES</p>
        <ul id="project-modal-features"></ul>
      </div>
      <div>
        <p class="eyebrow">MY ROLE</p>
        <ul id="project-modal-role"></ul>
        <div class="modal-tags" id="project-modal-tags"></div>
      </div>
    </div>

    <div class="modal-bottom" id="project-modal-links"></div>
  </div>
</div>

<div class="project-modal credential-modal" id="credential-modal" aria-hidden="true">
  <div class="modal-overlay" data-close-credential></div>

  <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="credential-modal-title">
    <button class="modal-close" aria-label="Close" data-close-credential>×</button>

    <div class="modal-heading">
      <p class="eyebrow" id="credential-modal-type"></p>
      <h2 id="credential-modal-title"></h2>
      <p id="credential-modal-meta"></p>
    </div>

    <div class="gallery-main credential-modal-image">
      <img id="credential-modal-img" alt="" />
    </div>

    <p class="credential-modal-description" id="credential-modal-description"></p>

    <div class="modal-bottom" id="credential-modal-bottom">
      <a class="button button-dark" id="credential-modal-link" target="_blank" rel="noopener">
        Verify Credential <span>↗</span>
      </a>
    </div>
  </div>
</div>

<button class="back-to-top" aria-label="Back to top">↑</button>
`

// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open')
  menuToggle.classList.toggle('open', isOpen)
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

document.querySelectorAll('.nav-link, .nav-contact, .footer-nav a, .logo').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    menuToggle.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
})

// Active navigation section
const navigationLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('main section[id]')

if ('IntersectionObserver' in window) {
  const visibleSections = new Set()

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target)
      else visibleSections.delete(entry.target)
    })

    const current = [...sections].find((section) => visibleSections.has(section))
    if (!current) return

    navigationLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`)
    })
  }, {
    rootMargin: '-25% 0px -55% 0px'
  })

  sections.forEach((section) => sectionObserver.observe(section))
}

// Projects — cards are generated from src/projects.js
const projectsGrid = document.querySelector('.projects-grid')

projectsGrid.innerHTML = projects.map((project, index) => `
  <article class="project-card" data-category="${project.category}">
    <div class="project-card-image">
      <img src="${project.images[0].src}" alt="${escapeHTML(project.images[0].alt)}" loading="lazy" />
    </div>
    <div class="project-card-content">
      <p class="project-number">${String(index + 1).padStart(2, '0')} · ${escapeHTML(project.label)}</p>
      <h3>${escapeHTML(project.title)}</h3>
      <p class="project-description">${escapeHTML(project.description)}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}
      </div>
      <button class="project-button" data-project="${index}">
        View Project <span>↗</span>
      </button>
    </div>
  </article>`).join('')

// Project category filters
const filterButtons = document.querySelectorAll('#projects .filter-button')
const projectCards = document.querySelectorAll('.project-card')
const emptyProjects = document.querySelector('#projects .empty-projects')

emptyProjects.hidden = projectCards.length > 0

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter

    filterButtons.forEach((item) => {
      const isActive = item === button
      item.classList.toggle('active', isActive)
      item.setAttribute('aria-pressed', String(isActive))
    })

    let visibleCount = 0

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter
      card.hidden = !matches

      if (matches) visibleCount += 1
    })

    emptyProjects.hidden = visibleCount > 0
  })
})


// Project details modal with screenshot gallery
const projectModal = document.querySelector('#project-modal')
const projectModalImage = projectModal.querySelector('#project-modal-img')
const projectThumbs = projectModal.querySelector('#project-modal-thumbs')
let lastProjectTrigger = null

function showProjectImage(project, imageIndex) {
  const image = project.images[imageIndex]
  projectModalImage.src = image.src
  projectModalImage.alt = image.alt

  projectThumbs.querySelectorAll('.gallery-thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === imageIndex)
    thumb.setAttribute('aria-pressed', String(i === imageIndex))
  })
}

function projectLink(url, label, style) {
  return url
    ? `<a class="button ${style}" href="${escapeHTML(url)}" target="_blank" rel="noopener">${label} <span>↗</span></a>`
    : ''
}

function openProjectModal(project, trigger) {
  lastProjectTrigger = trigger

  projectModal.querySelector('#project-modal-label').textContent = project.label
  projectModal.querySelector('#project-modal-title').textContent = project.title
  projectModal.querySelector('#project-modal-subtitle').textContent = project.subtitle
  projectModal.querySelector('#project-modal-overview').textContent = project.overview
  projectModal.querySelector('#project-modal-features').innerHTML =
    project.features.map((item) => `<li>${escapeHTML(item)}</li>`).join('')
  projectModal.querySelector('#project-modal-role').innerHTML =
    project.role.map((item) => `<li>${escapeHTML(item)}</li>`).join('')
  projectModal.querySelector('#project-modal-tags').innerHTML =
    project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')

  projectThumbs.innerHTML = project.images.map((image, i) => `
    <button class="gallery-thumbnail" data-image="${i}" aria-label="Show screenshot ${i + 1}: ${escapeHTML(image.alt)}">
      <img src="${image.src}" alt="" loading="lazy" />
    </button>`).join('')
  projectThumbs.onclick = (event) => {
    const thumb = event.target.closest('[data-image]')
    if (thumb) showProjectImage(project, Number(thumb.dataset.image))
  }
  showProjectImage(project, 0)

  const links = [
    projectLink(project.liveUrl, 'View Live Site', 'button-dark'),
    projectLink(project.caseStudyUrl, 'Read Case Study', 'button-light'),
    projectLink(project.codeUrl, 'View Code on GitHub', 'button-light'),
  ].join('')
  const linksArea = projectModal.querySelector('#project-modal-links')
  linksArea.innerHTML = links
  linksArea.hidden = !links

  projectModal.classList.add('open')
  projectModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  projectModal.querySelector('.modal-close').focus()
}

function closeProjectModal() {
  projectModal.classList.remove('open')
  projectModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
  lastProjectTrigger?.focus()
}

projectsGrid.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project]')
  if (!trigger) return
  openProjectModal(projects[Number(trigger.dataset.project)], trigger)
})

projectModal.querySelectorAll('[data-close-project]').forEach((element) => {
  element.addEventListener('click', closeProjectModal)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModal.classList.contains('open')) {
    closeProjectModal()
  }
})

// Certificates & Achievements
const credentialsGrid = document.querySelector('.credentials-grid')
const emptyCredentials = document.querySelector('.empty-credentials')
const credentialFilterButtons = document.querySelectorAll('.credential-filters .filter-button')
const credentialModal = document.querySelector('#credential-modal')

const credentialLabels = {
  certificate: 'CERTIFICATE',
  achievement: 'ACHIEVEMENT'
}

const credentialIcons = {
  certificate: `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="9" width="36" height="26" rx="1" />
      <path d="M13 17h22M13 23h14" />
      <circle cx="33" cy="33" r="6" />
      <path d="M29.5 38l-1.5 6 5-2.5 5 2.5-1.5-6" />
    </svg>`,
  achievement: `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 7h16v10a8 8 0 0 1-16 0z" />
      <path d="M16 10H9v3a7 7 0 0 0 7 7M32 10h7v3a7 7 0 0 1-7 7" />
      <path d="M24 25v8M17 41h14M19 41l1-8h8l1 8" />
    </svg>`
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function credentialType(item) {
  return item.type === 'achievement' ? 'achievement' : 'certificate'
}

credentialsGrid.innerHTML = credentials.map((item, index) => {
  const type = credentialType(item)
  const media = item.image
    ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" />`
    : `<div class="credential-placeholder">${credentialIcons[type]}</div>`
  const action = item.image
    ? `<button class="project-button" data-credential="${index}">View ${type === 'certificate' ? 'Certificate' : 'Details'} <span>↗</span></button>`
    : item.link
      ? `<a class="project-button" href="${escapeHTML(item.link)}" target="_blank" rel="noopener">View Credential <span>↗</span></a>`
      : ''

  return `
    <article class="credential-card" data-category="${type}">
      <div class="credential-card-image">${media}</div>
      <div class="credential-card-content">
        <p class="project-number">${credentialLabels[type]}${item.date ? ` · ${escapeHTML(item.date)}` : ''}</p>
        <h3>${escapeHTML(item.title)}</h3>
        ${item.issuer ? `<p class="credential-issuer">${escapeHTML(item.issuer)}</p>` : ''}
        ${item.description ? `<p class="credential-description">${escapeHTML(item.description)}</p>` : ''}
        ${action}
      </div>
    </article>`
}).join('')

document.querySelectorAll('.filter-count').forEach((count) => {
  const filter = count.dataset.count
  const total = credentials.filter((item) => filter === 'all' || credentialType(item) === filter).length
  count.textContent = total ? `(${total})` : ''
})

const emptyCredentialText = {
  all: 'No certificates or achievements have been added yet. Check back later for updates.',
  certificate: 'No certificates have been added yet. Check back later for updates.',
  achievement: 'No achievements have been added yet. Check back later for updates.'
}

function filterCredentials(filter) {
  let visibleCount = 0

  credentialsGrid.querySelectorAll('.credential-card').forEach((card) => {
    const matches = filter === 'all' || card.dataset.category === filter
    card.hidden = !matches
    if (matches) visibleCount += 1
  })

  emptyCredentials.textContent = emptyCredentialText[filter]
  emptyCredentials.hidden = visibleCount > 0
  credentialsGrid.hidden = visibleCount === 0
}

credentialFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    credentialFilterButtons.forEach((item) => {
      const isActive = item === button
      item.classList.toggle('active', isActive)
      item.setAttribute('aria-pressed', String(isActive))
    })

    filterCredentials(button.dataset.filter)
  })
})

filterCredentials('all')

let lastCredentialTrigger = null

function openCredentialModal(item, trigger) {
  const type = credentialType(item)
  lastCredentialTrigger = trigger

  credentialModal.querySelector('#credential-modal-type').textContent = credentialLabels[type]
  credentialModal.querySelector('#credential-modal-title').textContent = item.title
  credentialModal.querySelector('#credential-modal-meta').textContent =
    [item.issuer, item.date].filter(Boolean).join(' · ')

  const image = credentialModal.querySelector('#credential-modal-img')
  image.src = item.image
  image.alt = item.title

  const description = credentialModal.querySelector('#credential-modal-description')
  description.textContent = item.description || ''
  description.hidden = !item.description

  const link = credentialModal.querySelector('#credential-modal-link')
  credentialModal.querySelector('#credential-modal-bottom').hidden = !item.link
  if (item.link) link.href = item.link

  credentialModal.classList.add('open')
  credentialModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  credentialModal.querySelector('.modal-close').focus()
}

function closeCredentialModal() {
  credentialModal.classList.remove('open')
  credentialModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
  lastCredentialTrigger?.focus()
}

credentialsGrid.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-credential]')
  if (!trigger) return
  openCredentialModal(credentials[Number(trigger.dataset.credential)], trigger)
})

credentialModal.querySelectorAll('[data-close-credential]').forEach((element) => {
  element.addEventListener('click', closeCredentialModal)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && credentialModal.classList.contains('open')) {
    closeCredentialModal()
  }
})

// Contact form using Formspree
const contactForm = document.querySelector('#contact-form')
const formMessage = document.querySelector('#form-message')
const submitButton = contactForm.querySelector('button[type="submit"]')

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const originalButtonHTML = submitButton.innerHTML

  submitButton.disabled = true
  submitButton.textContent = 'Sending...'
  formMessage.textContent = ''
  formMessage.classList.remove('show', 'error')

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        Accept: 'application/json'
      }
    })

    const data = await response.json().catch(() => ({}))

    if (response.ok) {
      formMessage.textContent = 'Message sent successfully! Thank you for reaching out.'
      formMessage.classList.add('show')
      contactForm.reset()
    } else {
      formMessage.textContent =
        data.errors?.map((error) => error.message).join(', ') ||
        'Something went wrong. Please try again.'
      formMessage.classList.add('show', 'error')
    }
  } catch {
    formMessage.textContent =
      'Unable to send your message. Please check your connection and try again.'
    formMessage.classList.add('show', 'error')
  } finally {
    submitButton.disabled = false
    submitButton.innerHTML = originalButtonHTML
  }
})

// Back to top
const backToTop = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500)
}, { passive: true })

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
