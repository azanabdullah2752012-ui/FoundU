import type { LessonData } from '../../types';

export const ratiosWhatRatiosRepresentLesson: LessonData = {
  id: 'ratios-what-ratios-represent',
  topicId: 'ratios',
  topicTitle: 'Ratios',
  title: 'What ratios represent',
  subtitle: 'Comparing one quantity to another: parts to parts and parts to whole.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Comparing relationships, not just amounts',
    coreDefinition: 'A ratio compares two quantities directly, written as A : B or "A to B".',
    whyItMatters:
      'Recipes, paint mixtures, and screen aspect ratios are not about how much you make, but the balance between the ingredients. 1 cup lemon to 3 cups water tastes identical whether you make a glass or a bathtub!',
    keyTakeaway: 'A ratio describes the recipe proportions between components.',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'The 3 ways to view a ratio',
    description: 'Notice how parts compare to each other and to the combined whole.',
    items: [
      {
        id: 'rat-1',
        title: 'Part to Part: 2 Blue to 3 Orange',
        description: 'For every 2 blue tokens, there are 3 orange tokens (2 : 3).',
        fractionText: '2 : 3',
        visual: {
          type: 'ratio-model',
          ratioModel: { partA: 2, partB: 3, labelA: 'Blue', labelB: 'Orange', scale: 1 },
          label: 'Ratio 2:3',
        },
        insight: 'This directly compares the two ingredients against each other.',
      },
      {
        id: 'rat-2',
        title: 'Part to Whole: Blue is 2/5 of total',
        description: 'There are 2 + 3 = 5 total tokens. Blue makes up 2 out of the 5 (2/5).',
        fractionText: 'Blue = 2/5 of total',
        visual: {
          type: 'fraction-bar',
          totalParts: 5,
          shadedParts: 2,
          label: '2 out of 5 parts are blue',
        },
        insight: 'Add the ratio terms together (2 + 3 = 5) to find the whole denominator.',
      },
      {
        id: 'rat-3',
        title: 'Screen Aspect Ratios: 16 : 9',
        description: 'A widescreen display is 16 units wide for every 9 units high.',
        fractionText: '16 : 9 Widescreen',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 5 },
          label: 'Widescreen rectangular ratio',
        },
        insight: 'Whether a phone or a cinema screen, 16:9 preserves the visual shape.',
      },
    ],
  },
  visualLab: {
    title: 'The Ratio Mixer & Proportions Lab',
    subtitle: 'Mix blue and orange tokens. Observe how part-to-part and part-to-whole fractions change.',
    interactiveType: 'ratio-scaler',
    instructions: 'Tap the multiplier buttons to scale the recipe from ×1 to ×5. Notice the visual balance remains constant.',
    keyInsights: [
      'A ratio compares quantities: 2 cups to 3 cups is written 2 : 3',
      'The total parts in a ratio A : B is always A + B',
      'Scaling multiplies both numbers by the exact same factor',
    ],
  },
  questions: [
    {
      id: 'q-rat-1',
      type: 'multiple-choice',
      questionText: 'In a paint mix with 1 part blue and 4 parts yellow (1:4), what fraction of the total paint is blue?',
      choices: [
        { id: 'q-rat-1-a', text: '1/4' },
        { id: 'q-rat-1-b', text: '1/5' },
        { id: 'q-rat-1-c', text: '4/5' },
      ],
      correctChoiceId: 'q-rat-1-b',
      explanation: 'Total parts = 1 blue + 4 yellow = 5 parts total. So blue is 1 out of 5 parts (1/5).',
      hint: 'Add the two numbers together to find the total whole (1 + 4 = 5).',
    },
    {
      id: 'q-rat-2',
      type: 'multiple-choice',
      questionText: 'If a fruit bowl has 3 apples and 5 bananas, what is the ratio of apples to bananas?',
      choices: [
        { id: 'q-rat-2-a', text: '3 : 5' },
        { id: 'q-rat-2-b', text: '5 : 3' },
        { id: 'q-rat-2-c', text: '3 : 8' },
      ],
      correctChoiceId: 'q-rat-2-a',
      explanation: 'Order matters in ratios! Apples (3) come first, bananas (5) come second: 3 : 5.',
      hint: 'The question asked for apples to bananas, so write apples first.',
    },
  ],
  completion: {
    title: 'You grasp what ratios represent.',
    subtitle: 'Part-to-part and part-to-whole comparisons are crystal clear.',
    summaryPoints: [
      'A ratio compares two quantities: A : B.',
      'Total parts = A + B.',
      'Ratios describe recipes and proportional balance.',
    ],
    nextLessonId: 'ratios-equivalent-ratios',
    nextLessonTitle: 'Equivalent ratios & scaling',
  },
};
