import React, { useState } from 'react';
import { Percent } from 'lucide-react';

interface PercentageGridProps {
  initialPercent?: number;
  interactive?: boolean;
  onChange?: (val: number) => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showPresets?: boolean;
}

export const PercentageGrid: React.FC<PercentageGridProps> = ({
  initialPercent = 25,
  interactive = true,
  onChange,
  size = 'md',
  label,
  showPresets = true,
}) => {
  const [percent, setPercent] = useState<number>(initialPercent);

  const handleSliderChange = (newVal: number) => {
    setPercent(newVal);
    onChange?.(newVal);
  };

  const handlePreset = (val: number) => {
    setPercent(val);
    onChange?.(val);
  };

  // Simplest fraction representation
  const getFractionText = (p: number) => {
    if (p === 0) return '0';
    if (p === 100) return '1 Whole';
    if (p === 50) return '1/2';
    if (p === 25) return '1/4';
    if (p === 75) return '3/4';
    if (p === 20) return '1/5';
    if (p === 40) return '2/5';
    if (p === 60) return '3/5';
    if (p === 80) return '4/5';
    if (p === 10) return '1/10';
    return `${p}/100`;
  };

  const cellSizeClass =
    size === 'sm'
      ? 'w-4 h-4'
      : size === 'lg'
      ? 'w-7 h-7 sm:w-8 sm:h-8'
      : 'w-6 h-6 sm:w-7 sm:h-7';

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header & Big Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-4xl font-black text-[#D45B34] tracking-tight">
              {percent}%
            </span>
            <span className="text-sm font-semibold text-[#1C1917]">
              = {percent} out of 100
            </span>
          </div>
        </div>

        {/* Live Translations Pill */}
        <div className="flex items-center gap-2 bg-[#FAF9F5] p-2 rounded-xl border border-[#E8E5DD]">
          <div className="text-center px-2">
            <div className="text-[10px] font-mono uppercase text-[#9E9B93]">Fraction</div>
            <div className="font-mono text-xs font-bold text-[#1C1917]">
              {getFractionText(percent)}
            </div>
          </div>
          <div className="h-6 w-px bg-[#E8E5DD]" />
          <div className="text-center px-2">
            <div className="text-[10px] font-mono uppercase text-[#9E9B93]">Decimal</div>
            <div className="font-mono text-xs font-bold text-[#1C1917]">
              {(percent / 100).toFixed(2)}
            </div>
          </div>
          <div className="h-6 w-px bg-[#E8E5DD]" />
          <div className="text-center px-2">
            <div className="text-[10px] font-mono uppercase text-[#9E9B93]">Percent</div>
            <div className="font-mono text-xs font-bold text-[#D45B34]">
              {percent}%
            </div>
          </div>
        </div>
      </div>

      {/* 100 Cell Grid */}
      <div className="flex flex-col items-center my-2">
        <div className="grid grid-cols-10 gap-1 p-2 bg-[#FAF9F5] rounded-xl border border-[#E8E5DD] shadow-inner max-w-full overflow-x-auto">
          {Array.from({ length: 100 }, (_, idx) => {
            const isShaded = idx < percent;
            return (
              <button
                key={idx}
                type="button"
                disabled={!interactive}
                onClick={() => handlePreset(idx + 1)}
                className={`${cellSizeClass} rounded-xs transition-all ${
                  isShaded
                    ? 'bg-[#D45B34] shadow-2xs'
                    : 'bg-white border border-[#E8E5DD] hover:bg-[#F0EEE6]'
                } ${interactive ? 'cursor-pointer hover:scale-105' : 'cursor-default'}`}
                title={`${idx + 1}% of 100`}
                aria-label={`Square ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Interactive Slider & Presets */}
      {interactive && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#6B6861] shrink-0">0%</span>
            <input
              type="range"
              min={0}
              max={100}
              value={percent}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="w-full accent-[#D45B34] h-2 bg-[#FAF9F5] rounded-lg cursor-pointer"
              aria-label="Percentage value slider"
            />
            <span className="text-xs font-mono font-bold text-[#6B6861] shrink-0">100%</span>
          </div>

          {showPresets && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-xs text-[#9E9B93] mr-1">Quick Presets:</span>
              {[
                { label: '10% (⅒)', val: 10 },
                { label: '25% (¼)', val: 25 },
                { label: '50% (½)', val: 50 },
                { label: '75% (¾)', val: 75 },
                { label: '100% (1)', val: 100 },
              ].map((preset) => (
                <button
                  key={preset.val}
                  type="button"
                  onClick={() => handlePreset(preset.val)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                    percent === preset.val
                      ? 'bg-[#1C1917] text-white'
                      : 'bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Visual Rule */}
      <div className="mt-4 pt-3 border-t border-[#E8E5DD] flex items-center gap-2 text-xs text-[#6B6861]">
        <Percent className="w-4 h-4 text-[#D45B34] shrink-0" />
        <span>
          <strong>"Per-cent"</strong> literally translates to <em>"per one hundred"</em> (from Latin <em>per centum</em>). It counts how many squares are filled out of 100.
        </span>
      </div>
    </div>
  );
};
