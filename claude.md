# SPARKFLOW

Informative website documenting a software development workflow through four iterative phases: Strategy → Design → Develop → Test. Each phase has a detail page with step cards in a uniform 3-column grid.

## Tech Stack

- Nuxt.js 3 with Vue 3 Composition API
- TypeScript
- Tailwind CSS 4 for styling with CSS custom properties for design tokens
- No UI framework — custom components matching a specific dark-mode line-art design system

## Architecture

```
pages/
  index.vue          # Homepage: hero + 4 phase overview sections
  strategy.vue       # Strategy detail page
  design.vue         # Design detail page
  develop.vue        # Develop detail page
  test.vue           # Test detail page

components/
  PhaseTopBar.vue    # Phase number + icon nav, shared across detail pages
  StepCard.vue       # Uniform grid card (number, icon, title, desc, effort, deliverable)
  StepGrid.vue       # 3-column grid wrapper
  PhaseNav.vue       # Bottom prev/next phase navigation
  GeoShape.vue       # SVG geometric shape component (accepts phase prop)
  HeroSection.vue    # Shared hero for detail pages

data/
  phases.ts          # All phase content: steps, descriptions, metadata
```

## Design System

- **Background:** #0a0a0a (--color-bg), #0f0f0f (--color-bg-card)
- **Borders:** #1e1e1e (--color-border), used extensively as grid lines
- **Text:** #ffffff primary, #888888 muted (--color-text-muted), #555555 dim (--color-text-dim)
- **Typography:** Plus Jakarta Sans (Google Fonts), weights 300–800
- **Buttons:** White bg, black text, uppercase, letter-spacing 1.5px
- **Layout:** Bento-style grid with thin 1px borders, no rounded corners
- **Icons:** Custom SVG line-art, stroke-width 1–1.5, no fill

Design tokens are defined as CSS custom properties in `assets/css/main.css` and extended in `tailwind.config.ts` via `theme.extend` so they can be used as Tailwind utilities (e.g., `bg-bg`, `text-muted`, `border-border`).

## Key Patterns

- Homepage hero: left half = title + CTA, right half = 4 vertical phase columns as navigation
- Phase sections on homepage alternate layout (text-left/visual-right, then flipped)
- Detail pages use a uniform 3-column grid for step cards
- Each phase has a unique geometric SVG shape progressing from angular to smooth:
    - Strategy = icosahedron (sharp, many edges)
    - Design = dodecahedron (structured, fewer faces)
    - Develop = faceted sphere (almost round)
    - Test = smooth sphere (polished, complete)
- Shapes rotate slowly via CSS animation (~60s per revolution)
- Bottom nav on detail pages links to prev/next phase, loops Test → Strategy

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run generate` — Static site generation
- `npm run lint` — Lint with ESLint

## Code Style

- Vue components use `<script setup lang="ts">` with Composition API
- Props defined with `defineProps<{}>()` TypeScript syntax
- Use Tailwind utility classes for styling — avoid `<style>` blocks unless absolutely necessary
- Custom utilities and design tokens defined in `assets/css/main.css` using `@theme`
- Tailwind config extended in `tailwind.config.ts` for project-specific tokens
- Phase content data lives in `data/phases.ts`, not hardcoded in templates
- SVG shapes are inline in GeoShape.vue, selected by phase prop
- Prefer semantic HTML elements over generic divs
- Use Tailwind's responsive prefixes (`md:`, `lg:`) for breakpoints — no custom media queries

## Important

- Mobile responsive: hero columns collapse to horizontal rows on mobile
- All phase detail pages share the same template/layout, only content differs
- The four phases form a continuous loop, NOT a linear process
- No external UI libraries — every component is custom
- Refer to `docs/PRD.md` for full product requirements
- Refer to `docs/PLAN.md` for implementation plan and task breakdown
