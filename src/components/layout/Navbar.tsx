import React, { useState } from 'react';
import { BookOpen, Home, HelpCircle, CheckCircle2, Keyboard } from 'lucide-react';
import type { UserProgress } from '../../types';

interface NavbarProps {
  currentView: 'home' | 'library' | 'lesson';
  onNavigateHome: () => void;
  onNavigateLibrary: () => void;
  onContinueLesson?: () => void;
  onOpenShortcuts: () => void;
  progress: UserProgress;
  activeLessonTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateLibrary,
  onContinueLesson,
  onOpenShortcuts,
  progress,
  activeLessonTitle,
}) => {
  const [showBrandMeaning, setShowBrandMeaning] = useState(false);

  const completedCount = progress.completedLessons.length;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E5DD] transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Foundu home"
          >
            {/* Geometric Foundation Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#1C1917] text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider group-hover:bg-[#D45B34] transition-colors shadow-xs">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#1C1917] group-hover:text-[#D45B34] transition-colors">
                FOUNDU
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E9B93] -mt-1 hidden sm:inline">
                Foundations
              </span>
            </div>
          </button>

          {/* Meaning hint popover trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowBrandMeaning(!showBrandMeaning)}
              onMouseEnter={() => setShowBrandMeaning(true)}
              onMouseLeave={() => setShowBrandMeaning(false)}
              className="p-1 text-[#9E9B93] hover:text-[#6B6861] transition-colors rounded-full focus:outline-none"
              aria-label="About the Foundu name"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>

            {showBrandMeaning && (
              <div className="absolute left-0 mt-2 w-72 p-3 bg-white border border-[#E8E5DD] rounded-xl shadow-lg text-xs z-50 animate-in fade-in duration-150">
                <div className="font-semibold text-[#1C1917] mb-1">
                  The meaning behind FOUNDU:
                </div>
                <p className="text-[#6B6861] mb-1.5 leading-relaxed">
                  <strong className="text-[#1C1917]">Foundation + U:</strong>{' '}
                  Building the foundational concepts everything else rests on.
                </p>
                <p className="text-[#6B6861] leading-relaxed">
                  <strong className="text-[#1C1917]">Found + U:</strong> Finding
                  the missing understanding and regaining your footing.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'home'
                ? 'bg-[#EFECE4] text-[#1C1917]'
                : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <button
            type="button"
            onClick={onNavigateLibrary}
            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'library'
                ? 'bg-[#EFECE4] text-[#1C1917]'
                : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Topics</span>
          </button>

          {/* Keyboard Shortcuts Trigger Button */}
          <button
            type="button"
            onClick={onOpenShortcuts}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB] transition-colors flex items-center gap-1.5 border border-transparent hover:border-[#E8E5DD]"
            title="Keyboard shortcuts for speed (Press '?')"
            aria-label="Keyboard shortcuts"
          >
            <Keyboard className="w-3.5 h-3.5 text-[#D45B34]" />
            <span className="hidden md:inline">Shortcuts</span>
            <kbd className="hidden sm:inline px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#6B6861] shadow-2xs">
              ?
            </kbd>
          </button>

          {/* Current or Completed Counter */}
          {completedCount > 0 ? (
            <div className="flex items-center gap-1.5 text-xs text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2.5 py-1 rounded-full font-medium ml-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {completedCount} completed
              </span>
            </div>
          ) : progress.inProgressLessonId && onContinueLesson && currentView !== 'lesson' ? (
            <button
              type="button"
              onClick={onContinueLesson}
              className="text-xs text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] hover:bg-[#F9ECE7] px-2.5 py-1 rounded-full font-medium ml-1 transition-colors flex items-center gap-1"
            >
              <span>Resume</span>
              <span className="max-w-[120px] truncate hidden md:inline font-mono">
                {activeLessonTitle || 'Lesson'}
              </span>
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
};
