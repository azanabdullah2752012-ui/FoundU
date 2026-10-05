import type { LessonData } from '../../types';

export const fractionsSimplifyingFractionsLesson: LessonData = {
  id: 'fractions-simplifying-fractions',
  topicId: 'fractions',
  topicTitle: 'Fractions',
  title: 'Simplifying fractions',
  subtitle: 'Finding the simplest, cleanest terms to write any fraction without altering its value.',
  estimatedMinutes: 6,
  intro: {
    heading: 'Why write 4/8 when you can write 1/2?',
    coreDefinition: 'Simplifying a fraction means grouping smaller equal pieces together into the fewest possible slices.',
    whyItMatters:
      '4/8 of a pizza and 1/2 of a pizza feed the exact same hunger. Simplifying doesn’t shrink the meal—it just reduces mental clutter.',
    keyTakeaway: 'Divide top and bottom by the same common number until no common factors remain.',
    visualHookType: 'fraction-slice',
  },
  examples: {
    heading: 'Three visual simplifications',
    description: 'Watch how tiny cuts merge cleanly into larger, simpler slices.',
    items: [
      {
        id: 'simp-1',
        title: '4/8 simplifies to 1/2',
        description: 'Divide numerator and denominator by 4: (4÷4) / (8÷4) = 1/2.',
        fractionText: '4/8 = 1/2',
        equivalentText: 'Divide by 4',
        visual: {
          type: 'fraction-bar',
          totalParts: 8,
          shadedParts: 4,
          label: '4 out of 8 pieces (exactly half)',
        },
        insight: 'Whenever the top is exactly half of the bottom, the simplest term is always 1/2.',
      },
      {
        id: 'simp-2',
        title: '3/6 simplifies to 1/2',
        description: 'Grouping 3 slices out of 6 into 1 group out of 2.',
        fractionText: '3/6 = 1/2',
        equivalentText: 'Divide by 3',
        visual: {
          type: 'fraction-bar',
          totalParts: 6,
          shadedParts: 3,
          label: '3 out of 6 pieces',
        },
        insight: 'Both 3 and 6 can be divided by 3.',
      },
      {
        id: 'simp-3',
        title: '2/4 simplifies to 1/2',
        description: 'Grouping 2 slices out of 4 into 1 group out of 2.',
        fractionText: '2/4 = 1/2',
        equivalentText: 'Divide by 2',
        visual: {
          type: 'fraction-bar',
          totalParts: 4,
          shadedParts: 2,
          label: '2 out of 4 pieces',
        },
        insight: 'The shaded area stays 100% constant.',
      },
    ],
  },
  visualLab: {
    title: 'The Simplifying & Subdivisions Lab',
    subtitle: 'Group small pieces into larger cuts. See how 4/8, 3/6, and 2/4 all collapse into 1/2.',
    interactiveType: 'subdivision-multiplier',
    instructions: 'Tap multiplier buttons to see cuts multiply and collapse into the simplest 1/2 base unit.',
    keyInsights: [
      'Simplifying is the reverse of subdividing',
      'Whatever you divide the top by, you must divide the bottom by',
      'A fraction is in simplest form when 1 is the only number that divides both terms',
    ],
  },
  questions: [
    {
      id: 'q-simp-1',
      type: 'multiple-choice',
      questionText: 'What is 6/8 in simplest terms?',
      promptNote: 'Both 6 and 8 can be divided evenly by 2.',
      choices: [
        { id: 'q-simp-1-a', text: '3/4' },
        { id: 'q-simp-1-b', text: '1/2' },
        { id: 'q-simp-1-c', text: '3/8' },
        { id: 'q-simp-1-d', text: '6/4' },
      ],
      correctChoiceId: 'q-simp-1-a',
      explanation: '6 ÷ 2 = 3, and 8 ÷ 2 = 4. So 6/8 simplifies to 3/4.',
      hint: 'Divide both 6 and 8 in half.',
    },
    {
      id: 'q-simp-2',
      type: 'multiple-choice',
      questionText: 'Does simplifying a fraction change the amount of pizza you get?',
      choices: [
        { id: 'q-simp-2-a', text: 'No, it covers the exact same area' },
        { id: 'q-simp-2-b', text: 'Yes, you get less pizza' },
        { id: 'q-simp-2-c', text: 'Yes, you get more pizza' },
      ],
      correctChoiceId: 'q-simp-2-a',
      explanation: 'Simplifying only groups cuts together—it never changes the total physical amount.',
      hint: 'Think about eating 2 quarters vs 1 half. Is it the same amount of food?',
    },
  ],
  completion: {
    title: 'You can simplify fractions effortlessly.',
    subtitle: 'Finding the cleanest terms is now second nature.',
    summaryPoints: [
      'Simplifying groups small cuts into fewer pieces.',
      'Divide top and bottom by the same number.',
      'The value and area remain identical.',
    ],
    nextLessonId: 'fractions-adding-fractions',
    nextLessonTitle: 'Adding fractions',
  },
};
