# Foundu 📐

> **Understand the basics. Build everything else from there.**

Foundu is a calm, modern web learning platform designed to help students and self-learners build genuine mathematical intuition. Instead of emphasizing rote memorization or test tricks, Foundu breaks foundational concepts down into visual, first-principles models that stick.

---

## ✨ Features

- **Zero-Scroll, Viewport-Fitted Learning Flow**: Every lesson is structured into 4 compact, high-impact stages designed to fit without tedious vertical scrolling:
  1. **01 Intro**: Crisp, jargon-free core definition with an interactive visual manipulative hook.
  2. **02 Visual Examples**: Interactive tabbed carousel explorer showing focused visual models and intuition insights one at a time.
  3. **03 Interactive Visual Lab**: Hands-on mathematical laboratories where learners slice, scale, balance, and slide values to see mathematical laws in real time.
  4. **04 Active Practice**: Conceptual questions with visual choices, instant visual confirmation, and detailed feedback.
  5. **Complete**: Quiet, dignified recap and progress milestone.
- **Interactive Visual Manipulatives**:
  - `FractionBar`: Segmented fractional bar models with customizable slicing, shading, and highlights.
  - `SubdivisionSimulator`: Live multiplier demonstrating physical slice invariance ($1/2 = 2/4 = 3/6 = 4/8$).
  - `FractionComparison`: Side-by-side relative size comparisons with benchmark 1/2 markers.
  - `DecimalGrid`: 100-cell grid with Tenths (columns) and Hundredths (squares) toggling and direct comparison duels (0.4 vs 0.35).
  - `PercentageGrid`: 100-cell ruler with live slider and fraction/decimal synchronization.
  - `BalanceScale`: Mechanical balance with fulcrum, unknown $x$ boxes, and marble weights to visualize algebraic equality.
  - `ArrayMultiplier`: Rows $\times$ columns spatial area grid with 90° rotation proof ($A \times B = B \times A$).
  - `NegativeLine`: Altitude & depth, freezing & sub-zero temperature line showing distance from zero.
  - `RatioVisualizer`: Color-coded token ratio mixer & scaler (part-to-part and part-to-whole).
  - `MetricLadder`: Base-10 step ladder demonstrating decimal shifts across km, m, cm, mm.
  - `DivisionSharing`: Fair-sharing plates with automatic remainder tray.
  - `FractionAddition`: Visual sum bar demonstrating why denominators remain unchanged.
- **Complete Foundation Curriculum (24 Active Visual Lessons)**:
  - 🍕 **Fractions**: What is a fraction?, Equivalent fractions, Comparing fractions, Simplifying fractions, Adding fractions.
  - 🔢 **Decimals**: Decimal place value, Comparing decimals, Fractions ↔ Decimals.
  - 💯 **Percentages**: What percentages mean, Fractions ↔ Percentages, Finding percentages.
  - 🧮 **Numbers**: Negative numbers on the line, Place value & magnitude, Factors & prime numbers.
  - ✖️ **Arithmetic**: Multiplication as grids & arrays, Division as sharing & grouping, Order of operations.
  - ⚖️ **Early Algebra**: Equations as balance scales, What is a variable?
  - 📊 **Ratios**: What ratios represent, Equivalent ratios & scaling, Solving proportions.
  - 🔄 **Conversions**: The metric ladder, Time & rates.
- **Seamless Local Persistence**: Progress, active lesson stages, and submitted answers are saved locally via `localStorage`—no login required.
- **⚡ Keyboard Shortcuts for Speed**:
  - **Visual Lab & Manipulatives**: `1`-`8` (Select cuts/slices), `Enter ↵` / `N` (Advance Stage), `P` (Previous Stage), `R` (Reset tool).
  - **Speed Practice**: `1`-`4` (Select answer choice), `Enter ↵` (Submit / Next Question), `R` (Retry), `P` (Previous Question).
  - **Navigation**: `H` (Home), `T` (Topics Library), `?` (Shortcuts modal), `Esc` (Close / Return to library).
- **Calm Editorial Aesthetic**: Designed for cognitive focus using an organic warm palette (`#FAF9F5`), typography powered by **Plus Jakarta Sans** and **JetBrains Mono**, and zero clutter or gamification noise.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/azanabdullah2752012-ui/FoundU.git

# Navigate into the project
cd foundu

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/FoundU/` in your browser.

---

## 📦 Build & Deploy

```bash
# Type check and build production bundle
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📜 License

MIT License. Designed and built with focus and care.
