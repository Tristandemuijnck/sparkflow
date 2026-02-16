# SPARKFLOW — Implementation Plan

## Milestone 1: Project Setup & Foundation

_Goal: Nuxt project running with Tailwind configured and design tokens in place._

- [x] Initialize Nuxt 3 project with TypeScript
- [x] Install and configure Tailwind CSS 4 (`@nuxtjs/tailwindcss` module)
- [x] Set up `assets/css/main.css` with CSS custom properties for design tokens (colors, spacing)
- [x] Extend Tailwind theme in `tailwind.config.ts` to map tokens to utilities (e.g., `bg-bg`, `text-muted`, `border-border`)
- [x] Add Plus Jakarta Sans via Google Fonts (nuxt config or `@font-face` in main.css)
- [x] Set up Tailwind base layer with global resets (box-sizing, font-smoothing, scrollbar styling)
- [x] Create `data/phases.ts` with the full content structure for all four phases (steps, titles, descriptions, effort, deliverables, meta)
- [x] Set up page routes: `index.vue`, `strategy.vue`, `design.vue`, `develop.vue`, `test.vue`
- [x] Verify dev server runs and routes resolve

## Milestone 2: Shared Components

_Goal: All reusable components built and tested in isolation._

- [ ] **GeoShape.vue** — Accepts a `phase` prop, renders the correct SVG (icosahedron → dodecahedron → faceted sphere → smooth sphere) with slow rotation animation
- [ ] **StepCard.vue** — Uniform card component: step number, SVG icon, title, description, meta bar with effort + deliverable tags. Accepts step data as props
- [ ] **StepGrid.vue** — 3-column grid wrapper with 1px border lines. Renders array of StepCard components. Responsive: 3 cols → 2 cols → 1 col
- [ ] **PhaseTopBar.vue** — Phase number display + four phase icon buttons. Accepts `activePhase` prop to highlight current. Icons are clickable links to other phase detail pages
- [ ] **PhaseNav.vue** — Bottom prev/next navigation. Accepts current phase, computes prev/next with looping (Test → Strategy, Strategy → Test)
- [ ] **HeroSection.vue** — Two-column hero layout for detail pages. Accepts title, description, phase prop (for shape). Alternating layout support via prop

## Milestone 3: Homepage

_Goal: Complete homepage with hero and all four phase overview sections._

- [ ] **Hero section:** Left side with logo, title ("Imagine. Create. Deliver."), subtitle, GET STARTED button. Right side with four vertical phase columns (icon, vertical name, arrow button). Columns link to phase sections via smooth scroll
- [ ] **Phase overview sections (×4):** Each section uses two-column layout with top bar (number + icons), text side (title, description, CTA button linking to detail page), visual side (GeoShape), and bottom label bar. Implement alternating layout (odd = text-left, even = text-right)
- [ ] **Loop indicator section:** Visual reinforcement of the cyclical flow (Strategy → Design → Develop → Test → repeat)
- [ ] **Footer:** SPARKFLOW branding
- [ ] **Mobile responsive:** Hero columns collapse to horizontal rows, phase sections stack to single column, visual side moves above text on mobile
- [ ] **Animations:** Hero content fade-in-up with staggered delays, scroll-triggered reveal for phase sections using Intersection Observer

## Milestone 4: Phase Detail Pages

_Goal: All four detail pages fully functional with real content._

- [ ] **Shared layout:** Build the detail page template that all four pages share. It pulls content from `data/phases.ts` based on the current route
- [ ] **Strategy page** (`/strategy`) — Wire up with 9 steps, icosahedron shape, "Planning For Success." title
- [ ] **Design page** (`/design`) — Wire up with 12 steps, dodecahedron shape, "Craft The User Experience." title
- [ ] **Develop page** (`/develop`) — Wire up with 13 steps, faceted sphere shape, "Bringing It To Life." title
- [ ] **Test page** (`/test`) — Wire up with 13 steps, smooth sphere shape, "Polish & Ship." title
- [ ] **PhaseTopBar navigation** — Clicking phase icons navigates between detail pages, active state reflects current page
- [ ] **PhaseNav bottom navigation** — Prev/next links work correctly with looping
- [ ] **Mobile responsive:** Step grid collapses, hero stacks, top bar adapts

## Milestone 5: SVG Icons & Visual Polish

_Goal: All line-art icons created, animations polished, visual fidelity matches the Figma design._

- [ ] Create line-art SVG icons for each phase (lightbulb for Strategy, pen-tool/canvas for Design, code terminal for Develop, bug for Test) — used in top bars and hero columns
- [ ] Create line-art SVG icons for each step card (28×28, stroke-only, 1.2px stroke width)
- [ ] Build all four geometric shapes as detailed SVGs (icosahedron, dodecahedron, faceted sphere, smooth sphere)
- [ ] Fine-tune hover states: phase columns (subtle bg shift), step cards (bg lightening), nav arrows (fill inversion with transition)
- [ ] Polish animation timing: hero stagger, scroll reveals, shape rotation speed
- [ ] Verify visual consistency against the original Figma designs

## Milestone 6: SEO, Performance & Launch Prep

_Goal: Production-ready static site._

- [ ] Add meta tags and Open Graph data for all pages (title, description, image)
- [ ] Ensure semantic HTML throughout (proper heading hierarchy h1→h2→h3, nav, main, section, footer elements)
- [ ] Configure `nuxt generate` for static site generation
- [ ] Run Lighthouse audit — target 90+ on all metrics
- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Device test: iPhone, Android, iPad, desktop
- [ ] Check accessibility: keyboard navigation, focus states, contrast ratios, screen reader flow
- [ ] Final content review: all step descriptions, no placeholder text
- [ ] Deploy to hosting (Vercel/Netlify)

---

## Data Structure Reference

```typescript
// data/phases.ts

interface Step {
    number: string; // "01", "02", etc.
    title: string;
    description: string;
    effort: string; // "1–2 days", "Ongoing", etc.
    deliverable: string; // "Project brief", "Figma design files", etc.
    icon: string; // Icon identifier for the step
}

interface Phase {
    id: string; // "strategy", "design", "develop", "test"
    number: string; // "001", "002", "003", "004"
    title: string; // "Planning For Success."
    label: string; // "STRATEGY."
    description: string; // Intro paragraph
    ctaText: string; // "START STRATEGY", "EXPLORE DESIGN", etc.
    shape: string; // "icosahedron", "dodecahedron", "faceted", "sphere"
    steps: Step[];
    prev: string; // Previous phase id (for nav)
    next: string; // Next phase id (for nav)
}
```

## Component Props Reference

```
GeoShape:      phase: string
StepCard:      step: Step
StepGrid:      steps: Step[]
PhaseTopBar:   activePhase: string
PhaseNav:      currentPhase: string
HeroSection:   title: string, description: string, phase: string, reverse?: boolean
```
