import type { LessonData } from '../../types';

export const percentagesIntroLesson: LessonData = {
  id: 'percentages-what-percentages-mean',
  topicId: 'percentages',
  topicTitle: 'Percentages',
  title: 'What percentages mean',
  subtitle: 'Understanding “per hundred” and why percentages make comparisons simple.',
  estimatedMinutes: 5,
  intro: {
    heading: 'What is a percentage?',
    coreDefinition: 'Percent literally means “per hundred” (from Latin per centum). A percentage is a fraction out of 100.',
    whyItMatters:
      'Comparing 17 out of 25 with 33 out of 50 is tricky in your head. Converting both into “out of 100” gives them the exact same common ground. 50% simply means 50 out of 100 — exactly one half.',
    keyTakeaway: 'The percent symbol (%) is just a shorthand label for a denominator of 100.',
  },
  examples: {
    heading: 'Visualizing “per hundred”',
    description: 'Imagine a grid of 100 equal squares. Every square represents 1 percent (1%).',
    items: [
      {
        id: 'pct-1',
        title: '25 percent (25%)',
        description: '25 squares shaded out of 100 squares.',
        fractionText: '25% = 25/100 = 1/4',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 1,
          label: '25 out of 100 is 1/4 of the total',
        },
        insight: '25% is one quarter of the whole.',
      },
      {
        id: 'pct-2',
        title: '50 percent (50%)',
        description: '50 squares shaded out of 100 squares.',
        fractionText: '50% = 50/100 = 1/2',
        equivalentText: 'Exact same amount as one half',
        visual: {
          type: 'fraction-bar',
          totalParts: 2,
          shadedParts: 1,
          label: '50 out of 100 is 1/2 of the total',
        },
        insight: '50% is half of the entire thing.',
      },
      {
        id: 'pct-3',
        title: '100 percent (100%)',
        description: 'All 100 squares shaded.',
        fractionText: '100% = 100/100 = 1',
        equivalentText: 'The complete whole',
        visual: {
          type: 'fraction-bar',
          totalParts: 1,
          shadedParts: 1,
          label: '100% is the entire whole',
        },
        insight: '100% means nothing is left unshaded. You have the whole thing.',
      },
    ],
  },
  video: {
    title: 'The meaning of per centum',
    duration: '02:00',
    durationSeconds: 120,
    description: 'A 2-minute visual exploration of why 100 was chosen as the universal comparison baseline.',
    placeholderNote: 'Foundu short visual breakdown (1–4 min per concept)',
    keyPoints: [
      '“Cent” comes from the Latin word for 100 (like century or cent)',
      'Percent is always a comparison against 100',
      '50% = 50/100 = 1/2',
      '100% = 100/100 = 1 whole',
    ],
    transcript: [
      'Whenever you see the percent sign, think: out of one hundred.',
      'If you score 80%, you got 80 points for every 100 available.',
      'It creates a universal ruler that everyone can understand instantly.',
    ],
  },
  questions: [
    {
      id: 'qp-1',
      type: 'multiple-choice',
      questionText: 'What does the word “percent” literally mean?',
      choices: [
        { id: 'qp-1-a', text: 'Per ten' },
        { id: 'qp-1-b', text: 'Per hundred' },
        { id: 'qp-1-c', text: 'Per thousand' },
        { id: 'qp-1-d', text: 'Divided by half' },
      ],
      correctChoiceId: 'qp-1-b',
      explanation: 'That’s right. Cent comes from the Latin centum, meaning hundred. So percent means “per hundred”.',
      hint: 'Not quite. Think about how many cents are in a dollar, or how many years are in a century.',
    },
    {
      id: 'qp-2',
      type: 'multiple-choice',
      questionText: 'Which fraction is equal to 50%?',
      choices: [
        { id: 'qp-2-a', text: '1/4' },
        { id: 'qp-2-b', text: '1/2' },
        { id: 'qp-2-c', text: '1/5' },
        { id: 'qp-2-d', text: '5/100' },
      ],
      correctChoiceId: 'qp-2-b',
      explanation: 'That’s right. 50% means 50 out of 100, which is exactly one half (1/2).',
      hint: 'Not quite. 50 is half of 100. So 50% is equal to one half.',
    },
  ],
  completion: {
    title: 'You understand percentages.',
    subtitle: 'Nice work. Your foundation just got a little stronger.',
    summaryPoints: [
      'Percent means per hundred.',
      'Percentages allow easy comparisons by using 100 as the common baseline.',
      '50% is 1/2, and 100% is the entire whole.',
    ],
  },
};
