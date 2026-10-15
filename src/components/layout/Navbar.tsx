import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Volume2, VolumeX, Search } from 'lucide-react';
import type { UserProgress } from '../../types';
import { sound } from '../../utils/sound';
import { Gummy } from '../brand/Gummy';
import { PickleCorpTorchIcon } from '../brand/PickleCorpLogo';
import type { PickleCorpUser } from '../brand/PickleCorpLoginModal';

interface NavbarProps {
  currentView: 'home' | 'library' | 'lesson';
  onNavigateHome: () => void;
  onNavigateLibrary: () => void;
  onContinueLesson?: () => void;
  onOpenShortcuts: () => void;
  onOpenSearch?: () => void;
  onOpenMastery?: () => void;
  onOpenLogin?: () => void;
  currentUser?: PickleCorpUser;
  progress: UserProgress;
  activeLessonTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateLibrary,
  onOpenSearch,
  onOpenMastery,
  onOpenLogin,
  currentUser,
  progress,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'm' || e.key === 'M') {
        setIsMuted(sound.toggleMute());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    setIsMuted(sound.toggleMute());
  };

  const completedCount = progress.completedLessons.length;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E8E5DD] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Unified Single Brand Identity Lockup */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          aria-label="Foundu home"
        >
          {/* Blue Flame Torch Icon */}
          <div className="w-8 h-8 rounded-xl bg-white border border-[#E8E5DD] flex items-center justify-center p-1 group-hover:border-[#D45B34] transition-colors shadow-2xs">
            <PickleCorpTorchIcon size={20} />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-[#1C1917] group-hover:text-[#D45B34] transition-colors leading-none">
                FOUNDU
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D45B34] bg-[#FDF4F0] px-1.5 py-0.2 rounded border border-[#F3C3B2]/50">
                ATELIER
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-[#9E9B93] mt-0.5">
              Pickle Corp™
            </span>
          </div>
        </button>

        {/* Clean, Spacious Navigation & Utility Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Topics / Curriculum Link */}
          <button
            type="button"
            onClick={onNavigateLibrary}
            className={`btn-tactile px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              currentView === 'library'
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-white border border-transparent hover:border-[#E8E5DD]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#D45B34]" />
            <span>Topics</span>
          </button>

          {/* Mastery Drawer Pill (Clean & subtle) */}
          {onOpenMastery && (
            <button
              type="button"
              onClick={onOpenMastery}
              className={`btn-tactile hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 rounded-xl transition-all cursor-pointer border shadow-2xs ${
                completedCount > 0
                  ? 'text-[#1E6B4F] bg-[#F0F9F5] border-[#B7E4D3] hover:bg-[#E4F5ED]'
                  : 'text-[#6B6861] bg-white border-[#E8E5DD] hover:bg-[#FAF9F5]'
              }`}
              title="View Foundational Mastery"
              aria-label="View mastery progress"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F]" />
              <span>{completedCount} Mastered</span>
            </button>
          )}

          {/* Concept Search Trigger */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="btn-tactile p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-medium text-[#6B6861] hover:text-[#1C1917] hover:bg-white transition-colors flex items-center gap-1.5 border border-[#E8E5DD] bg-[#FAF9F5] cursor-pointer shadow-2xs"
              title="Search concepts (Cmd+K)"
              aria-label="Search concepts"
            >
              <Search className="w-3.5 h-3.5 text-[#1C1917]" />
              <span className="hidden md:inline font-mono text-[11px] text-[#9E9B93]">⌘K</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleToggleSound}
            className={`btn-tactile p-2 rounded-xl text-xs transition-colors flex items-center justify-center border border-transparent hover:border-[#E8E5DD] hover:bg-white cursor-pointer ${
              isMuted ? 'text-[#9E9B93]' : 'text-[#1E6B4F]'
            }`}
            title={isMuted ? 'Unmute audio (M)' : 'Mute audio (M)'}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#9E9B93]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#1E6B4F]" />
            )}
          </button>

          {/* Single Gummy User Avatar Pill */}
          {onOpenLogin && (
            <button
              type="button"
              onClick={onOpenLogin}
              className="btn-tactile py-1.5 px-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 border border-[#E8E5DD] bg-white hover:bg-[#FAF9F5] cursor-pointer shadow-2xs ml-1"
              title="Learner Profile & Studio ID"
              aria-label="Learner Profile"
            >
              <Gummy
                size="xs"
                color={currentUser?.gummyColor || 'terracotta'}
                className="shrink-0 -my-0.5"
              />
              <span className="text-[#1C1917]">
                {currentUser?.isLoggedIn && currentUser.name ? currentUser.name : 'Sign In'}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
