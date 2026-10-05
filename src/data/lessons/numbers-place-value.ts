import type { LessonData } from '../../types';

export const numbersPlaceValueLesson: LessonData = {
  id: 'numbers-place-value',
  topicId: 'numbers',
  topicTitle: 'Numbers',
  title: 'Place value & magnitude',
  subtitle: 'The architecture of ones, tens, hundreds, and thousands in base-10.',
  estimatedMinutes: 5,
  intro: {
    heading: 'Why does the digit 5 mean fifty in 52, but five hundred in 520?',
    coreDefinition: 'In our base-10 number system, each column is worth exactly 10 times more than the column to its right.',
    whyItMatters:
      'We only use ten symbols (0–9), but we can write any infinite quantity simply by moving digits into larger rooms.',
    keyTakeaway: 'Position determines value. Every step left multiplies the worth by 10.',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'The 10x expansion ladder',
    description: 'Look at how units group into rods, rods into flats, and flats into cubes.',
    items: [
      {
        id: 'pv-1',
        title: '10 Ones make 1 Ten',
        description: '10 individual single blocks join to form 1 rod of ten.',
        fractionText: '10 × 1 = 10',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 1, cols: 10 },
          label: '1 ten = 10 ones',
        },
        insight: 'Once a column fills with 10 items, it rolls over into the next place value.',
      },
      {
        id: 'pv-2',
        title: '10 Tens make 1 Hundred',
        description: '10 rods of ten arrange to form a 10×10 flat of 100.',
        fractionText: '10 × 10 = 100',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 100 },
          label: '100 square flat',
        },
        insight: '100 is 10 times greater than 10.',
      },
      {
        id: 'pv-3',
        title: 'Zero as a place holder',
        description: 'In 305, the zero holds the tens room open so the 3 stays in the hundreds place.',
        fractionText: '305 = 300 + 0 + 5',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 5 },
          label: '3 hundreds, 0 tens, 5 ones',
        },
        insight: 'Without zero, 305 would look like 35!',
      },
    ],
  },
  visualLab: {
    title: 'The Base-10 Array & Magnitude Lab',
    subtitle: 'Resize arrays and grids to observe powers of ten multiplying area.',
    interactiveType: 'array-grid',
    instructions: 'Use the rows and columns sliders to scale quantities and observe how place values expand.',
    keyInsights: [
      'Each digit position represents a power of ten',
      'The rightmost digit is always the ones column',
      'Zero is the essential placeholder that keeps columns aligned',
    ],
  },
  questions: [
    {
      id: 'q-pv-1',
      type: 'multiple-choice',
      questionText: 'In the number 4,520, what is the value of the digit 5?',
      choices: [
        { id: 'q-pv-1-a', text: '5' },
        { id: 'q-pv-1-b', text: '50' },
        { id: 'q-pv-1-c', text: '500' },
        { id: 'q-pv-1-d', text: '5,000' },
      ],
      correctChoiceId: 'q-pv-1-c',
      explanation: 'The 5 sits in the hundreds place, so its value is 500.',
      hint: 'Count the places from right: 0 ones, 2 tens, 5 hundreds.',
    },
    {
      id: 'q-pv-2',
      type: 'multiple-choice',
      questionText: 'How many times larger is 700 than 70?',
      choices: [
        { id: 'q-pv-2-a', text: '10 times larger' },
        { id: 'q-pv-2-b', text: '100 times larger' },
        { id: 'q-pv-2-c', text: '2 times larger' },
      ],
      correctChoiceId: 'q-pv-2-a',
      explanation: 'Moving one position left on the place value chart multiplies the value by exactly 10.',
      hint: '70 × 10 = 700.',
    },
  ],
  completion: {
    title: 'You grasp the architecture of place value.',
    subtitle: 'The power of base-10 columns is clear.',
    summaryPoints: [
      'Each step left multiplies value by 10.',
      'Digits hold rooms of ones, tens, hundreds.',
      'Zero holds empty rooms open.',
    ],
    nextLessonId: 'numbers-factors-and-primes',
    nextLessonTitle: 'Factors & prime numbers',
  },
};
