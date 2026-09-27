import type { LessonData } from '../../types';

export const fractionsEquivalentFractionsLesson: LessonData = {
  id: 'fractions-equivalent-fractions',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  title: 'Equivalent fractions',
  subtitle: 'Why 2/4, 4/8, and 1/2 look different but measure the exact same quantity.',
  estimatedMinutes: 7,
  intro: {
    heading: 'Why do different fractions measure the exact same amount?',
    coreDefinition: 'Equivalent fractions are different ways of naming the exact same physical quantity.',
    whyItMatters:
      'If you slice a chocolate bar in half and eat 1 piece, you eat half the bar. If you instead slice it into 4 pieces and eat 2, you still eat the exact same amount of chocolate. The total amount is unchanged—only the number of cuts changed.',
    keyTakeaway:
      'Multiplying or dividing both the top and bottom by the same number cuts each piece into smaller pieces, but keeps the total covered space exactly identical.',
  },
  examples: {
    heading: 'The Slicing Secret: Slicing without changing the whole',
    description:
      'Look at how the shaded space below stays 100% constant even as we cut each piece into smaller sub-pieces.',
    items: [
      {
        id: 'eq-1',
        title: 'One half (1/2)',
        description: 'The whole is divided into 2 equal parts. 1 part is shaded.',
        fractionText: '1/2',
        visual: {
          type: 'fraction-bar',
          totalParts: 2,
          shadedParts: 1,
          label: '1 out of 2 parts',
        },
        insight: 'This is the simplest, cleanest way to name this quantity.',
      },
      {
        id: 'eq-2',
        title: 'Two fourths (2/4) — Cut in 2',
        description: 'We cut each of the 2 halves in half. Now we have 4 parts, and 2 are shaded.',
        fractionText: '2/4 = 1/2',
        equivalentText: 'Exact same amount as 1/2',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 2,
          label: '2 out of 4 parts (each half cut in 2)',
        },
        insight: 'We have 2 times as many shaded pieces, but each piece is half the size. Total space is identical.',
      },
      {
        id: 'eq-3',
        title: 'Four eighths (4/8) — Cut in 4',
        description: 'We cut each original half into 4 smaller slices.',
        fractionText: '4/8 = 1/2',
        equivalentText: 'Exact same amount as 1/2',
        visual: {
          type: 'fraction-bar',
          totalParts: 8,
          shadedParts: 4,
          label: '4 out of 8 parts',
        },
        insight: 'Top multiplied by 4 (1 × 4 = 4). Bottom multiplied by 4 (2 × 4 = 8). Value unchanged.',
      },
      {
        id: 'eq-4',
        title: 'Three sixths (3/6) — Cut in 3',
        description: 'Cutting each original half into 3 slices produces 6 total slices.',
        fractionText: '3/6 = 1/2',
        equivalentText: 'Exact same amount as 1/2',
        visual: {
          type: 'fraction-bar',
          totalParts: 6,
          shadedParts: 3,
          label: '3 out of 6 parts',
        },
        insight: 'Any time the numerator is exactly half the denominator, the fraction equals 1/2.',
      },
    ],
  },
  video: {
    title: 'The paper folding demonstration of equivalence',
    duration: '02:30',
    durationSeconds: 150,
    description: 'A 2-minute visual breakdown showing why multiplying top and bottom is physically just making more cuts.',
    placeholderNote: 'Foundu visual concept breakdown (1–4 min per concept)',
    keyPoints: [
      'Equivalent fractions cover the exact same physical area',
      'Multiplying the denominator cuts the whole into more pieces',
      'Multiplying the numerator counts the corresponding smaller pieces',
      'The Golden Rule: Whatever you multiply the bottom by, you must multiply the top by',
    ],
    transcript: [
      'Take a single piece of paper and fold it in half. Shade one side.',
      'That shaded area is 1/2.',
      'Now, fold the paper again without coloring anything new. Open it up.',
      'You now see four sections, and two of them are shaded: 2/4.',
      'Did the shaded area change? Not by a single millimeter.',
      'All we did was make another fold. We doubled the cuts, so we doubled the pieces.',
      'That is why (1 × 2) / (2 × 2) = 2/4. That is the entire secret to equivalent fractions.',
    ],
  },
  questions: [
    {
      id: 'eq-q1',
      type: 'comparison',
      questionText: 'Which fraction is equivalent to 1/3?',
      promptNote: 'Think about cutting each piece of a third into 2 equal parts.',
      visual: {
        type: 'comparison',
        totalParts: 6,
        shadedParts: 2,
        comparison: {
          fractionA: { numerator: 1, denominator: 3, label: '1/3' },
          fractionB: { numerator: 2, denominator: 6, label: '2/6' },
        },
      },
      choices: [
        {
          id: 'eq-q1-a',
          text: '2/6',
          visual: { type: 'fraction-bar', totalParts: 6, shadedParts: 2 },
        },
        {
          id: 'eq-q1-b',
          text: '2/5',
          visual: { type: 'fraction-bar', totalParts: 5, shadedParts: 2 },
        },
        {
          id: 'eq-q1-c',
          text: '1/6',
          visual: { type: 'fraction-bar', totalParts: 6, shadedParts: 1 },
        },
        {
          id: 'eq-q1-d',
          text: '3/3',
          visual: { type: 'fraction-bar', totalParts: 3, shadedParts: 3 },
        },
      ],
      correctChoiceId: 'eq-q1-a',
      explanation:
        'That’s right. If you multiply both top and bottom by 2, (1 × 2)/(3 × 2) = 2/6. Both bars cover the exact same width.',
      hint: 'Not quite. If you cut each of the 3 pieces in half, you get 6 pieces in all. The 1 shaded piece becomes 2 smaller shaded pieces.',
    },
    {
      id: 'eq-q2',
      type: 'multiple-choice',
      questionText: 'If you multiply the denominator by 3, what must you do to the numerator to keep the fraction equivalent?',
      promptNote: 'Remember: to keep the balance identical, what happens to the bottom must happen to the top.',
      choices: [
        { id: 'eq-q2-a', text: 'Add 3 to the numerator' },
        { id: 'eq-q2-b', text: 'Multiply the numerator by 3' },
        { id: 'eq-q2-c', text: 'Leave the numerator alone' },
        { id: 'eq-q2-d', text: 'Divide the numerator by 3' },
      ],
      correctChoiceId: 'eq-q2-b',
      explanation:
        'That’s right. Multiplying the denominator cuts the whole into 3 times as many pieces. To hold the same amount, you must take 3 times as many pieces (multiply top by 3).',
      hint: 'Not quite. Think about slicing a pizza: if you cut every slice into 3 pieces, you need 3 times as many pieces on your plate to get the same amount of food.',
    },
    {
      id: 'eq-q3',
      type: 'multiple-choice',
      questionText: 'What is 4/8 in its simplest, cleanest form?',
      promptNote: 'Merge the pieces back together into the largest possible equal parts.',
      visual: {
        type: 'fraction-bar',
        totalParts: 8,
        shadedParts: 4,
        label: '4 out of 8 pieces',
      },
      choices: [
        {
          id: 'eq-q3-a',
          text: '1/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1 },
        },
        {
          id: 'eq-q3-b',
          text: '1/2',
          visual: { type: 'fraction-bar', totalParts: 2, shadedParts: 1 },
        },
        {
          id: 'eq-q3-c',
          text: '2/3',
          visual: { type: 'fraction-bar', totalParts: 3, shadedParts: 2 },
        },
        {
          id: 'eq-q3-d',
          text: '3/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 3 },
        },
      ],
      correctChoiceId: 'eq-q3-b',
      explanation:
        'That’s right. 4 is exactly half of 8. If you merge pairs of slices together, 4/8 becomes 1/2.',
      hint: 'Not quite. Divide both 4 and 8 by 4: 4 ÷ 4 = 1, and 8 ÷ 4 = 2. So 4/8 simplifies directly to 1/2.',
    },
    {
      id: 'eq-q4',
      type: 'conceptual-explanation',
      questionText: 'Someone claims that 1/2 is equivalent to 2/3 because they added 1 to both top and bottom (1+1=2, 2+1=3). Why is this wrong?',
      promptNote: 'Think about physical slices: does adding equal pieces preserve proportional size?',
      choices: [
        {
          id: 'eq-q4-a',
          text: 'Because adding numbers changes the ratio. 1/2 is 50%, but 2/3 is 66.7%—a significantly larger amount.',
        },
        {
          id: 'eq-q4-b',
          text: 'Because you can only add even numbers to fractions.',
        },
        {
          id: 'eq-q4-c',
          text: 'Because 2 and 3 cannot be divided by 2.',
        },
      ],
      correctChoiceId: 'eq-q4-a',
      explanation:
        'That’s right. Slicing pieces multiplies them—it never adds. Adding 1 to top and bottom fundamentally changes the proportion: 2/3 is noticeably bigger than 1/2.',
      hint: 'Not quite. Think visually: 1 out of 2 is half of a pizza. 2 out of 3 is more than half of a pizza. They are not equal amounts!',
    },
    {
      id: 'eq-q5',
      type: 'multiple-choice',
      questionText: 'You need 3/4 cup of flour, but your measuring cup only has a 1/8 scoop mark. How many 1/8 scoops do you need to equal 3/4?',
      promptNote: 'Convert 3/4 into an equivalent fraction with an 8 on the bottom.',
      choices: [
        { id: 'eq-q5-a', text: '3 scoops' },
        { id: 'eq-q5-b', text: '5 scoops' },
        { id: 'eq-q5-c', text: '6 scoops' },
        { id: 'eq-q5-d', text: '8 scoops' },
      ],
      correctChoiceId: 'eq-q5-c',
      explanation:
        'That’s right. To turn denominator 4 into 8, multiply by 2. (3 × 2) / (4 × 2) = 6/8. So you need exactly 6 scoops of 1/8.',
      hint: 'Not quite. Since 8 is twice as many pieces as 4 (4 × 2 = 8), you need twice as many scoops (3 × 2 = 6).',
    },
  ],
  completion: {
    title: 'You understand equivalent fractions.',
    subtitle: 'Nice work. You now understand the slicing secret that makes all fraction algebra work.',
    summaryPoints: [
      'Equivalent fractions represent the exact same physical amount.',
      'Multiplying or dividing top and bottom by the same number scales the cuts without altering the space.',
      'Addition changes the proportion; multiplication preserves it.',
      '4/8, 3/6, and 2/4 all simplify down to the foundational 1/2.',
    ],
    nextLessonId: 'fractions-simplifying-fractions',
    nextLessonTitle: 'Simplifying fractions',
  },
};
