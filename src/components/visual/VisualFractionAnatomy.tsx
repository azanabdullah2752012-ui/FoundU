import React, { useState } from 'react';
import { Hand, Grid } from 'lucide-react';

export const VisualFractionAnatomy: React.FC = () => {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);

  return (
    <div className="w-full bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs select-none">
      <div className="text-center mb-6">
        <span className="text-xs font-mono font-bold text-[#D45B34] uppercase tracking-wider bg-[#FDF4F0] border border-[#F3C3B2] px-2.5 py-1 rounded-full">
          Universal Visual Guide
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] mt-2">
          What the Two Numbers Mean
        </h3>
        <p className="text-xs sm:text-sm text-[#6B6861] mt-1">
          No English required—look at the colors and symbols.
        </p>
      </div>

      {/* Main Visual Anatomy Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 mb-6">
        {/* Left: Giant Fraction Display with Visual Callouts */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-[#E8E5DD] shadow-xs">
          {/* Top: Numerator Callout */}
          <div className="flex items-center gap-2 text-[#D45B34] animate-bounce">
            <Hand className="w-4 h-4" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Parts you have
            </span>
          </div>

          {/* Huge Fraction Notation */}
          <div className="flex flex-col items-center my-2">
            <span className="text-5xl sm:text-6xl font-black font-mono text-[#D45B34] leading-none">
              {numerator}
            </span>
            <div className="w-24 h-1.5 bg-[#1C1917] rounded-full my-2.5" />
            <span className="text-5xl sm:text-6xl font-black font-mono text-[#1C1917] leading-none">
              {denominator}
            </span>
          </div>

          {/* Bottom: Denominator Callout */}
          <div className="flex items-center gap-2 text-[#6B6861]">
            <Grid className="w-4 h-4" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Total equal cuts
            </span>
          </div>
        </div>

        {/* Right: Direct Physical Representation */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#6B6861] mb-1.5">
              <span>Physical Bar:</span>
              <span className="font-bold text-[#D45B34]">
                {numerator} of {denominator} pieces colored
              </span>
            </div>

            {/* Visual Bar with colored pieces and numbers */}
            <div className="h-16 w-full flex rounded-xl border border-[#D5D1C7] bg-[#F4F2EB] p-1.5 gap-1.5 shadow-inner">
              {Array.from({ length: denominator }, (_, i) => {
                const isColored = i < numerator;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      if (i === 0 && numerator === 1) setNumerator(0);
                      else setNumerator(i + 1);
                    }}
                    className={`flex-1 h-full rounded-lg flex flex-col items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isColored
                        ? 'bg-[#D45B34] text-white shadow-sm ring-1 ring-[#BC4B26]/30 scale-[0.98]'
                        : 'bg-white text-[#9E9B93] border border-black/5 hover:bg-white/90'
                    }`}
                  >
                    <span>{isColored ? '✓' : ''}</span>
                    <span className="text-[10px] opacity-80">1/{denominator}</span>
                  </button>
                );
              })}
            </div>
            <div className="text-[11px] text-[#9E9B93] text-right mt-1">
              Tap any block to color it
            </div>
          </div>

          {/* Quick Denominator Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1">
            <span className="text-xs font-medium text-[#1C1917] shrink-0 font-mono">
              Cut into:
            </span>
            {[2, 3, 4, 5, 6].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => {
                  setDenominator(d);
                  if (numerator > d) setNumerator(d);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  denominator === d
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-white border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
                }`}
              >
                {d} cuts
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Visual summary badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-3 p-3 bg-[#FDF4F0] border border-[#F3C3B2] rounded-xl text-[#D45B34]">
          <div className="w-8 h-8 rounded-lg bg-[#D45B34] text-white flex items-center justify-center font-bold text-sm shrink-0">
            ▲
          </div>
          <div>
            <div className="font-bold uppercase font-mono">Top Number (Numerator)</div>
            <div className="text-[#1C1917] text-xs">
              Counts how many colored pieces you are holding.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl text-[#1C1917]">
          <div className="w-8 h-8 rounded-lg bg-[#1C1917] text-white flex items-center justify-center font-bold text-sm shrink-0">
            ▼
          </div>
          <div>
            <div className="font-bold uppercase font-mono text-[#6B6861]">Bottom Number (Denominator)</div>
            <div className="text-[#1C1917] text-xs">
              Counts how many total equal cuts divide the whole.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
