import React from 'react';
import { Gummy, type GummyColor } from './Gummy';

interface PickleCorpLogoProps {
  showMascot?: boolean;
  gummyColor?: GummyColor;
  className?: string;
  variant?: 'compact' | 'badge' | 'full';
}

export const PickleCorpLogo: React.FC<PickleCorpLogoProps> = ({
  showMascot = true,
  gummyColor = 'taupe',
  className = '',
  variant = 'compact',
}) => {
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-[#E8E5DD] shadow-2xs text-[11px] font-mono text-[#6B6861] ${className}`}
      >
        {showMascot && <Gummy size="xs" color={gummyColor} className="shrink-0 -my-0.5" />}
        <span className="font-bold text-[#1C1917]">Pickle Corp™</span>
        <span className="text-[#9E9B93]">•</span>
        <span className="text-[#9E9B93] hidden sm:inline">Favors over fiat</span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
        {showMascot && <Gummy size="md" color={gummyColor} />}
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-[#1C1917]">
              PICKLE CORP
            </span>
            <span className="text-[10px] font-mono font-bold bg-[#FAF9F5] border border-[#E8E5DD] px-1 rounded text-[#D45B34]">
              STUDIO
            </span>
          </div>
          <p className="text-xs text-[#6B6861] font-mono">
            Azan & Thanvi • Two teenage builders • Zero fiat
          </p>
        </div>
      </div>
    );
  }

  // Default: compact for nav headers
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs ${className}`}>
      {showMascot && <Gummy size="xs" color={gummyColor} className="shrink-0" />}
      <span className="font-bold font-mono tracking-tight text-[#1C1917]">
        PICKLE CORP
      </span>
      <span className="text-[9px] font-mono text-[#D45B34] border border-[#F3C3B2] bg-[#FDF4F0] px-1 rounded uppercase">
        Studio
      </span>
    </div>
  );
};
