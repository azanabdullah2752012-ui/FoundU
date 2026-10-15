import React from 'react';
import { Home, Compass, Sparkles, Award, Search } from 'lucide-react';
import type { UserProgress } from '../../types';
import { sound } from '../../utils/sound';

interface MobileBottomBarProps {
  currentView: 'home' | 'library' | 'lesson';
  onNavigateHome: () => void;
  onNavigateLibrary: () => void;
  onContinueLesson?: () => void;
  onOpenSearch?: () => void;
  onOpenMastery?: () => void;
  progress: UserProgress;
  activeLessonTitle?: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateLibrary,
  onContinueLesson,
  onOpenSearch,
  onOpenMastery,
  progress,
}) => {
  const completedCount = progress.completedLessons.length;

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#E8E5DD] shadow-lg px-2 py-1.5 transition-all select-none"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home */}
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onNavigateHome();
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            currentView === 'home'
              ? 'text-[#D45B34]'
              : 'text-[#9E9B93] hover:text-[#1C1917]'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-sans font-bold mt-0.5">Home</span>
          {currentView === 'home' && (
            <div className="w-1 h-1 rounded-full bg-[#D45B34] mt-0.5" />
          )}
        </button>

        {/* 2. Topics Library */}
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onNavigateLibrary();
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            currentView === 'library'
              ? 'text-[#D45B34]'
              : 'text-[#9E9B93] hover:text-[#1C1917]'
          }`}
          aria-label="Topics"
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-sans font-bold mt-0.5">Topics</span>
          {currentView === 'library' && (
            <div className="w-1 h-1 rounded-full bg-[#D45B34] mt-0.5" />
          )}
        </button>

        {/* 3. Active Lesson / Practice */}
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onContinueLesson?.();
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
            currentView === 'lesson'
              ? 'text-[#D45B34]'
              : 'text-[#9E9B93] hover:text-[#1C1917]'
          }`}
          aria-label="Workshop Lesson"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D45B34] ring-2 ring-white animate-pulse" />
          </div>
          <span className="text-[10px] font-sans font-bold mt-0.5">Workshop</span>
          {currentView === 'lesson' && (
            <div className="w-1 h-1 rounded-full bg-[#D45B34] mt-0.5" />
          )}
        </button>

        {/* 4. Progress / Mastery Drawer */}
        {onOpenMastery && (
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onOpenMastery();
            }}
            className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[#9E9B93] hover:text-[#1C1917] transition-all cursor-pointer"
            aria-label="Progress & Badges"
          >
            <div className="relative">
              <Award className="w-5 h-5" />
              {completedCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#1E6B4F] text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center ring-1 ring-white">
                  {completedCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-sans font-bold mt-0.5">Mastery</span>
          </button>
        )}

        {/* 5. Concept Search */}
        {onOpenSearch && (
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              onOpenSearch();
            }}
            className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-[#9E9B93] hover:text-[#1C1917] transition-all cursor-pointer"
            aria-label="Search Concepts"
          >
            <Search className="w-5 h-5" />
            <span className="text-[10px] font-sans font-bold mt-0.5">Search</span>
          </button>
        )}
      </div>
    </nav>
  );
};
