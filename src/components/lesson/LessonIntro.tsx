import React, { useState } from 'react';
import type { LessonData } from '../../types';
import { Scissors, RotateCcw, Check, Sparkles } from 'lucide-react';
import { DecimalGrid } from '../visual/DecimalGrid';
import { PercentageGrid } from '../visual/PercentageGrid';
import { BalanceScale } from '../visual/BalanceScale';
import { ArrayMultiplier } from '../visual/ArrayMultiplier';
import { NegativeLine } from '../visual/NegativeLine';
import { RatioVisualizer } from '../visual/RatioVisualizer';
import { MetricLadder } from '../visual/MetricLadder';
import { DivisionSharing } from '../visual/DivisionSharing';
import { VoiceListenButton } from '../common/VoiceListenButton';
import { PEDAGOGY_REGISTRY } from '../../data/pedagogyData';
import { sound } from '../../utils/sound';

interface LessonIntroProps {
  lesson: LessonData;
  onNext?: () => void;
}

export const LessonIntro: React.FC<LessonIntroProps> = ({ lesson }) => {
  // Slicing story state for visual-first intuition in fraction lessons
  const [sliceCount, setSliceCount] = useState<number>(4);
  const [selectedSlices, setSelectedSlices] = useState<number>(3);

  const pedagogy = PEDAGOGY_REGISTRY[lesson.id] || {
    metaphor: {
      emoji: '💡',
      title: 'Real-World Foundation',
      scenario: 'Notice how this concept appears naturally in daily objects around you.',
      anchorComparison: 'Mastering this simple pattern unlocks every higher calculation.',
      kidExplanation: 'Look for the equal pieces and the balance point.',
    },
    brainTrap: {
      title: 'The Common Intuition Trap',
      trapStatement: 'Borrowing old whole-number habits makes this confusing.',
      whyItTricksUs: 'Our eyes look at lone symbols instead of the physical relationship.',
      theVisualProof: 'Looking at the visual model dissolves the confusion immediately.',
      falseConcept: 'Rushing to quick assumptions',
      trueConcept: 'Verifying with the physical model',
    },
  };

  const handleSlice = (count: number) => {
    sound.playSnap();
    setSliceCount(count);
    if (selectedSlices > count) {
      setSelectedSlices(count);
    }
  };

  const handleToggleSlice = (index: number) => {
    sound.playTick();
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
      ? (lesson.id.includes('division') ? 'division-sharing' : 'array-grid')
      : lesson.topicId === 'numbers'
      ? 'thermometer'
      : lesson.topicId === 'ratios'
      ? 'ratio-scaler'
      : lesson.topicId === 'conversions'
      ? 'metric-ladder'
      : 'fraction-slice');

  return (
    <article className="max-w-5xl mx-auto py-4 sm:py-6 animate-in fade-in duration-200">
      {/* 2-Column Responsive Workshop Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Intuition & Editorial Text */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
                STEP 01
              </span>
              <span className="text-xs font-sans uppercase tracking-wider text-[#9E9B93] font-semibold">
                The Visual Idea
              </span>
            </div>
            <VoiceListenButton
              text={`${lesson.intro.heading}. ${pedagogy.metaphor.scenario}. Core rule: ${pedagogy.metaphor.kidExplanation || lesson.intro.coreDefinition}`}
              label="Listen"
              size="sm"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1C1917] leading-tight">
            {lesson.intro.heading}
          </h1>

          {/* Core Visual Metaphor Story */}
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#D45B34] font-bold">
              <span>{pedagogy.metaphor.emoji}</span>
              <span>{pedagogy.metaphor.title}</span>
            </div>

            <p className="text-sm font-semibold text-[#1C1917] leading-snug">
              {pedagogy.metaphor.scenario}
            </p>

            <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
              {pedagogy.metaphor.anchorComparison}
            </p>

            <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-3 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0 mt-0.5" />
              <p className="text-xs text-[#1C1917] font-medium leading-relaxed">
                <strong>Core Rule:</strong> "{pedagogy.metaphor.kidExplanation || lesson.intro.coreDefinition}"
              </p>
            </div>
          </div>

          {/* Brain Trap Card: Visual Comparison */}
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans font-bold text-[#D45B34] uppercase tracking-wider">
                ⚠️ Avoid This Trap
              </span>
              <VoiceListenButton
                text={`Mistake to avoid: ${pedagogy.brainTrap.trapStatement}. The visual truth: ${pedagogy.brainTrap.trueConcept}`}
                label="Listen"
                size="sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-2.5 text-xs text-[#991B1B]">
                <span className="font-bold text-sm shrink-0">✕</span>
                <span><strong>Mistake:</strong> {pedagogy.brainTrap.trapStatement}</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-2.5 text-xs text-[#166534]">
                <span className="font-bold text-sm shrink-0">✓</span>
                <span><strong>Visual Truth:</strong> {pedagogy.brainTrap.trueConcept}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Manipulative Hook */}
        <div className="lg:col-span-7">
          {hookType === 'fraction-slice' && (
            <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#D45B34]">
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Touch & Cut Manipulative</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1C1917]">
                    Tap slices to shade parts
                  </h3>
                </div>

                {/* Slicing Quick Buttons */}
                <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E5DD] self-start sm:self-auto">
                  <span className="text-[11px] font-sans font-medium text-[#9E9B93] px-1">Cuts:</span>
                  {[2, 3, 4, 6, 8].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => handleSlice(count)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        sliceCount === count
                          ? 'bg-[#D45B34] text-white shadow-xs'
                          : 'text-[#6B6861] hover:text-[#1C1917]'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliced Bar Container */}
              <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 shadow-inner">
                <div className="flex items-center justify-between text-xs font-sans text-[#6B6861] mb-2">
                  <span>
                    Bar cut into {sliceCount} equal pieces
                  </span>
                  <span className="font-mono font-bold text-base text-[#D45B34]">
                    {selectedSlices}/{sliceCount}
                  </span>
                </div>

                <div className="h-16 w-full flex gap-2">
                  {Array.from({ length: sliceCount }, (_, i) => {
                    const isSelected = i < selectedSlices;

                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleToggleSlice(i)}
                        className={`flex-1 h-full rounded-xl flex flex-col items-center justify-center font-mono font-black text-xs sm:text-sm transition-all cursor-pointer select-none ${
                          isSelected
                            ? 'bg-[#D45B34] text-white shadow-sm ring-2 ring-[#BC4B26]/30'
                            : 'bg-white text-[#9E9B93] border border-[#E8E5DD] hover:bg-[#F4F2EB]'
                        }`}
                      >
                        <span>1/{sliceCount}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 mt-0.5 opacity-90" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fraction Meaning Anatomy */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-3 text-center">
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#D45B34] font-bold">
                    Top Number (Numerator)
                  </div>
                  <div className="text-2xl font-black font-mono text-[#D45B34] my-0.5">
                    {selectedSlices}
                  </div>
                  <div className="text-xs text-[#6B6861]">
                    Pieces you have
                  </div>
                </div>

                <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-3 text-center">
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#1C1917] font-bold">
                    Bottom Number (Denominator)
                  </div>
                  <div className="text-2xl font-black font-mono text-[#1C1917] my-0.5">
                    {sliceCount}
                  </div>
                  <div className="text-xs text-[#6B6861]">
                    Total equal cuts
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#6B6861] flex items-center justify-between pt-1">
                <span>
                  👉 <strong>Tap any slice</strong> to shade or unshade it.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sound.playTap();
                    setSliceCount(4);
                    setSelectedSlices(3);
                  }}
                  className="text-xs text-[#9E9B93] hover:text-[#1C1917] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
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

          {hookType === 'ratio-scaler' && (
            <RatioVisualizer baseA={2} baseB={3} interactive={true} label="Visual Hook: Mixing Proportions" />
          )}

          {hookType === 'metric-ladder' && (
            <MetricLadder initialValue={2.5} interactive={true} label="Visual Hook: Shifting Units by 10" />
          )}

          {hookType === 'division-sharing' && (
            <DivisionSharing initialTotal={12} initialGroups={3} interactive={true} label="Visual Hook: Equal Sharing" />
          )}
        </div>
      </div>
    </article>
  );
};
