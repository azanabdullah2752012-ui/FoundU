import type { LessonData } from '../../types';

export const decimalsComparingDecimalsLesson: LessonData = {
  id: 'decimals-comparing-decimals',
  topicId: 'decimals',
  topicTitle: 'Decimals',
  title: 'Comparing decimals',
  subtitle: 'Why 0.4 is bigger than 0.35, despite 35 being a bigger number than 4.',
  estimatedMinutes: 5,
  intro: {
    heading: 'The great decimal illusion: 0.4 vs 0.35',
    coreDefinition: 'When comparing decimals, always compare place values from left to right: tenths first, then hundredths.',
    whyItMatters:
      'Many people look at 0.35 and 0.4 and assume 0.35 is bigger because 35 > 4. But 0.4 is 40 hundredths, while 0.35 is only 35 hundredths!',
    keyTakeaway: '0.4 = 0.40. Add trailing zeros so both numbers have the same number of digits.',
    visualHookType: 'decimal-grid',
  },
  examples: {
    heading: 'Visualizing tenths against hundredths',
    description: 'Look at a 100-cell grid to see why 4 full columns always beat 3 columns and a handful of singles.',
    items: [
      {
        id: 'dec-comp-1',
        title: '0.4 means 4 full columns (40 squares)',
        description: 'Each column is 10 squares. 4 columns = 40 out of 100 squares shaded.',
        fractionText: '0.4 = 40/100',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 4, hundredths: 0, mode: 'tenths' },
          label: '0.40 = 40 squares shaded',
        },
        insight: 'Writing a zero at the end (0.40) reveals its true size instantly.',
      },
      {
        id: 'dec-comp-2',
        title: '0.35 means 3 columns and 5 singles (35 squares)',
        description: '3 full columns (30 squares) plus 5 loose squares = 35 out of 100 squares shaded.',
        fractionText: '0.35 = 35/100',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 3, hundredths: 5, mode: 'hundredths' },
          label: '0.35 = 35 squares shaded',
        },
        insight: '35 squares is clearly less area than 40 squares.',
      },
      {
        id: 'dec-comp-3',
        title: 'The left-to-right rule',
        description: 'Compare the tenths first: 4 tenths beats 3 tenths immediately. The hundredths digit never gets a chance to change the outcome.',
        fractionText: '0.4 > 0.35',
        visual: {
          type: 'decimal-grid',
          decimalGrid: { tenths: 4, hundredths: 0 },
          label: '4 tenths > 3 tenths',
        },
        insight: 'Just like 400 is bigger than 350, tenths outrank hundredths 10-to-1.',
      },
    ],
  },
  visualLab: {
    title: 'The Decimal Duel Lab',
    subtitle: 'Interact with the 100-cell grid and test 0.4 against 0.35 visually.',
    interactiveType: 'decimal-duel',
    instructions: 'Tap columns and squares on the grid to change the shaded value. Notice how the visual comparison against 0.35 (35 squares) behaves.',
    keyInsights: [
      'The tenths digit is 10 times larger than the hundredths digit',
      '0.4 is identical to 0.40 — appending zeros to the right does not change the amount',
      'Always compare the largest place value (tenths) first',
    ],
  },
  questions: [
    {
      id: 'qdc-1',
      type: 'comparison',
      questionText: 'Which is larger: 0.7 or 0.68?',
      promptNote: 'Write 0.7 as 0.70 to compare 70 hundredths against 68 hundredths.',
      choices: [
        { id: 'qdc-1-a', text: '0.7 is larger' },
        { id: 'qdc-1-b', text: '0.68 is larger' },
        { id: 'qdc-1-c', text: 'They are equal' },
      ],
      correctChoiceId: 'qdc-1-a',
      explanation: '0.7 = 0.70 (70 squares), while 0.68 is only 68 squares. 0.7 is larger!',
      hint: 'Compare the tenths: 7 tenths is more than 6 tenths.',
    },
    {
      id: 'qdc-2',
      type: 'multiple-choice',
      questionText: 'What happens to the value of 0.5 when you write it as 0.50?',
      choices: [
        { id: 'qdc-2-a', text: 'It becomes 10 times bigger' },
        { id: 'qdc-2-b', text: 'It remains the exact same amount' },
        { id: 'qdc-2-c', text: 'It becomes 10 times smaller' },
      ],
      correctChoiceId: 'qdc-2-b',
      explanation: 'Adding a trailing zero at the very end of a decimal (0.5 to 0.50) changes nothing about the shaded area — it just says 50 hundredths instead of 5 tenths.',
      hint: 'Think about money: 5 dimes ($0.5) is the exact same amount as 50 pennies ($0.50).',
    },
  ],
  completion: {
    title: 'You have mastered decimal comparisons.',
    subtitle: 'You will never fall for the 35 > 4 decimal trap again.',
    summaryPoints: [
      '0.4 = 0.40 (40 hundredths).',
      'Always compare tenths first from left to right.',
      'Trailing zeros do not change the value.',
    ],
    nextLessonId: 'percentages-what-percentages-mean',
    nextLessonTitle: 'What percentages mean',
  },
};
