import React, { useEffect } from 'react';
import type { LessonData, Stage } from '../../types';
import { LessonProgress } from './LessonProgress';
import { LessonIntro } from './LessonIntro';
import { LessonExamples } from './LessonExamples';
import { LessonVisualLab } from './LessonVisualLab';
import { LessonQuestions } from './LessonQuestions';
import { LessonComplete } from './LessonComplete';

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
      <main className="flex-1 px-4 sm:px-6">
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
    </div>
  );
};
