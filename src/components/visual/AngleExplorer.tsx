import React, { useState, useRef, useCallback, useEffect } from 'react';
import { RotateCw, CheckCircle2, Target, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';

interface AngleExplorerProps {
  initialAngle?: number;
  interactive?: boolean;
  targetMin?: number;
  targetMax?: number;
  onTargetReached?: (isSolved: boolean) => void;
  label?: string;
}

export const AngleExplorer: React.FC<AngleExplorerProps> = ({
  initialAngle = 45,
  interactive = true,
  targetMin = 120,
  targetMax = 140,
  onTargetReached,
  label,
}) => {
  const [angle, setAngle] = useState<number>(initialAngle);
  const [armLength, setArmLength] = useState<number>(110);
  const [showArmComparison, setShowArmComparison] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const svgRef = useRef<SVGSVGElement>(null);

  // Center coordinate of the vertex
  const cx = 170;
  const cy = 150;
  const arcRadius = 45;

  // Determine angle classification
  const getClassification = (deg: number) => {
    if (deg === 0) return { label: 'Zero Angle', desc: 'No rotation' };
    if (deg < 90) return { label: 'Acute Angle', desc: 'Sharp (< 90°)' };
    if (deg === 90) return { label: 'Right Angle', desc: 'Square corner (= 90°)' };
    if (deg < 180) return { label: 'Obtuse Angle', desc: 'Wide open (90° - 180°)' };
    if (deg === 180) return { label: 'Straight Angle', desc: 'Half-turn (= 180°)' };
    return { label: 'Reflex Angle', desc: 'Beyond straight (> 180°)' };
  };

  const classification = getClassification(angle);

  // Calculate tip coordinates for an angle and arm radius
  const getTipCoords = (deg: number, radius: number) => {
    const rad = (deg * Math.PI) / 180;
    // SVG coordinate: 0 deg is right (+X), angles sweep counter-clockwise (-Y)
    const x = cx + radius * Math.cos(rad);
    const y = cy - radius * Math.sin(rad);
    return { x, y };
  };

  const tip = getTipCoords(angle, armLength);

  // Build SVG path for the swept arc
  const getArcPath = (deg: number, radius: number) => {
    if (deg === 0) return '';
    const startX = cx + radius;
    const startY = cy;
    const { x: endX, y: endY } = getTipCoords(deg, radius);
    const largeArcFlag = deg > 180 ? 1 : 0;
    // Sweep flag is 0 for counter-clockwise in SVG coordinates
    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY}`;
  };

  // Convert mouse/touch event into angle
  const handlePointerMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      // Calculate cursor relative to vertex
      const scaleX = 340 / rect.width;
      const scaleY = 240 / rect.height;
      const cursorX = (clientX - rect.left) * scaleX;
      const cursorY = (clientY - rect.top) * scaleY;

      const dx = cursorX - cx;
      const dy = cy - cursorY; // Invert dy so up is positive

      let rad = Math.atan2(dy, dx);
      if (rad < 0) rad += 2 * Math.PI;

      let deg = Math.round((rad * 180) / Math.PI);
      if (deg > 360) deg = 360;

      setAngle(deg);

      // Check if target reached
      if (targetMin !== undefined && targetMax !== undefined) {
        if (deg >= targetMin && deg <= targetMax) {
          if (!isSolved) {
            setIsSolved(true);
            sound.playSuccess();
            onTargetReached?.(true);
          }
        }
      }
    },
    [cx, cy, targetMin, targetMax, isSolved, onTargetReached]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    handlePointerMove(e.clientX, e.clientY);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (isDragging) {
        handlePointerMove(e.clientX, e.clientY);
      }
    };
    const onUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    }
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [isDragging, handlePointerMove]);

  const setPresetAngle = (deg: number) => {
    sound.playTap();
    setAngle(deg);
    if (targetMin !== undefined && targetMax !== undefined) {
      if (deg >= targetMin && deg <= targetMax && !isSolved) {
        setIsSolved(true);
        sound.playSuccess();
        onTargetReached?.(true);
      }
    }
  };

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 sm:p-6 shadow-xs select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#D45B34] tracking-tight">
              {angle}°
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E8E5DD] text-[#1C1917] font-semibold">
              {classification.label}
            </span>
            <span className="text-xs text-[#6B6861] hidden sm:inline">
              ({classification.desc})
            </span>
          </div>
        </div>

        {/* Target Physical Challenge Status */}
        {targetMin !== undefined && targetMax !== undefined && (
          <div
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              isSolved
                ? 'bg-[#F0F9F5] border-[#B7E4D3] text-[#1E6B4F] font-semibold'
                : 'bg-[#FFFBF5] border-[#F0DDC5] text-[#B45309]'
            }`}
          >
            {isSolved ? (
              <CheckCircle2 className="w-4 h-4 text-[#1E6B4F]" />
            ) : (
              <Target className="w-4 h-4 text-[#D45B34]" />
            )}
            <span>
              Target: {targetMin}° – {targetMax}° {isSolved ? '✓ Solved' : ''}
            </span>
          </div>
        )}
      </div>

      {/* SVG Interactive Visual Stage */}
      <div className="flex flex-col items-center justify-center p-3 bg-[#FAF9F5] rounded-xl border border-[#E8E5DD] relative overflow-hidden">
        <svg
          ref={svgRef}
          viewBox="0 0 340 240"
          className="w-full max-w-md h-56 cursor-crosshair touch-none"
          onPointerDown={handlePointerDown}
        >
          {/* Subtle Protractor Grid Guide */}
          <circle
            cx={cx}
            cy={cy}
            r={armLength}
            fill="none"
            stroke="#E8E5DD"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Key angle markers (30, 45, 90, 180) */}
          {[30, 45, 60, 90, 120, 135, 150, 180].map((tickDeg) => {
            const rad = (tickDeg * Math.PI) / 180;
            const tx1 = cx + (armLength - 6) * Math.cos(rad);
            const ty1 = cy - (armLength - 6) * Math.sin(rad);
            const tx2 = cx + (armLength + 6) * Math.cos(rad);
            const ty2 = cy - (armLength + 6) * Math.sin(rad);
            return (
              <line
                key={tickDeg}
                x1={tx1}
                y1={ty1}
                x2={tx2}
                y2={ty2}
                stroke="#D5D1C7"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Swept Angle Wedge Fill */}
          {angle > 0 && (
            <path
              d={`M ${cx} ${cy} L ${cx + arcRadius} ${cy} A ${arcRadius} ${arcRadius} 0 ${
                angle > 180 ? 1 : 0
              } 0 ${getTipCoords(angle, arcRadius).x} ${getTipCoords(angle, arcRadius).y} Z`}
              fill="#D45B34"
              fillOpacity="0.14"
            />
          )}

          {/* Right Angle Square Indicator */}
          {angle === 90 && (
            <path
              d={`M ${cx + 18} ${cy} L ${cx + 18} ${cy - 18} L ${cx} ${cy - 18}`}
              fill="none"
              stroke="#D45B34"
              strokeWidth="2"
            />
          )}

          {/* Arc Curve Stroke */}
          {angle > 0 && angle !== 90 && (
            <path
              d={getArcPath(angle, arcRadius)}
              fill="none"
              stroke="#D45B34"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}

          {/* Base Horizontal Ray (0 degrees) */}
          <line
            x1={cx}
            y1={cy}
            x2={cx + armLength}
            y2={cy}
            stroke="#1C1917"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Base Ray Arrowhead */}
          <polygon
            points={`${cx + armLength + 8},${cy} ${cx + armLength - 2},${cy - 5} ${
              cx + armLength - 2
            },${cy + 5}`}
            fill="#1C1917"
          />

          {/* Rotatable Ray */}
          <line
            x1={cx}
            y1={cy}
            x2={tip.x}
            y2={tip.y}
            stroke="#D45B34"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Rotating Ray Arrowhead */}
          <circle cx={tip.x} cy={tip.y} r={7} fill="#D45B34" />
          <circle cx={tip.x} cy={tip.y} r={12} fill="#D45B34" fillOpacity="0.2" />

          {/* Optional: Second extended arm for proving arm length doesn't change angle */}
          {showArmComparison && (
            <>
              <line
                x1={cx}
                y1={cy}
                x2={getTipCoords(angle, armLength + 35).x}
                y2={getTipCoords(angle, armLength + 35).y}
                stroke="#0F766E"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle
                cx={getTipCoords(angle, armLength + 35).x}
                cy={getTipCoords(angle, armLength + 35).y}
                r={4}
                fill="#0F766E"
              />
            </>
          )}

          {/* Center Vertex Dot */}
          <circle cx={cx} cy={cy} r={5} fill="#1C1917" />
          <text
            x={cx - 15}
            y={cy + 18}
            className="text-[10px] font-mono fill-[#9E9B93] select-none font-bold"
          >
            Vertex
          </text>
        </svg>

        <div className="text-[11px] font-mono text-[#9E9B93] mt-1">
          Drag the orange handle or click around the center to rotate the ray
        </div>
      </div>

      {/* Snap Presets */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-[#9E9B93] font-mono mr-1">Presets:</span>
        {[
          { label: '30° Acute', deg: 30 },
          { label: '45°', deg: 45 },
          { label: '90° Right', deg: 90 },
          { label: '130° Target', deg: 130 },
          { label: '180° Straight', deg: 180 },
          { label: '270° Reflex', deg: 270 },
        ].map((preset) => (
          <button
            key={preset.deg}
            type="button"
            onClick={() => setPresetAngle(preset.deg)}
            className={`px-2 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              angle === preset.deg
                ? 'bg-[#1C1917] text-white font-bold shadow-2xs'
                : 'bg-[#FAF9F5] border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
            }`}
          >
            {preset.label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setPresetAngle(0)}
          className="ml-auto px-2 py-1 rounded-lg text-xs font-mono text-[#9E9B93] hover:text-[#1C1917] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RotateCw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Misconception Buster Section: Arm Length Myth */}
      <div className="mt-3.5 pt-3 border-t border-[#E8E5DD] bg-[#FAF9F5] p-3 rounded-xl border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#1C1917]">
                Brain Trap: "Do longer lines mean a bigger angle?"
              </div>
              <div className="text-xs text-[#6B6861]">
                Angle is <em>pure rotation</em> around the vertex, not the physical length of the rays.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowArmComparison(!showArmComparison)}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
              showArmComparison
                ? 'bg-[#0F766E] text-white shadow-xs'
                : 'bg-white border border-[#E8E5DD] text-[#1C1917] hover:border-[#0F766E]'
            }`}
          >
            {showArmComparison ? '✓ Arm Comparison Active' : 'Test Ray Length'}
          </button>
        </div>

        {showArmComparison && (
          <div className="mt-2.5 pt-2 border-t border-[#E8E5DD] flex items-center gap-3 text-xs">
            <span className="font-mono text-[#6B6861]">Adjust Ray Length:</span>
            <input
              type="range"
              min={70}
              max={130}
              value={armLength}
              onChange={(e) => setArmLength(Number(e.target.value))}
              className="w-32 accent-[#0F766E] cursor-pointer"
            />
            <span className="font-mono text-[11px] text-[#0F766E] font-bold">
              Angle stays exactly {angle}°!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
