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

import iponDashboard from './assets/ipon-dashboard.jpg'
import iponDashboardDark from './assets/ipon-dashboard-dark.jpg'
import iponSetup from './assets/ipon-setup.jpg'
import iponPlan from './assets/ipon-plan.jpg'
import iponCaseStudy from './assets/ipon-case-study.jpg'
import iponMobile from './assets/ipon-mobile.jpg'

// Live site and source code for Ipon.
const IPON_LIVE_URL = 'https://ipon-chi.vercel.app'
const IPON_CODE_URL = 'https://github.com/Dran511/Ipon'

export const projects = [
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
