// Deep pedagogical data for every lesson in Foundu:
// 1. Kid-Proof Real-World Metaphor (Tangible physical anchor an 8-year-old understands)
// 2. The Brain Trap (Misconception buster: why intuition gets tricked & side-by-side proof)
// 3. Direct Physical Challenge (Target manipulation goal with real-time detection)

export interface RealWorldMetaphor {
  emoji: string;
  title: string;
  scenario: string;
  anchorComparison: string;
  kidExplanation: string;
}

export interface BrainTrap {
  title: string;
  trapStatement: string;
  whyItTricksUs: string;
  theVisualProof: string;
  falseConcept: string;
  trueConcept: string;
}

export interface PhysicalChallenge {
  prompt: string;
  hint: string;
  successMessage: string;
  type:
    | 'fraction-slicer'
    | 'fraction-comparison'
    | 'decimal-grid'
    | 'percentage-grid'
    | 'balance-scale'
    | 'array-grid'
    | 'negative-line'
    | 'ratio-scaler'
    | 'metric-ladder'
    | 'division-sharing'
    | 'fraction-addition';
  // Target values to check in interactive state
  targetNumerator?: number;
  targetDenominator?: number;
  targetPercent?: number;
  targetTenths?: number;
  targetHundredths?: number;
  targetX?: number;
  targetRows?: number;
  targetCols?: number;
  targetValue?: number;
  targetParts?: number;
}

export interface LessonPedagogy {
  metaphor: RealWorldMetaphor;
  brainTrap: BrainTrap;
  challenge: PhysicalChallenge;
}

