import type { LessonData, Topic } from '../types';
import { fractionsWhatIsAFractionLesson } from './lessons/fractions-what-is-a-fraction';
import { fractionsEquivalentFractionsLesson } from './lessons/fractions-equivalent-fractions';
import { fractionsComparingFractionsLesson } from './lessons/fractions-comparing-fractions';
import { fractionsSimplifyingFractionsLesson } from './lessons/fractions-simplifying-fractions';
import { fractionsAddingFractionsLesson } from './lessons/fractions-adding-fractions';
import { decimalsPlaceValueLesson } from './lessons/decimals-place-value';
import { decimalsComparingDecimalsLesson } from './lessons/decimals-comparing-decimals';
import { decimalsFractionToDecimalLesson } from './lessons/decimals-fraction-to-decimal';
import { percentagesIntroLesson } from './lessons/percentages-intro';
import { percentagesFractionToPercentLesson } from './lessons/percentages-fraction-to-percent';
import { percentagesFindingPercentagesLesson } from './lessons/percentages-finding-percentages';
import { numbersNegativeNumbersLesson } from './lessons/numbers-negative-numbers';
import { numbersPlaceValueLesson } from './lessons/numbers-place-value';
import { numbersFactorsAndPrimesLesson } from './lessons/numbers-factors-and-primes';
import { arithmeticMultiplicationAsArraysLesson } from './lessons/arithmetic-multiplication-as-arrays';
import { arithmeticDivisionAsSharingLesson } from './lessons/arithmetic-division-as-sharing';
import { arithmeticOrderOfOperationsLesson } from './lessons/arithmetic-order-of-operations';
import { algebraTheBalanceScaleLesson } from './lessons/algebra-the-balance-scale';
import { algebraWhatIsAVariableLesson } from './lessons/algebra-what-is-a-variable';
import { ratiosWhatRatiosRepresentLesson } from './lessons/ratios-what-ratios-represent';
import { ratiosEquivalentRatiosLesson } from './lessons/ratios-equivalent-ratios';
import { ratiosProportionsLesson } from './lessons/ratios-proportions';
import { conversionsMetricLadderLesson } from './lessons/conversions-metric-ladder';
import { conversionsTimeAndRatesLesson } from './lessons/conversions-time-and-rates';

export const ALL_LESSONS: Record<string, LessonData> = {
  'fractions-what-is-a-fraction': fractionsWhatIsAFractionLesson,
  'fractions-equivalent-fractions': fractionsEquivalentFractionsLesson,
  'fractions-comparing-fractions': fractionsComparingFractionsLesson,
  'fractions-simplifying-fractions': fractionsSimplifyingFractionsLesson,
  'fractions-adding-fractions': fractionsAddingFractionsLesson,
  'decimals-place-value': decimalsPlaceValueLesson,
  'decimals-comparing-decimals': decimalsComparingDecimalsLesson,
  'decimals-fraction-to-decimal': decimalsFractionToDecimalLesson,
  'percentages-what-percentages-mean': percentagesIntroLesson,
  'percentages-fraction-to-percent': percentagesFractionToPercentLesson,
  'percentages-finding-percentages': percentagesFindingPercentagesLesson,
  'numbers-negative-numbers': numbersNegativeNumbersLesson,
  'numbers-place-value': numbersPlaceValueLesson,
  'numbers-factors-and-primes': numbersFactorsAndPrimesLesson,
  'arithmetic-multiplication-as-arrays': arithmeticMultiplicationAsArraysLesson,
  'arithmetic-division-as-sharing': arithmeticDivisionAsSharingLesson,
  'arithmetic-order-of-operations': arithmeticOrderOfOperationsLesson,
  'algebra-the-balance-scale': algebraTheBalanceScaleLesson,
  'algebra-what-is-a-variable': algebraWhatIsAVariableLesson,
  'ratios-what-ratios-represent': ratiosWhatRatiosRepresentLesson,
  'ratios-equivalent-ratios': ratiosEquivalentRatiosLesson,
  'ratios-proportions': ratiosProportionsLesson,
  'conversions-metric-ladder': conversionsMetricLadderLesson,
  'conversions-time-and-rates': conversionsTimeAndRatesLesson,
};

