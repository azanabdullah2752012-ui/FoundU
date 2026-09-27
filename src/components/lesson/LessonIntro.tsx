import React, { useState } from 'react';
import type { LessonData } from '../../types';
import { ArrowRight, Sparkles, Scissors, RotateCcw, Check } from 'lucide-react';
import { VisualFractionAnatomy } from '../visual/VisualFractionAnatomy';

interface LessonIntroProps {
  lesson: LessonData;
  onNext: () => void;
}

export const LessonIntro: React.FC<LessonIntroProps> = ({ lesson, onNext }) => {
  // Slicing story state for visual-first intuition
  const [sliceCount, setSliceCount] = useState<number>(1);
  const [selectedSlices, setSelectedSlices] = useState<number>(1);

  const handleSlice = (count: number) => {
    setSliceCount(count);
    setSelectedSlices(1);
  };

  const handleToggleSlice = (index: number) => {
    if (index === 0 && selectedSlices === 1) {
      setSelectedSlices(0);
    } else {
      setSelectedSlices(index + 1);
    }
  };

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
          STAGE 01
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
          Visual Introduction
        </span>
      </div>

      {/* Main Question / Heading */}
      <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1C1917] mb-4">
        {lesson.intro.heading}
      </h1>

      {/* Core Definition in high-clarity card */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 shadow-xs mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#6B6861] mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D45B34]" />
          <span>The Core Rule</span>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight tracking-tight mb-2">
          {lesson.intro.coreDefinition}
        </p>
        <p className="text-sm sm:text-base text-[#6B6861]">
          A whole number counts full objects. A <strong>fraction</strong> counts <strong>equal pieces</strong> of an object.
        </p>
      </div>

      {/* Visual Hook: Touch to Slice Interactive Block */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D45B34]">
              <Scissors className="w-3.5 h-3.5" />
              <span>Step 1: Try Cutting It</span>
            </div>
            <h3 className="text-lg font-bold text-[#1C1917]">
              Watch what happens when you cut a whole
            </h3>
          </div>

          {/* Slicing Action Buttons */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white p-1 rounded-xl border border-[#E8E5DD]">
            <button
              type="button"
              onClick={() => handleSlice(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                sliceCount === 1
                  ? 'bg-[#1C1917] text-white'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              1 Whole
            </button>
            <button
              type="button"
              onClick={() => handleSlice(2)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                sliceCount === 2
                  ? 'bg-[#D45B34] text-white shadow-xs'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              Cut in 2 (½)
            </button>
            <button
              type="button"
              onClick={() => handleSlice(4)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                sliceCount === 4
                  ? 'bg-[#D45B34] text-white shadow-xs'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              Cut in 4 (¼)
            </button>
          </div>
        </div>

        {/* Visual Sliced Bar Container */}
        <div className="bg-white border border-[#E8E5DD] rounded-xl p-4 sm:p-5 mb-3 shadow-inner">
          <div className="flex items-center justify-between text-xs font-mono text-[#6B6861] mb-2">
            <span>
              {sliceCount === 1 ? '1 Whole (0 cuts)' : `${sliceCount} equal pieces`}
            </span>
            <span className="font-bold text-[#D45B34]">
              {selectedSlices}/{sliceCount}
            </span>
          </div>

          {/* Slices gap visualizer */}
          <div className="h-16 w-full flex gap-2">
            {Array.from({ length: sliceCount }, (_, i) => {
              const isSelected = i < selectedSlices;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleToggleSlice(i)}
                  className={`flex-1 h-full rounded-xl flex flex-col items-center justify-center font-mono font-black text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#D45B34] text-white shadow-sm ring-2 ring-[#BC4B26]/30 scale-[0.98]'
                      : 'bg-[#F4F2EB] text-[#9E9B93] hover:bg-[#EAE5D9]'
                  }`}
                >
                  <span>1/{sliceCount}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 mt-0.5 opacity-90" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-[#6B6861] flex items-center justify-between">
          <span>
            👉 <strong>Tap the orange slices</strong> to see the fraction count update.
          </span>
          <button
            type="button"
            onClick={() => handleSlice(1)}
            className="text-xs text-[#9E9B93] hover:text-[#1C1917] flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Visual Anatomy Card */}
      <div className="mb-10">
        <VisualFractionAnatomy />
      </div>

      {/* Progression Action */}
      <div className="pt-6 border-t border-[#E8E5DD] flex items-center justify-between">
        <span className="text-xs text-[#9E9B93]">
          Next: Look at shapes and test your eyes
        </span>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors shadow-xs group cursor-pointer"
        >
          <span>See visual examples</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
