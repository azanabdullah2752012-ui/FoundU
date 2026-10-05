import React, { useState } from 'react';
import { Minus, RotateCcw, Check, Sparkles } from 'lucide-react';

interface BalanceScaleProps {
  initialX?: number; // Secret value of x, e.g. 4
  initialLeftConstant?: number; // e.g. 3 (so left is x + 3 = 7)
  initialRightConstant?: number; // e.g. 7
  interactive?: boolean;
  label?: string;
}

export const BalanceScale: React.FC<BalanceScaleProps> = ({
  initialX = 4,
  initialLeftConstant = 3,
  initialRightConstant = 7,
  interactive = true,
  label,
}) => {
  // Left side has 1 unknown box 'x' and leftConstant weights
  // Right side has rightConstant weights
  const [leftWeights, setLeftWeights] = useState<number>(initialLeftConstant);
  const [rightWeights, setRightWeights] = useState<number>(initialRightConstant);
  const [hasBox, setHasBox] = useState<boolean>(true);

  // Total weight calculation
  const boxWeight = initialX;
  const leftTotal = (hasBox ? boxWeight : 0) + leftWeights;
  const rightTotal = rightWeights;

  const isBalanced = leftTotal === rightTotal;
  const diff = leftTotal - rightTotal;
  // Tilt angle clamped between -15 and 15 degrees
  const tiltAngle = Math.max(-12, Math.min(12, diff * 3));

  const handleRemoveFromBoth = (amount: number) => {
    if (leftWeights >= amount && rightWeights >= amount) {
      setLeftWeights((prev) => prev - amount);
      setRightWeights((prev) => prev - amount);
    }
  };

  const handleReset = () => {
    setLeftWeights(initialLeftConstant);
    setRightWeights(initialRightConstant);
    setHasBox(true);
  };

  const solved = hasBox && leftWeights === 0 && isBalanced;

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-black text-[#1C1917]">
              {hasBox ? 'x' : '0'} {leftWeights > 0 ? `+ ${leftWeights}` : ''} = {rightWeights}
            </span>
            {isBalanced ? (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#2E7D32] bg-[#E8F5E9] border border-[#C8E6C9] px-2.5 py-1 rounded-full">
                <Check className="w-3.5 h-3.5" /> Balanced (=)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#C62828] bg-[#FFEBEE] border border-[#FFCDD2] px-2.5 py-1 rounded-full">
                Unbalanced (≠)
              </span>
            )}
          </div>
        </div>

        {solved && (
          <div className="inline-flex items-center gap-1.5 bg-[#FAF9F5] border-2 border-[#D45B34] text-[#D45B34] px-3 py-1.5 rounded-xl font-mono font-bold text-sm shadow-xs animate-in zoom-in-95">
            <Sparkles className="w-4 h-4" />
            <span>Found it: x = {rightWeights}!</span>
          </div>
        )}
      </div>

      {/* The Physical Scale Graphic */}
      <div className="relative py-6 flex flex-col items-center justify-center">
        {/* Tilting Beam */}
        <div
          className="w-full max-w-md h-3 bg-[#3F3C35] rounded-full transition-transform duration-300 ease-out origin-center relative flex justify-between items-center"
          style={{ transform: `rotate(${tiltAngle}deg)` }}
        >
          {/* Central Pivot Fulcrum indicator */}
          <div className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-6 bg-[#D45B34] rounded-full shadow-xs" />

          {/* Left String & Pan */}
          <div
            className="absolute -left-2 top-3 flex flex-col items-center origin-top transition-transform duration-300"
            style={{ transform: `rotate(${-tiltAngle}deg)` }}
          >
            <div className="w-0.5 h-12 bg-[#9E9B93]" />
            <div className="w-32 sm:w-36 min-h-16 bg-[#F4F2EB] border-2 border-[#3F3C35] rounded-b-2xl p-2 flex flex-wrap items-center justify-center gap-1.5 shadow-sm">
              {hasBox && (
                <div className="w-9 h-9 bg-[#D45B34] text-white font-mono font-black rounded-lg flex items-center justify-center text-sm shadow-xs border border-[#BC4B26]">
                  x
                </div>
              )}
              {Array.from({ length: leftWeights }, (_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full bg-[#1C1917] text-white font-mono text-[10px] flex items-center justify-center shadow-xs"
                >
                  1
                </div>
              ))}
            </div>
            <div className="text-[11px] font-mono font-bold text-[#6B6861] mt-1">
              Left: {hasBox ? 'x' : '0'}{leftWeights > 0 ? ` + ${leftWeights}` : ''}
            </div>
          </div>

          {/* Right String & Pan */}
          <div
            className="absolute -right-2 top-3 flex flex-col items-center origin-top transition-transform duration-300"
            style={{ transform: `rotate(${-tiltAngle}deg)` }}
          >
            <div className="w-0.5 h-12 bg-[#9E9B93]" />
            <div className="w-32 sm:w-36 min-h-16 bg-[#F4F2EB] border-2 border-[#3F3C35] rounded-b-2xl p-2 flex flex-wrap items-center justify-center gap-1.5 shadow-sm">
              {Array.from({ length: rightWeights }, (_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full bg-[#1C1917] text-white font-mono text-[10px] flex items-center justify-center shadow-xs"
                >
                  1
                </div>
              ))}
            </div>
            <div className="text-[11px] font-mono font-bold text-[#6B6861] mt-1">
              Right: {rightWeights}
            </div>
          </div>
        </div>

        {/* Center Triangular Fulcrum Stand */}
        <div className="w-0 h-0 border-x-14 border-x-transparent border-b-28 border-b-[#9E9B93] mt-0.5 z-0" />
        <div className="w-24 h-2 bg-[#6B6861] rounded-full -mt-0.5" />
      </div>

      {/* Interactive Controls: Physical Operations */}
      {interactive && (
        <div className="mt-8 pt-4 border-t border-[#E8E5DD] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-[#1C1917]">
              The Golden Rule of Equations: Keep It Balanced
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#6B6861] hover:text-[#1C1917] flex items-center gap-1 font-medium transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Scale</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              disabled={leftWeights < 1 || rightWeights < 1}
              onClick={() => handleRemoveFromBoth(1)}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] text-xs font-mono font-semibold text-[#1C1917] hover:bg-[#F4F2EB] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Minus className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Remove 1 marble from BOTH sides</span>
            </button>

            <button
              type="button"
              disabled={leftWeights < 3 || rightWeights < 3}
              onClick={() => handleRemoveFromBoth(3)}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] text-xs font-mono font-semibold text-[#1C1917] hover:bg-[#F4F2EB] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Minus className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Remove 3 marbles from BOTH sides</span>
            </button>
          </div>

          <p className="text-xs text-[#6B6861] pt-1">
            💡 Whatever you remove or add to the <strong>left</strong>, you must do to the <strong>right</strong>. Once the unknown box <span className="font-mono font-bold text-[#D45B34]">x</span> sits alone, whatever remains on the other side is its exact weight!
          </p>
        </div>
      )}
    </div>
  );
};
