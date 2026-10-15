import React, { useState, useEffect } from 'react';
import { BookOpen, Home, HelpCircle, CheckCircle2, Volume2, VolumeX, Search } from 'lucide-react';
import type { UserProgress } from '../../types';
import { sound } from '../../utils/sound';
import { Gummy } from '../brand/Gummy';
import { PickleCorpLogo } from '../brand/PickleCorpLogo';
import type { PickleCorpUser } from '../brand/PickleCorpLoginModal';

import { type Language } from '../../utils/language';

interface NavbarProps {
  currentView: 'home' | 'library' | 'lesson';
  language: Language;
  onToggleLanguage: () => void;
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
  language,
  onToggleLanguage,
  onNavigateHome,
  onNavigateLibrary,
  onContinueLesson,
  onOpenShortcuts: _onOpenShortcuts,
  onOpenSearch,
  onOpenMastery,
  onOpenLogin,
  currentUser,
  progress,
  activeLessonTitle,
}) => {
  const [showBrandMeaning, setShowBrandMeaning] = useState(false);
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

          {/* Pickle Corp Official Brand Logo & Gummy Mascot */}
          <div className="hidden sm:flex items-center pl-3 border-l border-[#E8E5DD]">
            <PickleCorpLogo
              variant="compact"
              showMascot={true}
              gummyColor={currentUser?.gummyColor || 'terracotta'}
            />
          </div>

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
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Language Switcher Pill */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 border border-[#E8E5DD] bg-white hover:border-[#D45B34]/40 hover:bg-[#FAF9F5] shadow-2xs text-[#1C1917] cursor-pointer active:scale-95"
            title="Change Language / भाषा बदलें"
            aria-label="Toggle language"
          >
            <span className="text-sm leading-none">🌐</span>
            <span className="font-bold text-[#1C1917]">
              {language === 'hi' ? 'हिन्दी' : 'English'}
            </span>
          </button>

          {/* Home Button */}
          <button
            type="button"
            onClick={onNavigateHome}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
              currentView === 'home'
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'hi' ? 'होम' : 'Home'}</span>
          </button>

          {/* Topics Button */}
          <button
            type="button"
            onClick={onNavigateLibrary}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
              currentView === 'library'
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#D45B34]" />
            <span>{language === 'hi' ? 'सारे विषय' : 'Topics'}</span>
          </button>

          {/* Concept Search Trigger */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-medium text-[#6B6861] hover:text-[#1C1917] hover:bg-[#F4F2EB] transition-colors flex items-center gap-1.5 border border-[#E8E5DD] bg-white cursor-pointer shadow-2xs"
              title={language === 'hi' ? 'खोजें (Search)' : 'Search concepts'}
              aria-label="Search concepts"
            >
              <Search className="w-3.5 h-3.5 text-[#1C1917]" />
              <span className="hidden md:inline">{language === 'hi' ? 'खोजें' : 'Search'}</span>
            </button>
          )}

          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={handleToggleSound}
            className={`p-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1 border border-transparent hover:border-[#E8E5DD] cursor-pointer ${
              isMuted ? 'text-[#9E9B93] hover:text-[#1C1917] hover:bg-[#F4F2EB]' : 'text-[#1E6B4F] hover:bg-[#F4F2EB]'
            }`}
            title={isMuted ? (language === 'hi' ? 'आवाज़ चालू करें' : 'Unmute') : (language === 'hi' ? 'आवाज़ बंद करें' : 'Mute')}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#9E9B93]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#1E6B4F]" />
            )}
          </button>

          {/* Pickle Corp Studio ID / Log In Button */}
          {onOpenLogin && (
            <button
              type="button"
              onClick={onOpenLogin}
              className="p-1 sm:px-2.5 sm:py-1 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border border-[#E8E5DD] bg-white hover:bg-[#FAF9F5] cursor-pointer shadow-2xs group"
              title="Pickle Corp Studio ID / Learner Sign In"
              aria-label="Pickle Corp Studio ID"
            >
              <Gummy
                size="xs"
                color={currentUser?.gummyColor || 'terracotta'}
                className="shrink-0 -my-0.5 group-hover:scale-110 transition-transform"
              />
              <span className="font-bold text-[#1C1917] hidden sm:inline">
                {currentUser?.isLoggedIn && currentUser.name ? currentUser.name : 'Log In'}
              </span>
            </button>
          )}

          {/* Mastery Drawer Trigger */}
          {onOpenMastery && (
            <button
              type="button"
              onClick={onOpenMastery}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ml-1 transition-colors cursor-pointer border shadow-2xs ${
                completedCount > 0
                  ? 'text-[#1E6B4F] bg-[#F0F9F5] border-[#B7E4D3] hover:bg-[#E4F5ED]'
                  : 'text-[#6B6861] bg-white border-[#E8E5DD] hover:bg-[#FAF9F5]'
              }`}
              title="View Foundational Mastery Ledger"
              aria-label="View mastery progress"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F]" />
              <span>
                {completedCount > 0 ? `${completedCount} Mastered` : 'Mastery'}
              </span>
            </button>
          )}

          {/* Resume In-Progress Lesson */}
          {progress.inProgressLessonId && onContinueLesson && currentView !== 'lesson' && (
            <button
              type="button"
              onClick={onContinueLesson}
              className="text-xs text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] hover:bg-[#F9ECE7] px-2.5 py-1 rounded-full font-medium ml-1 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Resume</span>
              <span className="max-w-[120px] truncate hidden md:inline font-mono">
                {activeLessonTitle || 'Lesson'}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
