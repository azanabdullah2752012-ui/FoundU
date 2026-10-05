import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
    intro: 'Intro (01/04)',
    examples: 'Examples (02/04)',
    visuals: 'Visual Lab (03/04)',
    questions: 'Questions (04/04)',
    complete: 'Completed',
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6861]">
          CONTINUE
        </h2>
        <span className="text-[11px] text-[#9E9B93] font-mono">
          Saved in browser storage
        </span>
      </div>

      <div className="bg-white border border-[#E8E5DD] hover:border-[#D5D1C7] rounded-2xl p-5 sm:p-6 shadow-xs transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-[#D45B34] uppercase">
              {inProgressLesson.topicTitle}
            </span>
            <span className="text-[#9E9B93] text-xs">•</span>
            <span className="text-xs font-mono text-[#6B6861] bg-[#F4F2EB] px-2 py-0.5 rounded">
              {stageLabels[currentStage] || 'In progress'}
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2 py-0.5 rounded font-medium">
                <CheckCircle2 className="w-3 h-3" />
                Done
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-[#1C1917]">
            {inProgressLesson.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6861] line-clamp-1">
            {inProgressLesson.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onResume}
            className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-xs group cursor-pointer"
          >
            <span>{isCompleted ? 'Review lesson' : 'Continue lesson'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
