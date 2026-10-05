import type { LessonData } from '../../types';

export const arithmeticMultiplicationAsArraysLesson: LessonData = {
  id: 'arithmetic-multiplication-as-arrays',
  topicId: 'arithmetic',
  topicTitle: 'Arithmetic',
  title: 'Multiplication as grids & arrays',
  subtitle: 'Why multiplying is counting equal groups in a rectangle, not memorizing tables blindly.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Multiplication is an area grid',
    coreDefinition: 'Multiplication is simply shortcut counting: arranging items into equal rows and columns.',
    whyItMatters:
      'Memorizing times tables by heart without knowing what they look like causes confusion. An array shows you the exact physical rectangle of objects.',
    keyTakeaway: 'Rows × Columns = Total Area. Turning the grid proves that 3 × 4 is identical to 4 × 3.',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'Three ways to see multiplication as groups',
    description: 'Look at these grids to understand why arrays are the foundation of geometry and algebra.',
    items: [
      {
        id: 'arr-ex-1',
        title: '3 rows of 4 items',
        description: '3 rows, each containing 4 blocks: 4 + 4 + 4 = 12.',
        fractionText: '3 × 4 = 12',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 4 },
          label: '3 rows of 4 = 12',
        },
        insight: 'Repeated addition is made visible as a rectangular tile grid.',
      },
      {
        id: 'arr-ex-2',
        title: 'Turn the rectangle: 4 rows of 3 items',
        description: 'Turn the grid 90 degrees: now you have 4 rows of 3: 3 + 3 + 3 + 3 = 12.',
        fractionText: '4 × 3 = 12',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 4, cols: 3 },
          label: '4 rows of 3 = 12',
        },
        insight: 'The total number of tiles didn’t change at all — only your perspective rotated.',
      },
      {
        id: 'arr-ex-3',
        title: 'The Commutative Rule made obvious',
        description: 'A × B always equals B × A because a rectangle has the exact same area no matter which way you turn it.',
        fractionText: 'A × B = B × A',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 2, cols: 5 },
          label: '2 × 5 = 10 and 5 × 2 = 10',
        },
        insight: 'You never have to learn two separate facts for 7 × 8 and 8 × 7.',
      },
    ],
  },
  visualLab: {
    title: 'The Grid Array Multiplier Lab',
    subtitle: 'Change rows and columns freely. Tap "Turn Grid" to watch the area rotate.',
    interactiveType: 'array-grid',
    instructions: 'Use the rows and columns sliders to resize the grid, or hover over the tiles to count them dynamically.',
    keyInsights: [
      'Multiplication counts equal groups in two dimensions',
      'The first number sets the rows, the second number sets the columns',
      'Rotating the grid proves A × B = B × A without memorizing rules',
    ],
  },
  questions: [
    {
      id: 'q-arr-1',
      type: 'multiple-choice',
      questionText: 'Which expression represents a chocolate bar with 3 rows and 5 columns?',
      choices: [
        { id: 'q-arr-1-a', text: '3 + 5 = 8' },
        { id: 'q-arr-1-b', text: '3 × 5 = 15' },
        { id: 'q-arr-1-c', text: '5 - 3 = 2' },
      ],
      correctChoiceId: 'q-arr-1-b',
      explanation: '3 rows with 5 pieces in each row gives 3 × 5 = 15 pieces in total.',
      hint: 'Multiply the rows by the columns to find the total number of pieces.',
    },
    {
      id: 'q-arr-2',
      type: 'multiple-choice',
      questionText: 'If you know that 6 × 7 = 42, what is 7 × 6?',
      choices: [
        { id: 'q-arr-2-a', text: '42' },
        { id: 'q-arr-2-b', text: '49' },
        { id: 'q-arr-2-c', text: '36' },
      ],
      correctChoiceId: 'q-arr-2-a',
      explanation: 'Turning the grid doesn’t change the total number of tiles: 6 × 7 and 7 × 6 both equal 42.',
      hint: 'Rotating a rectangle preserves its area.',
    },
  ],
  completion: {
    title: 'You see multiplication as spatial area.',
    subtitle: 'No more mindless rote memorization without understanding.',
    summaryPoints: [
      'Multiplication is equal rows and columns.',
      'Rows × Columns = Total Area.',
      'Rotating the grid proves A × B = B × A.',
    ],
    nextLessonId: 'algebra-the-balance-scale',
    nextLessonTitle: 'Equations as balance scales',
  },
};
