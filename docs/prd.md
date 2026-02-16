# SPARKFLOW — Product Requirements Document

## Overview

SPARKFLOW is an informative website that documents a personal software development workflow. It guides visitors through four iterative phases — Strategy, Design, Develop, and Test — showing the detailed steps and tasks involved in each. The site serves as both a personal reference and a portfolio piece demonstrating a structured approach to building software projects.

## Goals

1. Clearly communicate a repeatable development process from start to finish
2. Provide detailed, actionable steps for each phase that reflect real-world agency/studio practices
3. Present the information in a visually striking dark-mode design with line-art aesthetics
4. Reinforce that these phases form a continuous loop, not a one-time linear process

## Target Audience

- The developer themselves (as a reference guide)
- Potential clients or employers (as a demonstration of process maturity)
- Other developers (as inspiration or a learning resource)

---

## Site Structure

### Homepage (`/`)

#### Hero Section (viewport height)

- **Left half:** SPARKFLOW logo (top-left), large italic hero title "Imagine. Create. Deliver.", subtitle text, and a "GET STARTED" button that smooth-scrolls to the first phase section
- **Right half:** Four vertical columns, one per phase. Each column contains a line-art icon (top), the phase name in vertical text (center), and a circular arrow button (bottom). Clicking a column scrolls to that phase's overview section on the homepage. Columns are separated by 1px border lines

#### Phase Overview Sections (×4)

Each phase gets a full-viewport section on the homepage with:

- **Top bar:** Phase number (e.g., "001") on one side, four phase icons in a row (current phase highlighted) on the other side
- **Two-column layout:** One side has the phase title, description paragraph, and a CTA button linking to the detail page. The other side has the geometric SVG shape for that phase
- **Alternating layout:** Odd phases (Strategy, Develop) have text on the left and visual on the right. Even phases (Design, Test) have visual on the left and text on the right
- **Label bar:** Full-width bar at the bottom of each section showing the phase name in large uppercase text

#### Loop Indicator Section

A section between the last phase and footer that reinforces the cyclical nature: Strategy → Design → Develop → Test → (back to Strategy)

### Phase Detail Pages (`/strategy`, `/design`, `/develop`, `/test`)

All four pages share the same layout template:

#### Top Bar

- Phase number on one side
- Four phase icons as navigation (current phase visually active, others clickable to navigate between phases)

#### Hero Area

- Two-column layout matching the homepage phase sections
- Phase title (e.g., "Planning For Success.") and intro description on the text side
- Animated geometric SVG shape on the visual side

#### Section Label

- "Steps & Tasks" label on the left
- Step count (e.g., "9 Steps") on the right

#### Step Grid

- **3-column uniform grid** with 1px border lines between cards
- Each card contains:
    - **Step number** (01, 02, etc.) — top left, small, dim
    - **Line-art icon** — top right, subtle
    - **Title** — bold, prominent
    - **Description** — muted text explaining what this step involves and why
    - **Meta bar** (bottom, separated by border-top): effort estimate tag + deliverable tag

#### Bottom Navigation

- Two-column bar with previous phase (left) and next phase (right)
- Each side shows a directional arrow, "Previous"/"Next phase" label, and the phase name
- Test's "next" links to Strategy (loop)
- Strategy's "previous" links to Test (loop)

#### Footer

- SPARKFLOW branding on the left
- Current phase indicator on the right (e.g., "001 / Strategy")

---

## Phase Content

### 001 — Strategy: "Planning For Success."

9 steps: Project Kickoff & Goal Definition, Stakeholder Interviews, Competitive Analysis & Market Research, Feature Scoping & Prioritization, Tech Stack Definition, Sitemap & Information Architecture, User Personas & Stories, Timeline & Milestone Planning, Project Management Setup

### 002 — Design: "Craft The User Experience."

12 steps: Brand & Style Audit, Moodboarding & Visual Direction, Competitor UI Audit, User Flow Mapping, Low-Fidelity Wireframes & Sketches, Content Design & Strategy, High-Fidelity Designs, Design System & Component Library, Interactive Prototyping, UI/UX Review & Iteration, Accessibility Audit, Responsive Design Planning

### 003 — Develop: "Bringing It To Life."

13 steps: Repository & Environment Setup, Project Architecture & Structure, CI/CD Pipeline Setup, Design System in Code, Frontend Scaffolding, Backend & API Development, CMS & Content Integration, Feature-by-Feature Build, Third-Party Integrations, Responsive Implementation, Performance Optimization, SEO Fundamentals, Code Reviews & Refactoring

### 004 — Test: "Polish & Ship."

13 steps: Quality Assurance & Bug Fixing, Cross-Browser Testing, Device Testing, Accessibility Testing, Performance Testing, Security Review, User Acceptance Testing, Content Review & Proofreading, Staging Deployment, DNS & Domain Configuration, Production Deployment, Post-Launch Monitoring, Analytics Verification

Full step descriptions, effort estimates, and deliverables are documented in `data/phases.ts`.

---

## Design Specifications

### Visual Identity

- **Theme:** Dark mode with line-art aesthetic
- **Background:** Near-black (#0a0a0a), slightly lighter card bg (#0f0f0f)
- **Borders:** Thin 1px lines (#1e1e1e) forming a bento-grid structure
- **Typography:** Plus Jakarta Sans, weights 300–800, italic for display text
- **Buttons:** White background, black text, uppercase with letter-spacing
- **Icons:** Custom SVG line-art with 1–1.5px stroke width, no fills
- **Corners:** Sharp/square — no border-radius anywhere

### Geometric Shape Progression

Each phase has a unique wireframe geometric shape that symbolizes the project's evolution:
| Phase | Shape | Meaning |
|-------|-------|---------|
| Strategy | Icosahedron | Raw idea, many sharp edges |
| Design | Dodecahedron | Taking structured shape |
| Develop | Faceted sphere | Almost round, being refined |
| Test | Smooth sphere | Polished and complete |

Shapes rotate slowly (~60s per full revolution) via CSS animation.

### Responsive Behavior

- **Desktop (>900px):** Full two-column layouts, vertical phase columns in hero
- **Mobile (<900px):** Single-column stacking, hero phase columns become horizontal rows with icon + name + arrow, step grid collapses to single column
- **Breakpoint at 1100px:** Step grid goes from 3 columns to 2 columns

### Animations

- Hero content fades in and slides up on page load (staggered delays)
- Phase sections use intersection observer for scroll-triggered reveal
- Hover states on phase columns (subtle background shift), step cards (bg lightening), and nav arrows (fill inversion)

---

## Non-Functional Requirements

- **Performance:** Static site generation (SSG) via `nuxt generate` for fast loading
- **Styling:** Tailwind CSS 4 with custom theme tokens — no external UI component libraries
- **Accessibility:** Semantic HTML, sufficient color contrast, keyboard navigable, proper heading hierarchy
- **SEO:** Meta tags, Open Graph data, semantic markup, clean URLs
- **Browser support:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **No external UI libraries:** All components are custom-built using Tailwind CSS utilities

---

## Future Considerations (Out of Scope for v1)

- **Maintenance phase:** A fifth phase covering post-launch maintenance and iteration
- **Interactive progress tracking:** Ability to check off completed steps
- **Dark/light mode toggle:** Currently dark-only
- **Blog or case studies:** Linking phases to real project examples
- **Animations:** More advanced scroll-driven animations (e.g., shape morphing between phases)
