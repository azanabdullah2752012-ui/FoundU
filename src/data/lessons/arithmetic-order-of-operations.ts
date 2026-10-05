import type { LessonData } from '../../types';

export const arithmeticOrderOfOperationsLesson: LessonData = {
  id: 'arithmetic-order-of-operations',
  topicId: 'arithmetic',
  topicTitle: 'Arithmetic',
  title: 'Order of operations',
  subtitle: 'The logical reason why multiplication precedes addition, and why PEMDAS works.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Why is 2 + 3 × 4 equal to 14, and NOT 20?',
    coreDefinition: 'Multiplication represents bundled groups. You must assemble the packages before adding loose items.',
    whyItMatters:
      'If you have 2 loose apples, and someone brings 3 bags of 4 apples: you don’t add 2 + 3 to get 5 bags! You have 2 loose apples + 12 bagged apples = 14 apples total.',
    keyTakeaway: 'Grouped packages (× and ÷) must be counted before loose pieces (+ and -).',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'The packaging hierarchy',
    description: 'Look at why groups bind together more tightly than addition.',
    items: [
      {
        id: 'ord-1',
        title: '2 + (3 × 4): Loose items + Packages',
        description: '2 single dots plus a 3×4 package of 12 dots: 2 + 12 = 14.',
        fractionText: '2 + 12 = 14',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 4 },
          label: 'The 3×4 package has 12 items. Add 2 = 14.',
        },
        insight: 'Multiplication is glued together into a rectangle. Addition just sits outside.',
      },
      {
        id: 'ord-2',
        title: 'Parentheses: Overriding the rule',
        description: '(2 + 3) × 4 means: put 2 and 3 into a single box of 5 first, then make 4 copies = 20.',
        fractionText: '(2 + 3) × 4 = 20',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 4, cols: 5 },
          label: '4 rows of 5 = 20',
        },
        insight: 'Parentheses act as physical containers grouping items before multiplying.',
      },
      {
        id: 'ord-3',
        title: 'Left to Right for equals',
        description: 'Multiplication and division share equal priority: calculate from left to right.',
        fractionText: '10 ÷ 2 × 5 = 25',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 5, cols: 5 },
          label: '(10 ÷ 2) × 5 = 5 × 5 = 25',
        },
        insight: 'Calculate peer operations from left to right as you read.',
      },
    ],
  },
  visualLab: {
    title: 'The Grouping & Order Lab',
    subtitle: 'Observe how packages of rows and columns combine with loose addition.',
    interactiveType: 'array-grid',
    instructions: 'Resize the rows and columns to visually verify why multiplication forms tight rectangular groups before addition.',
    keyInsights: [
      'Multiplication creates packages of items',
      'Addition combines packages with single items',
      'Parentheses allow you to specify custom packaging first',
    ],
  },
  questions: [
    {
      id: 'q-ord-1',
      type: 'multiple-choice',
      questionText: 'What is 5 + 2 × 3?',
      choices: [
        { id: 'q-ord-1-a', text: '21' },
        { id: 'q-ord-1-b', text: '11' },
        { id: 'q-ord-1-c', text: '30' },
      ],
      correctChoiceId: 'q-ord-1-b',
      explanation: 'First calculate the package: 2 × 3 = 6. Then add the loose items: 5 + 6 = 11.',
      hint: 'Multiply 2 × 3 first, then add 5.',
    },
    {
      id: 'q-ord-2',
      type: 'multiple-choice',
      questionText: 'What is (4 + 6) ÷ 2?',
      choices: [
        { id: 'q-ord-2-a', text: '7' },
        { id: 'q-ord-2-b', text: '5' },
        { id: 'q-ord-2-c', text: '10' },
      ],
      correctChoiceId: 'q-ord-2-b',
      explanation: 'Parentheses tell us to add inside first: 4 + 6 = 10. Then 10 ÷ 2 = 5.',
      hint: 'Do the operation inside the parentheses first.',
    },
  ],
  completion: {
    title: 'You understand the logic of operation order.',
    subtitle: 'No more memorizing PEMDAS as a mystery spell.',
    summaryPoints: [
      'Multiplication forms packages.',
      'Addition counts loose items.',
      'Parentheses package items explicitly.',
    ],
    nextLessonId: 'algebra-what-is-a-variable',
    nextLessonTitle: 'What is a variable?',
  },
};
