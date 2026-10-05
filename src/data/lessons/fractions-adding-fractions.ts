import type { LessonData } from '../../types';

export const fractionsAddingFractionsLesson: LessonData = {
  id: 'fractions-adding-fractions',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  title: 'Adding fractions',
  subtitle: 'Combining equal pieces and why the denominator never changes when adding.',
  estimatedMinutes: 7,
  intro: {
    heading: 'Why is 1/4 + 2/4 = 3/4 (and NOT 3/8)?',
    coreDefinition: 'When adding fractions with the same denominator, add the shaded pieces (numerators) and keep the cut size (denominator).',
    whyItMatters:
      'The denominator tells you the type of coin or slice (e.g. quarters). If you have 1 quarter and add 2 quarters, you have 3 quarters—the quarters didn’t suddenly split into eighths!',
    keyTakeaway: 'Add the tops, keep the bottom: a/c + b/c = (a+b)/c.',
    visualHookType: 'fraction-slice',
  },
  examples: {
    heading: 'Visualizing piece addition',
    description: 'See why combining slices leaves the cut size completely unchanged.',
    items: [
      {
        id: 'add-1',
        title: '1/4 plus 2/4 equals 3/4',
        description: '1 quarter piece plus 2 quarter pieces combines into 3 quarter pieces.',
        fractionText: '1/4 + 2/4 = 3/4',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 3,
          label: '3 out of 4 quarters combined',
        },
        insight: 'The slice size (quarters) is the unit of measure. You are only counting pieces.',
      },
      {
        id: 'add-2',
        title: '2/6 plus 3/6 equals 5/6',
        description: '2 sixths plus 3 sixths gives 5 sixths.',
        fractionText: '2/6 + 3/6 = 5/6',
        visual: {
          type: 'fraction-bar',
          totalParts: 6,
          shadedParts: 5,
          label: '5 out of 6 parts shaded',
        },
        insight: 'Notice the bar remains cut into 6 equal parts.',
      },
      {
        id: 'add-3',
        title: 'Unlike denominators: Cut to match first',
        description: 'To add 1/2 and 1/4, rename 1/2 as 2/4 first. Then 2/4 + 1/4 = 3/4.',
        fractionText: '1/2 + 1/4 = 3/4',
        equivalentText: 'Cut 1/2 into 2/4',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 3,
          label: '2/4 + 1/4 = 3/4',
        },
        insight: 'You cannot add slices directly until their cuts are the exact same size.',
      },
    ],
  },
  visualLab: {
    title: 'The Fraction Addition Lab',
    subtitle: 'Combine pieces into a single bar. Adjust the pieces and watch the sum update live.',
    interactiveType: 'fraction-addition',
    instructions: 'Change the shaded pieces for the first and second fraction, or pick a different denominator. Notice how the denominator never changes in the answer.',
    keyInsights: [
      'The bottom number (denominator) names the size of each piece',
      'The top numbers (numerators) are the counts being summed',
      'Never add denominators: 1 apple + 2 apples = 3 apples (not 3 double-apples)',
    ],
  },
  questions: [
    {
      id: 'q-add-1',
      type: 'multiple-choice',
      questionText: 'What is 2/5 + 1/5?',
      choices: [
        { id: 'q-add-1-a', text: '3/10' },
        { id: 'q-add-1-b', text: '3/5' },
        { id: 'q-add-1-c', text: '2/5' },
        { id: 'q-add-1-d', text: '5/5' },
      ],
      correctChoiceId: 'q-add-1-b',
      explanation: '2 fifths plus 1 fifth gives 3 fifths (3/5). The denominator 5 stays the same.',
      hint: 'Add 2 + 1 on top, keep 5 on the bottom.',
    },
    {
      id: 'q-add-2',
      type: 'multiple-choice',
      questionText: 'Why don’t we add the denominators together (e.g. 1/4 + 1/4 ≠ 2/8)?',
      choices: [
        { id: 'q-add-2-a', text: 'Because adding slices doesn’t cut them into smaller pieces' },
        { id: 'q-add-2-b', text: 'Because math rules are arbitrary' },
        { id: 'q-add-2-c', text: 'Because 2/8 is bigger than 2/4' },
      ],
      correctChoiceId: 'q-add-2-a',
      explanation: 'Exactly! 2/8 would mean eighths (smaller pieces). But 1 quarter + 1 quarter is 2 quarters (half of the whole)!',
      hint: 'Think about eating two quarter slices of a pizza—did the pizza become cut into 8 slices?',
    },
  ],
  completion: {
    title: 'You understand adding fractions completely.',
    subtitle: 'Keeping the cut size constant makes sense.',
    summaryPoints: [
      'Add numerators, keep the denominator.',
      'Denominators define the slice size.',
      'Unlike pieces must be renamed before adding.',
    ],
    nextLessonId: 'decimals-place-value',
    nextLessonTitle: 'Decimal place value',
  },
};
