import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface MetricLadderProps {
  initialValue?: number;
  interactive?: boolean;
  label?: string;
}

export const MetricLadder: React.FC<MetricLadderProps> = ({
  initialValue = 3.5,
  interactive = true,
  label,
}) => {
  const [valInMeters, setValInMeters] = useState<number>(initialValue);

  const units = [
    { key: 'km', name: 'Kilometer (km)', factor: 0.001, desc: '1,000 meters' },
    { key: 'm', name: 'Meter (m)', factor: 1, desc: 'Base Unit (1m)' },
    { key: 'cm', name: 'Centimeter (cm)', factor: 100, desc: '1/100 of a meter' },
    { key: 'mm', name: 'Millimeter (mm)', factor: 1000, desc: '1/1,000 of a meter' },
  ];

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          {label && (
            <div className="text-xs font-mono font-semibold text-[#6B6861] uppercase tracking-wider mb-1">
              {label}
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-black text-[#D45B34]">
              {valInMeters} meters
            </span>
            <span className="text-xs text-[#6B6861]">
              = {(valInMeters * 100).toFixed(0)} cm = {(valInMeters * 1000).toFixed(0)} mm
            </span>
          </div>
        </div>

        {interactive && (
          <div className="flex items-center gap-1.5 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E5DD]">
            <span className="text-xs font-mono text-[#9E9B93] px-1">Presets:</span>
            {[0.5, 1, 3.5, 12, 100].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setValInMeters(v)}
                className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  valInMeters === v
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'text-[#6B6861] hover:text-[#1C1917]'
                }`}
              >
                {v}m
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Visual Step Ladder */}
      <div className="space-y-2 my-3">
        {units.map((u, idx) => {
          const converted = valInMeters * u.factor;
          const isBase = u.key === 'm';

          return (
            <div
              key={u.key}
              className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                isBase
                  ? 'bg-[#FAF9F5] border-[#D45B34] ring-1 ring-[#D45B34]/20'
                  : 'bg-white border-[#E8E5DD] hover:border-[#D5D1C7]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center font-mono text-xs font-bold text-[#1C1917]">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-bold text-sm text-[#1C1917]">{u.name}</div>
                  <div className="text-[11px] text-[#9E9B93] font-mono">{u.desc}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-mono text-base font-black text-[#D45B34]">
                  {converted < 0.01 ? converted.toFixed(4) : converted} <span className="text-xs text-[#1C1917]">{u.key}</span>
                </div>
                <div className="text-[10px] text-[#6B6861] font-mono">
                  {idx === 0 && 'Shift decimal ← 3 places'}
                  {idx === 1 && 'Reference base'}
                  {idx === 2 && 'Shift decimal → 2 places'}
                  {idx === 3 && 'Shift decimal → 3 places'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decimal shift insight */}
      <div className="mt-3 pt-3 border-t border-[#E8E5DD] flex items-center gap-2 text-xs text-[#6B6861]">
        <RefreshCw className="w-4 h-4 text-[#D45B34] shrink-0" />
        <span>
          Metric conversions never require complex math: <strong>going to smaller units (m → cm)</strong> shifts the decimal point right (multiply by 10/100/1000); <strong>going to larger units (m → km)</strong> shifts the decimal left!
        </span>
      </div>
    </div>
  );
};
