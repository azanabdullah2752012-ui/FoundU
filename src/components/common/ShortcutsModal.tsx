import React from 'react';
import { X, Play, Zap, HelpCircle, Layers, Navigation } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard Shortcuts"
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl border border-[#E8E5DD] shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E5DD]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center text-[#D45B34]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C1917]">
                Keyboard Shortcuts for Speed
              </h2>
              <p className="text-xs text-[#6B6861]">
                Navigate and learn without reaching for the mouse
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#9E9B93] hover:text-[#1C1917] hover:bg-[#F4F2EB] rounded-lg transition-colors"
            aria-label="Close shortcuts"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shortcuts categories */}
        <div className="space-y-5 text-xs">
          {/* Video & Playback Speed */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-[#1C1917] uppercase tracking-wider text-[11px] mb-2 font-mono">
              <Play className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Video & Playback Speed</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD]">
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Play / Pause</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  Space
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Standard Speed (1x)</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  1
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Speed (1.25x / 1.5x / 2x)</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    2
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    3
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    4
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Slow Speed (0.75x)</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  0
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Step Speed Down / Up</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    [
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    ]
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Seek -5s / +5s</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    ←
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    →
                  </kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Questions */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-[#1C1917] uppercase tracking-wider text-[11px] mb-2 font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Speed Answering in Questions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD]">
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Select Choice 1 to 4</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    1
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    2
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    3
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    4
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Check Answer / Next</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  Enter ↵
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Retry Question</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  R
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Previous Question</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  P
                </kbd>
              </div>
            </div>
          </div>

          {/* Lesson & App Navigation */}
          <div>
            <div className="flex items-center gap-1.5 font-semibold text-[#1C1917] uppercase tracking-wider text-[11px] mb-2 font-mono">
              <Layers className="w-3.5 h-3.5 text-[#D45B34]" />
              <span>Stages & Global Navigation</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E5DD]">
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Next / Prev Stage</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    N
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    P
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Jump to Stage 1-4</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  Alt + 1..4
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Home / Topics</span>
                <div className="flex gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    H
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917] shadow-2xs">
                    T
                  </kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6861]">Show Shortcuts</span>
                <kbd className="px-2 py-0.5 bg-white border border-[#D5D1C7] rounded font-mono text-[11px] text-[#1C1917] shadow-2xs">
                  ?
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Footer tip */}
        <div className="mt-5 pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-[11px] text-[#9E9B93]">
          <span className="flex items-center gap-1">
            <Navigation className="w-3 h-3 text-[#D45B34]" />
            Shortcuts are disabled when typing into text boxes
          </span>
          <kbd className="px-2 py-0.5 bg-[#FAF9F5] border border-[#E8E5DD] rounded font-mono text-[10px]">
            Esc to close
          </kbd>
        </div>
      </div>
    </div>
  );
};
