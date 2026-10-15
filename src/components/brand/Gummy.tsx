import React, { useState, useEffect, useRef, useCallback, useId } from 'react';
import { sound } from '../../utils/sound';

export type GummyColor = 'taupe' | 'green' | 'caramel' | 'blue' | 'rose' | 'amber';

export interface GummyProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  color?: GummyColor;
  interactive?: boolean;
  celebrate?: boolean;
  speechText?: string;
  className?: string;
  onClick?: () => void;
}

const GUMMY_THEMES: Record<GummyColor, { fill: string; fillLight: string; stroke: string; blush: string; eye: string }> = {
  taupe: {
    fill: '#ab947e',
    fillLight: '#b8a18c',
    stroke: '#593d3b',
    blush: '#c0a692',
    eye: '#593d3b',
  },
  green: {
    fill: '#84ab8c',
    fillLight: '#97bda0',
    stroke: '#3b5942',
    blush: '#a2c7a9',
    eye: '#3b5942',
  },
  caramel: {
    fill: '#c2976b',
    fillLight: '#d1ab82',
    stroke: '#5c4128',
    blush: '#deb68f',
    eye: '#5c4128',
  },
  blue: {
    fill: '#7ea4ab',
    fillLight: '#94b6bd',
    stroke: '#3b4e59',
    blush: '#a6c2c7',
    eye: '#3b4e59',
  },
  rose: {
    fill: '#ab7e8a',
    fillLight: '#bd949e',
    stroke: '#593b44',
    blush: '#c7a6ae',
    eye: '#593b44',
  },
  amber: {
    fill: '#c9a35d',
    fillLight: '#d9b673',
    stroke: '#574221',
    blush: '#e0c28d',
    eye: '#574221',
  },
};

const SIZE_MAP = {
  xs: { width: 38, height: 18 },
  sm: { width: 52, height: 25 },
  md: { width: 72, height: 34 },
  lg: { width: 96, height: 45 },
  hero: { width: 124, height: 58 },
};

