import React from 'react';
import type { VisualData } from '../../types';
import { FractionBar } from './FractionBar';
import { FractionCircle } from './FractionCircle';
import { FractionComparison } from './FractionComparison';
import { NumberLine } from './NumberLine';
import { DecimalGrid } from './DecimalGrid';
import { PercentageGrid } from './PercentageGrid';
import { BalanceScale } from './BalanceScale';
import { ArrayMultiplier } from './ArrayMultiplier';
import { NegativeLine } from './NegativeLine';
import { RatioVisualizer } from './RatioVisualizer';
import { MetricLadder } from './MetricLadder';

interface VisualRendererProps {
  visual?: VisualData;
  interactive?: boolean;
  onShadedChange?: (newShaded: number) => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const VisualRenderer: React.FC<VisualRendererProps> = ({
  visual,
  interactive = false,
  onShadedChange,
  className = '',
  size = 'md',
}) => {
  if (!visual) return null;

  return (
    <div className={`my-4 ${className}`}>
      {visual.type === 'fraction-bar' && (
        <FractionBar
          totalParts={visual.totalParts || 4}
          shadedParts={visual.shadedParts || 0}
          interactive={interactive}
          onShadedChange={onShadedChange}
          label={visual.label}
          highlightIndexes={visual.highlightIndexes}
          size={size}
        />
      )}

      {visual.type === 'fraction-circle' && (
        <FractionCircle
          totalParts={visual.totalParts || 4}
          shadedParts={visual.shadedParts || 0}
          label={visual.label}
        />
      )}

      {visual.type === 'comparison' && visual.comparison && (
        <FractionComparison
          fractionA={visual.comparison.fractionA}
          fractionB={visual.comparison.fractionB}
        />
      )}

      {visual.type === 'number-line' && (
        <NumberLine
          fractions={[
            {
              numerator: visual.shadedParts || 0,
              denominator: visual.totalParts || 1,
              label: visual.label,
            },
          ]}
          showTicks={visual.totalParts || 4}
        />
      )}

      {visual.type === 'decimal-grid' && (
        <DecimalGrid
          initialTenths={visual.decimalGrid?.tenths ?? 4}
          initialHundredths={visual.decimalGrid?.hundredths ?? 0}
          interactive={interactive}
          mode={visual.decimalGrid?.mode ?? 'tenths'}
          label={visual.label}
          size={size === 'xs' ? 'sm' : size}
        />
      )}

      {visual.type === 'percentage-grid' && (
        <PercentageGrid
          initialPercent={visual.percentage?.percent ?? 50}
          interactive={interactive}
          label={visual.label}
          size={size === 'xs' ? 'sm' : size}
        />
      )}

      {visual.type === 'balance-scale' && (
        <BalanceScale
          initialX={4}
          initialLeftConstant={visual.balanceScale?.leftConstant ?? 3}
          initialRightConstant={visual.balanceScale?.rightConstant ?? 7}
          interactive={interactive}
          label={visual.label}
        />
      )}

      {visual.type === 'array-grid' && (
        <ArrayMultiplier
          initialRows={visual.arrayGrid?.rows ?? 3}
          initialCols={visual.arrayGrid?.cols ?? 4}
          interactive={interactive}
          label={visual.label}
        />
      )}

      {visual.type === 'thermometer' && (
        <NegativeLine
          initialValue={visual.thermometer?.value ?? -3}
          interactive={interactive}
          label={visual.label}
          min={visual.thermometer?.min ?? -7}
          max={visual.thermometer?.max ?? 7}
        />
      )}

      {visual.type === 'ratio-model' && (
        <RatioVisualizer
          baseA={visual.ratioModel?.partA ?? 2}
          baseB={visual.ratioModel?.partB ?? 3}
          labelA={visual.ratioModel?.labelA ?? 'Blue'}
          labelB={visual.ratioModel?.labelB ?? 'Orange'}
          initialScale={visual.ratioModel?.scale ?? 1}
          interactive={interactive}
          label={visual.label}
        />
      )}

      {visual.type === 'metric-ladder' && (
        <MetricLadder
          initialValue={visual.metricLadder?.value ?? 3.5}
          interactive={interactive}
          label={visual.label}
        />
      )}
    </div>
  );
};
