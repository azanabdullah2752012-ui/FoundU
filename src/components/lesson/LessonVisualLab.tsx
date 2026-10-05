import React, { useState } from 'react';
import type { LessonData } from '../../types';
import { ArrowLeft, ArrowRight, Eye, Sliders, CheckCircle2 } from 'lucide-react';
import { FractionBar } from '../visual/FractionBar';
import { NumberLine } from '../visual/NumberLine';
import { SubdivisionSimulator } from '../visual/SubdivisionSimulator';
import { FractionComparison } from '../visual/FractionComparison';
import { DecimalGrid } from '../visual/DecimalGrid';
import { PercentageGrid } from '../visual/PercentageGrid';
import { BalanceScale } from '../visual/BalanceScale';
import { ArrayMultiplier } from '../visual/ArrayMultiplier';
import { NegativeLine } from '../visual/NegativeLine';

interface LessonVisualLabProps {
  lesson: LessonData;
  onNext: () => void;
  onPrev: () => void;
}

export const LessonVisualLab: React.FC<LessonVisualLabProps> = ({
  lesson,
  onNext,
  onPrev,
}) => {
  const { visualLab } = lesson;

  // Fraction Slicer state
  const [sliceDenominator, setSliceDenominator] = useState(4);
  const [sliceNumerator, setSliceNumerator] = useState(3);

  // Comparison State
  const [compNumA, setCompNumA] = useState(2);
  const [compDenA, setCompDenA] = useState(3);
  const [compNumB, setCompNumB] = useState(3);
  const [compDenB, setCompDenB] = useState(4);

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
          STAGE 03
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
          Interactive Visual Lab
        </span>
      </div>

      {/* Main Title & Subtitle */}
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] mb-2">
        {visualLab.title}
      </h1>
      <p className="text-base text-[#6B6861] mb-6 leading-relaxed">
        {visualLab.subtitle}
      </p>

      {/* Instructions pill */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl px-4 py-2.5 mb-8 flex items-center gap-2 text-xs text-[#6B6861]">
        <Sliders className="w-4 h-4 text-[#D45B34] shrink-0" />
        <span>
          <strong>How to interact:</strong> {visualLab.instructions}
        </span>
      </div>

      {/* Dynamic Interactive Visual Stage */}
      <div className="mb-10">
        {/* Type 1: Fraction Slicer & Number Line Sync */}
        {visualLab.interactiveType === 'fraction-slicer' && (
          <div className="space-y-4">
            <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <div className="text-xs font-mono text-[#6B6861] uppercase tracking-wider mb-1">
                    Cuts & Shading
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-black text-[#D45B34]">
                      {sliceNumerator}/{sliceDenominator}
                    </span>
                    <span className="text-xs text-[#6B6861]">
                      ({sliceNumerator} equal pieces shaded out of {sliceDenominator})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  <span className="text-xs text-[#9E9B93] mr-1">Divide into:</span>
                  {[2, 3, 4, 6, 8].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setSliceDenominator(d);
                        if (sliceNumerator > d) setSliceNumerator(d);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        sliceDenominator === d
                          ? 'bg-[#1C1917] text-white shadow-xs'
                          : 'bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Fraction Bar */}
              <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E8E5DD] mb-4">
                <FractionBar
                  totalParts={sliceDenominator}
                  shadedParts={sliceNumerator}
                  interactive={true}
                  onShadedChange={(newVal) => setSliceNumerator(newVal)}
                  size="lg"
                  showFractionBadge={false}
                />
              </div>

              {/* Number Line Coordinate Sync */}
              <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E8E5DD]">
                <div className="text-xs font-mono text-[#6B6861] mb-1">
                  Coordinate on Continuous Line (0 to 1):
                </div>
                <NumberLine
                  fractions={[
                    {
                      numerator: sliceNumerator,
                      denominator: sliceDenominator,
                      label: `${sliceNumerator}/${sliceDenominator}`,
                    },
                  ]}
                  showTicks={sliceDenominator}
                />
              </div>
            </div>
          </div>
        )}

        {/* Type 2: Subdivision Multiplier (Equivalent Fractions) */}
        {visualLab.interactiveType === 'subdivision-multiplier' && (
          <SubdivisionSimulator baseNumerator={1} baseDenominator={2} />
        )}

        {/* Type 3: Fraction Comparison */}
        {visualLab.interactiveType === 'fraction-comparison' && (
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-bold text-lg text-[#1C1917]">
                  Comparing Two Amounts Side-by-Side
                </h3>
                <p className="text-xs text-[#6B6861]">
                  Adjust the pieces of Fraction A and Fraction B to see which spans further
                </p>
              </div>

              {/* Comparison Verdict */}
              <div className="font-mono text-base font-black px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD]">
                <span className="text-[#D45B34]">{compNumA}/{compDenA}</span>
                <span className="mx-2 text-[#1C1917]">
                  {compNumA / compDenA > compNumB / compDenB
                    ? '>'
                    : compNumA / compDenA < compNumB / compDenB
                    ? '<'
                    : '='}
                </span>
                <span className="text-[#1C1917]">{compNumB}/{compDenB}</span>
              </div>
            </div>

            {/* Side-by-side fraction bars */}
            <FractionComparison
              fractionA={{
                numerator: compNumA,
                denominator: compDenA,
                label: `Fraction A: ${compNumA}/${compDenA}`,
              }}
              fractionB={{
                numerator: compNumB,
                denominator: compDenB,
                label: `Fraction B: ${compNumB}/${compDenB}`,
              }}
            />

            {/* Steppers for Fraction A & B */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8E5DD]">
              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD] space-y-2">
                <div className="text-xs font-mono font-bold text-[#D45B34]">
                  Fraction A: {compNumA}/{compDenA}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6B6861]">Cut into:</span>
                  {[2, 3, 4, 6].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setCompDenA(d);
                        if (compNumA > d) setCompNumA(d);
                      }}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        compDenA === d ? 'bg-[#D45B34] text-white' : 'bg-white border text-[#1C1917]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6B6861]">Shaded:</span>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      disabled={n > compDenA}
                      onClick={() => setCompNumA(n)}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        compNumA === n ? 'bg-[#1C1917] text-white' : 'bg-white border text-[#1C1917]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD] space-y-2">
                <div className="text-xs font-mono font-bold text-[#1C1917]">
                  Fraction B: {compNumB}/{compDenB}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6B6861]">Cut into:</span>
                  {[2, 3, 4, 6].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => {
                        setCompDenB(d);
                        if (compNumB > d) setCompNumB(d);
                      }}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        compDenB === d ? 'bg-[#1C1917] text-white' : 'bg-white border text-[#1C1917]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6B6861]">Shaded:</span>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      disabled={n > compDenB}
                      onClick={() => setCompNumB(n)}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        compNumB === n ? 'bg-[#1C1917] text-white' : 'bg-white border text-[#1C1917]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Type 4: Decimal Grid */}
        {visualLab.interactiveType === 'decimal-grid' && (
          <DecimalGrid initialTenths={4} initialHundredths={0} interactive={true} />
        )}

        {/* Type 5: Decimal Duel (0.4 vs 0.35) */}
        {visualLab.interactiveType === 'decimal-duel' && (
          <DecimalGrid
            initialTenths={4}
            initialHundredths={0}
            interactive={true}
            showComparisonTo={0.35}
            label="Interactive 100-Grid vs 0.35"
          />
        )}

        {/* Type 6 & 7: Percentage Grid & Converter */}
        {(visualLab.interactiveType === 'percentage-grid' ||
          visualLab.interactiveType === 'percentage-converter') && (
          <PercentageGrid initialPercent={50} interactive={true} />
        )}

        {/* Type 8: Balance Scale */}
        {visualLab.interactiveType === 'balance-scale' && (
          <BalanceScale initialX={4} initialLeftConstant={3} initialRightConstant={7} />
        )}

        {/* Type 9: Array Grid */}
        {visualLab.interactiveType === 'array-grid' && (
          <ArrayMultiplier initialRows={3} initialCols={4} interactive={true} />
        )}

        {/* Type 10: Thermometer / Negative Line */}
        {visualLab.interactiveType === 'thermometer' && (
          <NegativeLine initialValue={-3} interactive={true} min={-7} max={7} />
        )}
      </div>

      {/* Key Insights callout cards */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 mb-10 shadow-xs">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#1C1917]">
          <Eye className="w-4 h-4 text-[#D45B34]" />
          <span>Key Visual Takeaways</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {visualLab.keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E5DD] rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-[#1C1917]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D45B34] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{insight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-[#E8E5DD] flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B6861] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to examples</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-xs group cursor-pointer"
        >
          <span>Test understanding with visuals</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
