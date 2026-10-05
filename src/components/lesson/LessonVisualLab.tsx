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
import { RatioVisualizer } from '../visual/RatioVisualizer';
import { MetricLadder } from '../visual/MetricLadder';
import { DivisionSharing } from '../visual/DivisionSharing';
import { FractionAddition } from '../visual/FractionAddition';

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
    <article className="max-w-5xl mx-auto py-4 sm:py-6 animate-in fade-in duration-200">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
              STAGE 03
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
              Interactive Visual Lab
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1C1917]">
            {visualLab.title}
          </h1>
        </div>

        {/* Instructions banner */}
        <div className="bg-white border border-[#E8E5DD] rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs text-[#6B6861] shadow-2xs self-start sm:self-auto">
          <Sliders className="w-3.5 h-3.5 text-[#D45B34] shrink-0" />
          <span>{visualLab.instructions}</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="mb-4">
        {/* Type 1: Fraction Slicer & Number Line Sync */}
        {visualLab.interactiveType === 'fraction-slicer' && (
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 sm:p-6 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="text-[11px] font-mono text-[#6B6861] uppercase tracking-wider">
                  Cuts & Shading
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-black text-[#D45B34]">
                    {sliceNumerator}/{sliceDenominator}
                  </span>
                  <span className="text-xs text-[#6B6861]">
                    ({sliceNumerator} equal pieces shaded out of {sliceDenominator})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E5DD]">
                <span className="text-xs text-[#9E9B93] mx-1 font-mono">Cuts:</span>
                {[2, 3, 4, 6, 8].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => {
                      setSliceDenominator(d);
                      if (sliceNumerator > d) setSliceNumerator(d);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      sliceDenominator === d
                        ? 'bg-[#1C1917] text-white shadow-xs'
                        : 'text-[#6B6861] hover:text-[#1C1917]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Fraction Bar */}
            <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD]">
              <FractionBar
                totalParts={sliceDenominator}
                shadedParts={sliceNumerator}
                interactive={true}
                onShadedChange={(newVal) => setSliceNumerator(newVal)}
                size="md"
                showFractionBadge={false}
              />
            </div>

            {/* Number Line Coordinate Sync */}
            <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD]">
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
        )}

        {/* Type 2: Subdivision Multiplier (Equivalent Fractions) */}
        {visualLab.interactiveType === 'subdivision-multiplier' && (
          <SubdivisionSimulator baseNumerator={1} baseDenominator={2} />
        )}

        {/* Type 3: Fraction Comparison */}
        {visualLab.interactiveType === 'fraction-comparison' && (
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-[#1C1917]">
                  Comparing Two Amounts Side-by-Side
                </h3>
                <p className="text-xs text-[#6B6861]">
                  Adjust the pieces of Fraction A and B to see which spans further
                </p>
              </div>

              <div className="font-mono text-sm sm:text-base font-black px-3 py-1 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD]">
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

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-[#E8E5DD]">
              <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E8E5DD] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-bold text-[#D45B34]">A: {compNumA}/{compDenA}</span>
                  <div className="flex gap-1 ml-1">
                    {[2, 3, 4, 6].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setCompDenA(d);
                          if (compNumA > d) setCompNumA(d);
                        }}
                        className={`px-1 rounded text-[10px] font-mono cursor-pointer ${
                          compDenA === d ? 'bg-[#D45B34] text-white' : 'bg-white border text-[#6B6861]'
                        }`}
                      >
                        /{d}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#9E9B93]">Fill:</span>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      disabled={n > compDenA}
                      onClick={() => setCompNumA(n)}
                      className={`px-1.5 py-0.5 rounded text-xs font-mono cursor-pointer ${
                        compNumA === n ? 'bg-[#D45B34] text-white' : 'bg-white border text-[#1C1917]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E8E5DD] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-bold text-[#1C1917]">B: {compNumB}/{compDenB}</span>
                  <div className="flex gap-1 ml-1">
                    {[2, 3, 4, 6].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setCompDenB(d);
                          if (compNumB > d) setCompNumB(d);
                        }}
                        className={`px-1 rounded text-[10px] font-mono cursor-pointer ${
                          compDenB === d ? 'bg-[#1C1917] text-white' : 'bg-white border text-[#6B6861]'
                        }`}
                      >
                        /{d}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#9E9B93]">Fill:</span>
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      disabled={n > compDenB}
                      onClick={() => setCompNumB(n)}
                      className={`px-1.5 py-0.5 rounded text-xs font-mono cursor-pointer ${
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
          <DecimalGrid initialTenths={4} initialHundredths={0} interactive={true} size="md" />
        )}

        {/* Type 5: Decimal Duel (0.4 vs 0.35) */}
        {visualLab.interactiveType === 'decimal-duel' && (
          <DecimalGrid
            initialTenths={4}
            initialHundredths={0}
            interactive={true}
            showComparisonTo={0.35}
            label="Interactive 100-Grid vs 0.35"
            size="md"
          />
        )}

        {/* Type 6 & 7: Percentage Grid & Converter */}
        {(visualLab.interactiveType === 'percentage-grid' ||
          visualLab.interactiveType === 'percentage-converter') && (
          <PercentageGrid initialPercent={50} interactive={true} size="md" />
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

        {/* Type 11: Ratio Scaler */}
        {visualLab.interactiveType === 'ratio-scaler' && (
          <RatioVisualizer baseA={2} baseB={3} interactive={true} />
        )}

        {/* Type 12: Metric Ladder */}
        {visualLab.interactiveType === 'metric-ladder' && (
          <MetricLadder initialValue={3.5} interactive={true} />
        )}

        {/* Type 13: Division Sharing */}
        {visualLab.interactiveType === 'division-sharing' && (
          <DivisionSharing initialTotal={13} initialGroups={4} interactive={true} />
        )}

        {/* Type 14: Fraction Addition */}
        {visualLab.interactiveType === 'fraction-addition' && (
          <FractionAddition initialA={{ num: 1, den: 4 }} initialB={{ num: 2, den: 4 }} interactive={true} />
        )}
      </div>

      {/* Compact Insights Ribbon */}
      <div className="bg-white border border-[#E8E5DD] rounded-xl p-3 shadow-2xs mb-4">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1C1917] mb-2">
          <Eye className="w-3.5 h-3.5 text-[#D45B34]" />
          <span>Core Intuitions</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6861]">
          {visualLab.keyInsights.map((insight, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D45B34] shrink-0 mt-0.5" />
              <span>{insight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="pt-3 border-t border-[#E8E5DD] flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6B6861] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to examples</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-colors shadow-xs group cursor-pointer"
        >
          <span>Test understanding with visuals</span>
          <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
            Enter ↵
          </kbd>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
