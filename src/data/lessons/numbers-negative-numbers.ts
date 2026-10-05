import type { LessonData } from '../../types';

export const numbersNegativeNumbersLesson: LessonData = {
  id: 'numbers-negative-numbers',
  topicId: 'numbers',
  topicTitle: 'Numbers',
  title: 'Negative numbers on the line',
  subtitle: 'Understanding numbers below zero through elevation, depth, and temperature.',
  estimatedMinutes: 6,
  intro: {
    heading: 'What happens to the left of zero?',
    coreDefinition: 'A negative number simply measures a distance in the opposite direction from zero.',
    whyItMatters:
      'Negative numbers are not broken or imaginary. They represent debt, depth below sea level, and temperatures below freezing.',
    keyTakeaway: 'The minus sign (-) means: "in the opposite direction from the starting line (0)".',
    visualHookType: 'thermometer',
  },
  examples: {
    heading: 'Three visual models of negative values',
    description: 'Look at how zero acts as a mirror anchor on the number line.',
    items: [
      {
        id: 'neg-ex-1',
        title: 'Sea level: Altitude vs Depth',
        description: '+3 meters is standing on a hill. -3 meters is diving 3 meters underwater.',
        fractionText: '-3 m depth',
        visual: {
          type: 'thermometer',
          thermometer: { value: -3, min: -6, max: 6 },
          label: '-3 is 3 meters below sea level',
        },
        insight: 'Notice both are exactly 3 steps away from zero, but in opposite directions.',
      },
      {
        id: 'neg-ex-2',
        title: 'Temperature: Above and Below Freezing',
        description: '0° is the freezing point of water. -5° is 5 degrees colder than freezing.',
        fractionText: '-5° C',
        visual: {
          type: 'thermometer',
          thermometer: { value: -5, min: -6, max: 6 },
          label: '-5 is 5 degrees colder than freezing',
        },
        insight: '-5 is colder and lower on the scale than -2.',
      },
      {
        id: 'neg-ex-3',
        title: 'Which is larger: -2 or -5?',
        description: 'On a number line, whatever is further to the RIGHT is always larger. -2 is to the right of -5.',
        fractionText: '-2 > -5',
        visual: {
          type: 'thermometer',
          thermometer: { value: -2, min: -6, max: 6 },
          label: '-2 is warmer and higher than -5',
        },
        insight: 'Owing $2 is much better than owing $5! -2 is greater than -5.',
      },
    ],
  },
  visualLab: {
    title: 'The Elevation & Temperature Line Lab',
    subtitle: 'Step along the continuum from -7 to +7. Watch how distance from zero and elevation change.',
    interactiveType: 'thermometer',
    instructions: 'Click the step buttons or click any tick on the continuum to move the marker above and below zero.',
    keyInsights: [
      'Zero is the origin line — not nothingness, but the benchmark anchor',
      'Negative numbers live to the left of zero (or below zero vertically)',
      'Further right on the line always means larger value: -1 is larger than -10',
    ],
  },
  questions: [
    {
      id: 'q-neg-1',
      type: 'comparison',
      questionText: 'Which temperature is warmer (larger value): -1° or -4°?',
      choices: [
        { id: 'q-neg-1-a', text: '-1° is warmer' },
        { id: 'q-neg-1-b', text: '-4° is warmer' },
        { id: 'q-neg-1-c', text: 'They are equal' },
      ],
      correctChoiceId: 'q-neg-1-a',
      explanation: '-1° is closer to 0° and further to the right on the temperature line, making it warmer and larger than -4°.',
      hint: 'Think about a thermometer: -1° is higher up than -4°.',
    },
    {
      id: 'q-neg-2',
      type: 'multiple-choice',
      questionText: 'If a submarine starts at 0m (sea level) and dives 5 meters down, what is its coordinate?',
      choices: [
        { id: 'q-neg-2-a', text: '+5' },
        { id: 'q-neg-2-b', text: '-5' },
        { id: 'q-neg-2-c', text: '0' },
      ],
      correctChoiceId: 'q-neg-2-b',
      explanation: 'Diving 5 meters below the zero mark places the submarine at -5m.',
      hint: 'Below the zero mark is represented with a minus sign (-).',
    },
  ],
  completion: {
    title: 'You understand negative numbers intuitively.',
    subtitle: 'Zero is your anchor; direction is everything.',
    summaryPoints: [
      'Negative numbers measure steps in the opposite direction.',
      'Further to the right is always larger.',
      '-2 is greater than -5.',
    ],
    nextLessonId: 'arithmetic-multiplication-as-arrays',
    nextLessonTitle: 'Multiplication as grids & arrays',
  },
};
