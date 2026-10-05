import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface DivisionSharingProps {
  initialTotal?: number;
  initialGroups?: number;
  interactive?: boolean;
  label?: string;
}

export const DivisionSharing: React.FC<DivisionSharingProps> = ({
  initialTotal = 13,
  initialGroups = 4,
  interactive = true,
  label,
}) => {
  const [total, setTotal] = useState<number>(initialTotal);
  const [groups, setGroups] = useState<number>(initialGroups);

  const quotient = Math.floor(total / groups);
  const remainder = total % groups;

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
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#D45B34]">
              {total} ÷ {groups} = {quotient}
            </span>
            {remainder > 0 && (
              <span className="text-xs font-bold font-mono text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded-full">
                Remainder: {remainder}
              </span>
            )}
          </div>
        </div>

        <div className="text-xs text-[#6B6861] bg-[#FAF9F5] p-2 rounded-xl border border-[#E8E5DD]">
          <strong>{total} items</strong> shared into <strong>{groups} equal groups</strong>
        </div>
      </div>

      {/* Visual Bowls / Groups */}
      <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E8E5DD] my-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: groups }).map((_, gIdx) => (
            <div
              key={gIdx}
              className="bg-white rounded-xl border border-[#E8E5DD] p-3 flex flex-col items-center shadow-2xs"
            >
              <div className="text-[11px] font-mono text-[#9E9B93] mb-2 font-bold">
                Group {gIdx + 1}
              </div>
              <div className="flex flex-wrap gap-1 justify-center min-h-[40px] items-center">
                {Array.from({ length: quotient }).map((_, cIdx) => (
                  <div
                    key={cIdx}
                    className="w-5 h-5 rounded-full bg-[#1C1917] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-2xs"
                  >
                    1
                  </div>
                ))}
              </div>
              <div className="text-xs font-mono font-bold text-[#1C1917] mt-2">
                {quotient} item{quotient === 1 ? '' : 's'}
              </div>
            </div>
          ))}
        </div>

        {/* Remainder Tray */}
        {remainder > 0 && (
          <div className="mt-3 p-3 bg-white rounded-xl border border-[#D45B34]/30 flex items-center justify-between">
            <div className="text-xs font-mono font-bold text-[#D45B34]">
              Remainder Tray (Cannot be shared equally):
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: remainder }).map((_, rIdx) => (
                <div
                  key={rIdx}
                  className="w-5 h-5 rounded-full bg-[#D45B34] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-2xs"
                >
                  R
                </div>
              ))}
              <span className="text-xs font-mono font-bold text-[#D45B34] ml-1">
                {remainder} leftover
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Controls */}
      {interactive && (
        <div className="mt-4 pt-3 border-t border-[#E8E5DD] space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono font-semibold text-[#6B6861] mb-1">
                <span>Total Items: {total}</span>
              </div>
              <input
                type="range"
                min={6}
                max={24}
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
                className="w-full accent-[#D45B34] h-2 bg-[#FAF9F5] rounded-lg cursor-pointer"
                aria-label="Total items slider"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono font-semibold text-[#6B6861] mb-1">
                <span>Groups to Share With: {groups}</span>
              </div>
              <input
                type="range"
                min={2}
                max={6}
                value={groups}
                onChange={(e) => setGroups(Number(e.target.value))}
                className="w-full accent-[#D45B34] h-2 bg-[#FAF9F5] rounded-lg cursor-pointer"
                aria-label="Groups slider"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6B6861] pt-1">
            <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0" />
            <span>
              Division is fair sharing. If any pieces cannot be shared equally across all groups, they form the <strong>remainder</strong>.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
