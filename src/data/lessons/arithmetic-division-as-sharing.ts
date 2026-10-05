import type { LessonData } from '../../types';

export const arithmeticDivisionAsSharingLesson: LessonData = {
  id: 'arithmetic-division-as-sharing',
  topicId: 'arithmetic',
  topicTitle: 'Arithmetic',
  title: 'Division as sharing & grouping',
  subtitle: 'The two ways to think about division, equal shares, and understanding remainders.',
  estimatedMinutes: 7,
  intro: {
    heading: 'Division is the honest art of fair sharing',
    coreDefinition: 'Division answers two questions: "How many in each equal group?" or "How many groups can we make?"',
    whyItMatters:
      'Division is not a scary long calculation with guesswork. It is physically dealing out cards or candies so everyone receives the exact same amount.',
    keyTakeaway: 'Total ÷ Groups = Amount in each group. Whatever is left over is the remainder.',
    visualHookType: 'array-grid',
  },
  examples: {
    heading: 'The mechanics of equal sharing',
    description: 'Look at how items split cleanly into bowls with leftovers accounted for.',
    items: [
      {
        id: 'div-1',
        title: '12 ÷ 3 = 4 (Even Sharing)',
        description: '12 cookies shared among 3 friends gives exactly 4 cookies each, with 0 leftover.',
        fractionText: '12 ÷ 3 = 4',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 4 },
          label: '3 groups of 4 = 12',
        },
        insight: 'Notice division is the exact inverse of multiplication: 3 × 4 = 12, so 12 ÷ 3 = 4.',
      },
      {
        id: 'div-2',
        title: '13 ÷ 4 = 3 with Remainder 1',
        description: '13 shared among 4 people gives 3 each, and 1 extra cookie that cannot be split whole.',
        fractionText: '13 ÷ 4 = 3 R 1',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 4, cols: 3 },
          label: '4 groups of 3 (12) + 1 remainder = 13',
        },
        insight: 'The remainder must always be strictly smaller than the number of groups (1 < 4).',
      },
      {
        id: 'div-3',
        title: 'Division by Zero is impossible',
        description: 'Try sharing 10 cookies among 0 people: you cannot even begin the action of sharing.',
        fractionText: '10 ÷ 0 = Undefined',
        visual: {
          type: 'fraction-bar',
          totalParts: 1,
          shadedParts: 0,
          label: 'Cannot divide into 0 pieces',
        },
        insight: 'You cannot divide a physical object into zero groups.',
      },
    ],
  },
  visualLab: {
    title: 'The Division & Sharing Lab',
    subtitle: 'Distribute items among groups dynamically. Watch how remainders collect in the leftover tray.',
    interactiveType: 'division-sharing',
    instructions: 'Use the Total Items and Groups sliders to test different combinations and observe fair distributions.',
    keyInsights: [
      'Division distributes total items equally across groups',
      'The remainder is what is left when equal whole shares run out',
      'Multiplying quotient by divisor plus remainder restores the original total',
    ],
  },
  questions: [
    {
      id: 'q-div-1',
      type: 'multiple-choice',
      questionText: 'If 20 apples are packed into bags of 5, how many bags can you fill?',
      choices: [
        { id: 'q-div-1-a', text: '4 bags' },
        { id: 'q-div-1-b', text: '5 bags' },
        { id: 'q-div-1-c', text: '15 bags' },
      ],
      correctChoiceId: 'q-div-1-a',
      explanation: '20 ÷ 5 = 4. You can make 4 full bags of 5 apples.',
      hint: 'Think: what number multiplied by 5 gives 20?',
    },
    {
      id: 'q-div-2',
      type: 'multiple-choice',
      questionText: 'What is the remainder when 17 is divided by 5?',
      choices: [
        { id: 'q-div-2-a', text: '3' },
        { id: 'q-div-2-b', text: '2' },
        { id: 'q-div-2-c', text: '1' },
      ],
      correctChoiceId: 'q-div-2-b',
      explanation: '5 × 3 = 15. Then 17 - 15 = 2. The remainder is 2.',
      hint: 'Find the largest multiple of 5 under 17 (15), then subtract from 17.',
    },
  ],
  completion: {
    title: 'You understand division intuitively.',
    subtitle: 'Fair sharing and remainders make complete sense.',
    summaryPoints: [
      'Division is fair sharing and grouping.',
      'Division is the inverse of multiplication.',
      'Remainders are leftovers that cannot form a full group.',
    ],
    nextLessonId: 'arithmetic-order-of-operations',
    nextLessonTitle: 'Order of operations',
  },
};
