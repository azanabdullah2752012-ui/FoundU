import type { LessonData } from '../../types';

export const percentagesFractionToPercentLesson: LessonData = {
  id: 'percentages-fraction-to-percent',
  topicId: 'percentages',
  topicTitle: 'Percentages',
  title: 'Fractions ↔ Percentages',
  subtitle: 'Translating halves, quarters, and fifths into percentages using the 100-grid.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Translating fractions into 100-square terms',
    coreDefinition: 'To turn any fraction into a percentage, ask: if this were scaled to 100 squares, how many would be shaded?',
    whyItMatters:
      'Percentages are simply fractions with a denominator forced to 100. Once you see 1/2 as 50/100 and 1/4 as 25/100, conversions become second nature.',
    keyTakeaway: '1/2 = 50%, 1/4 = 25%, 3/4 = 75%, 1/10 = 10%.',
    visualHookType: 'percentage-grid',
  },
  examples: {
    heading: 'The 4 most common visual conversions',
    description: 'Look at how common fraction cuts map directly onto a 100-square grid.',
    items: [
      {
        id: 'pct-conv-1',
        title: 'One half is fifty percent',
        description: 'Half of 100 squares is 50 squares.',
        fractionText: '1/2 = 50%',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 50 },
          label: '50 out of 100 squares (1/2)',
        },
        insight: 'Whenever you hear 50%, picture a shape cut cleanly in half.',
      },
      {
        id: 'pct-conv-2',
        title: 'One quarter is twenty-five percent',
        description: '100 divided into 4 equal quarters is 25 squares each.',
        fractionText: '1/4 = 25%',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 25 },
          label: '25 out of 100 squares (1/4)',
        },
        insight: 'Three quarters (3/4) is simply three 25s: 75%.',
      },
      {
        id: 'pct-conv-3',
        title: 'One fifth is twenty percent',
        description: '100 divided into 5 equal parts gives 20 squares per slice.',
        fractionText: '1/5 = 20%',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 20 },
          label: '20 out of 100 squares (1/5)',
        },
        insight: 'Two fifths (2/5) is 40%, three fifths (3/5) is 60%.',
      },
    ],
  },
  visualLab: {
    title: 'The Percentage Conversion Lab',
    subtitle: 'Interact with the 100-grid and see the fraction, decimal, and percent synchronize live.',
    interactiveType: 'percentage-converter',
    instructions: 'Use the slider or preset chips to see how 1/4 (25%), 1/2 (50%), and 3/4 (75%) map to shaded areas.',
    keyInsights: [
      'Any fraction can be viewed as an amount out of 100',
      'Halving 100 gives 50% (1/2)',
      'Quartering 100 gives 25% (1/4)',
      '100% represents the complete whole (1.0)',
    ],
  },
  questions: [
    {
      id: 'q-fp-1',
      type: 'multiple-choice',
      questionText: 'What percentage corresponds to the fraction 3/4?',
      choices: [
        { id: 'q-fp-1-a', text: '34%' },
        { id: 'q-fp-1-b', text: '75%' },
        { id: 'q-fp-1-c', text: '50%' },
        { id: 'q-fp-1-d', text: '25%' },
      ],
      correctChoiceId: 'q-fp-1-b',
      explanation: 'Each 1/4 is 25%. Three quarters is 25% + 25% + 25% = 75%.',
      hint: 'Think of 3 quarters in money: 3 × 25 cents = 75 cents out of 100.',
    },
    {
      id: 'q-fp-2',
      type: 'visual-selection',
      questionText: 'Which grid shows 20% (one fifth)?',
      choices: [
        {
          id: 'q-fp-2-a',
          text: '20% (20 squares)',
          visual: { type: 'percentage-grid', percentage: { percent: 20 } },
        },
        {
          id: 'q-fp-2-b',
          text: '50% (50 squares)',
          visual: { type: 'percentage-grid', percentage: { percent: 50 } },
        },
        {
          id: 'q-fp-2-c',
          text: '10% (10 squares)',
          visual: { type: 'percentage-grid', percentage: { percent: 10 } },
        },
      ],
      correctChoiceId: 'q-fp-2-a',
      explanation: '20% means exactly 20 squares shaded out of 100, which equals 1/5.',
      hint: 'Count the shaded squares: look for 2 full columns of 10.',
    },
  ],
  completion: {
    title: 'Fractions and percentages are now unified in your mind.',
    subtitle: 'You can translate between them naturally using mental imagery.',
    summaryPoints: [
      '1/2 = 50%',
      '1/4 = 25% and 3/4 = 75%',
      '1/5 = 20%',
    ],
    nextLessonId: 'numbers-negative-numbers',
    nextLessonTitle: 'Negative numbers on the line',
  },
};
