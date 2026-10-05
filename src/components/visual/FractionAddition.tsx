import React, { useState } from 'react';
import { Plus, Equal, Sparkles } from 'lucide-react';
import { FractionBar } from './FractionBar';

interface FractionAdditionProps {
  initialA?: { num: number; den: number };
  initialB?: { num: number; den: number };
  interactive?: boolean;
  label?: string;
}

export const FractionAddition: React.FC<FractionAdditionProps> = ({
  initialA = { num: 1, den: 4 },
  initialB = { num: 2, den: 4 },
  interactive = true,
  label,
}) => {
  const [den, setDen] = useState<number>(initialA.den);
  const [numA, setNumA] = useState<number>(initialA.num);
  const [numB, setNumB] = useState<number>(initialB.num);

  const sumNum = numA + numB;

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-black text-[#1C1917]">
              {numA}/{den} + {numB}/{den} = <span className="text-[#D45B34]">{sumNum}/{den}</span>
            </span>
            {sumNum === den && (
              <span className="text-xs font-mono font-bold text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-2 py-0.5 rounded-full">
                = 1 Whole
              </span>
            )}
          </div>
        </div>

        {interactive && (
          <div className="flex items-center gap-1.5 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E5DD]">
            <span className="text-xs font-mono text-[#9E9B93] px-1">Denominators:</span>
            {[3, 4, 6, 8].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => {
                  setDen(d);
                  if (numA >= d) setNumA(1);
                  if (numB >= d) setNumB(1);
                }}
                className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  den === d
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'text-[#6B6861] hover:text-[#1C1917]'
                }`}
              >
                /{d}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Visual Bars Addition */}
      <div className="space-y-3 bg-[#FAF9F5] p-4 rounded-xl border border-[#E8E5DD] my-2">
        {/* Fraction A */}
        <div>
          <div className="flex justify-between text-xs font-mono text-[#6B6861] mb-1">
            <span>First Piece: {numA}/{den}</span>
          </div>
          <FractionBar
            totalParts={den}
            shadedParts={numA}
            interactive={interactive}
            onShadedChange={(v) => setNumA(v)}
            size="sm"
            showFractionBadge={false}
          />
        </div>

        <div className="flex items-center justify-center my-1 text-xs font-mono font-bold text-[#9E9B93]">
          <Plus className="w-4 h-4 text-[#D45B34]" />
        </div>

        {/* Fraction B */}
        <div>
          <div className="flex justify-between text-xs font-mono text-[#6B6861] mb-1">
            <span>Second Piece: {numB}/{den}</span>
          </div>
          <FractionBar
            totalParts={den}
            shadedParts={numB}
            interactive={interactive}
            onShadedChange={(v) => setNumB(v)}
            size="sm"
            showFractionBadge={false}
          />
        </div>

        <div className="flex items-center justify-center my-1 text-xs font-mono font-bold text-[#9E9B93]">
          <Equal className="w-4 h-4 text-[#1C1917]" />
        </div>

        {/* Combined Result Bar */}
        <div className="p-3 bg-white rounded-xl border border-[#E8E5DD] shadow-2xs">
          <div className="flex justify-between text-xs font-mono font-bold text-[#D45B34] mb-1">
            <span>Combined Total: {sumNum}/{den}</span>
            <span>{sumNum > den ? 'Improper (> 1 Whole)' : ''}</span>
          </div>
          <FractionBar
            totalParts={den}
            shadedParts={Math.min(sumNum, den)}
            size="md"
            showFractionBadge={false}
          />
        </div>
      </div>

      {/* Key Intuition */}
      <div className="mt-3 pt-3 border-t border-[#E8E5DD] flex items-center gap-2 text-xs text-[#6B6861]">
        <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0" />
        <span>
          <strong>Why you never add the bottom numbers:</strong> The denominator only tells you the cut size (e.g. quarters). When you combine 1 quarter and 2 quarters, the pieces don't turn into eighths—you simply have 3 quarters!
        </span>
      </div>
    </div>
  );
};
