import React, { useState } from 'react';
import { sound } from '../../utils/sound';
import { Gummy } from '../brand/Gummy';
import { type Language } from '../../utils/language';
import { Sparkles } from 'lucide-react';

interface HeroVisualPlaygroundProps {
  language: Language;
  onStartLesson: (lessonId: string) => void;
}

export const HeroVisualPlayground: React.FC<HeroVisualPlaygroundProps> = ({
  language,
  onStartLesson,
}) => {
  const [totalSlices, setTotalSlices] = useState<number>(4);
  const [selectedCount, setSelectedCount] = useState<number>(1);

  const isHindi = language === 'hi';

  const handleSliceClick = (index: number) => {
    sound.playTap();
    if (index < selectedCount) {
      setSelectedCount(Math.max(1, index));
    } else {
      setSelectedCount(index + 1);
    }
  };

  const handleTotalChange = (newTotal: number) => {
    sound.playSuccess();
    setTotalSlices(newTotal);
    if (selectedCount > newTotal) {
      setSelectedCount(1);
    }
  };

  const fractionPercent = Math.round((selectedCount / totalSlices) * 100);

  // Generate SVG Pie Wedges
  const renderPieSlices = () => {
    const center = 100;
    const radius = 82;
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
          className="cursor-pointer transition-all duration-200 hover:opacity-90"
          fill={isSelected ? '#D45B34' : '#F5EBE1'}
          stroke="#FAF9F5"
          strokeWidth="3.5"
          style={{
            transformOrigin: `${center}px ${center}px`,
            filter: isSelected ? 'drop-shadow(0 2px 4px rgba(212, 91, 52, 0.25))' : 'none',
          }}
        />
      );
    }
    return slices;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border-2 border-[#E8E5DD] rounded-3xl p-5 sm:p-7 shadow-sm text-left my-6 relative overflow-hidden">
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF4F0] border border-[#F3C3B2] text-xs font-mono font-bold text-[#D45B34]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isHindi ? 'रोटी के टुकड़े • चला कर देखें' : 'TOUCH & SLICE TO PLAY'}</span>
        </div>

        <span className="text-xs font-mono text-[#9E9B93]">
          {isHindi ? 'टुकड़ों पर टैप करें' : 'Tap any slice'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Visual Interactive Disc / Plate */}
        <div className="sm:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 sm:w-52 sm:h-52 bg-[#F4F2EB] rounded-full p-2.5 border-4 border-[#E8E5DD] shadow-inner flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full select-none">
              {renderPieSlices()}
            </svg>

            {/* Center Pin */}
            <div className="absolute w-4 h-4 bg-[#1C1917] rounded-full border-2 border-white pointer-events-none shadow-xs" />
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs font-mono text-[#6B6861]">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D45B34]" />
            <span>
              {isHindi
                ? `${selectedCount} टुकड़ा चुना`
                : `${selectedCount} of ${totalSlices} slices`}
            </span>
          </div>
        </div>

        {/* Clear Math Intuition Display */}
        <div className="sm:col-span-6 space-y-4">
          {/* Fraction Breakdown Box */}
          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DD]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E9B93] block">
                  {isHindi ? 'भिन्न (Fraction)' : 'Fraction'}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex flex-col items-center justify-center font-bold text-2xl text-[#1C1917]">
                    <span className="text-[#D45B34]">{selectedCount}</span>
                    <span className="w-8 h-0.5 bg-[#1C1917] my-0.5" />
                    <span>{totalSlices}</span>
                  </div>
                  <div className="text-xs text-[#6B6861] leading-tight">
                    <p className="font-semibold text-[#1C1917]">
                      {isHindi ? `${totalSlices} में से ${selectedCount} हिस्से` : `${selectedCount} out of ${totalSlices} pieces`}
                    </p>
                    <p className="font-mono text-[11px] text-[#9E9B93] mt-0.5">
                      = {fractionPercent}% {isHindi ? 'पूरी रोटी का' : 'of the whole'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gummy Reaction */}
              <div className="shrink-0 flex flex-col items-center">
                <Gummy
                  size="sm"
                  color="terracotta"
                  speechText={
                    isHindi
                      ? `${selectedCount}/${totalSlices} रोटी!`
                      : `${selectedCount}/${totalSlices} slice!`
                  }
                />
              </div>
            </div>
          </div>

          {/* Slices Preset Selector (Big Tap Buttons) */}
          <div>
            <label className="text-[11px] font-mono uppercase text-[#9E9B93] block mb-2 font-bold">
              {isHindi ? 'कितने बराबर टुकड़े करने हैं?' : 'How many equal pieces?'}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[2, 3, 4, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleTotalChange(num)}
                  className={`py-2 px-1 text-center rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    totalSlices === num
                      ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-xs scale-102'
                      : 'bg-white text-[#1C1917] border-[#E8E5DD] hover:bg-[#FAF9F5]'
                  }`}
                >
                  {isHindi ? `${num} भाग` : `${num} pcs`}
                </button>
              ))}
            </div>
          </div>

          {/* Jump to Full Lesson Button */}
          <button
            type="button"
            onClick={() => onStartLesson('fractions-what-is-a-fraction')}
            className="w-full py-2.5 px-4 rounded-xl bg-[#D45B34] hover:bg-[#BC4B26] text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>{isHindi ? 'भिन्न का पूरा पाठ शुरू करें ▶' : 'Learn All About Fractions ▶'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
