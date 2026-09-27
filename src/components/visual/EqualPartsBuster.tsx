import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const EqualPartsBuster: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'unequal' | 'equal'>('unequal');

  return (
    <div className="w-full bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs select-none">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center text-[#D45B34]">
          <ShieldAlert className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base text-[#1C1917]">
            The Golden Rule: The “Equal Parts” Law
          </h3>
          <p className="text-xs text-[#6B6861]">
            A fraction only works if every single piece is identical in size.
          </p>
        </div>
      </div>

      {/* Switcher pills */}
      <div className="flex gap-2 my-4">
        <button
          type="button"
          onClick={() => setSelectedExample('unequal')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
            selectedExample === 'unequal'
              ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E] shadow-2xs'
              : 'bg-[#FAF9F5] border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Case A: Unequal Slices (NOT a fraction)</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedExample('equal')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
            selectedExample === 'equal'
              ? 'bg-[#F0F9F5] border-[#B7E4D3] text-[#1E6B4F] shadow-2xs'
              : 'bg-[#FAF9F5] border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Case B: Equal Slices (A true fraction)</span>
        </button>
      </div>

      {/* Visual demonstration */}
      {selectedExample === 'unequal' ? (
        <div className="bg-[#FFFBEB]/60 border border-[#FDE68A] rounded-xl p-4 sm:p-5 animate-in fade-in duration-200">
          <div className="text-xs font-mono font-bold text-[#92400E] mb-2 uppercase">
            3 Pieces — But completely unequal:
          </div>

          {/* Unequal 3-piece bar */}
          <div className="h-12 w-full flex rounded-lg border border-[#D5D1C7] bg-[#F4F2EB] p-1 gap-1 mb-3">
            <div className="w-[15%] h-full bg-[#D45B34] text-white rounded flex items-center justify-center font-mono text-[10px] font-semibold">
              Tiny
            </div>
            <div className="w-[25%] h-full bg-white text-[#9E9B93] rounded flex items-center justify-center font-mono text-[10px]">
              Medium
            </div>
            <div className="w-[60%] h-full bg-white text-[#9E9B93] rounded flex items-center justify-center font-mono text-xs">
              Huge piece (60%)
            </div>
          </div>

          <div className="text-xs text-[#1C1917] leading-relaxed space-y-1">
            <p>
              <strong className="text-[#92400E]">Can we call the shaded piece 1/3?</strong>{' '}
              <strong>No!</strong> Even though there are 3 physical pieces, the denominator “3” means <em>three equal parts</em>.
            </p>
            <p className="text-[#6B6861]">
              If you shared a pizza like this with friends, the person who got the tiny piece would rightfully complain!
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#F0F9F5]/70 border border-[#B7E4D3] rounded-xl p-4 sm:p-5 animate-in fade-in duration-200">
          <div className="text-xs font-mono font-bold text-[#1E6B4F] mb-2 uppercase">
            3 Pieces — Exactly equal in size:
          </div>

          {/* Equal 3-piece bar */}
          <div className="h-12 w-full flex rounded-lg border border-[#B7E4D3] bg-[#F4F2EB] p-1 gap-1 mb-3">
            <div className="w-1/3 h-full bg-[#D45B34] text-white rounded flex items-center justify-center font-mono text-xs font-semibold shadow-xs">
              1/3
            </div>
            <div className="w-1/3 h-full bg-white text-[#9E9B93] rounded flex items-center justify-center font-mono text-xs">
              1/3
            </div>
            <div className="w-1/3 h-full bg-white text-[#9E9B93] rounded flex items-center justify-center font-mono text-xs">
              1/3
            </div>
          </div>

          <div className="text-xs text-[#1C1917] leading-relaxed space-y-1">
            <p>
              <strong className="text-[#1E6B4F]">Is this 1/3?</strong>{' '}
              <strong>Yes!</strong> Each piece takes up exactly 33.3% of the whole shape.
            </p>
            <p className="text-[#6B6861]">
              The denominator counts <em>the number of equal divisions</em>. This equality is the core rule that makes fraction arithmetic reliable.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
