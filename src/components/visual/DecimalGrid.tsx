import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';

interface DecimalGridProps {
  initialTenths?: number;
  initialHundredths?: number;
  interactive?: boolean;
  mode?: 'tenths' | 'hundredths';
  onChange?: (val: number) => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showComparisonTo?: number; // e.g. compare 0.4 with 0.35
}

export const DecimalGrid: React.FC<DecimalGridProps> = ({
  initialTenths = 4,
  initialHundredths = 0,
  interactive = true,
  mode = 'tenths',
  onChange,
  size = 'md',
  label,
  showComparisonTo,
}) => {
  const [activeMode, setActiveMode] = useState<'tenths' | 'hundredths'>(mode);
  const [shadedCount, setShadedCount] = useState<number>(
    initialTenths * 10 + initialHundredths
  );

  const handleCellClick = (cellIndex: number) => {
    if (!interactive) return;
    let nextCount = cellIndex + 1;
    if (shadedCount === nextCount) {
      nextCount = cellIndex; // unselect
    }
    setShadedCount(nextCount);
    onChange?.(nextCount / 100);
  };

  const handleColumnClick = (colIndex: number) => {
    if (!interactive) return;
    const nextCount = (colIndex + 1) * 10;
    const currentTenths = Math.floor(shadedCount / 10);
    const updated = currentTenths === colIndex + 1 ? colIndex * 10 : nextCount;
    setShadedCount(updated);
    onChange?.(updated / 100);
  };

  const tenthsValue = Math.floor(shadedCount / 10);
  const hundredthsRem = shadedCount % 10;
  const decimalString = (shadedCount / 100).toFixed(2);

  const cellSizeClass =
    size === 'sm'
      ? 'w-4 h-4'
      : size === 'lg'
      ? 'w-8 h-8 sm:w-9 sm:h-9'
      : 'w-6 h-6 sm:w-7 sm:h-7';

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header with Mode Toggle & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="font-mono text-3xl font-black text-[#D45B34] tracking-tight">
              {decimalString}
            </span>
            <span className="text-xs text-[#6B6861] bg-[#FAF9F5] border border-[#E8E5DD] px-2.5 py-1 rounded-lg">
              <strong>{shadedCount}</strong> / 100 hundredths
            </span>
            {shadedCount % 10 === 0 && shadedCount > 0 && (
              <span className="text-xs text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-2 py-0.5 rounded font-mono font-semibold">
                = {shadedCount / 10}/10 tenths
              </span>
            )}
          </div>
        </div>

        {interactive && (
          <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E5DD] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveMode('tenths')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'tenths'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              Tenths (Strips)
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('hundredths')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'hundredths'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              Hundredths (Squares)
            </button>
          </div>
        )}
      </div>

      {/* 10x10 Grid View */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-10 gap-1 p-2 bg-[#FAF9F5] rounded-xl border border-[#E8E5DD] shadow-inner max-w-full overflow-x-auto">
          {Array.from({ length: 100 }, (_, idx) => {
            const isShaded = idx < shadedCount;
            const isFullTenth = idx < tenthsValue * 10;

            return (
              <button
                key={idx}
                type="button"
                disabled={!interactive}
                onClick={() =>
                  activeMode === 'tenths'
                    ? handleColumnClick(Math.floor(idx / 10))
                    : handleCellClick(idx)
                }
                className={`${cellSizeClass} rounded-xs sm:rounded-sm transition-all flex items-center justify-center text-[9px] font-mono ${
                  !interactive ? 'cursor-default' : 'cursor-pointer hover:opacity-85'
                } ${
                  isShaded
                    ? isFullTenth
                      ? 'bg-[#D45B34] text-white shadow-2xs'
                      : 'bg-[#E8734E] text-white'
                    : 'bg-white hover:bg-[#F0EEE6] border border-[#E8E5DD]'
                }`}
                title={`Square ${idx + 1} of 100 (0.01)`}
                aria-label={`Square ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Column Quick Indicators */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] flex justify-between mt-2 text-[10px] font-mono text-[#9E9B93]">
          <span>0.00</span>
          <span>0.50 (½)</span>
          <span>1.00 (Whole)</span>
        </div>
      </div>

      {/* Visual Insight / Breakdown */}
      <div className="mt-4 pt-3 border-t border-[#E8E5DD] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B6861]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#D45B34]" />
          <span>
            <strong>{tenthsValue}</strong> Tenths (Columns) +{' '}
            <strong>{hundredthsRem}</strong> Hundredths (Singles)
          </span>
        </div>
        {interactive && (
          <span className="text-[#9E9B93]">
            {activeMode === 'tenths' ? '👉 Tap columns to slice by 0.10' : '👉 Tap any square to shade up to 0.01'}
          </span>
        )}
      </div>

      {/* Optional Side-by-Side Comparison (e.g. 0.4 vs 0.35) */}
      {showComparisonTo !== undefined && (
        <div className="mt-4 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D45B34]" />
            <span className="text-xs font-semibold text-[#1C1917]">
              Compare with {(showComparisonTo).toFixed(2)}:
            </span>
          </div>
          <div className="text-xs font-mono">
            <span className="font-bold text-[#D45B34]">{decimalString}</span>
            <span className="mx-2 text-[#9E9B93]">
              {shadedCount > Math.round(showComparisonTo * 100)
                ? '>'
                : shadedCount < Math.round(showComparisonTo * 100)
                ? '<'
                : '='}
            </span>
            <span className="font-bold text-[#1C1917]">{showComparisonTo.toFixed(2)}</span>
            <span className="ml-2 text-[#6B6861]">
              ({shadedCount} squares vs {Math.round(showComparisonTo * 100)} squares)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
