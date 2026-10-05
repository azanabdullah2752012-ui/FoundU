import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface RatioVisualizerProps {
  baseA?: number;
  baseB?: number;
  labelA?: string;
  labelB?: string;
  interactive?: boolean;
  label?: string;
  initialScale?: number;
}

export const RatioVisualizer: React.FC<RatioVisualizerProps> = ({
  baseA = 2,
  baseB = 3,
  labelA = 'Blue',
  labelB = 'Orange',
  interactive = true,
  label,
  initialScale = 1,
}) => {
  const [scale, setScale] = useState<number>(initialScale);

  const countA = baseA * scale;
  const countB = baseB * scale;
  const total = countA + countB;

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
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#1C1917]">
              <span className="text-[#0284C7]">{countA}</span> : <span className="text-[#D45B34]">{countB}</span>
            </span>
            <span className="text-xs font-semibold text-[#6B6861]">
              (Scale factor ×{scale})
            </span>
          </div>
        </div>

        {/* Part-to-whole pill */}
        <div className="flex items-center gap-2 bg-[#FAF9F5] p-2 rounded-xl border border-[#E8E5DD] text-xs font-mono">
          <div className="text-center px-2">
            <div className="text-[10px] text-[#0284C7] font-bold uppercase">{labelA} Share</div>
            <div className="font-bold text-[#1C1917]">{countA}/{total}</div>
          </div>
          <div className="h-6 w-px bg-[#E8E5DD]" />
          <div className="text-center px-2">
            <div className="text-[10px] text-[#D45B34] font-bold uppercase">{labelB} Share</div>
            <div className="font-bold text-[#1C1917]">{countB}/{total}</div>
          </div>
        </div>
      </div>

      {/* Visual Dot/Block Matrix */}
      <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E8E5DD] my-2">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-around">
          {/* Part A tokens */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-[#0284C7] mb-2">
              {labelA}: {countA} units
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-[180px] justify-center">
              {Array.from({ length: countA }, (_, i) => (
                <div
                  key={`a-${i}`}
                  className="w-6 h-6 rounded-full bg-[#0284C7] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-2xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="text-xl font-black text-[#9E9B93] font-mono">:</div>

          {/* Part B tokens */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-mono font-bold text-[#D45B34] mb-2">
              {labelB}: {countB} units
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-[180px] justify-center">
              {Array.from({ length: countB }, (_, i) => (
                <div
                  key={`b-${i}`}
                  className="w-6 h-6 rounded-lg bg-[#D45B34] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-2xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Scaling Multiplier */}
      {interactive && (
        <div className="mt-4 pt-3 border-t border-[#E8E5DD] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#6B6861]">
            <span>Scale both quantities equally:</span>
            <span className="text-[#1C1917] font-bold">Multiplier ×{scale}</span>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setScale(s)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  scale === s
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
                }`}
              >
                ×{s} ({baseA * s}:{baseB * s})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6B6861] pt-1">
            <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0" />
            <span>
              A ratio is a relationship. Scaling {baseA}:{baseB} by ×{scale} produces {countA}:{countB}—the flavor or mixture remains completely identical!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
