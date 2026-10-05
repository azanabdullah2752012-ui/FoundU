import type { LessonData } from '../../types';

export const algebraTheBalanceScaleLesson: LessonData = {
  id: 'algebra-the-balance-scale',
  topicId: 'early-algebra',
  topicTitle: 'Early Algebra',
  title: 'Equations as balance scales',
  subtitle: 'Demystifying equations: whatever you do to one side, you must do to the other.',
  estimatedMinutes: 7,
  intro: {
    heading: 'An equation is a physical scale in balance',
    coreDefinition: 'The equals sign (=) means the two sides weigh the exact same amount.',
    whyItMatters:
      'People often think the equals sign means "calculate the answer now". In algebra, it means "these two pans are level". To isolate the mystery box x, remove equal weights from both pans.',
    keyTakeaway: 'Keep the scale level by doing the identical operation to both sides.',
    visualHookType: 'balance-scale',
  },
  examples: {
    heading: 'Solving equations on the scale',
    description: 'Look at how physical manipulation solves algebraic equations without abstract rules.',
    items: [
      {
        id: 'bal-ex-1',
        title: 'The starting balance: x + 3 = 7',
        description: 'Left pan holds mystery box x and 3 marbles. Right pan holds 7 marbles. The beam is level.',
        fractionText: 'x + 3 = 7',
        visual: {
          type: 'balance-scale',
          balanceScale: { leftX: 1, leftConstant: 3, rightConstant: 7 },
          label: 'Scale is balanced: Left = Right',
        },
        insight: 'We want the box x all by itself on the left pan.',
      },
      {
        id: 'bal-ex-2',
        title: 'Subtract 3 from BOTH pans',
        description: 'Take 3 marbles off the left pan. To keep the beam level, take 3 marbles off the right pan as well.',
        fractionText: 'x + 3 - 3 = 7 - 3',
        visual: {
          type: 'balance-scale',
          balanceScale: { leftX: 1, leftConstant: 0, rightConstant: 4 },
          label: 'Isolated box: x = 4',
        },
        insight: 'The box x sits alone on the left. The right pan has 4 marbles. Therefore, x = 4.',
      },
      {
        id: 'bal-ex-3',
        title: 'The Golden Rule of Algebra',
        description: 'You can add, subtract, multiply, or divide anything you want — as long as you do it equally to both sides.',
        fractionText: 'Left = Right',
        visual: {
          type: 'balance-scale',
          balanceScale: { leftX: 1, leftConstant: 2, rightConstant: 6 },
          label: 'Balance is preserved',
        },
        insight: 'Equations are not puzzles with arbitrary tricks. They are honest physical balances.',
      },
    ],
  },
  visualLab: {
    title: 'The Algebraic Balance Scale Lab',
    subtitle: 'Solve x + 3 = 7 by physically removing marbles equally from both pans.',
    interactiveType: 'balance-scale',
    instructions: 'Click the buttons to remove marbles equally from both sides until the mystery box x is isolated alone on the pan.',
    keyInsights: [
      'The equals sign (=) represents a beam in perfect balance',
      'The unknown letter x is just a mystery weight waiting to be discovered',
      'Whatever you do to one pan, you must do to the other pan to preserve equilibrium',
    ],
  },
  questions: [
    {
      id: 'q-alg-1',
      type: 'multiple-choice',
      questionText: 'If a scale has (x + 5) on the left and 12 on the right, how do you find x?',
      choices: [
        { id: 'q-alg-1-a', text: 'Subtract 5 from both sides' },
        { id: 'q-alg-1-b', text: 'Add 5 to both sides' },
        { id: 'q-alg-1-c', text: 'Multiply both sides by 5' },
      ],
      correctChoiceId: 'q-alg-1-a',
      explanation: 'Removing 5 from both sides leaves x alone on the left: x = 12 - 5 = 7.',
      hint: 'To undo the +5 next to x, subtract 5 from both pans.',
    },
    {
      id: 'q-alg-2',
      type: 'multiple-choice',
      questionText: 'What is the value of x in the equation x + 2 = 9?',
      choices: [
        { id: 'q-alg-2-a', text: 'x = 11' },
        { id: 'q-alg-2-b', text: 'x = 7' },
        { id: 'q-alg-2-c', text: 'x = 18' },
      ],
      correctChoiceId: 'q-alg-2-b',
      explanation: 'Subtract 2 from both sides: 9 - 2 = 7. So x = 7.',
      hint: 'What number plus 2 equals 9?',
    },
  ],
  completion: {
    title: 'You understand the heartbeat of algebra.',
    subtitle: 'Equations are balances, not intimidating formulas.',
    summaryPoints: [
      'Equals (=) means balance.',
      'To isolate x, undo what is attached to it.',
      'Always do the identical operation to both sides.',
    ],
    nextLessonId: 'fractions-what-is-a-fraction',
    nextLessonTitle: 'What is a fraction?',
  },
};
