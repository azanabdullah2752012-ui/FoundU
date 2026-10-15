import React, { useState } from 'react';
import { sound } from '../../utils/sound';
import { Gummy } from '../brand/Gummy';
import { Sparkles, RotateCcw } from 'lucide-react';

export const HeroVisualPlayground: React.FC = () => {
  const [totalSlices, setTotalSlices] = useState<number>(4);
  const [selectedCount, setSelectedCount] = useState<number>(3);

  const handleSliceClick = (index: number) => {
    sound.playTick();
    if (index + 1 === selectedCount) {
      setSelectedCount(Math.max(0, index));
    } else {
      setSelectedCount(index + 1);
    }
  };

  const handleTotalChange = (newTotal: number) => {
    sound.playSnap();
    setTotalSlices(newTotal);
    if (selectedCount > newTotal) {
      setSelectedCount(Math.min(selectedCount, newTotal));
    }
  };

  const handleReset = () => {
    sound.playTap();
    setSelectedCount(1);
  };

  const fractionPercent = Math.round((selectedCount / totalSlices) * 100);
  const decimalValue = (selectedCount / totalSlices).toFixed(2);

  // Dynamic Gummy speech prompt
  const getGummySpeech = () => {
    if (selectedCount === 0) return 'Tap a slice to begin!';
    if (selectedCount === totalSlices) return 'The full whole disc (100%)!';
    if (fractionPercent === 50) return 'Exactly half! 50%!';
    if (fractionPercent === 25) return 'One quarter! 25%!';
    if (fractionPercent === 75) return 'Three quarters! 75%!';
    return `${selectedCount} of ${totalSlices} pieces (${fractionPercent}%)!`;
  };

  // Generate SVG Pie Wedges with precision geometry and tactile styling
  const renderPieSlices = () => {
    const center = 100;
    const radius = 80;
    const slices = [];

    for (let i = 0; i < totalSlices; i++) {
      const startAngle = (i * 2 * Math.PI) / totalSlices - Math.PI / 2;
      const endAngle = ((i + 1) * 2 * Math.PI) / totalSlices - Math.PI / 2;

      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArcFlag = 0;
      const pathData =
        totalSlices === 1
          ? `M ${center},${center - radius} A ${radius},${radius} 0 1,0 ${center},${center + radius} A ${radius},${radius} 0 1,0 ${center},${center - radius} Z`
          : `M ${center},${center} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

      const isSelected = i < selectedCount;

      slices.push(
        <path
          key={i}
          d={pathData}
          onClick={() => handleSliceClick(i)}
          className="cursor-pointer transition-colors duration-150 outline-none"
          fill={isSelected ? '#D45B34' : '#F7F4EE'}
          stroke="#FAF9F5"
          strokeWidth="3"
          strokeLinejoin="round"
          role="button"
          tabIndex={0}
          aria-label={`Slice ${i + 1} of ${totalSlices}, ${isSelected ? 'selected' : 'unselected'}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSliceClick(i);
            }
          }}
          style={{
            transformOrigin: `${center}px ${center}px`,
            filter: isSelected ? 'drop-shadow(0 2px 6px rgba(212, 91, 52, 0.3))' : 'none',
          }}
        />
      );
    }
    return slices;
  };

  return (
    <div className="workbench-panel p-5 sm:p-7 relative select-none">
      {/* Workbench Precision Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E8E5DD]/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1E6B4F] animate-pulse" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">
            Tactile Fraction Disc
          </span>
          <span className="text-[#9E9B93] text-xs">•</span>
          <span className="text-[11px] font-mono text-[#6B6861] hidden sm:inline">
            Interactive Manipulative
          </span>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-[11px] font-mono text-[#6B6861] hover:text-[#1C1917] flex items-center gap-1 transition-colors px-2 py-0.5 rounded hover:bg-[#F4F2EB] cursor-pointer"
          title="Reset to 1 slice"
        >
          <RotateCcw className="w-3 h-3 text-[#D45B34]" />
          <span>Reset</span>
        </button>
      </div>

      {/* Main Workbench Layout: Disc + Triple Lens */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Interactive Disc & Rotary Slices Selector */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-[#EDE8DE] p-3 border-2 border-[#DFD9CD] shadow-inner flex items-center justify-center">
            {/* Degree Marks Background */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer calibration ring */}
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="#D5D0C3"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
              {renderPieSlices()}
              {/* Center brass pivot */}
              <circle cx="100" cy="100" r="8" fill="#1C1917" stroke="#FAF9F5" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Slices Presets: Physical Tactile Buttons */}
          <div className="mt-4 w-full">
            <div className="flex items-center justify-between mb-1.5 px-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E9B93] font-bold">
                Cut Equal Pieces:
              </span>
              <span className="text-[10px] font-mono text-[#D45B34] font-semibold">
                {totalSlices} equal wedges
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 bg-[#EDE8DE]/60 p-1 rounded-xl border border-[#DFD9CD]">
              {[2, 3, 4, 6, 8].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleTotalChange(num)}
                  className={`py-1.5 text-center rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                    totalSlices === num
                      ? 'bg-[#1C1917] text-white shadow-xs'
                      : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-white/60'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Triple Lens Equivalence Meter */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-4">
          <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E9B93] font-bold">
                Triple Equivalence
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D45B34]">
                <Sparkles className="w-3 h-3" />
                Same Concept
              </span>
            </div>

            {/* 3 Unified Baseline Lenses */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {/* Fraction */}
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E5DD] text-center flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#9E9B93] uppercase font-bold block mb-1">
                  Fraction
                </span>
                <div className="flex flex-col items-center justify-center my-auto">
                  <span className="font-mono font-bold text-xl text-[#D45B34] leading-none">
                    {selectedCount}
                  </span>
                  <span className="w-5 h-0.5 bg-[#1C1917] my-1" />
                  <span className="font-mono font-bold text-xl text-[#1C1917] leading-none">
                    {totalSlices}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6B6861] mt-1 block">
                  pieces
                </span>
              </div>

              {/* Decimal */}
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E5DD] text-center flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#9E9B93] uppercase font-bold block mb-1">
                  Decimal
                </span>
                <div className="my-auto">
                  <span className="font-mono font-bold text-xl text-[#1C1917]">
                    {decimalValue}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6B6861] mt-1 block">
                  base 1.0
                </span>
              </div>

              {/* Percentage */}
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E5DD] text-center flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#9E9B93] uppercase font-bold block mb-1">
                  Percent
                </span>
                <div className="my-auto">
                  <span className="font-mono font-bold text-xl text-[#1E6B4F]">
                    {fractionPercent}%
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6B6861] mt-1 block">
                  per 100
                </span>
              </div>
            </div>

            {/* Visual Bar Indicator */}
            <div className="pt-1">
              <div className="w-full h-2 rounded-full bg-[#E8E5DD] overflow-hidden">
                <div
                  className="h-full bg-[#D45B34] transition-all duration-300 rounded-full"
                  style={{ width: `${fractionPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Gummy Reaction Box */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFFDF9] border border-[#F3C3B2]/60">
            <Gummy
              size="sm"
              color="terracotta"
              className="shrink-0"
            />
            <div className="text-xs">
              <span className="font-bold text-[#1C1917] block">Gummy Guide</span>
              <p className="text-[#6B6861] leading-snug">
                {getGummySpeech()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
