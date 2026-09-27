import React from 'react';
import type { VisualData } from '../../types';
import { FractionBar } from './FractionBar';
import { FractionCircle } from './FractionCircle';
import { FractionComparison } from './FractionComparison';

interface VisualRendererProps {
  visual?: VisualData;
  interactive?: boolean;
  onShadedChange?: (newShaded: number) => void;
  className?: string;
}

export const VisualRenderer: React.FC<VisualRendererProps> = ({
  visual,
  interactive = false,
  onShadedChange,
  className = '',
}) => {
  if (!visual) return null;

  return (
    <div className={`my-4 ${className}`}>
      {visual.type === 'fraction-bar' && (
        <FractionBar
          totalParts={visual.totalParts}
          shadedParts={visual.shadedParts}
          interactive={interactive}
          onShadedChange={onShadedChange}
          label={visual.label}
          highlightIndexes={visual.highlightIndexes}
        />
      )}

      {visual.type === 'fraction-circle' && (
        <FractionCircle
          totalParts={visual.totalParts}
          shadedParts={visual.shadedParts}
          label={visual.label}
        />
      )}

      {visual.type === 'comparison' && visual.comparison && (
        <FractionComparison
          fractionA={visual.comparison.fractionA}
          fractionB={visual.comparison.fractionB}
        />
      )}
    </div>
  );
};
