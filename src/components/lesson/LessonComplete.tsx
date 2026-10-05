import React, { useEffect } from 'react';
import type { LessonData } from '../../types';
import { ArrowRight, CheckCircle2, RotateCcw, BookOpen } from 'lucide-react';
import { sound } from '../../utils/sound';

interface LessonCompleteProps {
  lesson: LessonData;
  onContinueLearning: () => void;
  onExploreTopics: () => void;
  onRestartLesson: () => void;
}

export const LessonComplete: React.FC<LessonCompleteProps> = ({
  lesson,
  onContinueLearning,
  onExploreTopics,
  onRestartLesson,
}) => {
  useEffect(() => {
    sound.playCelebration();
  }, []);

  return (
    <article className="max-w-2xl mx-auto py-12 sm:py-16 text-center animate-in fade-in duration-300">
      {/* Calm, purposeful completion mark */}
      <div className="w-16 h-16 rounded-2xl bg-[#F0F9F5] border border-[#B7E4D3] text-[#1E6B4F] flex items-center justify-center mx-auto mb-6 shadow-xs">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-3">
        {lesson.completion.title}
      </h1>

      <p className="text-lg text-[#6B6861] mb-8 leading-relaxed max-w-md mx-auto">
        {lesson.completion.subtitle}
      </p>

      {/* Summary Recap Card */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 text-left shadow-xs mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#9E9B93] mb-3">
          What you built today
        </div>
        <ul className="space-y-2.5">
          {lesson.completion.summaryPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C1917]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D45B34] shrink-0 mt-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={onContinueLearning}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-7 py-3 rounded-xl font-medium text-sm transition-colors shadow-xs group"
        >
          <span>Continue learning</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={onExploreTopics}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-[#E8E5DD] hover:bg-[#FAF9F5] text-[#1C1917] px-6 py-3 rounded-xl font-medium text-sm transition-colors shadow-xs"
        >
          <BookOpen className="w-4 h-4 text-[#6B6861]" />
          <span>Explore topics</span>
        </button>
      </div>

      {/* Understated restart option */}
      <button
        type="button"
        onClick={onRestartLesson}
        className="inline-flex items-center gap-1.5 text-xs text-[#9E9B93] hover:text-[#6B6861] transition-colors"
      >
        <RotateCcw className="w-3 h-3" />
        <span>Review this lesson from the beginning</span>
      </button>
    </article>
  );
};