export const PEDAGOGY_REGISTRY: Record<string, LessonPedagogy> = {
  'fractions-what-is-a-fraction': {
    metaphor: {
      emoji: '🍫',
      title: 'The Birthday Chocolate Bar',
      scenario: 'Imagine snapping a big chocolate bar into 4 equal pieces to share with 3 friends.',
      anchorComparison: 'If you take 1 piece, you have 1/4 of the bar. If pieces are cut unevenly, nobody can call it fair!',
      kidExplanation: 'The bottom number is how many equal pieces you cut. The top number is how many you hold in your hand.',
    },
    brainTrap: {
      title: 'The "Unequal Slices" Trap',
      trapStatement: '"If I cut a pizza into 3 pieces and take 1, I always have 1/3."',
      whyItTricksUs: 'Your brain counts the number of physical pieces (1 piece out of 3) and ignores their sizes.',
      theVisualProof: 'Fractions ONLY exist when every slice is strictly identical in size. If one slice is huge and two are tiny, the math breaks!',
      falseConcept: 'Any cut piece counts as 1 slice',
      trueConcept: 'Only 100% equal slices can form a fraction',
    },
    challenge: {
      prompt: 'Cut the bar into 4 equal slices, then shade exactly 3 slices.',
      hint: 'Set Cuts to 4, then tap slices until 3 are shaded (3/4).',
      successMessage: 'Perfect! You physically made 3 equal fourths.',
      type: 'fraction-slicer',
      targetDenominator: 4,
      targetNumerator: 3,
    },
  },

  'fractions-equivalent-fractions': {
    metaphor: {
      emoji: '🍕',
      title: 'The Pizza Slicing Secret',
      scenario: 'You and your friend order identical medium pizzas. You cut yours into 2 huge halves. Your friend cuts theirs into 4 quarters.',
      anchorComparison: 'Eating 1 of your giant slices gives you the EXACT same amount of pizza as eating 2 of your friend’s slices.',
      kidExplanation: '1 out of 2 slices is the exact same belly-full as 2 out of 4 slices. More cuts, smaller slices, same food.',
    },
    brainTrap: {
      title: 'The "Bigger Numbers Mean More" Trap',
      trapStatement: '"2/4 must be bigger than 1/2 because 2 and 4 are bigger than 1 and 2."',
      whyItTricksUs: 'From kindergarten, our brain learned 4 > 2. We mistakenly think fraction numbers mean total quantity.',
      theVisualProof: 'The denominator divides size. As the bottom grows, each slice shrinks. 2 mini-slices equal 1 giant slice.',
      falseConcept: '2/4 > 1/2 because 4 is bigger',
      trueConcept: '2/4 = 1/2 because 2 fourths cover identical space',
    },
    challenge: {
      prompt: 'Adjust the slider to make 2 cuts (1/2), then change to 4 cuts and shade 2 pieces (2/4).',
      hint: 'Set cuts to 4 and shaded to 2 to prove 2/4 fills the same half-bar.',
      successMessage: 'Brilliant! You saw 2/4 and 1/2 cover the exact same physical length.',
      type: 'fraction-slicer',
      targetDenominator: 4,
      targetNumerator: 2,
    },
  },

  'fractions-comparing-fractions': {
    metaphor: {
      emoji: '🍰',
      title: 'The Cake Party Benchmark',
      scenario: 'Two birthday parties: at Party A, 1 cake is shared between 3 kids. At Party B, 1 cake is shared between 8 kids.',
      anchorComparison: 'Which plate has the bigger slice? Party A kids get giant 1/3 slabs; Party B kids get slim 1/8 wedges.',
      kidExplanation: 'More people sharing one cake means smaller bites for everyone. 1/3 crushes 1/8.',
    },
    brainTrap: {
      title: 'The "Bigger Denominator" Optical Illusion',
      trapStatement: '"1/8 must be bigger than 1/3 because 8 is much bigger than 3."',
      whyItTricksUs: 'We look at the lone number 8 and forget it represents how many cuts you made.',
      theVisualProof: 'Cutting a cake 8 times makes skinny slivers. Cutting it 3 times leaves huge chunks.',
      falseConcept: '1/8 > 1/3',
      trueConcept: '1/3 > 1/8 (3 shares give more food than 8 shares)',
    },
    challenge: {
      prompt: 'Compare two fractions on the balance: set Fraction A to 3/4 and Fraction B to 2/3.',
      hint: 'Adjust both sides to observe which bar extends further past the half mark.',
      successMessage: 'Spot on! You physically confirmed 3/4 (0.75) is larger than 2/3 (0.66).',
      type: 'fraction-comparison',
      targetNumerator: 3,
      targetDenominator: 4,
    },
  },

  'fractions-simplifying-fractions': {
    metaphor: {
      emoji: '📦',
      title: 'The Packing Box Simplifier',
      scenario: 'You have 4 small cartons of milk. They fit perfectly together into 1 big crate of 8 slots (4/8 full).',
      anchorComparison: 'Instead of counting 4 tiny eighths, you can simply glance and say: "The crate is half full!"',
      kidExplanation: 'Simplifying does not throw away any milk. It just merges tiny boxes into one bigger, simpler picture.',
    },
    brainTrap: {
      title: 'The "Shrinking" Confusion',
      trapStatement: '"When I simplify 4/8 to 1/2, am I losing or reducing the amount?"',
      whyItTricksUs: 'The word "reduce" or "simplify" sounds like subtraction or shrinking.',
      theVisualProof: 'The amount of colored area does not change by a single millimeter. Only the cutting lines disappear.',
      falseConcept: 'Simplifying makes the fraction smaller',
      trueConcept: 'Simplifying keeps identical area with fewer cutting lines',
    },
    challenge: {
      prompt: 'Create 4/8 in the slicer, then simplify it down to 1/2.',
      hint: 'Set cuts to 2 and shade 1 to show the simplest form.',
      successMessage: 'Great job! 1/2 uses the cleanest numbers for the same amount.',
      type: 'fraction-slicer',
      targetDenominator: 2,
      targetNumerator: 1,
    },
  },

  'fractions-adding-fractions': {
    metaphor: {
      emoji: '🧩',
      title: 'The Puzzle Piece Rule',
      scenario: 'You have 1 slice of a 4-slice pizza (1/4), and your brother gives you another slice from the SAME pizza (1/4).',
      anchorComparison: 'You now have 2 slices of that 4-slice pizza: 2/4. The pizza was not magically cut into 8 pieces!',
      kidExplanation: 'When adding slices of the same size, you count how many slices you have (1+1=2). The slice size (4) never changes!',
    },
    brainTrap: {
      title: 'The Notorious "Add Tops & Bottoms" Disaster',
      trapStatement: '"1/2 + 1/2 = 2/4 (which is 1/2)"',
      whyItTricksUs: 'Every instinct tells you to do 1+1 on top and 2+2 on the bottom.',
      theVisualProof: 'If you eat half a pie, and then eat another half a pie, you ate a whole pie (1), NOT a quarter-sized snack!',
      falseConcept: '1/2 + 1/2 = 2/4',
      trueConcept: '1/2 + 1/2 = 2/2 = 1 whole pie',
    },
    challenge: {
      prompt: 'Combine 1/4 and 2/4 on the addition bar to reach 3/4.',
      hint: 'Notice how the common denominator 4 keeps the slice widths identical.',
      successMessage: 'Aha! 1 fourth + 2 fourths = 3 fourths. The bottom stays 4!',
      type: 'fraction-slicer',
      targetDenominator: 4,
      targetNumerator: 3,
    },
  },

  'decimals-place-value': {
    metaphor: {
      emoji: '🪙',
      title: 'Dollars, Dimes & Pennies',
      scenario: 'Think of 1 whole dollar. A dime is 1 tenth ($0.10). A penny is 1 hundredth ($0.01).',
      anchorComparison: 'It takes 10 dimes to make $1.00. It takes 100 pennies to make $1.00. Every step right is 10 times smaller.',
      kidExplanation: 'The dot separates the giant whole bills from the pocket change.',
    },
    brainTrap: {
      title: 'The "Number of Digits" Trick',
      trapStatement: '"0.100 is way bigger than 0.1 because 100 is way bigger than 1."',
      whyItTricksUs: 'We look at trailing zeros like whole numbers: $100 vs $1.',
      theVisualProof: 'In decimals, trailing zeros are just empty pennies. 1 dime ($0.1) equals 10 cents ($0.10) equals 100 thousandths ($0.100).',
      falseConcept: '0.100 > 0.1',
      trueConcept: '0.100 = 0.10 = 0.1 (exact same amount of shaded area)',
    },
    challenge: {
      prompt: 'In the 100-cell grid, shade exactly 3 tenths (3 full columns = 0.30).',
      hint: 'Select Tenths mode or click columns until 3 columns are filled.',
      successMessage: 'Spot on! 3 columns = 30 hundredths = 0.3.',
      type: 'decimal-grid',
      targetTenths: 3,
    },
  },

  'decimals-comparing-decimals': {
    metaphor: {
      emoji: '📏',
      title: 'The Ribbon Duel',
      scenario: 'Two ribbons: Ribbon A is 0.4 meters long. Ribbon B is 0.38 meters long.',
      anchorComparison: 'Ribbon A has 4 full decimeter strips (40cm). Ribbon B only has 3 full strips and 8 tiny threads (38cm).',
      kidExplanation: 'Always check the first number after the dot! 4 tenths beats 3 tenths every single time, no matter what comes after.',
    },
    brainTrap: {
      title: 'The "Longer Decimal is Bigger" Fallacy',
      trapStatement: '"0.38 is larger than 0.4 because 38 is bigger than 4."',
      whyItTricksUs: 'Whole number instinct makes "38" look nearly 10 times larger than "4".',
      theVisualProof: 'Compare column by column. 0.40 has 4 filled columns (40 squares). 0.38 only has 3 filled columns and 8 loose squares (38 squares). 40 > 38!',
      falseConcept: '0.38 > 0.4',
      trueConcept: '0.4 (40 squares) > 0.38 (38 squares)',
    },
    challenge: {
      prompt: 'Toggle between 0.4 and 0.35 in the duel grid to see which fills more space.',
      hint: 'Look at the tenths column first: 4 full columns vs 3 full columns.',
      successMessage: 'Look at that! 0.4 clearly occupies more area than 0.35.',
      type: 'decimal-grid',
      targetTenths: 4,
    },
  },

  'decimals-fraction-to-decimal': {
    metaphor: {
      emoji: '💯',
      title: 'The 100-Square Blueprint',
      scenario: 'You have a floor tiled with 100 square tiles. You color in half of the room.',
      anchorComparison: 'Half the floor (1/2) is exactly 50 tiles out of 100 (0.50). A quarter of the room (1/4) is 25 tiles (0.25).',
      kidExplanation: 'Decimals are just fractions with a secret denominator of 10, 100, or 1000.',
    },
    brainTrap: {
      title: 'The "Direct Number Copy" Trap',
      trapStatement: '"1/4 as a decimal must be 0.4 or 1.4."',
      whyItTricksUs: 'Rushing to copy the printed digits directly into the decimal places.',
      theVisualProof: '1 divided by 4 is one quarter of 100 tiles = 25 tiles ($0.25). 0.4 is 40 tiles ($0.40), which is nearly half!',
      falseConcept: '1/4 = 0.4',
      trueConcept: '1/4 = 25/100 = 0.25',
    },
    challenge: {
      prompt: 'Shade 25 squares in the 100 grid to visually prove 1/4 = 0.25.',
      hint: 'Fill 2 full columns (20) plus 5 individual squares (25 total).',
      successMessage: 'Yes! Exactly 1/4 of the 100 grid is 0.25.',
      type: 'decimal-grid',
      targetHundredths: 25,
    },
  },

  'percentages-what-percentages-mean': {
    metaphor: {
      emoji: '🔋',
      title: 'The Phone Battery Icon',
      scenario: 'Look at the top corner of a smartphone. A tiny battery icon shows 100% when fully charged.',
      anchorComparison: 'If the battery is half full, it reads 50%. If it has 1 sliver left out of 100, it reads 1%.',
      kidExplanation: '"Percent" means "per hundred". It’s like grading everything out of 100 points.',
    },
    brainTrap: {
      title: 'The "Absolute Amount" Confusion',
      trapStatement: '"50% is always a huge amount of money."',
      whyItTricksUs: 'We forget percentage is a ratio of a whole, not a fixed number of items.',
      theVisualProof: '50% of $2 is just $1! But 50% of $1,000,000 is $500,000. Percent is the proportion, not the fixed size.',
      falseConcept: '50% is always big',
      trueConcept: '50% means half of whatever whole you are examining',
    },
    challenge: {
      prompt: 'Drag the percentage slider to exactly 75% on the visual ruler.',
      hint: 'Watch how 75% aligns directly with 3/4 and 0.75.',
      successMessage: 'Awesome! 75 out of 100 squares is 75% (3/4).',
      type: 'percentage-grid',
      targetPercent: 75,
    },
  },

  'percentages-fraction-to-percent': {
    metaphor: {
      emoji: '🎯',
      title: 'The 100-Point Target Board',
      scenario: 'You take a quiz with 10 questions. You get 7 questions correct (7/10).',
      anchorComparison: 'If the quiz had 100 points instead, you would have scored 70 points! 7/10 = 70%.',
      kidExplanation: 'To make a fraction into a percent, just scale the bottom number until it equals 100.',
    },
    brainTrap: {
      title: 'The "Add a Percent Sign" Trap',
      trapStatement: '"1/5 as a percent is 1.5% or 5%."',
      whyItTricksUs: 'Trying to slap a % symbol onto the visible numbers instead of scaling to 100.',
      theVisualProof: 'If you share 100 chocolates among 5 kids, each kid gets 20 chocolates! So 1/5 is 20%, not 5%.',
      falseConcept: '1/5 = 5%',
      trueConcept: '1/5 = 20/100 = 20%',
    },
    challenge: {
      prompt: 'Set the percentage grid to 20% to verify what 1/5 looks like.',
      hint: '20% takes exactly 2 columns of 10 out of the 100-square grid.',
      successMessage: 'Great job! 20% is exactly 1/5 of the whole.',
      type: 'percentage-grid',
      targetPercent: 20,
    },
  },

  'percentages-finding-percentages': {
    metaphor: {
      emoji: '🏷️',
      title: 'The 10% Store Discount Shortcut',
      scenario: 'You buy a jacket with a $60 price tag. The store offers 10% off for students.',
      anchorComparison: 'To find 10%, you simply slide the decimal point one step left: $60 becomes $6.00 off!',
      kidExplanation: '10% is just dividing by 10. Once you know 10%, you can double it to get 20%, or half it to get 5%!',
    },
    brainTrap: {
      title: 'The "Complex Formula" Paralysis',
      trapStatement: '"You need a calculator and long formulas to calculate 15% tip in your head."',
      whyItTricksUs: 'School taught complicated cross-multiplication instead of mental building blocks.',
      theVisualProof: 'Find 10% first (slide dot left). Then take half of that (5%). Add them together: 10% + 5% = 15%! Fast and painless.',
      falseConcept: 'Must multiply by 0.15 on paper',
      trueConcept: 'Take 10%, take half (5%), add them together',
    },
    challenge: {
      prompt: 'Find 50% on the percentage ruler (half the total area).',
      hint: 'Drag the slider until exactly 50 squares are lit.',
      successMessage: 'Instant mental math: 50% is always cutting clean down the middle.',
      type: 'percentage-grid',
      targetPercent: 50,
    },
  },

  'numbers-place-value': {
    metaphor: {
      emoji: '📦',
      title: 'The Egg Carton Packing Factory',
      scenario: 'Loose eggs go into cartons of 10. When you have 10 full cartons, they fit into a crate of 100.',
      anchorComparison: 'The digit "3" in the tens column means 3 whole cartons (30 eggs). The digit "3" in the hundreds column means 3 huge crates (300 eggs).',
      kidExplanation: 'Where a number sits is 10 times more important than what number it is.',
    },
    brainTrap: {
      title: 'The "Face Value" Delusion',
      trapStatement: '"In 444, all three fours have the exact same size and meaning."',
      whyItTricksUs: 'Our eyes recognize the symbol "4" and ignore the invisible column pedestals.',
      theVisualProof: 'Left 4 is 400 (huge crate). Middle 4 is 40 (carton). Right 4 is 4 loose single eggs.',
      falseConcept: 'All 4s are equal',
      trueConcept: 'Each step left multiplies value by 10',
    },
    challenge: {
      prompt: 'Configure an array with 10 columns to see a base-10 grouping in action.',
      hint: 'Set Columns to 10 and Rows to 3 to see 3 tens = 30.',
      successMessage: 'Clean base-10 structure: 3 rows of 10 make 30.',
      type: 'array-grid',
      targetRows: 3,
      targetCols: 10,
    },
  },

  'numbers-negative-numbers': {
    metaphor: {
      emoji: '🛗',
      title: 'The Underground Parking Elevator',
      scenario: 'You are on Ground Level (0). Level 1 and 2 are the shopping mall above. Levels -1 and -2 are basement parking.',
      anchorComparison: 'If you are at -2 and ride DOWN 3 floors, you end up at -5 (deeper underground). Zero is just the sidewalk.',
      kidExplanation: 'Negative numbers are not "nothing". They are real distances going backward, down, or underwater.',
    },
    brainTrap: {
      title: 'The "Bigger Digit Means Warmer" Trap',
      trapStatement: '"-10° is warmer than -2° because 10 is bigger than 2."',
      whyItTricksUs: 'Whole number intuition says 10 is superior to 2.',
      theVisualProof: 'On a thermometer, -10° is 10 steps below freezing ice. -2° is only 2 steps below freezing. -10° is bitter cold and much further down.',
      falseConcept: '-10 > -2',
      trueConcept: '-2 > -10 (it is higher up and closer to zero)',
    },
    challenge: {
      prompt: 'Move the elevation marker down until it rests at -4 below zero.',
      hint: 'Slide the marker to the left of the central zero origin.',
      successMessage: 'Got it! -4 is 4 full steps beneath zero.',
      type: 'negative-line',
      targetValue: -4,
    },
  },

  'numbers-factors-and-primes': {
    metaphor: {
      emoji: '🧱',
      title: 'The Lego Brick Rectangle',
      scenario: 'You have 12 Lego blocks. Can you arrange them into a tidy rectangular grid without any leftovers?',
      anchorComparison: 'Yes! You can build 1×12, 2×6, or 3×4. But with 7 blocks, your only choice is a skinny single line (1×7). 7 is prime!',
      kidExplanation: 'A prime number is a stubborn number that refuses to form any rectangle other than a single boring line.',
    },
    brainTrap: {
      title: 'The "Odd Equals Prime" Trap',
      trapStatement: '"All odd numbers are prime numbers (like 9 or 15)."',
      whyItTricksUs: 'Because even numbers (except 2) are never prime, we falsely assume every odd number must be prime.',
      theVisualProof: '9 blocks can be built into a neat 3×3 square! 15 blocks can be built into a 3×5 grid. They are composite, not prime.',
      falseConcept: 'Odd = Prime',
      trueConcept: 'Primes have NO factor pairs except 1 and itself',
    },
    challenge: {
      prompt: 'Arrange a 3 × 4 array to prove that 12 can form a rectangle.',
      hint: 'Set Rows to 3 and Columns to 4 in the multiplier.',
      successMessage: 'Rectangle complete! 3 × 4 = 12 proves 12 is composite.',
      type: 'array-grid',
      targetRows: 3,
      targetCols: 4,
    },
  },

  'arithmetic-multiplication-as-arrays': {
    metaphor: {
      emoji: '🥚',
      title: 'The Egg Carton Grid',
      scenario: 'Look inside an egg carton with 2 rows of 6 eggs.',
      anchorComparison: 'Instead of counting 1, 2, 3, 4... you multiply 2 rows × 6 columns = 12 eggs instantly.',
      kidExplanation: 'Multiplication is just fast counting of tidy rows and columns.',
    },
    brainTrap: {
      title: 'The "Order Changes the Answer" Myth',
      trapStatement: '"3 rows of 4 is completely different from 4 rows of 3."',
      whyItTricksUs: 'Because the picture stands tall vs wide, we worry the math changes.',
      theVisualProof: 'Rotate the egg carton by 90 degrees. No eggs appeared or vanished! 3 × 4 is identical in total count to 4 × 3 (commutative property).',
      falseConcept: '3 × 4 ≠ 4 × 3',
      trueConcept: '3 × 4 = 4 × 3 = 12 (rotation does not change area)',
    },
    challenge: {
      prompt: 'Build a 4 × 5 grid of dots in the array multiplier.',
      hint: 'Adjust sliders to 4 rows and 5 columns.',
      successMessage: '4 rows of 5 = 20 total dots. Spatial area unlocked!',
      type: 'array-grid',
      targetRows: 4,
      targetCols: 5,
    },
  },

  'arithmetic-division-as-sharing': {
    metaphor: {
      emoji: '🍪',
      title: 'Fair Cookie Sharing',
      scenario: 'You baked 12 warm cookies and have 3 hungry friends sitting around the table.',
      anchorComparison: 'You deal 1 cookie to each plate in rounds until the tray is empty. Every friend gets 4 cookies (12 ÷ 3 = 4).',
      kidExplanation: 'Division is taking a big pile and dealing it out fairly until everyone has the exact same amount.',
    },
    brainTrap: {
      title: 'The "Division Always Shrinks" Myth',
      trapStatement: '"Dividing always gives you a smaller number than you started with."',
      whyItTricksUs: 'Dividing by whole numbers (12 ÷ 3 = 4) always reduces size.',
      theVisualProof: 'Dividing by a fraction actually GROWS! 12 divided into half-cookie portions gives 24 portions! 12 ÷ 0.5 = 24.',
      falseConcept: 'Division always makes things smaller',
      trueConcept: 'Division asks: how many portions of this size fit inside?',
    },
    challenge: {
      prompt: 'Share 12 items equally across 4 plates with 0 remainder.',
      hint: 'Use the division sharing manipulative to deal items into 4 equal sets.',
      successMessage: 'Perfect fair share! 12 ÷ 4 = 3 per plate with 0 left over.',
      type: 'division-sharing',
      targetParts: 4,
    },
  },

  'arithmetic-order-of-operations': {
    metaphor: {
      emoji: '🍔',
      title: 'The Combo Meal Packaging Rule',
      scenario: 'You order 1 burger plus 2 combo meals (each combo has 1 burger and 1 fries).',
      anchorComparison: 'You calculate the combo bundles first before totaling up loose items: 1 + (2 × 3) = 7, NOT (1 + 2) × 3 = 9!',
      kidExplanation: 'Multiplication bundles items tightly in plastic wrap. You must open the bundles before doing loose addition.',
    },
    brainTrap: {
      title: 'The "Read Left-to-Right" Trap',
      trapStatement: '"2 + 3 × 4 = 20 because 2+3=5, and 5×4=20."',
      whyItTricksUs: 'In English, we read words from left to right. Our eyes naturally try to do math from left to right too.',
      theVisualProof: 'Multiplication represents a glued-together rectangle of 3×4 (12 dots). You add the 2 loose dots to that rectangle: 2 + 12 = 14.',
      falseConcept: '2 + 3 × 4 = 20 (left to right)',
      trueConcept: '2 + (3 × 4) = 2 + 12 = 14 (multiplication binds first)',
    },
    challenge: {
      prompt: 'Set the array to 3 × 4 (12) to visualize why multiplication forms a solid block.',
      hint: 'Multiplication is an area block, addition is loose single dots attached to it.',
      successMessage: 'Visually proved! Multiplication forms a solid unit of 12.',
      type: 'array-grid',
      targetRows: 3,
      targetCols: 4,
    },
  },

  'algebra-the-balance-scale': {
    metaphor: {
      emoji: '⚖️',
      title: 'The Playground Seesaw',
      scenario: 'You and your friend are on a balanced seesaw. It rests completely flat in mid-air.',
      anchorComparison: 'If someone drops a 5kg backpack on your lap, the seesaw crashes down unless your friend ALSO gets a 5kg backpack!',
      kidExplanation: 'An equals sign (=) is a mechanical seesaw. Whatever you do to one side, you MUST do to the other side to keep it level.',
    },
    brainTrap: {
      title: 'The "Equals Sign Means Answer" Trap',
      trapStatement: '"The = symbol just means \'press enter on the calculator to get the result\'."',
      whyItTricksUs: 'Elementary math worksheets always wrote: 2 + 3 = [blank]. It conditioned us to view = as an action command.',
      theVisualProof: '= is a scale fulcrum. 7 = 7 is true. x + 2 = 9 is a balanced scale where you remove 2 from BOTH pans.',
      falseConcept: '= means "here comes the answer"',
      trueConcept: '= means both pans have identical weight right now',
    },
    challenge: {
      prompt: 'Adjust the scale so that the mystery box x balances when x = 4.',
      hint: 'Left side: x + 3. Right side: 7. When x = 4, both sides weigh 7!',
      successMessage: 'LEVEL BALANCE ACHIEVED! 4 + 3 = 7.',
      type: 'balance-scale',
      targetX: 4,
    },
  },

  'algebra-what-is-a-variable': {
    metaphor: {
      emoji: '🎁',
      title: 'The Wrapped Mystery Gift Box',
      scenario: 'A sealed birthday box labeled "x" sits on a scale next to 2 marbles. On the other pan are 10 marbles.',
      anchorComparison: 'If you take away the 2 loose marbles from both pans, the gift box must contain exactly 8 marbles!',
      kidExplanation: 'The letter x is not scary foreign code. It is just an empty gift box holding a secret number waiting to be unwrapped.',
    },
    brainTrap: {
      title: 'The "Letters Don\'t Belong in Math" Panic',
      trapStatement: '"Letters in math are confusing and random."',
      whyItTricksUs: 'Letters look like spelling words. We think math is suddenly turning into grammar.',
      theVisualProof: 'In 1st grade, teachers wrote: 📦 + 2 = 10. You instantly answered 8! "x" is just a grown-up drawing of that same 📦.',
      falseConcept: 'x is a complicated algebraic formula',
      trueConcept: 'x is just an empty box holding a mystery value',
    },
    challenge: {
      prompt: 'Unwrap the mystery value: find the weight of x on the balance scale.',
      hint: 'If x + 3 = 7, slide x until the scale is perfectly horizontal.',
      successMessage: 'Unwrapped! x = 4 revealed.',
      type: 'balance-scale',
      targetX: 4,
    },
  },

  'ratios-what-ratios-represent': {
    metaphor: {
      emoji: '🍹',
      title: 'The Perfect Fruit Punch Recipe',
      scenario: 'A tasty cordial recipe calls for 1 cup of juice syrup to 3 cups of cold water (1:3 ratio).',
      anchorComparison: 'If you pour 1 cup of syrup, you must pour 3 cups of water. The total drink has 4 cups!',
      kidExplanation: 'Ratios compare two ingredients to each other, like mixing paint or baking cookies.',
    },
    brainTrap: {
      title: 'The "Part-to-Part vs Part-to-Whole" Confusion',
      trapStatement: '"A 1:3 ratio of syrup to water means the drink is 1/3 syrup."',
      whyItTricksUs: 'Our eyes see the numbers 1 and 3, and instinctively write down the fraction 1/3.',
      theVisualProof: '1 cup syrup + 3 cups water = 4 total cups in the jug! Syrup is actually 1/4 (25%) of the drink, not 1/3.',
      falseConcept: '1:3 ratio = 1/3 of the whole',
      trueConcept: '1:3 ratio = 1 part out of 4 total parts (1/4)',
    },
    challenge: {
      prompt: 'Scale a 1:2 ratio up by multiplying by 3 to get 3:6.',
      hint: 'Use the ratio multiplier to triple both batches equally.',
      successMessage: 'Recipe scaled perfectly! 1:2 tastes identical to 3:6.',
      type: 'ratio-scaler',
      targetParts: 3,
    },
  },

  'ratios-equivalent-ratios': {
    metaphor: {
      emoji: '🎨',
      title: 'The Paint Mixing Test',
      scenario: 'Mixing 2 drops of blue paint with 3 drops of yellow makes a specific shade of forest green.',
      anchorComparison: 'If you want to paint a whole room instead of a small paper, mix 20 drops blue with 30 drops yellow. The green shade is identical!',
      kidExplanation: 'As long as you multiply both colors by the same amount, the taste, color, and recipe never change.',
    },
    brainTrap: {
      title: 'The "Add Instead of Multiply" Disaster',
      trapStatement: '"If I add 2 more scoops of blue, I can just add 2 more scoops of yellow to keep the shade identical."',
      whyItTricksUs: 'Addition feels like "equal treatment", so we assume adding preserves the proportion.',
      theVisualProof: 'Adding 2 to 2:3 makes 4:5. 2/3 is 66%, but 4/5 is 80%! The color completely changes! You must MULTIPLY, never add.',
      falseConcept: 'Add equal amounts to scale a recipe',
      trueConcept: 'Multiply both ingredients by the same factor',
    },
    challenge: {
      prompt: 'Scale a 2:3 ratio with factor 2 to produce 4:6.',
      hint: 'Both parts must double together.',
      successMessage: 'Color preserved! 2:3 scaled by 2 is 4:6.',
      type: 'ratio-scaler',
      targetParts: 2,
    },
  },

  'ratios-proportions': {
    metaphor: {
      emoji: '🗺️',
      title: 'The Miniature City Map',
      scenario: 'A map says: 1 centimeter on paper = 5 kilometers in the real world.',
      anchorComparison: 'If your destination is 3 cm away on the map, it is 3 × 5 = 15 km away on the road.',
      kidExplanation: 'A proportion is a promise that the small toy model matches the giant real-world object in every direction.',
    },
    brainTrap: {
      title: 'The "One-Sided Stretch" Trap',
      trapStatement: '"If you enlarge a photograph’s height by 3x, you don’t need to enlarge its width."',
      whyItTricksUs: 'Forgetting that true proportions require both dimensions to scale simultaneously.',
      theVisualProof: 'If you only stretch the height, the person looks comically tall and skinny like a stick figure!',
      falseConcept: 'Stretch one side and keep the other',
      trueConcept: 'Both dimensions must scale by the exact same multiplier',
    },
    challenge: {
      prompt: 'Match proportions by scaling a 1:4 unit up to 3:12.',
      hint: 'Multiply the scale by 3.',
      successMessage: 'True scale maintained! 1:4 = 3:12.',
      type: 'ratio-scaler',
      targetParts: 3,
    },
  },

  'conversions-metric-ladder': {
    metaphor: {
      emoji: '🪜',
      title: 'The Base-10 Stepping Ladder',
      scenario: 'You stand on a ladder. Top rung is Kilometers (giant road trips). Middle rung is Meters (your height). Bottom rung is Millimeters (ant steps).',
      anchorComparison: 'Every step DOWN the ladder multiplies by 10 (slide the decimal point right). Every step UP divides by 10 (slide the point left).',
      kidExplanation: 'Metric never makes you memorize weird numbers like 12 or 5,280. You just hop the dot 1, 2, or 3 times!',
    },
    brainTrap: {
      title: 'The "Which Way Does the Dot Move?" Panic',
      trapStatement: '"1.5 Kilometers = 0.0015 Meters."',
      whyItTricksUs: 'Moving the decimal point in the wrong direction because we forget: smaller units need BIGGER counts.',
      theVisualProof: 'A meter is tiny. It takes thousands of tiny meters to stretch across a giant kilometer road! 1.5 km = 1,500 meters.',
      falseConcept: 'Units get smaller so number gets smaller',
      trueConcept: 'Units get smaller so you need MORE of them (number gets bigger)',
    },
    challenge: {
      prompt: 'Step down the ladder from Kilo to Base (1000x) to see 1.5 km turn into 1500 m.',
      hint: 'Select Kilo to Meter in the interactive metric ladder.',
      successMessage: 'Decimal point hopped 3 steps right! 1.5 km = 1500 m.',
      type: 'metric-ladder',
    },
  },

  'conversions-time-and-rates': {
    metaphor: {
      emoji: '⏱️',
      title: 'The 60-Minute Clock Face',
      scenario: 'Look at the kitchen wall clock. 1 hour is 60 minutes. Half an hour is 30 minutes.',
      anchorComparison: 'Notice that 0.5 hours is NOT 50 minutes! 0.5 of an hour is half of 60 = 30 minutes.',
      kidExplanation: 'Clocks run on base 60, not base 100. So half an hour is 30, not 50!',
    },
    brainTrap: {
      title: 'The "Decimal Time" Catastrophe',
      trapStatement: '"2.5 hours is 2 hours and 50 minutes."',
      whyItTricksUs: 'We see ".5" and our brain thinks of 50 cents or 50 minutes.',
      theVisualProof: '.5 means half of a whole hour. An hour has 60 minutes. Half of 60 is 30 minutes! So 2.5 hours = 2 hours 30 minutes.',
      falseConcept: '2.5 hours = 2 hours 50 mins',
      trueConcept: '2.5 hours = 2 hours 30 mins (.5 × 60 = 30)',
    },
    challenge: {
      prompt: 'Observe how 1 hour divides into four 15-minute quarters (0.25 hr = 15 min).',
      hint: 'Quarter past the hour is 15 minutes, half past is 30 minutes.',
      successMessage: 'Clock sense unlocked! 60 minutes per hour cleanly mastered.',
      type: 'metric-ladder',
    },
  },
};
