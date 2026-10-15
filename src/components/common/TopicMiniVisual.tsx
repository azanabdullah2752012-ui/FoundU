import React from 'react';

interface TopicMiniVisualProps {
  topicId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TopicMiniVisual: React.FC<TopicMiniVisualProps> = ({
  topicId,
  className = '',
  size = 'md',
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'w-12 h-12'
      : size === 'lg'
      ? 'w-24 h-24'
      : 'w-16 h-16';

  switch (topicId) {
    case 'fractions':
      // Golden Roti / Disc with 1/4 slice highlighted
      return (
        <div className={`${sizeClasses} relative flex items-center justify-center shrink-0 select-none ${className}`}>
          <svg viewBox="0 0 60 60" className="w-full h-full drop-shadow-xs">
            <circle cx="30" cy="30" r="26" fill="#EDE7DD" stroke="#DFD7CB" strokeWidth="2" />
            {/* 3 remaining slices */}
            <path d="M 30 30 L 30 4 A 26 26 0 0 1 56 30 Z" fill="#E4DCD0" />
            <path d="M 30 30 L 56 30 A 26 26 0 0 1 30 56 Z" fill="#DBD3C5" />
            <path d="M 30 30 L 30 56 A 26 26 0 0 1 4 30 Z" fill="#E4DCD0" />
            {/* Highlighted 1/4 slice in Terracotta with separation */}
            <path
              d="M 30 30 L 4 30 A 26 26 0 0 1 30 4 Z"
              fill="#D45B34"
              stroke="#FAF9F5"
              strokeWidth="2"
            />
            {/* Center brass pivot */}
            <circle cx="30" cy="30" r="3.5" fill="#1C1917" stroke="#FAF9F5" strokeWidth="1" />
          </svg>
          <span className="absolute bottom-0 right-0 bg-[#1C1917] text-white font-mono text-[10px] px-1.5 py-0.2 rounded-md font-bold shadow-xs">
            ¼
          </span>
        </div>
      );

    case 'decimals':
      // 10-block base-10 unit bar with 0.50 filled
      return (
        <div className={`${sizeClasses} relative flex flex-col items-center justify-center shrink-0 p-1.5 select-none ${className}`}>
          <div className="w-full bg-[#EDE7DD] p-1 rounded-lg border border-[#DFD7CB]">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3.5 rounded-xs transition-colors ${
                    i < 5 ? 'bg-[#D45B34]' : 'bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1C1917] mt-1 bg-white px-1.5 py-0.2 rounded border border-[#E8E5DD] shadow-2xs">
            0.50
          </span>
        </div>
      );

    case 'percentages':
      // Phone battery charge meter (75%)
      return (
        <div className={`${sizeClasses} relative flex flex-col items-center justify-center shrink-0 p-1.5 select-none ${className}`}>
          <div className="w-12 h-6 border-2 border-[#1C1917] rounded-md p-0.5 relative flex items-center bg-[#EDE7DD]">
            <div className="h-full bg-[#1E6B4F] rounded-xs shadow-xs" style={{ width: '75%' }} />
            <div className="absolute -right-2 top-1.5 w-1.5 h-2.5 bg-[#1C1917] rounded-r-xs" />
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1E6B4F] mt-1 bg-white px-1.5 py-0.2 rounded border border-[#E8E5DD] shadow-2xs">
            75%
          </span>
        </div>
      );

    case 'numbers':
      // Elevator depth shaft (passing ground 0 to -2 basement)
      return (
        <div className={`${sizeClasses} relative flex flex-col items-center justify-center shrink-0 p-1 font-mono select-none ${className}`}>
          <div className="w-12 bg-[#EDE7DD] rounded-lg p-1 border border-[#DFD7CB] flex flex-col items-center text-[9px]">
            <span className="text-[#6B6861] font-bold text-[8px]">+1</span>
            <div className="w-full h-0.5 bg-[#1C1917] my-0.5 relative">
              <span className="absolute -top-1.5 right-0 text-[7px] text-[#1C1917] font-bold">0</span>
            </div>
            <span className="text-[#D45B34] font-bold text-[9px] bg-white px-1 rounded shadow-2xs">
              -2
            </span>
          </div>
        </div>
      );

    case 'arithmetic':
      // 3 x 3 dot array grid
      return (
        <div className={`${sizeClasses} relative flex flex-col items-center justify-center shrink-0 p-1.5 select-none ${className}`}>
          <div className="p-1.5 bg-[#EDE7DD] rounded-lg border border-[#DFD7CB]">
            <div className="grid grid-cols-3 gap-1.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#D45B34] shadow-2xs" />
              ))}
            </div>
          </div>
          <span className="font-mono text-[9px] text-[#1C1917] mt-1 font-bold">
            3 × 3 = 9
          </span>
        </div>
      );

    case 'early-algebra':
      // Precision balance scale
      return (
        <div className={`${sizeClasses} relative flex items-center justify-center shrink-0 p-1 select-none ${className}`}>
          <svg viewBox="0 0 50 50" className="w-full h-full drop-shadow-xs">
            {/* Stand */}
            <path d="M 25 15 L 25 42 M 14 42 L 36 42" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="25" cy="15" r="3" fill="#D45B34" />
            {/* Balance Beam */}
            <path d="M 8 18 L 42 18" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
            {/* Left Pan */}
            <path d="M 12 18 L 6 32 L 18 32 Z" fill="#E8E5DD" stroke="#1C1917" strokeWidth="1" />
            <rect x="9" y="27" width="5" height="5" fill="#D45B34" rx="1" />
            {/* Right Pan */}
            <path d="M 38 18 L 32 32 L 44 32 Z" fill="#E8E5DD" stroke="#1C1917" strokeWidth="1" />
            <rect x="35" y="27" width="5" height="5" fill="#1C1917" rx="1" />
          </svg>
          <span className="absolute bottom-0 right-1 font-mono text-[9px] font-bold text-[#1C1917] bg-white px-1 rounded shadow-2xs">
            =
          </span>
        </div>
      );

    case 'ratios':
      // Mixing proportions beakers (2 : 1)
      return (
        <div className={`${sizeClasses} relative flex items-center justify-center shrink-0 p-1 select-none ${className}`}>
          <div className="flex items-end gap-1.5 p-1 bg-[#EDE7DD] rounded-lg border border-[#DFD7CB]">
            {/* Beaker 1 */}
            <div className="w-4 h-8 border border-[#1C1917] rounded-b-sm bg-white flex flex-col justify-end overflow-hidden">
              <div className="h-5 bg-[#D45B34]" />
            </div>
            <span className="font-mono text-xs text-[#1C1917] font-bold pb-1">:</span>
            {/* Beaker 2 */}
            <div className="w-4 h-6 border border-[#1C1917] rounded-b-sm bg-white flex flex-col justify-end overflow-hidden">
              <div className="h-2.5 bg-[#1E6B4F]" />
            </div>
          </div>
          <span className="absolute -bottom-1 font-mono text-[9px] text-[#1C1917] font-bold bg-white px-1 rounded shadow-2xs">
            2:1
          </span>
        </div>
      );

    case 'conversions':
      // Metric unit ladder (1m = 100cm = 1000mm)
      return (
        <div className={`${sizeClasses} relative flex flex-col items-center justify-center shrink-0 p-1 select-none font-mono ${className}`}>
          <div className="w-full bg-[#EDE7DD] rounded-lg p-1.5 border border-[#DFD7CB] flex flex-col gap-0.5 text-[8px] font-bold">
            <div className="flex items-center justify-between text-[#1C1917]">
              <span>1 m</span>
              <span className="text-[#9E9B93]">×100</span>
            </div>
            <div className="w-full h-0.5 bg-[#D45B34]" />
            <div className="flex items-center justify-between text-[#D45B34]">
              <span>100 cm</span>
              <span className="text-[7px]">1000 mm</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
