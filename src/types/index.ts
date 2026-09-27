export type Stage = 'intro' | 'examples' | 'video' | 'questions' | 'complete';

export interface VisualData {
  type: 'fraction-bar' | 'fraction-circle' | 'comparison' | 'number-line';
  totalParts: number;
  shadedParts: number;
  highlightIndexes?: number[];
  label?: string;
  comparison?: {
    fractionA: { numerator: number; denominator: number; label: string };
    fractionB: { numerator: number; denominator: number; label: string };
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
  };
  examples: {
    heading: string;
    description: string;
    items: ExampleItem[];
  };
  video: {
    title: string;
    duration: string;
    durationSeconds: number;
    description: string;
    placeholderNote: string;
    keyPoints: string[];
    transcript: string[];
  };
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
