import type { LessonData } from '../../types';

export const percentagesFindingPercentagesLesson: LessonData = {
  id: 'percentages-finding-percentages',
  topicId: 'percentages',
  topicTitle: 'Percentages',
  title: 'Finding percentages',
  subtitle: 'Fast mental shortcuts to calculate 10%, 25%, and 50% of any number without a calculator.',
  estimatedMinutes: 6,
  intro: {
    heading: 'The mental toolbox for percentages',
    coreDefinition: 'To find a percentage of a number, use friendly anchor fractions: 50% is half, 25% is quarter, 10% is divide by 10.',
    whyItMatters:
      'You never need long formulas for tips, discounts, or taxes. By breaking any percentage into 10s and 50s, you can calculate answers in seconds.',
    keyTakeaway: '10% of anything is shifting the decimal point left one space (divide by 10).',
    visualHookType: 'percentage-grid',
  },
  examples: {
    heading: 'The 3 mental calculation superpowers',
    description: 'Look at how these simple rules solve real-world problems instantly.',
    items: [
      {
        id: 'fp-1',
        title: '50% of anything is HALF',
        description: '50% of 80 is 40. Cut the number in half.',
        fractionText: '50% = 1/2',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 50 },
          label: '50% is cutting in half',
        },
        insight: 'Half is the fastest calculation in human arithmetic.',
      },
      {
        id: 'fp-2',
        title: '10% of anything is DIVIDE BY 10',
        description: '10% of 60 is 6. 10% of 250 is 25. Just drop a zero or slide the point.',
        fractionText: '10% = ÷ 10',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 10 },
          label: '10% is 1 column out of 10',
        },
        insight: 'Once you know 10%, you double it for 20% or halve it for 5%!',
      },
      {
        id: 'fp-3',
        title: '25% of anything is HALF OF HALF',
        description: '25% of 40: half is 20, half of 20 is 10.',
        fractionText: '25% = 1/4',
        visual: {
          type: 'percentage-grid',
          percentage: { percent: 25 },
          label: '25% is half of half',
        },
        insight: 'Halving twice is much easier than multiplying by 0.25.',
      },
    ],
  },
  visualLab: {
    title: 'The Mental Percentage Lab',
    subtitle: 'Interact with the 100-grid to see 10%, 25%, and 50% visually.',
    interactiveType: 'percentage-grid',
    instructions: 'Slide between 10%, 25%, and 50% to see their proportional shares of the whole.',
    keyInsights: [
      'To find 10% of any number, divide it by 10',
      'To find 20%, find 10% and multiply by 2',
      'To find 5%, find 10% and divide by 2',
      'To find 50%, take half; to find 25%, take half again',
    ],
  },
  questions: [
    {
      id: 'q-fp-calc-1',
      type: 'multiple-choice',
      questionText: 'What is 10% of 70?',
      choices: [
        { id: 'q-fpc-1-a', text: '7' },
        { id: 'q-fpc-1-b', text: '14' },
        { id: 'q-fpc-1-c', text: '0.7' },
      ],
      correctChoiceId: 'q-fpc-1-a',
      explanation: 'To find 10%, divide 70 by 10: 70 ÷ 10 = 7.',
      hint: 'Slide the decimal point one place to the left.',
    },
    {
      id: 'q-fp-calc-2',
      type: 'multiple-choice',
      questionText: 'What is 25% of 80?',
      choices: [
        { id: 'q-fpc-2-a', text: '40' },
        { id: 'q-fpc-2-b', text: '20' },
        { id: 'q-fpc-2-c', text: '25' },
      ],
      correctChoiceId: 'q-fpc-2-b',
      explanation: 'Half of 80 is 40. Half of 40 is 20. So 25% of 80 is 20.',
      hint: 'Take half, and then take half again.',
    },
  ],
  completion: {
    title: 'You can calculate percentages in your head.',
    subtitle: '10%, 25%, and 50% are your reliable anchors.',
    summaryPoints: [
      '10% = divide by 10.',
      '50% = cut in half.',
      '25% = cut in half twice.',
    ],
    nextLessonId: 'numbers-place-value',
    nextLessonTitle: 'Place value & magnitude',
  },
};
