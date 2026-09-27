# Foundu 📐

> **Understand the basics. Build everything else from there.**

Foundu is a calm, modern web learning platform designed to help students and self-learners build genuine mathematical intuition. Instead of emphasizing rote memorization or test tricks, Foundu breaks foundational concepts down into visual, first-principles models that stick.

---

## ✨ Features

- **Intuition-First Learning Flow**: Every lesson is structured into 5 progressive stages:
  1. **Intro**: Clear, jargon-free definitions and real-world significance.
  2. **Visual Examples**: Interactive visual representations (bars, circles, comparative scales) with key insights.
  3. **Video Deep Dive**: Focused audio-visual breakdown with transcripts and key takeaways.
  4. **Active Practice**: Conceptual questions with hints and detailed explanations for immediate feedback.
  5. **Completion**: Lesson recap, celebration, and next step recommendations.
- **Interactive Visual Renderers**:
  - `FractionBar`: Segmented fractional bar models with customizable shading and highlights.
  - `FractionCircle`: Circular slice diagrams visualizing parts of a whole.
  - `FractionComparison`: Side-by-side relative size comparisons.
- **Curated Foundation Topics**:
  - 🍕 **Fractions**: Parts of a whole, equivalent fractions, simplification, and operations.
  - 🔢 **Decimals**: Place value, tenths, hundredths, and decimal-to-fraction conversions.
  - 💯 **Percentages**: Proportions, base-100 logic, and mental math strategies.
  - ⚖️ **Ratios**: Comparative quantities, recipe scaling, and proportion balances *(Roadmap)*.
  - 🔄 **Conversions**: Metric ladder, units of length, mass, and rates *(Roadmap)*.
- **Seamless Local Persistence**: Progress, active lesson stages, and submitted answers are saved locally via `localStorage`—no login required.
- **⚡ Keyboard Shortcuts for Speed**:
  - **Video & Playback**: `Space` (Play/Pause), `0`-`4` (0.75x, 1x, 1.25x, 1.5x, 2x), `[` / `]` (Step speed down/up), `←` / `→` (Seek ±5s), `R` (Restart), `T` (Transcript).
  - **Speed Practice**: `1`-`4` or `A`-`D` (Select answer choice), `Enter ↵` (Submit / Next Question), `R` (Retry), `P` (Previous Question).
  - **Stage & App Navigation**: `N` / `Enter ↵` (Next Stage), `P` (Prev Stage), `Alt + 1..4` (Jump to Stage 1-4), `H` (Home), `T` (Topics), `?` (Shortcuts cheat-sheet), `Esc` (Close / Exit to library).
- **Calm Editorial Aesthetic**: Designed for cognitive focus using an organic color palette (`#FAF9F5`), typography powered by **Plus Jakarta Sans** and **JetBrains Mono**, and zero clutter.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
foundu/
├── public/                 # Static assets and favicon
├── src/
│   ├── assets/             # Images and local media
│   ├── components/
│   │   ├── home/           # Landing page sections (Hero, FeaturedTopics, etc.)
│   │   ├── layout/         # Navigation bar and footer
│   │   ├── lesson/         # 5-stage lesson player & interactive question views
│   │   ├── library/        # Topic and lesson catalog with filters
│   │   └── visual/         # Visual SVG/Canvas renderers (FractionBar, etc.)
│   ├── data/
│   │   ├── lessons/        # Modular lesson definitions
│   │   └── topics.ts       # Topic registry and curriculum taxonomy
│   ├── hooks/
│   │   └── useProgress.ts  # LocalStorage-backed learning progress hook
│   ├── types/
│   │   └── index.ts        # Core TypeScript interfaces (LessonData, Topic, etc.)
│   ├── App.tsx             # Root view router & orchestrator
│   ├── index.css           # Tailwind base styles and theme tokens
│   └── main.tsx            # Application entrypoint
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** (or `pnpm` / `yarn`)

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd foundu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server with HMR. |
| `npm run build` | Compiles TypeScript types and builds the production bundle in `dist/`. |
| `npm run preview` | Locally serves the production build for testing. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) for high-speed code quality checks. |

---

## 🧩 Adding a New Lesson

1. Create a lesson definition in `src/data/lessons/<topic>-<lesson-slug>.ts` implementing the `LessonData` interface:
   ```typescript
   import type { LessonData } from '../../types';

   export const myLesson: LessonData = {
     id: 'fractions-equivalent-fractions',
     topicId: 'fractions',
     topicTitle: 'Fractions',
     title: 'Equivalent Fractions',
     subtitle: 'Why 2/4 and 1/2 measure the exact same quantity',
     estimatedMinutes: 6,
     intro: { /* ... */ },
     examples: { /* ... */ },
     video: { /* ... */ },
     questions: [ /* ... */ ],
     completion: { /* ... */ },
   };
   ```
2. Register the lesson in `src/data/topics.ts`:
   - Import and add it to `ALL_LESSONS`.
   - Set `isAvailable: true` and `statusTag: 'AVAILABLE'` under the corresponding topic.

---

## 📄 License

This project is private and maintained for the Foundu learning platform.
