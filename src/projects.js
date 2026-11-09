// ─────────────────────────────────────────────────────────────
// Projects
//
// To add a project, copy the Ipon entry below and change the details.
//
//   category     'software' (Web / Desktop Software) or 'mobile' (Mobile App)
//   label        Short type shown above the title, e.g. 'WEB APP'
//   title        Project name
//   subtitle     One line shown under the title in the details popup
//   description  Two or three sentences for the card
//   tags         Technologies used
//   images       Imported pictures; the first one is the card cover.
//                Put files in src/assets and import them at the top.
//   overview     Paragraph shown in the details popup
//   features     Bullet points: what it does
//   role         Bullet points: what YOU did (design, code, research…)
//   liveUrl      Link to the deployed site ('' to hide the button)
//   codeUrl      Link to the GitHub repo   ('' to hide the button)
//   caseStudyUrl Link to a case study      ('' to hide the button)
// ─────────────────────────────────────────────────────────────

import pilaLanding from './assets/pila-landing.jpg'
import pilaConsole from './assets/pila-console.jpg'
import pilaDisplay from './assets/pila-display.jpg'
import pilaDashboard from './assets/pila-dashboard.jpg'
import pilaJoinMobile from './assets/pila-join-mobile.jpg'
import iponDashboard from './assets/ipon-dashboard.jpg'
import iponDashboardDark from './assets/ipon-dashboard-dark.jpg'
import iponSetup from './assets/ipon-setup.jpg'
import iponPlan from './assets/ipon-plan.jpg'
import iponCaseStudy from './assets/ipon-case-study.jpg'
import iponMobile from './assets/ipon-mobile.jpg'

// Live site and source code for Pila.
const PILA_LIVE_URL = 'https://pila-5gjs.onrender.com'
const PILA_CODE_URL = 'https://github.com/Dran511/Pila'

// Live site and source code for Ipon.
const IPON_LIVE_URL = 'https://ipon-chi.vercel.app'
const IPON_CODE_URL = 'https://github.com/Dran511/Ipon'

export const projects = [
  {
    category: 'software',
    label: 'FULL-STACK WEB APP · REAL-TIME',
    title: 'Pila — Queue System',
    subtitle: 'Get a queue number from your phone and wait anywhere, not standing in line',
    description:
      'A real-time queue system for health centers and government offices. People scan a QR code to get a number, ' +
      'staff call the next person with one button, and a TV display board announces it instantly.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Testing'],
    images: [
      { src: pilaLanding, alt: 'Pila landing page: skip the line, not your turn' },
      { src: pilaConsole, alt: 'Staff counter console with the current person and the waiting list' },
      { src: pilaDisplay, alt: 'Waiting-room TV display board showing the number at each window' },
      { src: pilaDashboard, alt: 'Admin dashboard with average wait, no-show rate and arrivals by hour' },
      { src: pilaJoinMobile, alt: 'Join page on a phone with services, people waiting and estimated waits' },
    ],
    overview:
      'In many Philippine public offices, the queue is the waiting room: people arrive before opening and stand in ' +
      'one line for hours. Pila keeps the order of the line but frees the people in it. Their phone shows their place ' +
      'and an estimated wait, and alerts them when it is almost their turn. Built as a full-stack app with a real ' +
      'database, sign-in with roles, live updates over WebSockets, automated tests and continuous integration.',
    features: [
      'Join by QR code with no app or account; live position, estimated wait and turn alerts',
      'Priority lane for senior citizens, PWDs and pregnant women; English and Filipino',
      'Staff console: one-key "done, call next", recall, no-show and walk-in tickets',
      'TV display board with a chime and spoken announcements',
      'Admin dashboard: wait times, no-show rate, busiest hour; manage services, counters and staff',
    ],
    role: [
      'Back-end: Node.js + Express API, PostgreSQL schema and migrations, JWT cookie auth with admin/staff roles',
      'Concurrency: row locking so two counters can never call the same person, atomic daily numbering',
      'Real-time: Socket.IO rooms pushing queue snapshots to phones, staff screens and the TV',
      'Front-end: React + TypeScript, responsive and accessible, hand-built SVG charts',
      'Quality: 30 automated tests, GitHub Actions CI, deployed on Render with Neon Postgres',
    ],
    liveUrl: PILA_LIVE_URL,
    codeUrl: PILA_CODE_URL,
    caseStudyUrl: '',
  },
  {
    category: 'software',
    label: 'WEB APP · PRODUCT DESIGN',
    title: 'Ipon — Budgeting App',
    subtitle: 'One number that tells young Filipino earners what they can safely spend',
    description:
      'A budgeting web app redesigned after researching five popular apps and 1,500+ negative reviews. ' +
      'It turns pay, bills and savings into one "safe to spend" number, with a one-minute setup for first-time users.',
    tags: ['React', 'TypeScript', 'UX Research', 'UI Design', 'Accessibility'],
    images: [
      { src: iponDashboard, alt: 'Ipon home screen showing the safe-to-spend amount, upcoming bills and everyday spending' },
      { src: iponSetup, alt: 'Ipon welcome screen offering a one-minute setup or sample data' },
      { src: iponPlan, alt: 'Ipon monthly plan with take-home pay, recurring bills and savings' },
      { src: iponDashboardDark, alt: 'Ipon home screen in dark mode' },
      { src: iponMobile, alt: 'Ipon on a phone with a bottom tab bar and add button' },
      { src: iponCaseStudy, alt: 'The Ipon case study page with research findings' },
    ],
    overview:
      'Ipon ("to save" in Filipino) answers one question: how much can I safely spend today? ' +
      'Research showed people quit budgeting apps that feel confusing or like "a second job", love a single ' +
      '"left to spend" number but distrust it when the math is hidden, and value seeing upcoming bills. ' +
      'Version 2 was redesigned around those findings — adding what was truly needed and removing what wasn’t.',
    features: [
      'Safe-to-spend number with a per-day amount and the full calculation one tap away',
      'Recurring bills (rent, utilities, padala) with one-tap "Paid" and undo',
      'One-minute guided setup, or instant sample data for visitors',
      'Fast logging: optional notes, Today / Yesterday date chips, tap any item to edit',
      'Backup, restore and CSV export — data never leaves the device',
    ],
    role: [
      'Research: competitor analysis and synthesis of app-store review studies',
      'UX: proto-persona, information architecture and first-run onboarding',
      'UI: minimal design system with light and dark themes',
      'Front-end: React + TypeScript, accessible and library-free',
    ],
    liveUrl: IPON_LIVE_URL,
    codeUrl: IPON_CODE_URL,
    caseStudyUrl: IPON_LIVE_URL ? `${IPON_LIVE_URL.replace(/\/$/, '')}/#/case-study` : '',
  },
]
