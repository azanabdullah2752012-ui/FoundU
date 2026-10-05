import React, { useState } from 'react';
import { Compass, ThermometerSnowflake, Waves, Mountain } from 'lucide-react';

interface NegativeLineProps {
  initialValue?: number;
  interactive?: boolean;
  label?: string;
  min?: number;
  max?: number;
}

export const NegativeLine: React.FC<NegativeLineProps> = ({
  initialValue = -3,
  interactive = true,
  label,
  min = -7,
  max = 7,
}) => {
  const [val, setVal] = useState<number>(initialValue);

  const isNegative = val < 0;
  const isZero = val === 0;
  const distance = Math.abs(val);

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-baseline gap-3">
            <span
              className={`font-mono text-3xl sm:text-4xl font-black tracking-tight ${
                isNegative ? 'text-[#0284C7]' : isZero ? 'text-[#1C1917]' : 'text-[#D45B34]'
              }`}
            >
              {val > 0 ? `+${val}` : val}
            </span>
            <span className="text-xs font-semibold text-[#6B6861]">
              {isZero
                ? 'The Anchor: Exactly zero'
                : `${distance} step${distance === 1 ? '' : 's'} ${
                    isNegative ? 'BELOW zero' : 'ABOVE zero'
                  }`}
            </span>
          </div>
        </div>

        {/* Metaphor pill */}
        <div className="flex items-center gap-2 bg-[#FAF9F5] px-3 py-1.5 rounded-xl border border-[#E8E5DD] text-xs font-mono font-semibold self-start sm:self-auto">
          {isNegative ? (
            <>
              <Waves className="w-4 h-4 text-[#0284C7]" />
              <span className="text-[#0284C7]">{distance}m underwater / depth</span>
            </>
          ) : isZero ? (
            <>
              <Compass className="w-4 h-4 text-[#6B6861]" />
              <span className="text-[#1C1917]">Sea Level / Freezing (0°)</span>
            </>
          ) : (
            <>
              <Mountain className="w-4 h-4 text-[#D45B34]" />
              <span className="text-[#D45B34]">{distance}m altitude / above</span>
            </>
          )}
        </div>
      </div>

      {/* Visual Number Line */}
      <div className="py-6 px-2 sm:px-6 bg-[#FAF9F5] rounded-xl border border-[#E8E5DD] my-2">
        {/* The Track */}
        <div className="relative h-2 bg-[#E8E5DD] rounded-full my-6 flex items-center">
          {/* Zero Marker Line */}
          <div className="absolute left-1/2 -top-3 -translate-x-1/2 h-8 w-1 bg-[#1C1917] rounded-full z-10" />

          {/* Color Fill from 0 to val */}
          <div
            className={`absolute h-2 transition-all duration-200 ${
              isNegative ? 'bg-[#0284C7] rounded-l-full' : 'bg-[#D45B34] rounded-r-full'
            }`}
            style={{
              left: isNegative ? `${((val - min) / (max - min)) * 100}%` : '50%',
              width: `${(distance / (max - min)) * 100}%`,
            }}
          />

          {/* Discrete tick points */}
          {Array.from({ length: max - min + 1 }).map((_, idx) => {
            const tickNum = min + idx;
            const pct = (idx / (max - min)) * 100;
            const isTickZero = tickNum === 0;
            const isSelected = tickNum === val;

            return (
              <div
                key={tickNum}
                className="absolute flex flex-col items-center -translate-x-1/2 cursor-pointer"
                style={{ left: `${pct}%` }}
                onClick={() => interactive && setVal(tickNum)}
              >
                <div
                  className={`w-1 transition-all ${
                    isTickZero
                      ? 'h-5 bg-[#1C1917]'
                      : isSelected
                      ? 'h-4 bg-[#D45B34]'
                      : 'h-2 bg-[#9E9B93]'
                  }`}
                />
                <span
                  className={`text-[10px] font-mono mt-1 font-semibold transition-all ${
                    isSelected
                      ? 'text-[#1C1917] scale-125'
                      : isTickZero
                      ? 'text-[#1C1917] font-black'
                      : 'text-[#9E9B93]'
                  }`}
                >
                  {tickNum}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Quick Step Buttons */}
      {interactive && (
        <div className="mt-4 pt-3 border-t border-[#E8E5DD] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#1C1917]">
              Step Along the Continuum:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={val <= min}
                onClick={() => setVal((v) => v - 1)}
                className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E8E5DD] hover:bg-[#F4F2EB] text-xs font-mono font-bold rounded-lg transition-colors disabled:opacity-40"
              >
                ← Step Left (-1)
              </button>
              <button
                type="button"
                onClick={() => setVal(0)}
                className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E8E5DD] hover:bg-[#F4F2EB] text-xs font-mono font-bold rounded-lg transition-colors"
              >
                Reset to 0
              </button>
              <button
                type="button"
                disabled={val >= max}
                onClick={() => setVal((v) => v + 1)}
                className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E8E5DD] hover:bg-[#F4F2EB] text-xs font-mono font-bold rounded-lg transition-colors disabled:opacity-40"
              >
                Step Right (+1) →
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6B6861]">
            <ThermometerSnowflake className="w-4 h-4 text-[#0284C7] shrink-0" />
            <span>
              The minus sign (-) simply means: <strong>"in the opposite direction from zero"</strong>. -3 is not a broken number; it is 3 full units to the left of the origin.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
