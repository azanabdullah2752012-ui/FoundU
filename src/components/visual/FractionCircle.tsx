import React from 'react';

interface FractionCircleProps {
  totalParts: number;
  shadedParts: number;
  size?: number;
  label?: string;
}

export const FractionCircle: React.FC<FractionCircleProps> = ({
  totalParts,
  shadedParts,
  size = 140,
  label,
}) => {
  const radius = 56;
  const center = size / 2;
  const anglePerSlice = 360 / totalParts;

  // Generate SVG path for each pie slice
  const renderSlices = () => {
    if (totalParts === 1) {
      return (
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={shadedParts > 0 ? '#D45B34' : '#FFFFFF'}
          stroke="#E8E5DD"
          strokeWidth="2"
        />
      );
    }

    return Array.from({ length: totalParts }, (_, i) => {
      const isShaded = i < shadedParts;
      const startAngle = (i * anglePerSlice - 90) * (Math.PI / 180);
      const endAngle = ((i + 1) * anglePerSlice - 90) * (Math.PI / 180);

      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArcFlag = anglePerSlice > 180 ? 1 : 0;
      const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      return (
        <path
          key={i}
          d={pathData}
          fill={isShaded ? '#D45B34' : '#FFFFFF'}
          stroke="#E8E5DD"
          strokeWidth="1.5"
          className="transition-colors duration-200"
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-xs"
        aria-label={`${shadedParts} of ${totalParts} slices shaded`}
      >
        <circle cx={center} cy={center} r={radius} fill="#F4F2EB" />
        {renderSlices()}
        {/* Subtle center pin */}
        <circle cx={center} cy={center} r="4" fill="#1C1917" opacity="0.2" />
      </svg>
      {label && <span className="text-xs text-[#6B6861] mt-2">{label}</span>}
    </div>
  );
};
