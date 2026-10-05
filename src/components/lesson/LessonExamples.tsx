import React, { useState, useEffect } from 'react';
import type { LessonData } from '../../types';
import { ArrowLeft, ArrowRight, Eye, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { VisualRenderer } from '../visual/VisualRenderer';

interface LessonExamplesProps {
  lesson: LessonData;
  onNext: () => void;
  onPrev: () => void;
}

export const LessonExamples: React.FC<LessonExamplesProps> = ({
  lesson,
  onNext,
  onPrev,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const items = lesson.examples.items;
  const currentItem = items[activeIdx] || items[0];
  const isFirst = activeIdx === 0;
  const isLast = activeIdx === items.length - 1;

  // Arrow key shortcuts for cycling examples
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeIdx < items.length - 1) {
          setActiveIdx((prev) => prev + 1);
        } else {
          onNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeIdx > 0) {
          setActiveIdx((prev) => prev - 1);
        } else {
          onPrev();
        }
      } else if (e.key >= '1' && e.key <= String(items.length)) {
        e.preventDefault();
        setActiveIdx(Number(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [activeIdx, items.length, onNext, onPrev]);

  return (
    <article className="max-w-5xl mx-auto py-4 sm:py-6 animate-in fade-in duration-200">
      {/* Header and Example Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
              STAGE 02
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
              Visual Examples
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            {lesson.examples.heading}
          </h1>
        </div>

        {/* Example Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E8E5DD] shadow-2xs self-start sm:self-auto">
          {items.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-[#FAF9F5]'
                }`}
              >
                <span>0{idx + 1}</span>
                <span className="hidden md:inline max-w-[120px] truncate">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focused Example Card (2-Column Split to fit viewport) */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Notation & Intuition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E9B93]">
                Example {activeIdx + 1} of {items.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl sm:text-3xl font-black text-[#D45B34]">
                  {currentItem.fractionText}
                </span>
                {currentItem.equivalentText && (
                  <span className="text-[11px] bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] px-2 py-0.5 rounded-full font-medium">
                    {currentItem.equivalentText}
                  </span>
                )}
              </div>
            </div>

            <h3 className="font-bold text-xl text-[#1C1917] leading-snug">
              {currentItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
              {currentItem.description}
            </p>

            {/* Intuition Callout */}
            <div className="text-xs text-[#1C1917] bg-[#FAF9F5] p-3.5 rounded-xl border border-[#E8E5DD] border-l-4 border-l-[#D45B34] flex items-start gap-2.5">
              <Eye className="w-4 h-4 text-[#D45B34] shrink-0 mt-0.5" />
              <span>
                <strong>Visual Intuition:</strong> {currentItem.insight}
              </span>
            </div>

            {/* Stepper buttons within the card */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                disabled={isFirst}
                onClick={() => setActiveIdx((prev) => prev - 1)}
                className="inline-flex items-center gap-1 text-xs font-semibold font-mono text-[#6B6861] hover:text-[#1C1917] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev example</span>
              </button>

              <div className="flex items-center gap-1">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIdx ? 'bg-[#D45B34] w-4' : 'bg-[#E8E5DD]'
                    }`}
                    aria-label={`Go to example ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (isLast) {
                    onNext();
                  } else {
                    setActiveIdx((prev) => prev + 1);
                  }
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold font-mono text-[#D45B34] hover:text-[#BC4B26] cursor-pointer transition-colors"
              >
                <span>{isLast ? 'Done → Enter Lab' : 'Next example'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Model */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-4 sm:p-6 rounded-xl border border-[#E8E5DD] flex flex-col items-center justify-center min-h-[220px]">
            <VisualRenderer visual={currentItem.visual} size="lg" className="w-full my-0" />
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-[#9E9B93]">
              <Layers className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Direct visual model for {currentItem.fractionText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar (Zero scroll, always in view) */}
      <div className="mt-4 pt-3 border-t border-[#E8E5DD] flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6B6861] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to intro</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors shadow-xs group cursor-pointer"
        >
          <span>Enter Visual Lab</span>
          <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
            Enter ↵
          </kbd>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
