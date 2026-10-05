import type { LessonData } from '../../types';

export const ratiosProportionsLesson: LessonData = {
  id: 'ratios-proportions',
  topicId: 'ratios',
  topicTitle: 'Ratios',
  title: 'Solving proportions',
  subtitle: 'The underlying balance of proportional relationships and finding missing values.',
  estimatedMinutes: 7,
  intro: {
    heading: 'When two ratios are set equal to each other',
    coreDefinition: 'A proportion is a statement that two ratios are equal: A / B = C / D.',
    whyItMatters:
      'If 3 pencils cost $6, how much do 12 pencils cost? A proportion solves this instantly by finding the scale factor between the two situations.',
    keyTakeaway: 'Find the multiplier connecting the known terms, then apply it to find the missing value.',
    visualHookType: 'balance-scale',
  },
  examples: {
    heading: 'Solving proportions visually',
    description: 'Look at how the multiplier reveals the unknown value.',
    items: [
      {
        id: 'prop-1',
        title: '3 pencils = $6 ⟹ 12 pencils = ?',
        description: 'Notice 12 pencils is 4 times more (3 × 4 = 12). Multiply cost by 4: $6 × 4 = $24.',
        fractionText: '3/6 = 12/24',
        visual: {
          type: 'ratio-model',
          ratioModel: { partA: 3, partB: 6, labelA: 'Pencils', labelB: 'Cost ($)', scale: 4 },
          label: 'Scale factor is ×4',
        },
        insight: 'Find how many times larger the first number grew, then multiply the second number equally.',
      },
      {
        id: 'prop-2',
        title: 'The Unit Rate Method (Find 1 first)',
        description: 'If 3 pencils cost $6, then 1 pencil costs $6 ÷ 3 = $2. For 12 pencils: 12 × $2 = $24.',
        fractionText: '1 pencil = $2',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 1, cols: 2 },
          label: 'Unit cost is $2 each',
        },
        insight: 'Finding the unit rate (cost of 1) unlocks any quantity.',
      },
      {
        id: 'prop-3',
        title: 'Map Scales (1 cm = 50 km)',
        description: 'If two cities are 3 cm apart on the map: 3 × 50 km = 150 km in reality.',
        fractionText: '1 cm : 50 km',
        visual: {
          type: 'number-line',
          shadedParts: 3,
          totalParts: 4,
          label: '3 cm = 150 km',
        },
        insight: 'Map scales are honest proportions connecting paper to geography.',
      },
    ],
  },
  visualLab: {
    title: 'The Proportions Balance Lab',
    subtitle: 'Scale ratios and verify proportion balance with the interactive ratio mixer.',
    interactiveType: 'ratio-scaler',
    instructions: 'Change the scale multiplier to observe how proportional relationships stay in exact balance across different amounts.',
    keyInsights: [
      'A proportion is an equation stating that two ratios are equal',
      'The multiplier connecting the top numbers must equal the multiplier connecting the bottom numbers',
      'Unit rates give the cost or measurement per single item',
    ],
  },
  questions: [
    {
      id: 'q-prop-1',
      type: 'multiple-choice',
      questionText: 'If 4 books cost $20, how much do 8 books cost?',
      choices: [
        { id: 'q-prop-1-a', text: '$40' },
        { id: 'q-prop-1-b', text: '$24' },
        { id: 'q-prop-1-c', text: '$30' },
      ],
      correctChoiceId: 'q-prop-1-a',
      explanation: '8 books is double (4 × 2 = 8). So double the cost: $20 × 2 = $40.',
      hint: 'The number of books doubled. What happens to the cost?',
    },
    {
      id: 'q-prop-2',
      type: 'multiple-choice',
      questionText: 'A car travels 120 miles in 2 hours. What is its unit speed (miles per 1 hour)?',
      choices: [
        { id: 'q-prop-2-a', text: '60 miles per hour' },
        { id: 'q-prop-2-b', text: '120 miles per hour' },
        { id: 'q-prop-2-c', text: '240 miles per hour' },
      ],
      correctChoiceId: 'q-prop-2-a',
      explanation: 'Divide total miles by hours: 120 ÷ 2 = 60 miles per hour.',
      hint: 'Divide 120 by 2 to find the distance covered in 1 hour.',
    },
  ],
  completion: {
    title: 'You can solve proportions effortlessly.',
    subtitle: 'Scaling, unit rates, and pricing are in your grasp.',
    summaryPoints: [
      'A proportion means two ratios are equal: A/B = C/D.',
      'Multiply by the scale factor to find missing values.',
      'Unit rates tell you the cost per single item.',
    ],
    nextLessonId: 'conversions-metric-ladder',
    nextLessonTitle: 'The metric ladder',
  },
};
