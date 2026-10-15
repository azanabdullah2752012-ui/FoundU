import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import type { LessonData, Stage } from '../../types';

interface ContinueLearningProps {
  inProgressLesson: LessonData | null;
  currentStage: Stage;
  isCompleted: boolean;
  onResume: () => void;
  onExplore?: () => void;
}

export const ContinueLearning: React.FC<ContinueLearningProps> = ({
  inProgressLesson,
  currentStage,
  isCompleted,
  onResume,
}) => {
  if (!inProgressLesson) return null;

  const stageLabels: Record<Stage, string> = {
    intro: 'Step 1: Visual Metaphor (01/04)',
    examples: 'Step 2: Concrete Examples (02/04)',
    visuals: 'Step 3: Interactive Play Lab (03/04)',
    questions: 'Step 4: Intuition Check (04/04)',
    complete: 'Module Completed',
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
      <div className="card-workshop p-5 sm:p-6 bg-gradient-to-r from-white via-[#FAF9F5] to-white border border-[#E4E0D5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D45B34]" />
            <span className="text-xs font-sans font-bold text-[#D45B34] uppercase tracking-wider">
              {inProgressLesson.topicTitle}
            </span>
            <span className="text-[#9E9B93] text-xs">•</span>
            <span className="text-xs font-sans text-[#6B6861] bg-[#F4F2EB] px-2.5 py-0.5 rounded-full border border-[#E8E5DD]">
              {stageLabels[currentStage] || 'In progress'}
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2 py-0.5 rounded-full font-bold">
                <CheckCircle2 className="w-3 h-3" />
                Mastered
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1917] tracking-tight">
            {inProgressLesson.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6861] line-clamp-1 max-w-xl">
            {inProgressLesson.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0">
          <button
            type="button"
            onClick={onResume}
            className="btn-tactile inline-flex items-center gap-2.5 bg-[#1C1917] hover:bg-[#D45B34] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xs group cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#F3C3B2]" />
            <span>{isCompleted ? 'Review Module' : 'Resume Lesson'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
