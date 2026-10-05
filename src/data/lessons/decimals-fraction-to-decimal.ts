import type { LessonData } from '../../types';

export const decimalsFractionToDecimalLesson: LessonData = {
  id: 'decimals-fraction-to-decimal',
  topicId: 'decimals',
  topicTitle: 'Decimals',
  title: 'Fractions ↔ Decimals',
  subtitle: 'Translating fractions into decimals using tenths and hundredths grids.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Two ways of writing the exact same amount',
    coreDefinition: 'A decimal is simply a fraction whose denominator is 10, 100, or 1000.',
    whyItMatters:
      'Fractions and decimals are not two different languages—they are two writing styles for the same value. 1/2 is literally 5/10, written as 0.5.',
    keyTakeaway: 'Scale the fraction denominator to 10 or 100 to read the decimal directly.',
    visualHookType: 'decimal-grid',
  },
  examples: {
    heading: 'The 4 essential conversions',
    description: 'See how simple fractions fit cleanly into base-10 grids.',
    items: [
      {
        id: 'f2d-1',
        title: 'One half is five tenths',
        description: '1/2 scaled by 5 gives 5/10, which is written as 0.5.',
        fractionText: '1/2 = 0.5',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 5, hundredths: 0, mode: 'tenths' },
          label: '5 columns out of 10 = 0.5',
        },
        insight: 'Half of 10 is 5, so half of 1 is 0.5.',
      },
      {
        id: 'f2d-2',
        title: 'One quarter is twenty-five hundredths',
        description: '1/4 of 100 squares is 25 squares, which is written as 0.25.',
        fractionText: '1/4 = 0.25',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 2, hundredths: 5, mode: 'hundredths' },
          label: '25 squares out of 100 = 0.25',
        },
        insight: 'Just like 25 cents is a quarter of a dollar.',
      },
      {
        id: 'f2d-3',
        title: 'One fifth is two tenths',
        description: '1/5 scaled by 2 gives 2/10, which is written as 0.2.',
        fractionText: '1/5 = 0.2',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 2, hundredths: 0, mode: 'tenths' },
          label: '2 columns out of 10 = 0.2',
        },
        insight: '10 divided into 5 equal parts gives 2 tenths per part.',
      },
    ],
  },
  visualLab: {
    title: 'The Fraction to Decimal Lab',
    subtitle: 'Explore the 100-grid and see how 1/4 (25/100) and 1/2 (50/100) translate directly.',
    interactiveType: 'decimal-grid',
    instructions: 'Click columns or squares to shade values and see their fractional and decimal equivalence.',
    keyInsights: [
      '1/10 = 0.1',
      '1/2 = 5/10 = 0.5',
      '1/4 = 25/100 = 0.25',
      '3/4 = 75/100 = 0.75',
    ],
  },
  questions: [
    {
      id: 'q-f2d-1',
      type: 'multiple-choice',
      questionText: 'What is 3/4 written as a decimal?',
      choices: [
        { id: 'q-f2d-1-a', text: '0.34' },
        { id: 'q-f2d-1-b', text: '0.75' },
        { id: 'q-f2d-1-c', text: '0.43' },
        { id: 'q-f2d-1-d', text: '0.3' },
      ],
      correctChoiceId: 'q-f2d-1-b',
      explanation: '3 quarters of 100 hundredths is 75 hundredths, written as 0.75.',
      hint: 'Think about 3 quarters in money: 75 cents = $0.75.',
    },
    {
      id: 'q-f2d-2',
      type: 'multiple-choice',
      questionText: 'What fraction is equal to 0.2?',
      choices: [
        { id: 'q-f2d-2-a', text: '1/2' },
        { id: 'q-f2d-2-b', text: '1/5' },
        { id: 'q-f2d-2-c', text: '2/100' },
      ],
      correctChoiceId: 'q-f2d-2-b',
      explanation: '0.2 is 2/10, which simplifies to 1/5.',
      hint: '2 out of 10 equal parts simplifies to 1 out of 5.',
    },
  ],
  completion: {
    title: 'You can translate fractions and decimals easily.',
    subtitle: 'The two forms are united in your thinking.',
    summaryPoints: [
      '1/2 = 0.5',
      '1/4 = 0.25 and 3/4 = 0.75',
      '1/5 = 0.2',
    ],
    nextLessonId: 'percentages-what-percentages-mean',
    nextLessonTitle: 'What percentages mean',
  },
};
