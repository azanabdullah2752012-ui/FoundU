export type Stage = 'intro' | 'examples' | 'visuals' | 'questions' | 'complete';

export interface VisualData {
  type:
    | 'fraction-bar'
    | 'fraction-circle'
    | 'comparison'
    | 'number-line'
    | 'decimal-grid'
    | 'percentage-grid'
    | 'array-grid'
    | 'balance-scale'
    | 'thermometer';
  totalParts?: number;
  shadedParts?: number;
  highlightIndexes?: number[];
  label?: string;
  comparison?: {
    fractionA: { numerator: number; denominator: number; label: string };
    fractionB: { numerator: number; denominator: number; label: string };
  };
  decimalGrid?: {
    tenths: number;
    hundredths?: number;
    total?: number;
    mode?: 'tenths' | 'hundredths';
  };
  percentage?: {
    percent: number;
    showFraction?: boolean;
    showDecimal?: boolean;
  };
  arrayGrid?: {
    rows: number;
    cols: number;
  };
  balanceScale?: {
    leftX: number;
    leftConstant: number;
    rightConstant: number;
  };
  thermometer?: {
    value: number;
    min?: number;
    max?: number;
  };
}

export interface QuestionChoice {
  id: string;
  text: string;
  visual?: VisualData;
}

export interface Question {
  id: string;
  questionText: string;
  promptNote?: string;
  type: 'multiple-choice' | 'visual-selection' | 'comparison' | 'conceptual-explanation';
  visual?: VisualData;
  choices: QuestionChoice[];
  correctChoiceId: string;
  explanation: string;
  hint: string;
}

export interface ExampleItem {
  id: string;
  title: string;
  description: string;
  fractionText: string;
  equivalentText?: string;
  visual: VisualData;
  insight: string;
}

export interface VisualLabData {
  title: string;
  subtitle: string;
  interactiveType:
    | 'fraction-slicer'
    | 'subdivision-multiplier'
    | 'fraction-comparison'
    | 'decimal-grid'
    | 'decimal-duel'
    | 'percentage-grid'
    | 'percentage-converter'
    | 'balance-scale'
    | 'array-grid'
    | 'thermometer';
  instructions: string;
  keyInsights: string[];
  initialConfig?: Record<string, unknown>;
}

export interface LessonData {
  id: string;
  topicId: string;
  topicTitle: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  intro: {
    heading: string;
    coreDefinition: string;
    whyItMatters: string;
    keyTakeaway: string;
    visualHookType?: 'fraction-slice' | 'decimal-grid' | 'percentage-grid' | 'balance-scale' | 'array-grid' | 'thermometer';
  };
  examples: {
    heading: string;
    description: string;
    items: ExampleItem[];
  };
  visualLab: VisualLabData;
  questions: Question[];
  completion: {
    title: string;
    subtitle: string;
    summaryPoints: string[];
    nextLessonId?: string;
    nextLessonTitle?: string;
  };
}

export interface LessonSummary {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  isAvailable: boolean;
  statusTag?: 'AVAILABLE' | 'COMING SOON';
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  description: string;
  lessons: LessonSummary[];
}

export interface UserProgress {
  completedLessons: string[]; // lesson IDs
  inProgressLessonId?: string;
  lessonCurrentStage: Record<string, Stage>; // lessonId -> Stage
  answeredQuestions: Record<string, Record<string, string>>; // lessonId -> { questionId: selectedChoiceId }
  lastActiveTimestamp: number;
}
