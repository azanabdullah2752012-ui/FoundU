import React, { useState } from 'react';
import { Hand } from 'lucide-react';

interface VisualPointerGuideProps {
  text?: string;
  className?: string;
  onDismiss?: () => void;
}

export const VisualPointerGuide: React.FC<VisualPointerGuideProps> = ({
  text = 'Tap to try',
  className = '',
  onDismiss,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      onClick={() => {
        setDismissed(true);
        onDismiss?.();
      }}
      className={`inline-flex items-center gap-1.5 bg-[#1C1917] text-white px-3 py-1.5 rounded-full text-xs font-sans font-bold shadow-md cursor-pointer animate-bounce select-none z-10 transition-opacity hover:opacity-90 ${className}`}
      role="tooltip"
      aria-label={text}
    >
      <Hand className="w-3.5 h-3.5 text-[#D45B34] -rotate-12" />
      <span>{text}</span>
    </div>
  );
};
