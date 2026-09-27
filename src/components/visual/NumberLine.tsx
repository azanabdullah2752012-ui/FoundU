import React from 'react';

interface NumberLineProps {
  fractions: { numerator: number; denominator: number; label?: string }[];
  interactive?: boolean;
  targetFraction?: { numerator: number; denominator: number };
  onPinpoint?: (fraction: { numerator: number; denominator: number }) => void;
  showTicks?: number; // e.g. 4 for 0, 1/4, 2/4, 3/4, 1
}

export const NumberLine: React.FC<NumberLineProps> = ({
  fractions,
  showTicks = 4,
}) => {

  // Generate tick marks
  const ticks = Array.from({ length: showTicks + 1 }, (_, i) => i);

  return (
    <div className="w-full bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 sm:p-5 select-none shadow-xs">
      <div className="flex items-center justify-between text-xs text-[#6B6861] mb-6">
        <span className="font-semibold uppercase tracking-wider font-mono text-[11px] text-[#1C1917]">
          Number Line Model (Between 0 and 1)
        </span>
        <span className="text-[11px] text-[#9E9B93]">
          Fractions are real numbers with exact physical locations
        </span>
      </div>

      {/* Number Line Track */}
      <div className="relative w-full h-16 flex items-center px-4">
        {/* Horizontal Axis */}
        <div className="absolute left-4 right-4 h-1 bg-[#1C1917] rounded-full" />

        {/* Start (0) and End (1) arrows */}
        <div className="absolute left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#1C1917] -rotate-45" />
        <div className="absolute right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#1C1917] rotate-45" />

        {/* Intermediate Tick Marks */}
        {ticks.map((tick) => {
          const percent = (tick / showTicks) * 100;
          const isEndpoint = tick === 0 || tick === showTicks;

          return (
            <div
              key={tick}
              className="absolute -translate-x-1/2 flex flex-col items-center"
              style={{ left: `calc(1rem + (100% - 2rem) * ${percent / 100})` }}
            >
              <div
                className={`w-0.5 rounded-full ${
                  isEndpoint
                    ? 'h-6 bg-[#1C1917]'
                    : 'h-4 bg-[#6B6861]/70'
                }`}
              />
              <span
                className={`mt-2 font-mono text-xs font-semibold ${
                  isEndpoint ? 'text-[#1C1917] text-sm' : 'text-[#6B6861]'
                }`}
              >
                {tick === 0
                  ? '0'
                  : tick === showTicks
                  ? '1'
                  : `${tick}/${showTicks}`}
              </span>
            </div>
          );
        })}

        {/* Placed Fraction Highlights */}
        {fractions.map((f, idx) => {
          const ratio = f.numerator / f.denominator;
          const percent = ratio * 100;

          return (
            <div
              key={idx}
              className="absolute -translate-x-1/2 flex flex-col items-center -top-3 z-10 animate-in fade-in zoom-in-95 duration-200"
              style={{ left: `calc(1rem + (100% - 2rem) * ${percent / 100})` }}
            >
              {/* Point pill label */}
              <div className="bg-[#D45B34] text-white px-2 py-0.5 rounded-md font-mono text-xs font-bold shadow-md flex items-center gap-1 border border-white">
                <span>{f.label || `${f.numerator}/${f.denominator}`}</span>
              </div>
              {/* Pointer Triangle */}
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#D45B34]" />
              {/* Circle dot on line */}
              <div className="w-3 h-3 rounded-full bg-[#D45B34] ring-2 ring-white shadow-xs mt-0.5" />
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-xs text-[#6B6861]">
        <span>
          <strong>Intuition:</strong> A fraction is not just a slice of food—it has an exact coordinate between whole numbers.
        </span>
      </div>
    </div>
  );
};
