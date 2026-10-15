import React from 'react';

interface TopicMiniVisualProps {
  topicId: string;
  className?: string;
}

export const TopicMiniVisual: React.FC<TopicMiniVisualProps> = ({ topicId, className = '' }) => {
  switch (topicId) {
    case 'fractions':
      // Golden Roti / Pizza with 1 slice separated
      return (
        <div className={`w-14 h-14 relative flex items-center justify-center shrink-0 ${className}`}>
          <svg viewBox="0 0 44 44" className="w-full h-full select-none">
            <circle cx="22" cy="22" r="18" fill="#F4EFE6" stroke="#D5D1C7" strokeWidth="2" />
            {/* 3 remaining slices */}
            <path d="M 22 22 L 22 4 A 18 18 0 0 1 40 22 Z" fill="#E8DDD0" />
            <path d="M 22 22 L 40 22 A 18 18 0 0 1 22 40 Z" fill="#DECBB9" />
            <path d="M 22 22 L 22 40 A 18 18 0 0 1 4 22 Z" fill="#E8DDD0" />
            {/* Highlighted 1/4 slice in Terracotta */}
            <path
              d="M 22 22 L 4 22 A 18 18 0 0 1 22 4 Z"
              fill="#D45B34"
              stroke="#FAF9F5"
              strokeWidth="1.5"
            />
            {/* Center dot */}
            <circle cx="22" cy="22" r="2.5" fill="#1C1917" />
          </svg>
          <span className="absolute bottom-0 right-0 bg-[#1C1917] text-white font-mono text-[9px] px-1 rounded font-bold">
            ¼
          </span>
        </div>
      );

    case 'decimals':
      // 10-block bar with ₹0.50 (half) filled
      return (
        <div className={`w-14 h-14 relative flex flex-col items-center justify-center shrink-0 p-1 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl ${className}`}>
          <div className="grid grid-cols-5 gap-0.5 w-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-3 rounded-xs ${i < 5 ? 'bg-[#D45B34]' : 'bg-[#E8E5DD]'}`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1C1917] mt-1">
            0.50 (50p)
          </span>
        </div>
      );

    case 'percentages':
      // Phone battery charge meter
      return (
        <div className={`w-14 h-14 relative flex flex-col items-center justify-center shrink-0 p-1.5 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl ${className}`}>
          <div className="w-9 h-5 border-2 border-[#1C1917] rounded-sm p-0.5 relative flex items-center">
            <div className="h-full bg-[#1E6B4F] rounded-xs" style={{ width: '75%' }} />
            <div className="absolute -right-1.5 top-1.5 w-1 h-2 bg-[#1C1917] rounded-r-xs" />
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1E6B4F] mt-1">
            75%
          </span>
        </div>
      );

    case 'numbers':
      // Lift shaft with 0 ground and -1, -2 basement
      return (
        <div className={`w-14 h-14 relative flex flex-col items-center justify-center shrink-0 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-1 font-mono text-[9px] ${className}`}>
          <div className="text-[#6B6861]">+1 Floor</div>
          <div className="w-full h-0.5 bg-[#1C1917] my-0.5 relative">
            <span className="absolute -top-2 right-0 text-[8px] text-[#9E9B93]">0</span>
          </div>
          <div className="text-[#D45B34] font-bold bg-[#FDF4F0] px-1 rounded">-2 Basement</div>
        </div>
      );

    case 'arithmetic':
      // 3 x 3 dot grid array
      return (
        <div className={`w-14 h-14 relative flex flex-col items-center justify-center shrink-0 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-2 ${className}`}>
          <div className="grid grid-cols-3 gap-1.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#D45B34]" />
            ))}
          </div>
          <span className="font-mono text-[9px] text-[#6B6861] mt-1 font-bold">
            3 × 3 = 9
          </span>
        </div>
      );

    case 'early-algebra':
      // Balance scale
      return (
        <div className={`w-14 h-14 relative flex items-center justify-center shrink-0 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-1 ${className}`}>
          <svg viewBox="0 0 40 40" className="w-full h-full select-none">
            {/* Base stand */}
            <path d="M 20 12 L 20 32 M 12 32 L 28 32" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
            {/* Beam */}
            <path d="M 6 15 L 34 15" stroke="#D45B34" strokeWidth="2" strokeLinecap="round" />
            {/* Left pan with 2 cubes */}
            <path d="M 8 15 L 12 25 L 4 25 Z" fill="#E8E5DD" stroke="#1C1917" strokeWidth="1" />
            <rect x="6" y="21" width="4" height="4" fill="#D45B34" />
            {/* Right pan with x box */}
            <path d="M 32 15 L 36 25 L 28 25 Z" fill="#E8E5DD" stroke="#1C1917" strokeWidth="1" />
            <rect x="30" y="21" width="4" height="4" fill="#1C1917" />
          </svg>
          <span className="absolute bottom-0 right-1 font-mono text-[8px] font-bold text-[#1C1917]">
            =
          </span>
        </div>
      );

    case 'ratios':
      // 2 cups milk : 1 cup water (Chai recipe)
      return (
        <div className={`w-14 h-14 relative flex items-center justify-center shrink-0 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-1 ${className}`}>
          <div className="flex items-end gap-1">
            <div className="w-3.5 h-7 border border-[#1C1917] rounded-b-sm bg-[#F5EBE1] flex flex-col justify-end">
              <div className="h-4 bg-[#C2976B] rounded-b-xs" />
            </div>
            <span className="font-mono text-xs text-[#9E9B93] font-bold">:</span>
            <div className="w-3.5 h-5 border border-[#1C1917] rounded-b-sm bg-[#FAF9F5] flex flex-col justify-end">
              <div className="h-2 bg-[#7EA4AB] rounded-b-xs" />
            </div>
          </div>
          <span className="absolute bottom-0.5 font-mono text-[8px] text-[#6B6861] font-bold">
            2 : 1
          </span>
        </div>
      );

    default:
      return null;
  }
};
