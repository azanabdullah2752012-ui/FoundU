import React, { useState, useEffect } from 'react';
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // Keys 1..4 select corresponding choice
      if (['1', '2', '3', '4'].includes(e.key)) {
        const choiceIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion.choices[choiceIdx]) {
          e.preventDefault();
          handleSelectChoice(currentQuestion.choices[choiceIdx].id);
        }
        return;
      }

      // Enter key checks answer or advances
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!hasSubmitted && selectedChoiceId) {
          handleCheckAnswer();
        } else if (hasSubmitted && isCorrect) {
          handleNextQuestion();
        }
        return;
      }

      // R key retries
      if (e.key.toLowerCase() === 'r') {
        if (hasSubmitted && !isCorrect) {
          e.preventDefault();
          handleRetry();
        }
        return;
      }

      // P key goes to previous
      if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        handlePrevQuestion();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentQuestion,
    selectedChoiceId,
    hasSubmitted,
    isCorrect,
    currentQuestionIndex,
    isLastQuestion,
  ]);

  return (
    <article className="max-w-4xl mx-auto py-3 sm:py-5 animate-in fade-in duration-200">
      {/* Stage Badge & Step Indicator */}
      <div className="flex items-center justify-between mb-2">
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
      <div className="flex gap-1.5 mb-4">
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

      {/* Main Question Card: Responsive 2-Column when visual is present */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-5 sm:p-6 shadow-xs mb-3">
        <div className={currentQuestion.visual ? 'grid grid-cols-1 md:grid-cols-12 gap-6 items-start' : 'space-y-4'}>
          {/* Question Text & Prompt Visual */}
          <div className={currentQuestion.visual ? 'md:col-span-5 space-y-3' : 'space-y-2'}>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] leading-snug">
              {currentQuestion.questionText}
            </h2>

            {currentQuestion.promptNote && (
              <p className="text-xs sm:text-sm text-[#6B6861]">
                {currentQuestion.promptNote}
              </p>
            )}

            {currentQuestion.visual && (
              <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl p-3 sm:p-4 my-2">
                <VisualRenderer visual={currentQuestion.visual} size="sm" className="my-0" />
              </div>
            )}
          </div>

          {/* Choices & Immediate Actions */}
          <div className={currentQuestion.visual ? 'md:col-span-7 space-y-3' : 'space-y-3 pt-2'}>
            <div className="space-y-2">
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
                    className={`w-full text-left p-3 rounded-xl border ${borderClass} ${bgClass} transition-all flex items-center justify-between group cursor-pointer`}
                  >
                    <div className="flex items-center gap-2.5">
                      <kbd
                        className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium border transition-colors ${
                          isSelected
                            ? 'bg-[#1C1917] border-[#1C1917] text-white'
                            : 'bg-[#FAF9F5] border-[#D5D1C7] text-[#6B6861] group-hover:border-[#1C1917]'
                        }`}
                      >
                        {shortcutNum}
                      </kbd>

                      <div
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-xs font-mono transition-colors ${
                          isSelected
                            ? 'border-[#1C1917] bg-[#1C1917] text-white'
                            : 'border-[#D5D1C7] text-[#9E9B93]'
                        }`}
                      >
                        {isSelected && (
                          <span className="w-1 h-1 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`text-xs sm:text-sm font-medium ${textClass}`}>
                        {choice.text}
                      </span>
                    </div>

                    {choice.visual && (
                      <div className="w-24 sm:w-28 shrink-0 my-auto ml-2">
                        <VisualRenderer visual={choice.visual} size="xs" className="my-0" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Button: Check Answer */}
            {!hasSubmitted && (
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#9E9B93]">
                  Select an option, then press Enter
                </span>
                <button
                  type="button"
                  onClick={handleCheckAnswer}
                  disabled={!selectedChoiceId}
                  className={`px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5 ${
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
                className={`p-3.5 rounded-xl border animate-in fade-in duration-150 ${
                  isCorrect
                    ? 'bg-[#F0F9F5] border-[#B7E4D3]'
                    : 'bg-[#FFFBEB] border-[#FDE68A]'
                }`}
              >
                {isCorrect ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E6B4F]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>That’s right!</span>
                    </div>

                    <p className="text-xs text-[#1C1917] leading-relaxed">
                      {currentQuestion.explanation}
                    </p>

                    <div className="pt-1 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-2 bg-[#1E6B4F] hover:bg-[#15543D] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                      >
                        <span>{isLastQuestion ? 'Complete lesson' : 'Next question'}</span>
                        <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white rounded">
                          Enter ↵
                        </kbd>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#92400E]">
                      <HelpCircle className="w-4 h-4" />
                      <span>Almost — take another look:</span>
                    </div>

                    <p className="text-xs text-[#1C1917] leading-relaxed">
                      {currentQuestion.hint}
                    </p>

                    <div className="pt-1 flex items-center justify-between">
                      <span className="text-[11px] text-[#92400E] font-medium">
                        Touch again to retry!
                      </span>
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="inline-flex items-center gap-1.5 bg-white border border-[#D5D1C7] hover:bg-[#FAF9F5] text-[#1C1917] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
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
        </div>
      </div>

      {/* Navigation footer between questions */}
      <div className="flex items-center justify-between text-xs text-[#6B6861] pt-1">
        <button
          type="button"
          onClick={handlePrevQuestion}
          className="inline-flex items-center gap-1.5 text-[#6B6861] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>
            {currentQuestionIndex === 0
              ? 'Back to Visual Lab'
              : `Question ${currentQuestionIndex}`}
          </span>
          <kbd className="text-[10px] font-mono px-1 py-0.2 bg-white border border-[#E8E5DD] rounded text-[#9E9B93]">
            P
          </kbd>
        </button>

        <div className="flex items-center gap-1.5 text-[11px] text-[#9E9B93] bg-[#FAF9F5] px-2 py-0.5 rounded-lg border border-[#E8E5DD]">
          <span className="font-mono text-[#D45B34] font-medium">Shortcuts:</span>
          <span><kbd className="px-1 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917]">1-4</kbd> Pick</span>
          <span>•</span>
          <span><kbd className="px-1 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] text-[#1C1917]">Enter ↵</kbd> Next</span>
        </div>
      </div>
    </article>
  );
};