export const FOUNDATION_TOPICS: Topic[] = [
  {
    id: 'fractions',
    title: 'Fractions',
    slug: 'fractions',
    iconName: 'PieChart',
    description: 'Parts of a whole, equivalent sizes, and how pieces combine.',
    lessons: [
      {
        id: 'fractions-what-is-a-fraction',
        title: 'What is a fraction?',
        description: 'Understand parts of a whole through intuition and visual models.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'fractions-equivalent-fractions',
        title: 'Equivalent fractions',
        description: 'Why 2/4, 4/8, and 1/2 look different but measure the exact same quantity.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'fractions-comparing-fractions',
        title: 'Comparing fractions',
        description: 'Determining which fraction is larger without guessing.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'fractions-simplifying-fractions',
        title: 'Simplifying fractions',
        description: 'Finding the clearest, smallest terms to write any fraction.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'fractions-adding-fractions',
        title: 'Adding fractions',
        description: 'Combining pieces with like and unlike denominators.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'decimals',
    title: 'Decimals',
    slug: 'decimals',
    iconName: 'Dot',
    description: 'Decimal place value, tenths, hundredths, and base-ten parts.',
    lessons: [
      {
        id: 'decimals-place-value',
        title: 'Decimal place value',
        description: 'Understand tenths, hundredths, and what the decimal point really divides.',
        estimatedMinutes: 5,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'decimals-comparing-decimals',
        title: 'Comparing decimals',
        description: 'Why 0.4 is bigger than 0.35, despite 35 being a bigger number.',
        estimatedMinutes: 5,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'decimals-fraction-to-decimal',
        title: 'Fractions ↔ Decimals',
        description: 'Translating back and forth between fractions and decimals effortlessly.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'percentages',
    title: 'Percentages',
    slug: 'percentages',
    iconName: 'Percent',
    description: 'The universal language of “per hundred” and proportions.',
    lessons: [
      {
        id: 'percentages-what-percentages-mean',
        title: 'What percentages mean',
        description: 'Why comparing against 100 creates an intuitive universal ruler.',
        estimatedMinutes: 5,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'percentages-fraction-to-percent',
        title: 'Fractions ↔ Percentages',
        description: 'Connecting halves, quarters, and fifths to standard percentage values.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'percentages-finding-percentages',
        title: 'Finding percentages',
        description: 'Quick mental strategies to calculate 10%, 25%, and 50% of anything.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers',
    slug: 'numbers',
    iconName: 'Binary',
    description: 'Place value, negative numbers, factors, multiples, and primes.',
    lessons: [
      {
        id: 'numbers-negative-numbers',
        title: 'Negative numbers on the line',
        description: 'Moving left and right of zero with intuitive temperature and balance models.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'numbers-place-value',
        title: 'Place value & magnitude',
        description: 'The architecture of ones, tens, hundreds, and thousands.',
        estimatedMinutes: 5,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'numbers-factors-and-primes',
        title: 'Factors & prime numbers',
        description: 'The fundamental building blocks that multiply into all numbers.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'arithmetic',
    title: 'Arithmetic',
    slug: 'arithmetic',
    iconName: 'Calculator',
    description: 'The deep mechanics of addition, subtraction, multiplication, and division.',
    lessons: [
      {
        id: 'arithmetic-multiplication-as-arrays',
        title: 'Multiplication as grids & arrays',
        description: 'Why multiplying is counting equal groups, not just memorizing a table.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'arithmetic-division-as-sharing',
        title: 'Division as sharing & grouping',
        description: 'The two ways to think about division and how remainders work.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'arithmetic-order-of-operations',
        title: 'Order of operations',
        description: 'The logical reason why operations are performed in a specific sequence.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'early-algebra',
    title: 'Early Algebra',
    slug: 'early-algebra',
    iconName: 'Variable',
    description: 'Variables, expressions, simple balance equations, and coordinates.',
    lessons: [
      {
        id: 'algebra-the-balance-scale',
        title: 'Equations as balance scales',
        description: 'Whatever you do to one side, you must do to the other.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'algebra-what-is-a-variable',
        title: 'What is a variable?',
        description: 'Demystifying the letter x: a placeholder for an unknown number waiting to be found.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'ratios',
    title: 'Ratios',
    slug: 'ratios',
    iconName: 'Scale',
    description: 'Comparing quantities, scaling recipes, and understanding proportions.',
    lessons: [
      {
        id: 'ratios-what-ratios-represent',
        title: 'What ratios represent',
        description: 'Comparing one quantity to another: parts to parts and parts to whole.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'ratios-equivalent-ratios',
        title: 'Equivalent ratios & scaling',
        description: 'Multiplying both sides equally to preserve the relationship.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'ratios-proportions',
        title: 'Solving proportions',
        description: 'The underlying balance of proportional relationships.',
        estimatedMinutes: 7,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
  {
    id: 'conversions',
    title: 'Conversions',
    slug: 'conversions',
    iconName: 'RefreshCw',
    description: 'Moving between units of length, mass, volume, time, and money.',
    lessons: [
      {
        id: 'conversions-metric-ladder',
        title: 'The metric ladder',
        description: 'Milli, centi, deci, and kilo: shifting the decimal point with confidence.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
      {
        id: 'conversions-time-and-rates',
        title: 'Time & rates',
        description: 'Hours, minutes, seconds, and converting rates naturally.',
        estimatedMinutes: 6,
        isAvailable: true,
        statusTag: 'AVAILABLE',
      },
    ],
  },
];

export function getLessonById(id: string): LessonData | undefined {
  return ALL_LESSONS[id];
}

export function getTopicById(id: string): Topic | undefined {
  return FOUNDATION_TOPICS.find((t) => t.id === id);
}
