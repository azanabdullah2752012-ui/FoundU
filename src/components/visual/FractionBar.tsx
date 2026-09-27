import React from 'react';

interface FractionBarProps {
  totalParts: number;
  shadedParts: number;
  interactive?: boolean;
  onShadedChange?: (newShaded: number) => void;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showFractionBadge?: boolean;
  highlightIndexes?: number[];
}

export const FractionBar: React.FC<FractionBarProps> = ({
  totalParts,
  shadedParts,
  interactive = false,
  onShadedChange,
  label,
  size = 'md',
  showFractionBadge = true,
  highlightIndexes,
}) => {
  const heightClass =
    size === 'xs'
      ? 'h-6'
      : size === 'sm'
      ? 'h-9'
      : size === 'lg'
      ? 'h-16'
      : 'h-12';

  const shouldShowBadge = size === 'xs' ? false : showFractionBadge;

  const parts = Array.from({ length: totalParts }, (_, i) => i);

  const handleSliceClick = (index: number) => {
    if (!interactive || !onShadedChange) return;
    // If clicking on index 0 and shaded is 1, toggle to 0, otherwise set to index + 1
    if (index === 0 && shadedParts === 1) {
      onShadedChange(0);
    } else {
      onShadedChange(index + 1);
    }
  };

  return (
    <div className="w-full select-none">
      {label && (
        <div className="flex items-center justify-between text-xs font-medium text-[#6B6861] mb-2">
          <span>{label}</span>
          {interactive && (
            <span className="text-[#D45B34] text-[11px] font-semibold uppercase tracking-wider">
              Click slices to interact
            </span>
          )}
        </div>
      )}

      {/* Outer Fraction Container */}
      <div
        className={`w-full ${heightClass} flex rounded-xl border border-[#D5D1C7] bg-[#F4F2EB] p-1 gap-1 shadow-inner relative overflow-hidden`}
        role="region"
        aria-label={`Fraction bar with ${shadedParts} of ${totalParts} parts shaded`}
      >
        {parts.map((i) => {
          const isShaded = highlightIndexes
            ? highlightIndexes.includes(i)
            : i < shadedParts;

          return (
            <button
              key={i}
              type="button"
              disabled={!interactive}
              onClick={() => handleSliceClick(i)}
              className={`flex-1 h-full rounded-lg transition-all duration-200 relative flex items-center justify-center text-xs font-mono font-medium ${
                isShaded
                  ? 'bg-[#D45B34] text-white shadow-sm ring-1 ring-[#BC4B26]/30'
                  : 'bg-white/80 hover:bg-white text-[#9E9B93] border border-black/5'
              } ${
                interactive
                  ? 'cursor-pointer hover:scale-[0.99] active:scale-[0.97]'
                  : 'cursor-default'
              }`}
              aria-label={`Part ${i + 1} of ${totalParts}: ${
                isShaded ? 'shaded' : 'unshaded'
              }`}
            >
              <span className="text-[11px] tracking-tight opacity-90">
                1/{totalParts}
              </span>
            </button>
          );
        })}
      </div>

      {shouldShowBadge && (
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex items-baseline gap-2">
            <div className="flex items-center text-base font-mono font-semibold text-[#1C1917] bg-white px-2.5 py-1 rounded-md border border-[#E8E5DD] shadow-xs">
              <span>{shadedParts}</span>
              <span className="text-[#9E9B93] mx-1">/</span>
              <span>{totalParts}</span>
            </div>
            <span className="text-xs text-[#6B6861]">
              {shadedParts === 0
                ? 'Zero parts shaded'
                : shadedParts === totalParts
                ? '1 whole (all parts)'
                : `${shadedParts} equal part${shadedParts > 1 ? 's' : ''}`}
            </span>
          </div>

          <div className="text-xs font-mono text-[#9E9B93]">
            {Math.round((shadedParts / totalParts) * 100)}% of whole
          </div>
        </div>
      )}
    </div>
  );
};
