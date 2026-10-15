import React from 'react';
import pickleCorpLogoImg from '../../assets/pickle-corp-logo.png';
import { Gummy, type GummyColor } from './Gummy';

export interface PickleCorpLogoProps {
  showMascot?: boolean;
  gummyColor?: GummyColor;
  className?: string;
  variant?: 'torch' | 'badge' | 'full' | 'image' | 'compact';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const PickleCorpTorchIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={(size * 120) / 100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Pickle Corp Blue Flame Torch"
    >
      {/* Outer Electric Blue Flame */}
      <path
        d="M 50,2 
           C 54,16 68,26 68,44 
           C 68,54 62,60 57,62 
           C 65,55 64,42 59,34 
           C 56,46 47,52 45,40 
           C 40,48 35,54 31,48 
           C 27,42 30,26 50,2 
           Z"
        fill="#1D7AF2"
      />

      {/* Inner White Core Flame */}
      <path
        d="M 50,22 
           C 54,32 60,38 56,48 
           C 53,44 52,38 49,34 
           C 46,40 43,44 44,48 
           C 41,42 44,32 50,22 
           Z"
        fill="#FFFFFF"
      />

      {/* Torch Cup / Rim */}
      <path
        d="M 23,60 
           H 77 
           C 79,60 80,61.5 79.5,63.5 
           L 76.5,72 
           C 76,74 74,75.5 72,75.5 
           H 28 
           C 26,75.5 24,74 23.5,72 
           L 20.5,63.5 
           C 20,61.5 21,60 23,60 
           Z"
        fill="#1C1917"
      />

      {/* Rim Stylized Cutouts/Notches */}
      <line x1="33" y1="67.5" x2="44" y2="67.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="51" cy="67.5" r="1.5" fill="#FFFFFF" />

      {/* Tapered Torch Handle */}
      <path
        d="M 32,76.5 
           H 68 
           L 58,112 
           C 57.5,114.5 55.5,116 53,116 
           H 47 
           C 44.5,116 42.5,114.5 42,112 
           L 32,76.5 
           Z"
        fill="#1C1917"
      />

      {/* Vertical Highlight on Handle */}
      <line x1="43.5" y1="83" x2="46" y2="106" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export const PickleCorpLogo: React.FC<PickleCorpLogoProps> = ({
  showMascot = false,
  gummyColor = 'green',
  className = '',
  variant = 'compact',
  size = 'sm',
}) => {
  if (variant === 'image') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <img
          src={pickleCorpLogoImg}
          alt="Pickle Corp™ Official Logo"
          className="h-10 w-auto object-contain rounded-md"
        />
        {showMascot && <Gummy size={size} color={gummyColor} className="shrink-0" />}
      </div>
    );
  }

  if (variant === 'torch') {
    return (
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <PickleCorpTorchIcon size={24} />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E5DD] shadow-2xs text-xs font-mono text-[#6B6861] ${className}`}
      >
        <PickleCorpTorchIcon size={18} />
        <span className="font-extrabold tracking-tight text-[#1C1917]">PICKLE CORP™</span>
        <span className="text-[#9E9B93]">•</span>
        <span className="text-[#9E9B93] hidden sm:inline">Favors over fiat</span>
        {showMascot && (
          <>
            <span className="text-[#9E9B93] hidden sm:inline">•</span>
            <Gummy size="xs" color={gummyColor} className="shrink-0 -my-0.5" />
          </>
        )}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-3.5 bg-white border border-[#E8E5DD] p-3.5 rounded-2xl shadow-2xs ${className}`}>
        <img
          src={pickleCorpLogoImg}
          alt="Pickle Corp Logo"
          className="h-14 sm:h-16 w-auto object-contain"
        />
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-black text-base tracking-tight text-[#1C1917]">
              PICKLE CORP™
            </span>
            <span className="text-[9px] font-mono font-bold bg-[#1D7AF2]/10 border border-[#1D7AF2]/30 text-[#1D7AF2] px-1.5 py-0.2 rounded uppercase">
              Official
            </span>
          </div>
          <p className="text-xs text-[#6B6861] font-mono mt-0.5">
            Azan &amp; Thanvi • Independent Studio • Two 14yo builders
          </p>
        </div>
        {showMascot && <Gummy size="md" color={gummyColor} className="shrink-0" />}
      </div>
    );
  }

  // Default: compact lockup for navbar
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <PickleCorpTorchIcon size={22} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-black font-mono text-[11px] tracking-tight text-[#1C1917]">
            PICKLE CORP™
          </span>
          <span className="text-[8px] font-mono font-bold bg-[#1D7AF2]/10 text-[#1D7AF2] border border-[#1D7AF2]/20 px-1 rounded uppercase">
            Studio
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#9E9B93] -mt-0.5">
          Favors over fiat
        </span>
      </div>
      {showMascot && <Gummy size="xs" color={gummyColor} className="shrink-0 ml-0.5" />}
    </div>
  );
};
