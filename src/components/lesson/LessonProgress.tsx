import React from 'react';
import type { Stage } from '../../types';
import { ArrowLeft, Check } from 'lucide-react';
import { type Language } from '../../utils/language';

interface LessonProgressProps {
  currentStage: Stage;
  language?: Language;
  onSelectStage: (stage: Stage) => void;
  onExit: () => void;
  lessonTitle: string;
  topicTitle: string;
}

const STAGES: { id: Stage; labelEn: string; labelHi: string; icon: string }[] = [
  { id: 'intro', labelEn: 'Look', labelHi: 'देखो', icon: '👁️' },
  { id: 'examples', labelEn: 'Examples', labelHi: 'मिसाल', icon: '📖' },
  { id: 'visuals', labelEn: 'Play Lab', labelHi: 'चलाओ', icon: '🖐️' },
  { id: 'questions', labelEn: 'Check', labelHi: 'परखो', icon: '🎯' },
];

export const LessonProgress: React.FC<LessonProgressProps> = ({
  currentStage,
  language = 'en',
  onSelectStage,
  onExit,
  lessonTitle,
  topicTitle,
}) => {
  const currentStageIndex = STAGES.findIndex((s) => s.id === currentStage);
  const isComplete = currentStage === 'complete';
  const isHindi = language === 'hi';

  return (
    <div className="sticky top-0 z-40 border-b border-[#E8E5DD] bg-white/95 backdrop-blur-md py-2.5 px-4 sm:px-6 shadow-2xs">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Back and lesson title */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onExit}
            className="p-2 -ml-1 text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB] rounded-xl transition-colors cursor-pointer border border-[#E8E5DD] bg-white shadow-2xs flex items-center gap-1 text-xs font-semibold"
            title="Return to topics"
            aria-label="Return to topics"
          >
            <ArrowLeft className="w-4 h-4 text-[#D45B34]" />
            <span className="hidden sm:inline">{isHindi ? 'वापस' : 'Back'}</span>
          </button>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B93]">
              {topicTitle}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#1C1917] truncate max-w-[180px] sm:max-w-md">
              {lessonTitle}
            </div>
          </div>
        </div>

        {/* Clear visual progression step tabs */}
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
                className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1C1917] text-white shadow-xs scale-102'
                    : isPast
                    ? 'bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3]'
                    : 'bg-[#FAF9F5] text-[#9E9B93] hover:text-[#6B6861] border border-[#E8E5DD]'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span>{isPast ? <Check className="w-3.5 h-3.5 inline text-[#1E6B4F]" /> : s.icon}</span>
                <span className="hidden sm:inline">{isHindi ? s.labelHi : s.labelEn}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
