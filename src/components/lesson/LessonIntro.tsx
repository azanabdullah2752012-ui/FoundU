import React from 'react';
import type { LessonData } from '../../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LessonIntroProps {
  lesson: LessonData;
  onNext: () => void;
}

export const LessonIntro: React.FC<LessonIntroProps> = ({ lesson, onNext }) => {
  return (
    <article className="max-w-2xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
          STAGE 01
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
          Introduction
        </span>
      </div>

      {/* Main Question / Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-6">
        {lesson.intro.heading}
      </h1>

      {/* Core Definition in high-clarity card */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#6B6861] mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D45B34]" />
          <span>Core Idea</span>
        </div>
        <p className="text-xl sm:text-2xl font-medium text-[#1C1917] leading-snug tracking-tight">
          {lesson.intro.coreDefinition}
        </p>
      </div>

      {/* Why it matters */}
      <div className="space-y-4 mb-10 text-base sm:text-lg text-[#6B6861] leading-relaxed">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1C1917] font-mono">
          Why this matters
        </h2>
        <p>{lesson.intro.whyItMatters}</p>
        <div className="p-4 rounded-xl bg-[#F4F2EB]/70 border border-[#E8E5DD] text-sm text-[#1C1917]">
          <strong className="font-semibold">Remember:</strong> {lesson.intro.keyTakeaway}
        </div>
      </div>

      {/* Progression Action */}
      <div className="pt-4 border-t border-[#E8E5DD] flex items-center justify-between">
        <span className="text-xs text-[#9E9B93]">
          Next up: Visual examples to build intuitive feel
        </span>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-xs group"
        >
          <span>See visual examples</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