export const Gummy: React.FC<GummyProps> = ({
  size = 'md',
  color = 'taupe',
  interactive = true,
  celebrate = false,
  speechText,
  className = '',
  onClick,
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHopping, setIsHopping] = useState(false);
  const [isBackflipping, setIsBackflipping] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [clickStreak, setClickStreak] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastClickRef = useRef<number>(0);
  const rawId = useId();
  const gradientId = `gummy-${rawId.replace(/:/g, '-')}`;

  const theme = GUMMY_THEMES[color] || GUMMY_THEMES.taupe;
  const dimensions = SIZE_MAP[size] || SIZE_MAP.md;

  const triggerHop = useCallback(() => {
    if (isHopping || isBackflipping) return;
    setIsHopping(true);
    sound.playTap();
    setTimeout(() => setIsHopping(false), 460);
  }, [isHopping, isBackflipping]);

  const triggerBackflip = useCallback(() => {
    if (isBackflipping) return;
    setIsBackflipping(true);
    sound.playSuccess();
    setTimeout(() => {
      setIsBackflipping(false);
      setClickStreak(0);
    }, 950);
  }, [isBackflipping]);

  // Natural spontaneous blinking
  useEffect(() => {
    let blinkTimer: ReturnType<typeof setTimeout>;
    const scheduleBlink = () => {
      const delay = 2200 + Math.random() * 3500;
      blinkTimer = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 160);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(blinkTimer);
  }, []);

  // Eye tracking cursor
  const handlePointerMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const gummyCenterX = rect.left + rect.width / 2;
    const gummyCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - gummyCenterX;
    const dy = e.clientY - gummyCenterY;
    const dist = Math.hypot(dx, dy);

    if (dist > 0) {
      const maxOffset = 2.2;
      const factor = Math.min(dist / 300, 1);
      setEyeOffset({
        x: (dx / dist) * maxOffset * factor,
        y: (dy / dist) * maxOffset * factor,
      });
    }
  }, []);

  useEffect(() => {
    if (!interactive) return;
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, [interactive, handlePointerMove]);

  // Celebrate trigger (e.g. math challenge solved)
  useEffect(() => {
    if (celebrate && !isBackflipping) {
      const timer = setTimeout(() => {
        triggerBackflip();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [celebrate, isBackflipping, triggerBackflip]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!interactive) return;

    const now = performance.now();
    if (now - lastClickRef.current < 450) {
      const next = clickStreak + 1;
      setClickStreak(next);
      if (next >= 2) {
        triggerBackflip();
      } else {
        triggerHop();
      }
    } else {
      setClickStreak(1);
      triggerHop();
    }
    lastClickRef.current = now;
    onClick?.();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => {
        if (interactive && !isHopping && !isBackflipping) {
          triggerHop();
        }
      }}
      className={`inline-block relative select-none cursor-pointer transition-transform ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      title="Gummy — The Pickle Corp Mascot (Click to poke, double click to backflip!)"
      role="img"
      aria-label="Gummy Mascot"
    >
      {/* Optional Speech Bubble */}
      {speechText && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-[#1C1917] border border-[#593d3b]/20 px-2 py-0.5 rounded-full text-[10px] font-mono whitespace-nowrap shadow-xs pointer-events-none z-20 animate-in fade-in duration-150">
          {speechText}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border-r border-b border-[#593d3b]/20 rotate-45" />
        </div>
      )}

      <svg
        viewBox="0 0 110 52"
        width="100%"
        height="100%"
        aria-hidden="true"
        style={{
          overflow: 'visible',
          display: 'block',
        }}
      >
        <defs>
          <radialGradient id={`${gradientId}-sh`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#593d3b" stopOpacity="0.32" />
            <stop offset="65%" stopColor="#593d3b" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#593d3b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${gradientId}-body`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.fillLight} />
            <stop offset="100%" stopColor={theme.fill} />
          </linearGradient>
        </defs>

        {/* Soft Ground Contact Shadow */}
        <ellipse
          className="transition-transform duration-200"
          cx="55"
          cy="44.5"
          rx={isHopping || isBackflipping ? 30 : 44}
          ry={isHopping || isBackflipping ? 2.5 : 3.8}
          fill={`url(#${gradientId}-sh)`}
          opacity={isHopping || isBackflipping ? 0.4 : 1}
        />

        {/* Gummy Body Motion Container */}
        <g
          style={{
            transformOrigin: '55px 44px',
            transform: isBackflipping
              ? 'translateY(-24px) rotate(-360deg)'
              : isHopping
              ? 'translateY(-14px) scale(0.95, 1.08)'
              : 'translateY(0px) scale(1, 1)',
            transition: isBackflipping
              ? 'transform 950ms cubic-bezier(0.34, 1.56, 0.64, 1)'
              : isHopping
              ? 'transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1)'
              : 'transform 300ms ease-out',
          }}
        >
          {/* Wide Low-Profile Mound Path */}
          <path
            d="M 15,44 C 9,44 6.5,39.5 9,34 C 13.5,23.5 26,12 44,8.5 C 50,7.2 60,7.2 66,8.5 C 84,12 96.5,23.5 101,34 C 103.5,39.5 101,44 95,44 Z"
            fill={`url(#${gradientId}-body)`}
            stroke={theme.stroke}
            strokeWidth="3.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Cute horizontal oval blush cheeks */}
          <ellipse cx="36" cy="30" rx="4.6" ry="2.3" fill={theme.blush} opacity="0.9" />
          <ellipse cx="74" cy="30" rx="4.6" ry="2.3" fill={theme.blush} opacity="0.9" />

          {/* Eyes Group with cursor tracking */}
          {!isBlinking ? (
            <g
              style={{
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                transition: 'transform 80ms ease-out',
              }}
            >
              {/* Left Eye */}
              <circle cx="46" cy="26" r="3.3" fill={theme.eye} />
              <circle cx="44.8" cy="24.8" r="1.1" fill="#ffffff" />

              {/* Right Eye */}
              <circle cx="64" cy="26" r="3.3" fill={theme.eye} />
              <circle cx="62.8" cy="24.8" r="1.1" fill="#ffffff" />
            </g>
          ) : (
            /* Happy Blinking Arcs: ⌒  ⌒ */
            <g>
              <path
                d="M 42.5,27 Q 46,24 49.5,27"
                fill="none"
                stroke={theme.eye}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M 60.5,27 Q 64,24 67.5,27"
                fill="none"
                stroke={theme.eye}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* Sweet Smile */}
          <path
            d="M 52.4,27.8 Q 55,30.2 57.6,27.8"
            fill="none"
            stroke={theme.eye}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
