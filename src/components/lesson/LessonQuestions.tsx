import React, { useState } from 'react';
import type { LessonData, Question } from '../../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';
import { VisualRenderer } from '../visual/VisualRenderer';

interface LessonQuestionsProps {
  lesson: LessonData;
  onComplete: () => void;
  onPrev: () => void;
  savedAnswers?: Record<string, string>;
  onSaveAnswer: (questionId: string, choiceId: string) => void;
}

export const LessonQuestions: React.FC<LessonQuestionsProps> = ({
  lesson,
  onComplete,
  onPrev,
  onSaveAnswer,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = lesson.questions;
  const currentQuestion: Question = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Sync state if question index changes
  const handleSelectChoice = (choiceId: string) => {
    if (hasSubmitted && isCorrect) return; // prevent altering after correct answer
    setSelectedChoiceId(choiceId);
    setHasSubmitted(false);
    setIsCorrect(null);
  };

  const handleCheckAnswer = () => {
    if (!selectedChoiceId) return;

    const correct = selectedChoiceId === currentQuestion.correctChoiceId;
    setIsCorrect(correct);
    setHasSubmitted(true);

    if (correct) {
      onSaveAnswer(currentQuestion.id, selectedChoiceId);
    }
  };

  const handleRetry = () => {
    setHasSubmitted(false);
    setIsCorrect(null);
    setSelectedChoiceId(null);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedChoiceId(null);
      setHasSubmitted(false);
      setIsCorrect(null);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedChoiceId(null);
      setHasSubmitted(false);
      setIsCorrect(null);
    } else {
      onPrev();
    }
  };

  // Speed keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // Choice selection via number keys 1-4 or letters a-d
      const numKey = parseInt(e.key, 10);
      if (!isNaN(numKey) && numKey >= 1 && numKey <= currentQuestion.choices.length) {
        if (!hasSubmitted || !isCorrect) {
          e.preventDefault();
          const targetChoice = currentQuestion.choices[numKey - 1];
          if (targetChoice) {
            handleSelectChoice(targetChoice.id);
          }
        }
      } else {
        const letterIndex = ['a', 'b', 'c', 'd'].indexOf(e.key.toLowerCase());
        if (letterIndex !== -1 && letterIndex < currentQuestion.choices.length) {
          if (!hasSubmitted || !isCorrect) {
            e.preventDefault();
            const targetChoice = currentQuestion.choices[letterIndex];
            if (targetChoice) {
              handleSelectChoice(targetChoice.id);
            }
          }
        }
      }

      // Enter to submit or advance
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!hasSubmitted && selectedChoiceId) {
          handleCheckAnswer();
        } else if (hasSubmitted && isCorrect) {
          handleNextQuestion();
        } else if (hasSubmitted && !isCorrect) {
          handleRetry();
        }
      }

      // R to retry
      if (e.key.toLowerCase() === 'r' && hasSubmitted && !isCorrect) {
        e.preventDefault();
        handleRetry();
      }

      // P for previous
      if (e.key.toLowerCase() === 'p' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        handlePrevQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentQuestionIndex,
    currentQuestion,
    selectedChoiceId,
    hasSubmitted,
    isCorrect,
    isLastQuestion,
  ]);

  return (
    <article className="max-w-2xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge & Step Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
            STAGE 04
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
            Practice Questions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#D45B34] hidden sm:inline bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
            Press [1-4] to answer
          </span>
          <div className="font-mono text-xs text-[#6B6861] bg-white border border-[#E8E5DD] px-2.5 py-0.5 rounded-full">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
      </div>

      {/* Progress Pill Bar */}
      <div className="flex gap-1.5 mb-8">
        {questions.map((q, idx) => {
          const isDone = idx < currentQuestionIndex;
          const isCurrent = idx === currentQuestionIndex;
          return (
            <div
              key={q.id}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                isCurrent
                  ? 'bg-[#D45B34]'
                  : isDone
                  ? 'bg-[#1C1917]'
                  : 'bg-[#E8E5DD]'
              }`}
            />
          );
        })}
      </div>

      {/* Question Card */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-8 shadow-xs mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] mb-2">
          {currentQuestion.questionText}
        </h2>

        {currentQuestion.promptNote && (
          <p className="text-sm text-[#6B6861] mb-4">
            {currentQuestion.promptNote}
          </p>
        )}

        {/* Visual prompt if present */}
        {currentQuestion.visual && (
          <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-4 sm:p-5 my-5">
            <VisualRenderer visual={currentQuestion.visual} />
          </div>
        )}

        {/* Choices List */}
        <div className="space-y-3 mt-6">
          {currentQuestion.choices.map((choice, idx) => {
            const isSelected = selectedChoiceId === choice.id;
            const shortcutNum = idx + 1;

            let borderClass = 'border-[#E8E5DD] hover:border-[#D5D1C7]';
            let bgClass = 'bg-white hover:bg-[#FAF9F5]';
            let textClass = 'text-[#1C1917]';

            if (isSelected) {
              borderClass = 'border-[#1C1917] ring-1 ring-[#1C1917]';
              bgClass = 'bg-[#FAF9F5]';
            }

            if (hasSubmitted) {
              if (choice.id === currentQuestion.correctChoiceId) {
                borderClass = 'border-[#1E6B4F] bg-[#F0F9F5] ring-1 ring-[#1E6B4F]';
                textClass = 'text-[#1E6B4F] font-semibold';
              } else if (isSelected && !isCorrect) {
                borderClass = 'border-[#D45B34] bg-[#FDF4F0] ring-1 ring-[#D45B34]';
                textClass = 'text-[#D45B34]';
              }
            }

            return (
              <button
                key={choice.id}
                type="button"
                onClick={() => handleSelectChoice(choice.id)}
                disabled={hasSubmitted && isCorrect === true}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border ${borderClass} ${bgClass} transition-all flex items-center justify-between group cursor-pointer`}
              >
                <div className="flex items-center gap-3">
                  {/* Keyboard key badge for speed */}
                  <kbd
                    className={`px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-mono font-medium border transition-colors ${
                      isSelected
                        ? 'bg-[#1C1917] border-[#1C1917] text-white'
                        : 'bg-[#FAF9F5] border-[#D5D1C7] text-[#6B6861] group-hover:border-[#1C1917]'
                    }`}
                  >
                    {shortcutNum}
                  </kbd>

                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-xs font-mono transition-colors ${
                      isSelected
                        ? 'border-[#1C1917] bg-[#1C1917] text-white'
                        : 'border-[#D5D1C7] text-[#9E9B93]'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1 h-1 rounded-full bg-white" />
                    )}
                  </div>
                  <span className={`text-sm sm:text-base ${textClass}`}>{choice.text}</span>
                </div>

                {choice.visual && (
                  <div className="w-24">
                    <VisualRenderer visual={choice.visual} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button: Check Answer */}
        {!hasSubmitted && (
          <div className="mt-6 pt-4 border-t border-[#E8E5DD] flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#9E9B93] hidden sm:inline">
              Select an option above, then press Enter
            </span>
            <button
              type="button"
              onClick={handleCheckAnswer}
              disabled={!selectedChoiceId}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs flex items-center gap-1.5 ${
                selectedChoiceId
                  ? 'bg-[#1C1917] hover:bg-[#D45B34] text-white cursor-pointer'
                  : 'bg-[#F4F2EB] text-[#9E9B93] cursor-not-allowed'
              }`}
            >
              <span>Check answer</span>
              {selectedChoiceId && (
                <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
                  Enter ↵
                </kbd>
              )}
            </button>
          </div>
        )}

        {/* Feedback Section */}
        {hasSubmitted && (
          <div
            className={`mt-6 p-5 rounded-xl border animate-in fade-in duration-200 ${
              isCorrect
                ? 'bg-[#F0F9F5] border-[#B7E4D3]'
                : 'bg-[#FFFBEB] border-[#FDE68A]'
            }`}
          >
            {isCorrect ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1E6B4F]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>That’s right.</span>
                </div>
                <p className="text-sm text-[#1C1917] leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 bg-[#1E6B4F] hover:bg-[#15543D] text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors shadow-xs"
                  >
                    <span>{isLastQuestion ? 'Complete lesson' : 'Next question'}</span>
                    <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
                      Enter ↵
                    </kbd>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#92400E]">
                  <HelpCircle className="w-4 h-4" />
                  <span>Not quite. Let’s look at what happened.</span>
                </div>
                <p className="text-sm text-[#1C1917] leading-relaxed">
                  {currentQuestion.hint}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#92400E]">
                    The goal is understanding. Take another look!
                  </span>
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#D5D1C7] hover:bg-[#FAF9F5] text-[#1C1917] px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try again</span>
                    <kbd className="text-[10px] font-mono px-1 py-0.2 bg-[#F4F2EB] text-[#6B6861] border border-[#D5D1C7] rounded">
                      R
                    </kbd>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation footer between questions / stages */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#6B6861] gap-3 pt-2">
        <button
          type="button"
          onClick={handlePrevQuestion}
          className="inline-flex items-center gap-1.5 text-[#6B6861] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {currentQuestionIndex === 0
              ? 'Back to video'
              : `Question ${currentQuestionIndex}`}
          </span>
          <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white border border-[#E8E5DD] rounded text-[#9E9B93]">
            P
          </kbd>
        </button>

        {/* Speed shortcuts reminder */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#9E9B93] bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#E8E5DD]">
          <span className="font-mono text-[#D45B34] font-medium">Speed:</span>
          <span><kbd className="px-1 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917]">1-4</kbd> Pick</span>
          <span>•</span>
          <span><kbd className="px-1 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917]">Enter ↵</kbd> Next</span>
          <span>•</span>
          <span><kbd className="px-1 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917]">R</kbd> Retry</span>
        </div>
      </div>
    </article>
  );
};
