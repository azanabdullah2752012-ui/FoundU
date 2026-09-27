import React, { useState } from 'react';
import type { LessonData } from '../../types';
import { ArrowLeft, ArrowRight, Eye, Sliders } from 'lucide-react';
import { FractionBar } from '../visual/FractionBar';

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
  // State for interactive fraction sandbox
  const [sandboxDenominator, setSandboxDenominator] = useState(4);
  const [sandboxNumerator, setSandboxNumerator] = useState(1);

  const handleDenominatorChange = (denom: number) => {
    setSandboxDenominator(denom);
    if (sandboxNumerator > denom) {
      setSandboxNumerator(denom);
    }
  };

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
          STAGE 02
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
          Visual Examples
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-2">
        {lesson.examples.heading}
      </h1>
      <p className="text-base text-[#6B6861] mb-8 leading-relaxed">
        {lesson.examples.description}
      </p>

      {/* Grid of structured visual examples */}
      <div className="space-y-6 mb-12">
        {lesson.examples.items.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#D5D1C7] transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#F4F2EB] text-[#6B6861] font-mono text-xs flex items-center justify-center font-semibold">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-lg text-[#1C1917]">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-bold text-[#D45B34]">
                  {item.fractionText}
                </span>
                {item.equivalentText && (
                  <span className="text-xs bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] px-2 py-0.5 rounded-full">
                    {item.equivalentText}
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-[#6B6861] mb-4">{item.description}</p>

            {/* Visual representation */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD]/80 mb-4">
              <FractionBar
                totalParts={item.visual.totalParts}
                shadedParts={item.visual.shadedParts}
                size="md"
                showFractionBadge={false}
              />
            </div>

            {/* Intuition insight */}
            <div className="text-xs text-[#1C1917] bg-[#F4F2EB]/50 p-3 rounded-lg border-l-2 border-[#D45B34] flex items-start gap-2">
              <Eye className="w-4 h-4 text-[#D45B34] shrink-0 mt-0.5" />
              <span>
                <strong>Intuition:</strong> {item.insight}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Intuition Playground: Touch & See */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 mb-10 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Sliders className="w-4 h-4 text-[#D45B34]" />
          <h3 className="font-semibold text-base text-[#1C1917]">
            Intuition Playground: Click and observe
          </h3>
        </div>
        <p className="text-xs text-[#6B6861] mb-4">
          Click any block directly to shade it, or choose how many equal cuts to make.
          Notice how cutting into more pieces makes each piece smaller.
        </p>

        {/* Cuts selector */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
          <span className="text-xs text-[#6B6861] shrink-0">Divide into:</span>
          {[2, 3, 4, 6, 8].map((denom) => (
            <button
              key={denom}
              type="button"
              onClick={() => handleDenominatorChange(denom)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all ${
                sandboxDenominator === denom
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-white border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              {denom} equal parts
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E8E5DD]">
          <FractionBar
            totalParts={sandboxDenominator}
            shadedParts={sandboxNumerator}
            interactive={true}
            onShadedChange={(newVal) => setSandboxNumerator(newVal)}
            label={`Fraction: ${sandboxNumerator} / ${sandboxDenominator}`}
            size="lg"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-[#E8E5DD] flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B6861] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to intro</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-xs group"
        >
          <span>Watch explanation video</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
