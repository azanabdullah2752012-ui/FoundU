import React, { useEffect } from 'react';
import type { LessonData, Stage } from '../../types';
import { LessonProgress } from './LessonProgress';
import { LessonIntro } from './LessonIntro';
import { LessonExamples } from './LessonExamples';
import { LessonVisualLab } from './LessonVisualLab';
import { LessonQuestions } from './LessonQuestions';
import { LessonComplete } from './LessonComplete';

import { sound } from '../../utils/sound';

interface LessonContainerProps {
  lesson: LessonData;
  currentStage: Stage;
  onStageChange: (newStage: Stage) => void;
  onExit: () => void;
  onCompleteLesson: (lessonId: string) => void;
  onSaveAnswer: (questionId: string, choiceId: string) => void;
  savedAnswers?: Record<string, string>;
  onContinueNextLesson?: (nextLessonId: string) => void;
  onExploreTopics: () => void;
}

export const LessonContainer: React.FC<LessonContainerProps> = ({
  lesson,
  currentStage,
  onStageChange,
  onExit,
  onCompleteLesson,
  onSaveAnswer,
  savedAnswers,
  onContinueNextLesson,
  onExploreTopics,
}) => {
  // Scroll to top whenever stage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStage]);

  // Stage transition keyboard shortcuts
  useEffect(() => {
    const handleStageShortcuts = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // Alt + 1..4 jump to specific stages
      if (e.altKey) {
        if (e.key === '1') {
          e.preventDefault();
          onStageChange('intro');
        } else if (e.key === '2') {
          e.preventDefault();
          onStageChange('examples');
        } else if (e.key === '3') {
          e.preventDefault();
          onStageChange('visuals');
        } else if (e.key === '4') {
          e.preventDefault();
          onStageChange('questions');
        }
        return;
      }

      // Escape exits to topic library
      if (e.key === 'Escape') {
        e.preventDefault();
        onExit();
        return;
      }

      // Stage-specific fast navigation
      if (currentStage === 'intro') {
        if (e.key === 'Enter' || e.key.toLowerCase() === 'n' || e.key === 'ArrowRight') {
          e.preventDefault();
          onStageChange('examples');
        }
      } else if (currentStage === 'examples') {
        if (e.key === 'Enter' || e.key.toLowerCase() === 'n') {
          e.preventDefault();
          onStageChange('visuals');
        } else if (e.key.toLowerCase() === 'p') {
          e.preventDefault();
          onStageChange('intro');
        }
      } else if (currentStage === 'visuals') {
        if (e.key === 'Enter' || e.key.toLowerCase() === 'n') {
          e.preventDefault();
          onStageChange('questions');
        } else if (e.key.toLowerCase() === 'p') {
          e.preventDefault();
          onStageChange('examples');
        }
      } else if (currentStage === 'complete') {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (lesson.completion.nextLessonId && onContinueNextLesson) {
            onContinueNextLesson(lesson.completion.nextLessonId);
          } else {
            onExploreTopics();
          }
        }
      }
    };

    window.addEventListener('keydown', handleStageShortcuts);
    return () => window.removeEventListener('keydown', handleStageShortcuts);
  }, [currentStage, lesson, onStageChange, onExit, onContinueNextLesson, onExploreTopics]);

  const handleLessonComplete = () => {
    onCompleteLesson(lesson.id);
    onStageChange('complete');
  };

  const handleRestart = () => {
    onStageChange('intro');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      {/* Top stage progression indicator */}
      <LessonProgress
        currentStage={currentStage}
        onSelectStage={(stage) => onStageChange(stage)}
        onExit={onExit}
        lessonTitle={lesson.title}
        topicTitle={lesson.topicTitle}
      />

      {/* Main Lesson Stage Content */}
      <main className="flex-1 px-4 sm:px-6 pb-20">
        {currentStage === 'intro' && (
          <LessonIntro
            lesson={lesson}
            onNext={() => onStageChange('examples')}
          />
        )}

        {currentStage === 'examples' && (
          <LessonExamples
            lesson={lesson}
            onNext={() => onStageChange('visuals')}
            onPrev={() => onStageChange('intro')}
          />
        )}

        {currentStage === 'visuals' && (
          <LessonVisualLab
            lesson={lesson}
            onNext={() => onStageChange('questions')}
            onPrev={() => onStageChange('examples')}
          />
        )}

        {currentStage === 'questions' && (
          <LessonQuestions
            lesson={lesson}
            onComplete={handleLessonComplete}
            onPrev={() => onStageChange('visuals')}
            savedAnswers={savedAnswers}
            onSaveAnswer={onSaveAnswer}
          />
        )}

        {currentStage === 'complete' && (
          <LessonComplete
            lesson={lesson}
            onContinueLearning={() => {
              if (lesson.completion.nextLessonId && onContinueNextLesson) {
                onContinueNextLesson(lesson.completion.nextLessonId);
              } else {
                onExploreTopics();
              }
            }}
            onExploreTopics={onExploreTopics}
            onRestartLesson={handleRestart}
          />
        )}
      </main>

      {/* Persistent Simple Bottom Navigation Bar */}
      {currentStage !== 'complete' && (
        <footer className="sticky bottom-0 z-30 border-t border-[#E8E5DD] bg-[#FAF9F5]/95 backdrop-blur-md py-3 px-4 sm:px-6 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            {currentStage !== 'intro' ? (
              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  if (currentStage === 'examples') onStageChange('intro');
                  else if (currentStage === 'visuals') onStageChange('examples');
                  else if (currentStage === 'questions') onStageChange('visuals');
                }}
                className="px-4 py-2.5 rounded-xl border border-[#E8E5DD] bg-white hover:bg-[#F4F2EB] text-[#1C1917] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
              >
                <span>◀ Previous</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  onExit();
                }}
                className="px-4 py-2.5 rounded-xl border border-[#E8E5DD] bg-white hover:bg-[#F4F2EB] text-[#6B6861] hover:text-[#1C1917] font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5"
              >
                <span>← Topics</span>
              </button>
            )}

            <div className="text-xs font-mono font-bold text-[#6B6861] hidden sm:block">
              {currentStage === 'intro' && 'Step 1 of 4 · Visual Metaphor 👁️'}
              {currentStage === 'examples' && 'Step 2 of 4 · Real Examples 📖'}
              {currentStage === 'visuals' && 'Step 3 of 4 · Interactive Lab 🖐️'}
              {currentStage === 'questions' && 'Step 4 of 4 · Intuition Check 🎯'}
            </div>

            {currentStage !== 'questions' ? (
              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  if (currentStage === 'intro') onStageChange('examples');
                  else if (currentStage === 'examples') onStageChange('visuals');
                  else if (currentStage === 'visuals') onStageChange('questions');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#D45B34] hover:bg-[#BC4B26] text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-2 active:scale-98"
              >
                <span>
                  {currentStage === 'intro' && 'Next: Examples ▶'}
                  {currentStage === 'examples' && 'Next: Visual Lab ▶'}
                  {currentStage === 'visuals' && 'Next: Quiz ▶'}
                </span>
              </button>
            ) : (
              <div className="text-xs text-[#9E9B93] italic font-medium font-mono">
                Answer on screen above ↑
              </div>
            )}
          </div>
        </footer>
      )}
    </div>
  );
};
