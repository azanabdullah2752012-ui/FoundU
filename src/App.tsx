import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ContinueLearning } from './components/home/ContinueLearning';
import { FeaturedTopics } from './components/home/FeaturedTopics';
import { PhilosophySection } from './components/home/PhilosophySection';
import { TopicLibrary } from './components/library/TopicLibrary';
import { LessonContainer } from './components/lesson/LessonContainer';
import { ShortcutsModal } from './components/common/ShortcutsModal';
import { FOUNDATION_TOPICS, getLessonById } from './data/topics';
import { useProgress } from './hooks/useProgress';
import type { Stage } from './types';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'library' | 'lesson'>('home');
  const [activeLessonId, setActiveLessonId] = useState<string>('fractions-what-is-a-fraction');
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  const {
    progress,
    markLessonComplete,
    saveLessonStage,
    saveAnswer,
    getLessonStage,
    isLessonCompleted,
  } = useProgress();

  const activeLesson = getLessonById(activeLessonId);
  const currentStage: Stage = activeLesson ? getLessonStage(activeLesson.id) : 'intro';

  // Last in-progress or completed lesson for the home resume card
  const resumeLessonId = progress.inProgressLessonId || 'fractions-what-is-a-fraction';
  const resumeLesson = getLessonById(resumeLessonId) || getLessonById('fractions-what-is-a-fraction') || null;
  const resumeLessonStage = resumeLesson ? getLessonStage(resumeLesson.id) : 'intro';
  const isResumeLessonCompleted = resumeLesson ? isLessonCompleted(resumeLesson.id) : false;

  // Global key shortcuts for speed
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      // Don't trigger when user is typing in search or text input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // '?' opens shortcuts modal
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
        return;
      }

      // Escape closes shortcuts modal
      if (e.key === 'Escape' && isShortcutsOpen) {
        e.preventDefault();
        setIsShortcutsOpen(false);
        return;
      }

      // If shortcuts modal is open, don't trigger background navigation
      if (isShortcutsOpen) return;

      // Global fast navigation: 'h' for Home, 't' for Topics
      if (e.key.toLowerCase() === 'h' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key.toLowerCase() === 't' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setCurrentView('library');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleGlobalShortcuts);
    return () => window.removeEventListener('keydown', handleGlobalShortcuts);
  }, [isShortcutsOpen]);

  const handleStartLearning = () => {
    // Navigate straight to the flagship Fractions lesson or last active
    const targetId = progress.inProgressLessonId || 'fractions-what-is-a-fraction';
    setActiveLessonId(targetId);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (lessonId: string) => {
    const lesson = getLessonById(lessonId);
    if (!lesson) return;
    setActiveLessonId(lessonId);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStageChange = (newStage: Stage) => {
    if (activeLesson) {
      saveLessonStage(activeLesson.id, newStage);
    }
  };

  const handleExitLesson = () => {
    setCurrentView('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1C1917] selection:bg-[#F3C3B2]">
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateLibrary={() => {
          setCurrentView('library');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onContinueLesson={handleStartLearning}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        progress={progress}
        activeLessonTitle={activeLesson?.title}
      />

      {/* Global Keyboard Shortcuts Modal */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Main Content Views */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-150">
            <Hero
              onStartLearning={handleStartLearning}
              onExploreTopics={() => {
                setCurrentView('library');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Continue Section if user has interacted */}
            <ContinueLearning
              inProgressLesson={resumeLesson}
              currentStage={resumeLessonStage}
              isCompleted={isResumeLessonCompleted}
              onResume={() => {
                if (resumeLesson) {
                  setActiveLessonId(resumeLesson.id);
                  setCurrentView('lesson');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              onExplore={() => {
                setCurrentView('library');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Core 5 MVP Foundation Subjects */}
            <FeaturedTopics
              topics={FOUNDATION_TOPICS}
              completedLessons={progress.completedLessons}
              onSelectLesson={handleSelectLesson}
              onExploreAll={() => {
                setCurrentView('library');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Philosophy of Foundu */}
            <PhilosophySection />
          </div>
        )}

        {currentView === 'library' && (
          <TopicLibrary
            topics={FOUNDATION_TOPICS}
            completedLessons={progress.completedLessons}
            onSelectLesson={handleSelectLesson}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'lesson' && activeLesson && (
          <LessonContainer
            lesson={activeLesson}
            currentStage={currentStage}
            onStageChange={handleStageChange}
            onExit={handleExitLesson}
            onCompleteLesson={(id) => markLessonComplete(id)}
            onSaveAnswer={(qId, cId) => saveAnswer(activeLesson.id, qId, cId)}
            savedAnswers={progress.answeredQuestions[activeLesson.id]}
            onContinueNextLesson={(nextId) => {
              const next = getLessonById(nextId);
              if (next) {
                setActiveLessonId(nextId);
              } else {
                setCurrentView('library');
              }
            }}
            onExploreTopics={() => {
              setCurrentView('library');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Footer (shown on home & library) */}
      {currentView !== 'lesson' && <Footer />}
    </div>
  );
}

export default App;
