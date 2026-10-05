import type { LessonData } from '../../types';

export const conversionsTimeAndRatesLesson: LessonData = {
  id: 'conversions-time-and-rates',
  topicId: 'conversions',
  topicTitle: 'Conversions',
  title: 'Time & rates',
  subtitle: 'Hours, minutes, seconds (base 60) and converting rates naturally.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Why is time based on 60 instead of 10?',
    coreDefinition: 'Time uses base 60 (ancient Babylonian heritage) because 60 can be divided evenly into halves, thirds, quarters, fifths, and tenths!',
    whyItMatters:
      'Half an hour is 30 minutes, a quarter hour is 15 minutes, 1/3 of an hour is 20 minutes. Understanding the 60-minute circle makes time arithmetic simple.',
    keyTakeaway: '1 hour = 60 minutes = 3,600 seconds. Fractional hours map to factors of 60.',
    visualHookType: 'fraction-slice',
  },
  examples: {
    heading: 'The fractions of an hour',
    description: 'Notice how cleanly 60 minutes divides into common fractions.',
    items: [
      {
        id: 'tim-1',
        title: 'Half an Hour: 30 minutes',
        description: '60 minutes divided by 2 gives exactly 30 minutes.',
        fractionText: '1/2 hr = 30 min',
        visual: {
          type: 'fraction-circle',
          totalParts: 2,
          shadedParts: 1,
          label: '30 minutes is 1/2 of clock face',
        },
        insight: 'Halfway around the clock face is 30 minutes.',
      },
      {
        id: 'tim-2',
        title: 'Quarter of an Hour: 15 minutes',
        description: '60 minutes divided by 4 gives 15 minutes (a quarter past).',
        fractionText: '1/4 hr = 15 min',
        visual: {
          type: 'fraction-circle',
          totalParts: 4,
          shadedParts: 1,
          label: '15 minutes is 1/4 of clock face',
        },
        insight: 'Three quarters of an hour is 45 minutes (quarter to).',
      },
      {
        id: 'tim-3',
        title: 'Speed as a Rate: Miles per Hour',
        description: 'Traveling at 60 mph means covering exactly 1 mile every single minute.',
        fractionText: '60 mph = 1 mile/min',
        visual: {
          type: 'number-line',
          shadedParts: 1,
          totalParts: 1,
          label: '1 mile in 1 minute',
        },
        insight: 'A rate is simply a division of distance over time.',
      },
    ],
  },
  visualLab: {
    title: 'The Clock Fractions & Rates Lab',
    subtitle: 'Observe how 60 minutes divides into halves, quarters, and thirds.',
    interactiveType: 'fraction-slicer',
    instructions: 'Divide the circle or bar into 2, 3, or 4 parts to see how clock hours and rates partition cleanly.',
    keyInsights: [
      '1 hour = 60 minutes',
      '1/2 hour = 30 minutes',
      '1/4 hour = 15 minutes',
      'Rate = Quantity ÷ Time (e.g. distance per hour)',
    ],
  },
  questions: [
    {
      id: 'q-tim-1',
      type: 'multiple-choice',
      questionText: 'How many minutes are in 3/4 of an hour?',
      choices: [
        { id: 'q-tim-1-a', text: '45 minutes' },
        { id: 'q-tim-1-b', text: '35 minutes' },
        { id: 'q-tim-1-c', text: '40 minutes' },
      ],
      correctChoiceId: 'q-tim-1-a',
      explanation: 'Each quarter is 15 minutes. 3 × 15 = 45 minutes.',
      hint: 'Multiply 3 quarters of 60: 15 + 15 + 15 = 45.',
    },
    {
      id: 'q-tim-2',
      type: 'multiple-choice',
      questionText: 'If you walk 6 kilometers in 2 hours, what is your walking rate?',
      choices: [
        { id: 'q-tim-2-a', text: '3 km/h' },
        { id: 'q-tim-2-b', text: '4 km/h' },
        { id: 'q-tim-2-c', text: '12 km/h' },
      ],
      correctChoiceId: 'q-tim-2-a',
      explanation: 'Divide total distance by hours: 6 km ÷ 2 hours = 3 km/h.',
      hint: 'How far do you travel in just 1 hour?',
    },
  ],
  completion: {
    title: 'You have mastered time and rates.',
    subtitle: 'Clock arithmetic and speed rates are intuitive.',
    summaryPoints: [
      '60 minutes divides cleanly into 30, 20, 15, and 10.',
      '1/4 hour = 15 min, 1/2 hour = 30 min, 3/4 hour = 45 min.',
      'Speed = Distance ÷ Time.',
    ],
    nextLessonId: 'fractions-what-is-a-fraction',
    nextLessonTitle: 'What is a fraction?',
  },
};
