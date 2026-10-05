import type { LessonData } from '../../types';

export const algebraWhatIsAVariableLesson: LessonData = {
  id: 'algebra-what-is-a-variable',
  topicId: 'early-algebra',
  topicTitle: 'Early Algebra',
  title: 'What is a variable?',
  subtitle: 'Demystifying the letter x: a container holding an unknown number waiting to be discovered.',
  estimatedMinutes: 6,
  intro: {
    heading: 'The mystery box in arithmetic',
    coreDefinition: 'A variable (like x or n) is simply an empty box or placeholder where a number goes.',
    whyItMatters:
      'In elementary school, teachers wrote: 5 + [  ] = 9. In algebra, they simply write: 5 + x = 9. The letter x is nothing more than that empty square bracket!',
    keyTakeaway: 'x is not a foreign language; it is a placeholder for a missing value.',
    visualHookType: 'balance-scale',
  },
  examples: {
    heading: 'Three ways to think of a variable',
    description: 'Notice how variables act as friendly containers holding unknown weights.',
    items: [
      {
        id: 'var-1',
        title: 'The Mystery Present: x + 4 = 10',
        description: 'A wrapped gift box plus 4 coins equals 10 coins. What is inside the box? 6 coins.',
        fractionText: 'x = 6',
        visual: {
          type: 'balance-scale',
          balanceScale: { leftX: 1, leftConstant: 4, rightConstant: 10 },
          label: 'Box x + 4 = 10',
        },
        insight: 'Subtract 4 from 10 to see what is hiding inside x.',
      },
      {
        id: 'var-2',
        title: 'Any letter can be a variable',
        description: 'Whether we call it x, y, a, or ?, the mathematics behaves identically.',
        fractionText: 'y + 2 = 7 ⟹ y = 5',
        visual: {
          type: 'balance-scale',
          balanceScale: { leftX: 1, leftConstant: 2, rightConstant: 7 },
          label: 'Box y + 2 = 7',
        },
        insight: 'Letters are chosen just because they are easy to write quickly.',
      },
      {
        id: 'var-3',
        title: 'Variables that can change',
        description: 'In formulas, variables can take different values. If cost = 3 × items, more items means higher cost.',
        fractionText: 'Cost = 3 × n',
        visual: {
          type: 'array-grid',
          arrayGrid: { rows: 3, cols: 3 },
          label: '3 items at $3 each = $9',
        },
        insight: 'Variables allow one single equation to describe infinite situations.',
      },
    ],
  },
  visualLab: {
    title: 'The Mystery Box & Balance Lab',
    subtitle: 'Solve for x by isolating the mystery box on the physical balance scale.',
    interactiveType: 'balance-scale',
    instructions: 'Remove equal weights from both sides to unwrap the mystery box and find the value of x.',
    keyInsights: [
      'A variable represents a specific number waiting to be solved',
      'Operations done to one side of the equation must be done to the other',
      'When x sits alone on the pan, its value is revealed',
    ],
  },
  questions: [
    {
      id: 'q-var-1',
      type: 'multiple-choice',
      questionText: 'In the equation x + 7 = 12, what number does x represent?',
      choices: [
        { id: 'q-var-1-a', text: '5' },
        { id: 'q-var-1-b', text: '19' },
        { id: 'q-var-1-c', text: '7' },
      ],
      correctChoiceId: 'q-var-1-a',
      explanation: 'Subtract 7 from both sides: 12 - 7 = 5. So x = 5.',
      hint: 'What number plus 7 equals 12?',
    },
    {
      id: 'q-var-2',
      type: 'multiple-choice',
      questionText: 'What is the purpose of using a letter like x in math?',
      choices: [
        { id: 'q-var-2-a', text: 'To act as a placeholder for an unknown number' },
        { id: 'q-var-2-b', text: 'To confuse students' },
        { id: 'q-var-2-c', text: 'To indicate words instead of numbers' },
      ],
      correctChoiceId: 'q-var-2-a',
      explanation: 'x is simply a symbol standing in for a value that we haven’t found yet or that can vary.',
      hint: 'Think of x as an empty gift box with a secret weight inside.',
    },
  ],
  completion: {
    title: 'You understand variables completely.',
    subtitle: 'The letter x has no secrets from you.',
    summaryPoints: [
      'Variables are empty containers holding numbers.',
      'x + 4 = 10 is just 4 + [ ] = 10.',
      'Unwrapping the variable reveals its value.',
    ],
    nextLessonId: 'algebra-the-balance-scale',
    nextLessonTitle: 'Equations as balance scales',
  },
};
