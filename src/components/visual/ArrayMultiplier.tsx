import React, { useState } from 'react';
import { RotateCw, Sparkles } from 'lucide-react';

interface ArrayMultiplierProps {
  initialRows?: number;
  initialCols?: number;
  interactive?: boolean;
  label?: string;
}

export const ArrayMultiplier: React.FC<ArrayMultiplierProps> = ({
  initialRows = 3,
  initialCols = 4,
  interactive = true,
  label,
}) => {
  const [rows, setRows] = useState<number>(initialRows);
  const [cols, setCols] = useState<number>(initialCols);
  const [hoverCell, setHoverCell] = useState<{ r: number; c: number } | null>(null);

  const total = rows * cols;

  const handleRotate = () => {
    const temp = rows;
    setRows(cols);
    setCols(temp);
  };

  return (
    <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-7 shadow-xs">
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
              {rows} × {cols} = {total}
            </span>
            <span className="text-xs font-medium text-[#6B6861]">
              ({rows} equal groups of {cols})
            </span>
          </div>
        </div>

        {interactive && (
          <button
            type="button"
            onClick={handleRotate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] text-xs font-mono font-semibold text-[#1C1917] hover:bg-[#F4F2EB] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCw className="w-3.5 h-3.5 text-[#D45B34]" />
            <span>Turn Grid ({cols} × {rows})</span>
          </button>
        )}
      </div>

      {/* The Visual Tile Grid */}
      <div className="flex flex-col items-center justify-center p-4 bg-[#FAF9F5] rounded-xl border border-[#E8E5DD] shadow-inner my-2">
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: rows }).map((_, rIdx) =>
            Array.from({ length: cols }).map((_, cIdx) => {
              const itemNumber = rIdx * cols + cIdx + 1;
              const isHovered =
                hoverCell && rIdx <= hoverCell.r && cIdx <= hoverCell.c;

              return (
                <button
                  key={`${rIdx}-${cIdx}`}
                  type="button"
                  onMouseEnter={() => setHoverCell({ r: rIdx, c: cIdx })}
                  onMouseLeave={() => setHoverCell(null)}
                  onClick={() => {
                    setRows(rIdx + 1);
                    setCols(cIdx + 1);
                  }}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-mono font-bold text-xs transition-all shadow-2xs ${
                    interactive ? 'cursor-pointer hover:scale-105' : 'cursor-default'
                  } ${
                    isHovered
                      ? 'bg-[#BC4B26] text-white scale-102 ring-2 ring-[#BC4B26]/30'
                      : 'bg-[#D45B34] text-white'
                  }`}
                  aria-label={`Row ${rIdx + 1}, Column ${cIdx + 1}`}
                >
                  {itemNumber}
                </button>
              );
            })
          )}
        </div>

        {/* Row and Col dimensions badges */}
        <div className="flex items-center gap-4 mt-3 text-xs font-mono text-[#6B6861]">
          <span>↕ <strong>{rows}</strong> Rows</span>
          <span>↔ <strong>{cols}</strong> Columns</span>
        </div>
      </div>

      {/* Interactive Controls */}
      {interactive && (
        <div className="mt-4 pt-3 border-t border-[#E8E5DD] space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono font-semibold text-[#6B6861] mb-1">
                <span>Rows (Groups)</span>
                <span>{rows}</span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
                className="w-full accent-[#D45B34] h-2 bg-[#FAF9F5] rounded-lg cursor-pointer"
                aria-label="Rows slider"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono font-semibold text-[#6B6861] mb-1">
                <span>Columns (Items per group)</span>
                <span>{cols}</span>
              </div>
              <input
                type="range"
                min={1}
                max={8}
                value={cols}
                onChange={(e) => setCols(Number(e.target.value))}
                className="w-full accent-[#D45B34] h-2 bg-[#FAF9F5] rounded-lg cursor-pointer"
                aria-label="Columns slider"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6B6861] pt-1">
            <Sparkles className="w-4 h-4 text-[#D45B34] shrink-0" />
            <span>
              Multiplication is not magic tables — it is simply an <strong>area grid</strong>. Counting {rows} rows of {cols} gives exactly the same total as counting {cols} columns of {rows}!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
