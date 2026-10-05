import type { LessonData } from '../../types';

export const numbersFactorsAndPrimesLesson: LessonData = {
  id: 'numbers-factors-and-primes',
  topicId: 'numbers',
  topicTitle: 'Numbers',
  title: 'Factors & prime numbers',
  subtitle: 'The fundamental building blocks that multiply into all whole numbers.',
  estimatedMinutes: 7,
  intro: {
    heading: 'Can you form a rectangle with 7 tiles?',
    coreDefinition: 'Factors are the numbers that multiply together to make another number. A prime number can only form a 1-wide rectangle.',
    whyItMatters:
      'Prime numbers (2, 3, 5, 7, 11...) are the chemical elements of arithmetic. Every number is formed by multiplying prime building blocks.',
    keyTakeaway: 'Composite numbers make rectangles. Prime numbers can only form a single straight line.',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'Visualizing factors as rectangles',
    description: 'Notice which numbers can be arranged into grids and which cannot.',
    items: [
      {
        id: 'fp-ex-1',
        title: '12 is Composite (Many rectangles)',
        description: '12 can be arranged as 1×12, 2×6, or 3×4. Its factors are 1, 2, 3, 4, 6, 12.',
        fractionText: '3 × 4 = 12',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 4 },
          label: '12 blocks form a 3×4 rectangle',
        },
        insight: 'Having multiple factor pairs gives composite numbers flexible layouts.',
      },
      {
        id: 'fp-ex-2',
        title: '7 is Prime (Only 1 straight line)',
        description: 'Try as you might, 7 blocks can only ever form a 1×7 line. Its only factors are 1 and 7.',
        fractionText: '1 × 7 = 7',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 1, cols: 7 },
          label: '7 blocks cannot form any other rectangle',
        },
        insight: '7 cannot be broken down into smaller equal groups.',
      },
      {
        id: 'fp-ex-3',
        title: '2 is the only EVEN prime number',
        description: '2 can only be 1×2. Every larger even number can be split in half, so they are all composite.',
        fractionText: '1 × 2 = 2',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 1, cols: 2 },
          label: '2 is the smallest prime',
        },
        insight: 'All other even numbers are divisible by 2.',
      },
    ],
  },
  visualLab: {
    title: 'The Grid Factoring Lab',
    subtitle: 'Test which numbers can form rectangles of more than 1 row.',
    interactiveType: 'array-grid',
    instructions: 'Resize the grid rows and columns. Observe how composite numbers form rectangles while primes refuse.',
    keyInsights: [
      'Factors are the side lengths of a rectangle',
      'Prime numbers have exactly two factors: 1 and itself',
      '1 is neither prime nor composite',
    ],
  },
  questions: [
    {
      id: 'q-fap-1',
      type: 'multiple-choice',
      questionText: 'Which of the following numbers is a PRIME number?',
      choices: [
        { id: 'q-fap-1-a', text: '9 (can be 3 × 3)' },
        { id: 'q-fap-1-b', text: '13' },
        { id: 'q-fap-1-c', text: '15 (can be 3 × 5)' },
        { id: 'q-fap-1-d', text: '21 (can be 3 × 7)' },
      ],
      correctChoiceId: 'q-fap-1-b',
      explanation: '13 cannot be divided evenly by 2, 3, 4, 5, etc. Its only factors are 1 and 13.',
      hint: 'Look for the number that cannot be formed by multiplying smaller whole numbers.',
    },
    {
      id: 'q-fap-2',
      type: 'multiple-choice',
      questionText: 'What are all the factors of 10?',
      choices: [
        { id: 'q-fap-2-a', text: '1, 2, 5, 10' },
        { id: 'q-fap-2-b', text: '2, 5' },
        { id: 'q-fap-2-c', text: '1, 10' },
      ],
      correctChoiceId: 'q-fap-2-a',
      explanation: '1×10 = 10, and 2×5 = 10. The factors are 1, 2, 5, and 10.',
      hint: 'Include 1 and 10 as well as the middle factors 2 and 5.',
    },
  ],
  completion: {
    title: 'You understand factors and primes.',
    subtitle: 'The molecular building blocks of numbers are unraveled.',
    summaryPoints: [
      'Factors make rectangles.',
      'Primes have only 1 and itself as factors.',
      '2 is the only even prime.',
    ],
    nextLessonId: 'arithmetic-multiplication-as-arrays',
    nextLessonTitle: 'Multiplication as grids & arrays',
  },
};
