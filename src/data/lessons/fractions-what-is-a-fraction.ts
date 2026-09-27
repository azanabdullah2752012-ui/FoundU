import type { LessonData } from '../../types';

export const fractionsWhatIsAFractionLesson: LessonData = {
  id: 'fractions-what-is-a-fraction',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  title: 'What is a fraction?',
  subtitle: 'Understanding parts of a whole through intuition and visual models.',
  estimatedMinutes: 6,
  intro: {
    heading: 'What is a fraction?',
    coreDefinition: 'A fraction is a way of showing a part of a whole.',
    whyItMatters:
      'Whole numbers work well when you have 1 apple or 3 books. But the moment you split a loaf of bread, measure half an inch, or share a bill, whole numbers stop being enough. Fractions give us the exact language to describe portions without guessing.',
    keyTakeaway: 'The bottom number tells us how many equal pieces exist. The top number tells us how many of those pieces we are talking about.',
  },
  examples: {
    heading: 'See the parts in action',
    description: 'Before doing any arithmetic, look at these shapes. Notice how each part is exactly equal in size.',
    items: [
      {
        id: 'ex-1',
        title: 'One out of four equal parts',
        description: 'A shape is divided into 4 equal slices. Exactly 1 slice is highlighted.',
        fractionText: '1/4',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 1,
          label: '1 part shaded of 4 equal parts',
        },
        insight: 'We write 1 on top (the numerator) and 4 on the bottom (the denominator).',
      },
      {
        id: 'ex-2',
        title: 'Two out of four equal parts',
        description: 'Two slices are highlighted out of the 4 equal slices.',
        fractionText: '2/4 = 1/2',
        equivalentText: 'Exact same amount as 1/2',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 2,
          label: '2 parts shaded of 4 equal parts',
        },
        insight: 'Notice visually that 2 out of 4 slices fills exactly half of the shape. That is why 2/4 and 1/2 mean the same quantity.',
      },
      {
        id: 'ex-3',
        title: 'Three out of four equal parts',
        description: 'Three slices are highlighted out of the 4 equal slices.',
        fractionText: '3/4',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 3,
          label: '3 parts shaded of 4 equal parts',
        },
        insight: 'Only one slice remains unshaded. You are holding almost the entire whole.',
      },
      {
        id: 'ex-4',
        title: 'Four out of four parts — The Whole',
        description: 'When all 4 slices are highlighted, you have the entire thing.',
        fractionText: '4/4 = 1',
        equivalentText: '1 whole',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 4,
          label: 'All 4 parts shaded',
        },
        insight: 'Any time the top and bottom numbers match, you have 1 complete whole.',
      },
    ],
  },
  video: {
    title: 'The intuition behind fractions',
    duration: '02:40',
    durationSeconds: 160,
    description: 'A focused, 2-minute visual breakdown of equal sharing, numerators, and denominators.',
    placeholderNote: 'Foundu short visual breakdown (1–4 min per concept)',
    keyPoints: [
      'Why equality of parts is the rule that makes fractions work',
      'The denominator (bottom) = number of equal cuts',
      'The numerator (top) = number of cuts we actually possess',
      'Why larger denominators make smaller slices',
    ],
    transcript: [
      'Imagine a single strip of paper. It represents one whole.',
      'If we cut it directly down the middle, we get two pieces. For a fraction to work, those pieces must be equal.',
      'Each piece is one out of two: 1/2.',
      'Now, if we cut both of those pieces in half again, we have four pieces. Each piece is 1/4.',
      'Notice what happens: because we made more cuts, each individual piece got smaller.',
      'If you take two of those small pieces, you have 2/4. Lay it next to the 1/2 piece — they match perfectly.',
      'That is the entire foundation of fractions: counting equal pieces of a whole.',
    ],
  },
  questions: [
    {
      id: 'q1',
      type: 'visual-selection',
      questionText: 'What fraction of the shape is shaded?',
      promptNote: 'Count the shaded parts, then count the total equal parts.',
      visual: {
        type: 'fraction-bar',
        totalParts: 4,
        shadedParts: 3,
        label: 'A bar divided into 4 equal segments with 3 shaded',
      },
      choices: [
        {
          id: 'q1-a',
          text: '1/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1 },
        },
        {
          id: 'q1-b',
          text: '2/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 2 },
        },
        {
          id: 'q1-c',
          text: '3/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 3 },
        },
        {
          id: 'q1-d',
          text: '4/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 4 },
        },
      ],
      correctChoiceId: 'q1-c',
      explanation: 'That’s right. The whole is divided into 4 equal parts (the denominator), and 3 of those parts are shaded (the numerator).',
      hint: 'Not quite. Let’s look at the parts again. Count the total equal parts first: there are 4 in all. Then count how many are shaded: there are 3.',
    },
    {
      id: 'q2',
      type: 'comparison',
      questionText: 'Which is larger?',
      promptNote: 'Think about how big each individual slice is when you cut a whole into 2 pieces versus 4 pieces.',
      visual: {
        type: 'comparison',
        totalParts: 4,
        shadedParts: 1,
        comparison: {
          fractionA: { numerator: 1, denominator: 2, label: '1/2' },
          fractionB: { numerator: 1, denominator: 4, label: '1/4' },
        },
      },
      choices: [
        {
          id: 'q2-a',
          text: '1/2 is larger',
          visual: { type: 'fraction-bar', totalParts: 2, shadedParts: 1 },
        },
        {
          id: 'q2-b',
          text: '1/4 is larger',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1 },
        },
        { id: 'q2-c', text: 'They are equal in size' },
      ],
      correctChoiceId: 'q2-a',
      explanation: 'That’s right. When you divide a whole into only 2 pieces, each piece is much bigger than if you cut it into 4 pieces. So 1/2 is twice as large as 1/4.',
      hint: 'Not quite. It can be surprising because the number 4 is bigger than 2. But remember: the bottom number shows how many times you cut the whole. More cuts mean smaller pieces!',
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      questionText: 'Which fraction represents three out of four equal parts?',
      promptNote: 'Remember: the parts we are counting sit on top; the total parts sit on the bottom.',
      choices: [
        {
          id: 'q3-a',
          text: '1/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1 },
        },
        {
          id: 'q3-b',
          text: '3/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 3 },
        },
        {
          id: 'q3-c',
          text: '2/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 2 },
        },
        {
          id: 'q3-d',
          text: '4/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 4 },
        },
      ],
      correctChoiceId: 'q3-b',
      explanation: 'That’s right. 3 is the top number (how many parts we have) and 4 is the bottom number (the total number of equal parts).',
      hint: 'Not quite. Remember the order: the parts we are holding go on top (3), and the total equal pieces go on the bottom (4).',
    },
    {
      id: 'q4',
      type: 'multiple-choice',
      questionText: 'Which fraction is equivalent to 1/2?',
      promptNote: 'Look for the fraction that covers the exact same amount of space as one half.',
      visual: {
        type: 'comparison',
        totalParts: 4,
        shadedParts: 2,
        comparison: {
          fractionA: { numerator: 1, denominator: 2, label: '1/2' },
          fractionB: { numerator: 2, denominator: 4, label: '2/4' },
        },
      },
      choices: [
        {
          id: 'q4-a',
          text: '1/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 1 },
        },
        {
          id: 'q4-b',
          text: '2/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 2 },
        },
        {
          id: 'q4-c',
          text: '3/4',
          visual: { type: 'fraction-bar', totalParts: 4, shadedParts: 3 },
        },
        {
          id: 'q4-d',
          text: '2/3',
          visual: { type: 'fraction-bar', totalParts: 3, shadedParts: 2 },
        },
      ],
      correctChoiceId: 'q4-b',
      explanation: 'That’s right. If you take 2 pieces out of 4, you have covered exactly half of the shape. 2/4 and 1/2 are equivalent.',
      hint: 'Not quite. Let’s break it down: imagine a pizza cut into 4 slices. To eat half of the pizza, how many of those 4 slices would you take?',
    },
    {
      id: 'q5',
      type: 'conceptual-explanation',
      questionText: 'Why do 2/4 and 1/2 represent the same amount?',
      promptNote: 'Choose the explanation that best describes what is happening visually.',
      choices: [
        {
          id: 'q5-a',
          text: 'Because 2/4 cuts the whole into twice as many pieces, but we take twice as many, covering the exact same total space.',
        },
        {
          id: 'q5-b',
          text: 'Because any numbers that are even always equal each other.',
        },
        {
          id: 'q5-c',
          text: 'Because 4 minus 2 equals 2, so the remaining piece is always 1.',
        },
      ],
      correctChoiceId: 'q5-a',
      explanation:
        'That’s right. Even though 2/4 has more individual pieces, each piece is half the size. 2 small pieces take up the exact same physical space as 1 larger piece.',
      hint: 'Not quite. Think visually: if you fold a sheet of paper in half (1/2), and then fold it in half again (4 parts), 2 of those smaller folded sections will fill the exact same area as the original half.',
    },
  ],
  completion: {
    title: 'You understand fractions.',
    subtitle: 'Nice work. Your foundation just got a little stronger.',
    summaryPoints: [
      'A fraction expresses equal parts of a whole.',
      'The denominator (bottom) describes total equal parts.',
      'The numerator (top) describes the parts you are counting.',
      'Different fractions like 2/4 and 1/2 can describe the exact same quantity.',
    ],
    nextLessonId: 'fractions-equivalent-fractions',
    nextLessonTitle: 'Equivalent fractions',
  },
};
