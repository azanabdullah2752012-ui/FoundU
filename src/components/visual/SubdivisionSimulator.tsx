import React, { useState } from 'react';
import { Scissors, Sparkles } from 'lucide-react';

interface SubdivisionSimulatorProps {
  baseNumerator?: number;
  baseDenominator?: number;
}

export const SubdivisionSimulator: React.FC<SubdivisionSimulatorProps> = ({
  baseNumerator = 1,
  baseDenominator = 2,
}) => {
  const [multiplier, setMultiplier] = useState<number>(1);
  const [selectedBase, setSelectedBase] = useState<{ n: number; d: number }>({
    n: baseNumerator,
    d: baseDenominator,
  });

  const totalSlices = selectedBase.d * multiplier;
  const shadedSlices = selectedBase.n * multiplier;

  const multipliers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs select-none">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#D45B34]">
            <Scissors className="w-3.5 h-3.5" />
            <span>Interactive Subdivision Lab</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1C1917]">
            The “Slicing” Secret Behind Equivalent Fractions
          </h3>
        </div>

        {/* Base Fraction Picker */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#FAF9F5] border border-[#E8E5DD] p-1 rounded-xl">
          <span className="text-[11px] font-mono text-[#6B6861] px-1">Base:</span>
          {[
            { n: 1, d: 2, label: '1/2' },
            { n: 1, d: 3, label: '1/3' },
            { n: 2, d: 3, label: '2/3' },
            { n: 3, d: 4, label: '3/4' },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setSelectedBase({ n: item.n, d: item.d });
                setMultiplier(1);
              }}
              className={`px-2 py-0.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedBase.n === item.n && selectedBase.d === item.d
                  ? 'bg-[#1C1917] text-white shadow-2xs'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-[#6B6861] mb-5 leading-relaxed">
        Choose a slice factor below. Notice how each piece gets cut into smaller pieces, but the <strong>total orange area never grows or shrinks</strong>.
      </p>

      {/* Slicing Multiplier Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
        <span className="text-xs font-medium text-[#1C1917] shrink-0">
          Slice each piece into:
        </span>
        {multipliers.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMultiplier(m)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center gap-1 cursor-pointer shrink-0 ${
              multiplier === m
                ? 'bg-[#D45B34] text-white border-[#BC4B26] shadow-xs ring-2 ring-[#D45B34]/20'
                : 'bg-[#FAF9F5] border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917] hover:bg-white'
            }`}
          >
            {m === 1 ? '1 piece (Original)' : `${m} pieces (×${m})`}
          </button>
        ))}
      </div>

      {/* Live Physical Bar Rendering */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 sm:p-5 mb-5">
        <div className="flex items-center justify-between text-xs text-[#6B6861] mb-2 font-mono">
          <span>{shadedSlices} out of {totalSlices} equal slices shaded</span>
          <span className="font-semibold text-[#1C1917]">
            {Math.round((shadedSlices / totalSlices) * 100)}% of whole
          </span>
        </div>

        {/* Dynamic Slice Container */}
        <div className="w-full h-14 flex rounded-xl border border-[#D5D1C7] bg-[#F4F2EB] p-1 gap-0.5 overflow-hidden shadow-inner">
          {Array.from({ length: totalSlices }, (_, i) => {
            const isShaded = i < shadedSlices;
            // Mark original boundary with a slightly stronger divider
            const isOriginalBoundary = (i + 1) % multiplier === 0 && i !== totalSlices - 1;

            return (
              <div
                key={i}
                className={`flex-1 h-full transition-all duration-300 flex items-center justify-center font-mono text-[9px] sm:text-[10px] ${
                  isShaded
                    ? 'bg-[#D45B34] text-white'
                    : 'bg-white text-[#9E9B93]'
                } ${isOriginalBoundary ? 'border-r-2 border-[#1C1917]/25' : ''}`}
              >
                {totalSlices <= 12 && `1/${totalSlices}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* The Mathematical Proof Formula Card */}
      <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E5DD] flex items-center justify-center text-[#D45B34] shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-[#9E9B93]">
              The First-Principles Math Rule
            </div>
            <div className="text-sm font-semibold text-[#1C1917]">
              Multiply top and bottom by the exact same number
            </div>
          </div>
        </div>

        {/* Equation Display */}
        <div className="flex items-center gap-2 bg-white border border-[#E8E5DD] px-4 py-2 rounded-xl font-mono text-base font-bold text-[#1C1917] shadow-xs">
          <span>{selectedBase.n}/{selectedBase.d}</span>
          <span className="text-[#9E9B93] text-sm">→</span>
          <span className="text-[#D45B34]">
            ({selectedBase.n} × {multiplier}) / ({selectedBase.d} × {multiplier})
          </span>
          <span className="text-[#9E9B93] text-sm">=</span>
          <span className="bg-[#FDF4F0] border border-[#F3C3B2] text-[#D45B34] px-2 py-0.5 rounded">
            {shadedSlices}/{totalSlices}
          </span>
        </div>
      </div>
    </div>
  );
};
