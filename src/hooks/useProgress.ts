import { useState, useEffect, useCallback } from 'react';
import type { Stage, UserProgress } from '../types';

const STORAGE_KEY = 'foundu_user_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: [],
  inProgressLessonId: undefined,
  lessonCurrentStage: {},
  answeredQuestions: {},
  lastActiveTimestamp: Date.now(),
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load Foundu progress from localStorage', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save Foundu progress to localStorage', e);
    }
  }, [progress]);

  const markLessonComplete = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const isAlreadyComplete = prev.completedLessons.includes(lessonId);
      const nextCompleted = isAlreadyComplete
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons: nextCompleted,
        lessonCurrentStage: {
          ...prev.lessonCurrentStage,
          [lessonId]: 'complete',
        },
        lastActiveTimestamp: Date.now(),
      };
    });
  }, []);

  const saveLessonStage = useCallback((lessonId: string, stage: Stage) => {
    setProgress((prev) => ({
      ...prev,
      inProgressLessonId: lessonId,
      lessonCurrentStage: {
        ...prev.lessonCurrentStage,
        [lessonId]: stage,
      },
      lastActiveTimestamp: Date.now(),
    }));
  }, []);

  const saveAnswer = useCallback((lessonId: string, questionId: string, choiceId: string) => {
    setProgress((prev) => {
      const lessonAnswers = prev.answeredQuestions[lessonId] || {};
      return {
        ...prev,
        answeredQuestions: {
          ...prev.answeredQuestions,
          [lessonId]: {
            ...lessonAnswers,
            [questionId]: choiceId,
          },
        },
        lastActiveTimestamp: Date.now(),
      };
    });
  }, []);

  const getLessonStage = useCallback(
    (lessonId: string): Stage => {
      return progress.lessonCurrentStage[lessonId] || 'intro';
    },
    [progress.lessonCurrentStage]
  );

  const isLessonCompleted = useCallback(
    (lessonId: string): boolean => {
      return progress.completedLessons.includes(lessonId);
    },
    [progress.completedLessons]
  );

  const resetAllProgress = useCallback(() => {
    setProgress(defaultProgress);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset progress', e);
    }
  }, []);

  return {
    progress,
    markLessonComplete,
    saveLessonStage,
    saveAnswer,
    getLessonStage,
    isLessonCompleted,
    resetAllProgress,
  };
}
