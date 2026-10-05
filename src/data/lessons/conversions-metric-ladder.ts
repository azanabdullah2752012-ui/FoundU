import type { LessonData } from '../../types';

export const conversionsMetricLadderLesson: LessonData = {
  id: 'conversions-metric-ladder',
  topicId: 'conversions',
  topicTitle: 'Conversions',
  title: 'The metric ladder',
  subtitle: 'Milli, centi, deci, and kilo: shifting the decimal point with absolute confidence.',
  estimatedMinutes: 6,
  intro: {
    heading: 'The genius of base-10 measurements',
    coreDefinition: 'The metric system uses prefixes that mean powers of 10: kilo (1,000), centi (1/100), milli (1/1,000).',
    whyItMatters:
      'Unlike imperial units (12 inches in a foot, 3 feet in a yard, 5280 feet in a mile), the metric system never requires weird numbers. You only ever multiply or divide by 10, 100, or 1000 by moving the decimal point!',
    keyTakeaway: 'Stepping down the ladder shifts the point right (×10). Stepping up shifts left (÷10).',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'The 3 most common metric conversions',
    description: 'Look at how meters, centimeters, and kilometers connect by moving the point.',
    items: [
      {
        id: 'met-1',
        title: 'Meters to Centimeters (× 100)',
        description: '1 meter = 100 centimeters. 2.5 meters = 250 cm.',
        fractionText: '1 m = 100 cm',
        visual: {
          type: 'metric-ladder',
          metricLadder: { value: 2.5, fromUnit: 'm', toUnit: 'cm' },
          label: '2.5m = 250cm',
        },
        insight: 'Centimeter is 100 times smaller, so you need 100 times more of them.',
      },
      {
        id: 'met-2',
        title: 'Meters to Millimeters (× 1000)',
        description: '1 meter = 1,000 millimeters. 0.4 meters = 400 mm.',
        fractionText: '1 m = 1,000 mm',
        visual: {
          type: 'metric-ladder',
          metricLadder: { value: 0.4, fromUnit: 'm', toUnit: 'mm' },
          label: '0.4m = 400mm',
        },
        insight: 'Milli means thousandth. Shift the decimal point 3 places right.',
      },
      {
        id: 'met-3',
        title: 'Meters to Kilometers (÷ 1000)',
        description: '1,000 meters = 1 kilometer. 3,500 meters = 3.5 km.',
        fractionText: '1,000 m = 1 km',
        visual: {
          type: 'metric-ladder',
          metricLadder: { value: 3500, fromUnit: 'm', toUnit: 'km' },
          label: '3,500m = 3.5km',
        },
        insight: 'Kilo means thousand. Shift the decimal point 3 places left.',
      },
    ],
  },
  visualLab: {
    title: 'The Metric Step Ladder Lab',
    subtitle: 'Step between kilometers, meters, centimeters, and millimeters. Watch the decimal point shift.',
    interactiveType: 'metric-ladder',
    instructions: 'Select different preset values and observe how the decimal point slides left or right across the units.',
    keyInsights: [
      'Kilo = 1,000 times the base unit',
      'Centi = 1/100 of the base unit',
      'Milli = 1/1,000 of the base unit',
      'Moving to smaller units multiplies; moving to larger units divides',
    ],
  },
  questions: [
    {
      id: 'q-met-1',
      type: 'multiple-choice',
      questionText: 'How many centimeters are in 3 meters?',
      choices: [
        { id: 'q-met-1-a', text: '30 cm' },
        { id: 'q-met-1-b', text: '300 cm' },
        { id: 'q-met-1-c', text: '3,000 cm' },
      ],
      correctChoiceId: 'q-met-1-b',
      explanation: 'There are 100 cm in 1 meter. 3 × 100 = 300 cm.',
      hint: 'Multiply 3 by 100.',
    },
    {
      id: 'q-met-2',
      type: 'multiple-choice',
      questionText: 'If a runner completes 5,000 meters, how many kilometers did they run?',
      choices: [
        { id: 'q-met-2-a', text: '5 km' },
        { id: 'q-met-2-b', text: '50 km' },
        { id: 'q-met-2-c', text: '500 km' },
      ],
      correctChoiceId: 'q-met-2-a',
      explanation: '1,000 meters = 1 km. 5,000 ÷ 1,000 = 5 km.',
      hint: 'Divide 5,000 by 1,000.',
    },
  ],
  completion: {
    title: 'You can navigate the metric ladder.',
    subtitle: 'Powers of ten make conversions second nature.',
    summaryPoints: [
      'Kilo = 1,000×, Centi = 1/100, Milli = 1/1,000.',
      'Small unit = more pieces (shift right).',
      'Large unit = fewer pieces (shift left).',
    ],
    nextLessonId: 'conversions-time-and-rates',
    nextLessonTitle: 'Time & rates',
  },
};
