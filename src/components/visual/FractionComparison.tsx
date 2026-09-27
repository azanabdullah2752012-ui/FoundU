import React from 'react';

interface FractionComparisonProps {
  fractionA: { numerator: number; denominator: number; label?: string };
  fractionB: { numerator: number; denominator: number; label?: string };
}

export const FractionComparison: React.FC<FractionComparisonProps> = ({
  fractionA,
  fractionB,
}) => {
  const partsA = Array.from({ length: fractionA.denominator }, (_, i) => i);
  const partsB = Array.from({ length: fractionB.denominator }, (_, i) => i);

  return (
    <div className="w-full bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 md:p-5 shadow-xs">
      <div className="text-xs font-semibold uppercase tracking-wider text-[#6B6861] mb-3">
        Visual Comparison
      </div>

      <div className="space-y-4">
        {/* Fraction A */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-mono font-semibold text-[#1C1917] bg-white border border-[#E8E5DD] px-2 py-0.5 rounded text-sm">
              {fractionA.label || `${fractionA.numerator}/${fractionA.denominator}`}
            </span>
            <span className="text-[#6B6861]">
              Cut into {fractionA.denominator} equal parts
            </span>
          </div>
          <div className="h-10 w-full flex rounded-lg border border-[#D5D1C7] bg-[#F4F2EB] p-1 gap-1">
            {partsA.map((i) => {
              const isShaded = i < fractionA.numerator;
              return (
                <div
                  key={i}
                  className={`flex-1 h-full rounded flex items-center justify-center font-mono text-[11px] font-medium transition-colors ${
                    isShaded
                      ? 'bg-[#D45B34] text-white shadow-xs'
                      : 'bg-white/80 text-[#9E9B93]'
                  }`}
                >
                  1/{fractionA.denominator}
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider guide line showing aligned whole */}
        <div className="relative flex items-center justify-center py-1">
          <div className="border-t border-dashed border-[#D5D1C7] w-full" />
          <span className="absolute bg-[#FAF9F5] px-2 text-[11px] font-mono text-[#9E9B93]">
            Same 1 Whole Length
          </span>
        </div>

        {/* Fraction B */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-mono font-semibold text-[#1C1917] bg-white border border-[#E8E5DD] px-2 py-0.5 rounded text-sm">
              {fractionB.label || `${fractionB.numerator}/${fractionB.denominator}`}
            </span>
            <span className="text-[#6B6861]">
              Cut into {fractionB.denominator} equal parts
            </span>
          </div>
          <div className="h-10 w-full flex rounded-lg border border-[#D5D1C7] bg-[#F4F2EB] p-1 gap-1">
            {partsB.map((i) => {
              const isShaded = i < fractionB.numerator;
              return (
                <div
                  key={i}
                  className={`flex-1 h-full rounded flex items-center justify-center font-mono text-[11px] font-medium transition-colors ${
                    isShaded
                      ? 'bg-[#D45B34] text-white shadow-xs'
                      : 'bg-white/80 text-[#9E9B93]'
                  }`}
                >
                  1/{fractionB.denominator}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
