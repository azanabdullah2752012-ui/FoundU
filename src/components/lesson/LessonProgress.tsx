import React from 'react';
import type { Stage } from '../../types';
import { ArrowLeft, Check } from 'lucide-react';
import { sound } from '../../utils/sound';

interface LessonProgressProps {
  currentStage: Stage;
  onSelectStage: (stage: Stage) => void;
  onExit: () => void;
  lessonTitle: string;
  topicTitle: string;
}

const STAGES: { id: Stage; num: string; label: string; icon: string }[] = [
  { id: 'intro', num: '1', label: 'Look', icon: '👁️' },
  { id: 'examples', num: '2', label: 'Examples', icon: '📖' },
  { id: 'visuals', num: '3', label: 'Lab', icon: '🖐️' },
  { id: 'questions', num: '4', label: 'Quiz', icon: '🎯' },
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
    <header className="sticky top-0 z-40 border-b border-[#E8E5DD] bg-[#FAF9F5]/95 backdrop-blur-md py-2.5 px-4 sm:px-6 shadow-2xs">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Back and lesson title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onExit();
            }}
            className="px-2.5 py-1.5 text-[#6B6861] hover:text-[#1C1917] hover:bg-white rounded-xl transition-colors cursor-pointer border border-[#E8E5DD] bg-white/70 shadow-2xs flex items-center gap-1.5 text-xs font-bold shrink-0"
            title="Return to topic list"
            aria-label="Return to topic list"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D45B34]" />
            <span className="hidden sm:inline">Topics</span>
          </button>
          <div className="min-w-0">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B93] truncate">
              {topicTitle}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1C1917] truncate">
              {lessonTitle}
            </div>
          </div>
        </div>

        {/* Clear visual progression step tabs */}
        <nav aria-label="Lesson progression" className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {STAGES.map((s, idx) => {
            const isCurrent = currentStage === s.id;
            const isPast =
              isComplete || (currentStageIndex !== -1 && idx < currentStageIndex);

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  sound.playTap();
                  onSelectStage(s.id);
                }}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : isPast
                    ? 'bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3]'
                    : 'bg-white text-[#9E9B93] hover:text-[#1C1917] border border-[#E8E5DD]'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
                title={`Jump to Step ${s.num}: ${s.label}`}
              >
                <span>{isPast ? <Check className="w-3.5 h-3.5 inline text-[#1E6B4F]" /> : s.icon}</span>
                <span className="font-mono text-[11px] sm:hidden">{s.num}</span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
