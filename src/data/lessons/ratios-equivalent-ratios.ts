import type { LessonData } from '../../types';

export const ratiosEquivalentRatiosLesson: LessonData = {
  id: 'ratios-equivalent-ratios',
  topicId: 'ratios',
  topicTitle: 'Ratios',
  title: 'Equivalent ratios & scaling',
  subtitle: 'Multiplying both sides equally to preserve the relationship when doubling or tripling recipes.',
  estimatedMinutes: 6,
  intro: {
    heading: 'How to double a recipe without ruining the taste',
    coreDefinition: 'Equivalent ratios are ratios that name the same comparison: multiply or divide both sides by the same factor.',
    whyItMatters:
      'If you double the sugar in a cake, you must double the flour, eggs, and butter! Scaling up means multiplying EVERY term in the ratio by the same number.',
    keyTakeaway: 'Multiply or divide both terms by the same factor: (A × k) : (B × k).',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'Scaling recipes in action',
    description: 'Look at how 1 : 2 scales cleanly to 2 : 4, 3 : 6, and 4 : 8.',
    items: [
      {
        id: 'eq-rat-1',
        title: 'Doubling the ratio 2 : 3',
        description: 'Multiply both by 2: (2×2) : (3×2) = 4 : 6.',
        fractionText: '2 : 3 = 4 : 6',
        visual: {
          type: 'ratio-model',
          ratioModel: { partA: 2, partB: 3, labelA: 'Lemon', labelB: 'Water', scale: 2 },
          label: 'Scale × 2 gives 4 : 6',
        },
        insight: 'Twice as much lemonade, but the tartness and flavor are identical.',
      },
      {
        id: 'eq-rat-2',
        title: 'Tripling the ratio 2 : 3',
        description: 'Multiply both by 3: (2×3) : (3×3) = 6 : 9.',
        fractionText: '2 : 3 = 6 : 9',
        visual: {
          type: 'ratio-model',
          ratioModel: { partA: 2, partB: 3, labelA: 'Lemon', labelB: 'Water', scale: 3 },
          label: 'Scale × 3 gives 6 : 9',
        },
        insight: 'Three times as much liquid, identical proportion.',
      },
      {
        id: 'eq-rat-3',
        title: 'Simplifying a ratio',
        description: 'Divide both terms by their common factor: 10 : 15 divides by 5 into 2 : 3.',
        fractionText: '10 : 15 = 2 : 3',
        visual: {
          type: 'ratio-model',
          ratioModel: { partA: 2, partB: 3, labelA: 'Lemon', labelB: 'Water', scale: 1 },
          label: 'Simplified base ratio 2 : 3',
        },
        insight: 'Ratios simplify just like fractions.',
      },
    ],
  },
  visualLab: {
    title: 'The Recipe Scaling Lab',
    subtitle: 'Scale ratios up and down. Observe how multiplying preserves the balance.',
    interactiveType: 'ratio-scaler',
    instructions: 'Use the buttons to scale the ratio up to ×5. Notice the ratio between the colored groups never shifts.',
    keyInsights: [
      'Equivalent ratios have the exact same relative value',
      'Whatever you multiply the first term by, you must multiply the second term by',
      'Dividing both terms by a common factor simplifies the ratio to lowest terms',
    ],
  },
  questions: [
    {
      id: 'q-eqr-1',
      type: 'multiple-choice',
      questionText: 'Which ratio is equivalent to 3 : 5?',
      choices: [
        { id: 'q-eqr-1-a', text: '6 : 10' },
        { id: 'q-eqr-1-b', text: '5 : 3' },
        { id: 'q-eqr-1-c', text: '6 : 8' },
        { id: 'q-eqr-1-d', text: '9 : 12' },
      ],
      correctChoiceId: 'q-eqr-1-a',
      explanation: 'Multiply both sides by 2: 3 × 2 = 6, and 5 × 2 = 10. So 3 : 5 = 6 : 10.',
      hint: 'Multiply both 3 and 5 by the same whole number.',
    },
    {
      id: 'q-eqr-2',
      type: 'multiple-choice',
      questionText: 'If a recipe uses 2 eggs for every 3 cups of flour, how many eggs do you need for 9 cups of flour?',
      choices: [
        { id: 'q-eqr-2-a', text: '4 eggs' },
        { id: 'q-eqr-2-b', text: '6 eggs' },
        { id: 'q-eqr-2-c', text: '8 eggs' },
      ],
      correctChoiceId: 'q-eqr-2-b',
      explanation: 'The flour was multiplied by 3 (3 × 3 = 9). So multiply eggs by 3 as well: 2 × 3 = 6 eggs.',
      hint: 'Flour went from 3 to 9 (tripled). Triple the eggs too!',
    },
  ],
  completion: {
    title: 'You can scale ratios with confidence.',
    subtitle: 'Recipes, blueprints, and scaling are under your control.',
    summaryPoints: [
      'Multiply or divide both terms equally.',
      'Scaling preserves flavor, color, and proportion.',
      '2 : 3 = 4 : 6 = 6 : 9.',
    ],
    nextLessonId: 'ratios-proportions',
    nextLessonTitle: 'Solving proportions',
  },
};
