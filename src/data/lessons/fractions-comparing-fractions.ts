import type { LessonData } from '../../types';

export const fractionsComparingFractionsLesson: LessonData = {
  id: 'fractions-comparing-fractions',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  title: 'Comparing fractions',
  subtitle: 'Determining which fraction is larger through visual area, benchmark halves, and slice sizes.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Which piece is actually larger?',
    coreDefinition: 'To compare fractions, look at the size of the cuts and how many cuts you have.',
    whyItMatters:
      'Many people mistakenly think 1/8 is bigger than 1/4 because 8 is larger than 4. But more cuts produce smaller slices!',
    keyTakeaway: 'Larger denominator = more cuts = smaller individual pieces.',
    visualHookType: 'fraction-slice',
  },
  examples: {
    heading: 'Three ways to see which fraction wins',
    description: 'Look at these side-by-side comparisons to build your visual intuition.',
    items: [
      {
        id: 'comp-ex-1',
        title: 'Same denominator: Count the slices',
        description: 'When the pieces are the exact same size, more pieces always wins: 3/4 vs 1/4.',
        fractionText: '3/4 > 1/4',
        visual: {
          type: 'comparison',
          comparison: {
            fractionA: { numerator: 3, denominator: 4, label: '3/4 (Three pieces)' },
            fractionB: { numerator: 1, denominator: 4, label: '1/4 (One piece)' },
          },
        },
        insight: 'When cut sizes are identical, just count how many you have.',
      },
      {
        id: 'comp-ex-2',
        title: 'Same numerator: Smaller denominator wins',
        description: 'Both have 1 slice, but 1/2 is cut into 2 pieces while 1/4 is cut into 4.',
        fractionText: '1/2 > 1/4',
        visual: {
          type: 'comparison',
          comparison: {
            fractionA: { numerator: 1, denominator: 2, label: '1/2 (Cut in 2)' },
            fractionB: { numerator: 1, denominator: 4, label: '1/4 (Cut in 4)' },
          },
        },
        insight: 'Fewer cuts leave larger individual pieces.',
      },
      {
        id: 'comp-ex-3',
        title: 'Benchmark against one half (1/2)',
        description: 'Is 3/8 or 4/6 bigger? 3/8 is less than half (4/8), while 4/6 is more than half (3/6).',
        fractionText: '4/6 > 3/8',
        visual: {
          type: 'comparison',
          comparison: {
            fractionA: { numerator: 4, denominator: 6, label: '4/6 (More than half)' },
            fractionB: { numerator: 3, denominator: 8, label: '3/8 (Less than half)' },
          },
        },
        insight: '1/2 is the ultimate anchor on the ruler. Use it to check which fraction crosses the halfway mark.',
      },
    ],
  },
  visualLab: {
    title: 'The Fraction Comparison Lab',
    subtitle: 'Put any two fractions side-by-side. Inspect the visual overlap and see which span extends further.',
    interactiveType: 'fraction-comparison',
    instructions: 'Adjust the shaded slices for Fraction A and Fraction B. Watch the direct comparison indicator update instantly.',
    keyInsights: [
      'If two fractions share the same bottom number, the one with more shaded pieces is larger',
      'If two fractions share the same top number, the one with fewer total cuts has bigger slices',
      'Comparing against 1/2 gives an instant mental check without calculating cross products',
    ],
  },
  questions: [
    {
      id: 'q-comp-1',
      type: 'comparison',
      questionText: 'Which fraction is larger: 1/3 or 1/5?',
      promptNote: 'Imagine sharing a cake with 3 people versus 5 people.',
      visual: {
        type: 'comparison',
        comparison: {
          fractionA: { numerator: 1, denominator: 3, label: '1/3' },
          fractionB: { numerator: 1, denominator: 5, label: '1/5' },
        },
      },
      choices: [
        { id: 'q-comp-1-a', text: '1/3 is larger' },
        { id: 'q-comp-1-b', text: '1/5 is larger' },
        { id: 'q-comp-1-c', text: 'They are equal' },
      ],
      correctChoiceId: 'q-comp-1-a',
      explanation: 'Correct! Cutting into 3 parts makes bigger pieces than cutting into 5 parts. 1/3 is larger than 1/5.',
      hint: 'Think about cutting: fewer slices means each individual slice is wider.',
    },
    {
      id: 'q-comp-2',
      type: 'visual-selection',
      questionText: 'Which visual represents a fraction LARGER than 1/2?',
      choices: [
        {
          id: 'q-comp-2-a',
          text: '2/6',
          visual: { type: 'fraction-bar', totalParts: 6, shadedParts: 2, label: '2/6' },
        },
        {
          id: 'q-comp-2-b',
          text: '5/8',
          visual: { type: 'fraction-bar', totalParts: 8, shadedParts: 5, label: '5/8' },
        },
        {
          id: 'q-comp-2-c',
          text: '1/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1, label: '1/4' },
        },
      ],
      correctChoiceId: 'q-comp-2-b',
      explanation: '5/8 is more than half (4/8 = 1/2). Both 2/6 (half is 3/6) and 1/4 (half is 2/4) are smaller than half.',
      hint: 'Look for the bar that is filled past the halfway point.',
    },
  ],
  completion: {
    title: 'You can compare fractions visually with confidence.',
    subtitle: 'No more confusing large numbers with large pieces.',
    summaryPoints: [
      'More cuts = smaller slices.',
      'When denominators match, count the pieces.',
      'Use 1/2 as your visual anchor ruler.',
    ],
    nextLessonId: 'decimals-place-value',
    nextLessonTitle: 'Decimal place value',
  },
};
