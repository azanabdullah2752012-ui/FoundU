import React from 'react';
import type { Stage } from '../../types';
import { ArrowLeft, Check } from 'lucide-react';

interface LessonProgressProps {
  currentStage: Stage;
  onSelectStage: (stage: Stage) => void;
  onExit: () => void;
  lessonTitle: string;
  topicTitle: string;
}

const STAGES: { id: Stage; label: string; index: string }[] = [
  { id: 'intro', label: 'Intro', index: '01' },
  { id: 'examples', label: 'Examples', index: '02' },
  { id: 'visuals', label: 'Visual Lab', index: '03' },
  { id: 'questions', label: 'Questions', index: '04' },
];

export const LessonProgress: React.FC<LessonProgressProps> = ({
  currentStage,
  onSelectStage,
  onExit,
  lessonTitle,
  topicTitle,
}) => {
  const currentStageIndex = STAGES.findIndex((s) => s.id === currentStage);
  const isComplete = currentStage === 'complete';

  return (
    <div className="border-b border-[#E8E5DD] bg-white/70 backdrop-blur-xs py-3.5 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Back and lesson title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onExit}
            className="p-1.5 -ml-1 text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB] rounded-lg transition-colors"
            title="Return to topics"
            aria-label="Return to topics"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E9B93]">
              {topicTitle}
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              {lessonTitle}
            </div>
          </div>
        </div>

        {/* Subtle, understated progress step tabs */}
        <nav aria-label="Lesson progression" className="flex items-center gap-1 sm:gap-2">
          {STAGES.map((s, idx) => {
            const isCurrent = currentStage === s.id;
            const isPast =
              isComplete || (currentStageIndex !== -1 && idx < currentStageIndex);

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectStage(s.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  isCurrent
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : isPast
                    ? 'text-[#1C1917] hover:bg-[#F4F2EB]'
                    : 'text-[#9E9B93] hover:text-[#6B6861]'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span className="font-mono text-[10px] opacity-75">
                  {isPast ? <Check className="w-3 h-3 inline" /> : s.index}
                </span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
