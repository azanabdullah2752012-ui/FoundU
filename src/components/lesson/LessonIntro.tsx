import React, { useState } from 'react';
import type { LessonData } from '../../types';
import { ArrowRight, Sparkles, Scissors, RotateCcw, Check, HelpCircle } from 'lucide-react';
import { DecimalGrid } from '../visual/DecimalGrid';
import { PercentageGrid } from '../visual/PercentageGrid';
import { BalanceScale } from '../visual/BalanceScale';
import { ArrayMultiplier } from '../visual/ArrayMultiplier';
import { NegativeLine } from '../visual/NegativeLine';
import { VisualFractionAnatomy } from '../visual/VisualFractionAnatomy';

interface LessonIntroProps {
  lesson: LessonData;
  onNext: () => void;
}

export const LessonIntro: React.FC<LessonIntroProps> = ({ lesson, onNext }) => {
  // Slicing story state for visual-first intuition in fraction lessons
  const [sliceCount, setSliceCount] = useState<number>(2);
  const [selectedSlices, setSelectedSlices] = useState<number>(1);
  const [showAnatomy, setShowAnatomy] = useState<boolean>(false);

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

  const hookType =
    lesson.intro.visualHookType ||
    (lesson.topicId === 'decimals'
      ? 'decimal-grid'
      : lesson.topicId === 'percentages'
      ? 'percentage-grid'
      : lesson.topicId === 'early-algebra'
      ? 'balance-scale'
      : lesson.topicId === 'arithmetic'
      ? 'array-grid'
      : lesson.topicId === 'numbers'
      ? 'thermometer'
      : 'fraction-slice');

  return (
    <article className="max-w-5xl mx-auto py-4 sm:py-6 animate-in fade-in duration-200">
      {/* 2-Column Responsive Viewport Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Core Rule & Editorial Text */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
              STAGE 01
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
              Visual Introduction
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1C1917] leading-tight">
            {lesson.intro.heading}
          </h1>

          {/* Core Rule in High-Clarity Compact Card */}
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B6861] mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>The Core Rule</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#1C1917] leading-tight tracking-tight mb-2">
              {lesson.intro.coreDefinition}
            </p>
            <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
              {lesson.intro.whyItMatters}
            </p>
          </div>

          {/* Next Button Anchor right in Left Column on Desktop */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onNext}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors shadow-xs group cursor-pointer"
            >
              <span>See visual examples</span>
              <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
                Enter ↵ / N
              </kbd>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-[11px] text-center text-[#9E9B93] mt-2 font-mono">
              Stage 1 of 4 · No test yet
            </p>
          </div>
        </div>

        {/* Right Column: Visual Manipulative Hook */}
        <div className="lg:col-span-7">
          {hookType === 'fraction-slice' && (
            <div className="space-y-4">
              <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D45B34]">
                      <Scissors className="w-3.5 h-3.5" />
                      <span>Try Cutting It</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1C1917]">
                      Tap slices to count equal pieces
                    </h3>
                  </div>

                  {/* Slicing Quick Buttons */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E8E5DD] self-start sm:self-auto">
                    {[1, 2, 3, 4].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => handleSlice(count)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                          sliceCount === count
                            ? 'bg-[#D45B34] text-white shadow-xs'
                            : 'text-[#6B6861] hover:text-[#1C1917]'
                        }`}
                      >
                        {count === 1 ? '1 Whole' : `Cut ${count}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sliced Bar Container */}
                <div className="bg-white border border-[#E8E5DD] rounded-xl p-4 mb-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B6861] mb-2">
                    <span>
                      {sliceCount === 1 ? '1 Whole (0 cuts)' : `${sliceCount} equal pieces`}
                    </span>
                    <span className="font-bold text-sm text-[#D45B34]">
                      {selectedSlices}/{sliceCount}
                    </span>
                  </div>

                  <div className="h-14 w-full flex gap-2">
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
                    👉 <strong>Tap orange slices</strong> to adjust shaded portion.
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSlice(1)}
                    className="text-xs text-[#9E9B93] hover:text-[#1C1917] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Collapsible Anatomy Card to save vertical space */}
              <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 shadow-xs">
                <button
                  type="button"
                  onClick={() => setShowAnatomy(!showAnatomy)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#1C1917] hover:text-[#D45B34] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D45B34]" />
                    <span>Why fractions have two numbers (Top vs Bottom)</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#9E9B93]">
                    {showAnatomy ? 'Hide ▲' : 'Show Guide ▼'}
                  </span>
                </button>

                {showAnatomy && (
                  <div className="mt-4 pt-3 border-t border-[#E8E5DD] animate-in fade-in duration-150">
                    <VisualFractionAnatomy />
                  </div>
                )}
              </div>
            </div>
          )}

          {hookType === 'decimal-grid' && (
            <DecimalGrid initialTenths={3} initialHundredths={0} interactive={true} label="Visual Hook: 1 Whole Divided into 10 Columns" />
          )}

          {hookType === 'percentage-grid' && (
            <PercentageGrid initialPercent={25} interactive={true} label="Visual Hook: 100 Squares Ruler" />
          )}

          {hookType === 'balance-scale' && (
            <BalanceScale initialX={4} initialLeftConstant={3} initialRightConstant={7} label="Visual Hook: The Physical Scale" />
          )}

          {hookType === 'array-grid' && (
            <ArrayMultiplier initialRows={3} initialCols={4} interactive={true} label="Visual Hook: Equal Rows & Columns" />
          )}

          {hookType === 'thermometer' && (
            <NegativeLine initialValue={-3} interactive={true} label="Visual Hook: Above & Below Zero" />
          )}
        </div>
      </div>
    </article>
  );
};
