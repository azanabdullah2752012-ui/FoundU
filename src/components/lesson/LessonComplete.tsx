import React, { useEffect, useState } from 'react';
import type { LessonData } from '../../types';
import { ArrowRight, CheckCircle2, RotateCcw, BookOpen, Share2, Copy, Check, Award } from 'lucide-react';
import { sound } from '../../utils/sound';
import { PickleCorpTorchIcon } from '../brand/PickleCorpLogo';

interface LessonCompleteProps {
  lesson: LessonData;
  onContinueLearning: () => void;
  onExploreTopics: () => void;
  onRestartLesson: () => void;
}

export const LessonComplete: React.FC<LessonCompleteProps> = ({
  lesson,
  onContinueLearning,
  onExploreTopics,
  onRestartLesson,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    sound.playCelebration();
  }, []);

  const shareText = `🎓 I just mastered "${lesson.title}" on FoundU with 100% visual intuition (no memorizing formulas)! Check it out here: ${window.location.href}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleCopyLink = () => {
    sound.playTap();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = () => {
    sound.playTap();
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `FoundU: Mastered ${lesson.title}`,
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  return (
    <article className="max-w-2xl mx-auto py-8 sm:py-12 text-center animate-in fade-in duration-300">
      {/* Calm, purposeful completion mark */}
      <div className="w-16 h-16 rounded-2xl bg-[#F0F9F5] border border-[#B7E4D3] text-[#1E6B4F] flex items-center justify-center mx-auto mb-5 shadow-xs">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1C1917] mb-2">
        {lesson.completion.title}
      </h1>

      <p className="text-base sm:text-lg text-[#6B6861] mb-6 leading-relaxed max-w-md mx-auto">
        {lesson.completion.subtitle}
      </p>

      {/* Shareable Visual Certificate of Mastery */}
      <div className="bg-white border-2 border-[#E8E5DD] rounded-2xl p-6 sm:p-7 text-left shadow-md mb-6 relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FDF4F0] via-transparent to-transparent pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-[#E8E5DD] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white border border-[#E8E5DD] flex items-center justify-center p-1 shadow-2xs">
              <PickleCorpTorchIcon size={20} />
            </div>
            <div>
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D45B34]">
                FoundU Workshop Certificate
              </div>
              <div className="text-sm font-bold text-[#1C1917]">
                Visual Mastery Verified
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2.5 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>100% Completed</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-sans text-[#9E9B93] uppercase tracking-wider mb-1 font-semibold">
            Topic Mastered:
          </div>
          <div className="text-xl sm:text-2xl font-black text-[#1C1917]">
            {lesson.title}
          </div>
          <div className="text-xs text-[#6B6861] mt-0.5">
            Zero memorization · Understood through physical visual models
          </div>
        </div>

        {/* What was learned recap */}
        <div className="space-y-2 pt-2 border-t border-[#FAF9F5]">
          <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#9E9B93]">
            Core Intuitions Unlocked
          </div>
          <ul className="space-y-1.5">
            {lesson.completion.summaryPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1C1917]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D45B34] shrink-0 mt-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp & Social Share Bar */}
        <div className="mt-6 pt-4 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playSuccess()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <span>🟢 Share to WhatsApp</span>
          </a>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleNativeShare}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#E8E5DD] hover:bg-[#FAF9F5] text-xs font-sans font-bold text-[#1C1917] transition-colors cursor-pointer"
              title="Share report"
            >
              <Share2 className="w-3.5 h-3.5 text-[#6B6861]" />
              <span>Share</span>
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#E8E5DD] hover:bg-[#FAF9F5] text-xs font-sans font-bold text-[#1C1917] transition-colors cursor-pointer"
              title="Copy link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1E6B4F]" />
                  <span className="text-[#1E6B4F]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#6B6861]" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <button
          type="button"
          onClick={onContinueLearning}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D45B34]"
        >
          <span>Continue to next lesson</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={onExploreTopics}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-[#E8E5DD] hover:bg-[#FAF9F5] text-[#1C1917] px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D45B34]"
        >
          <BookOpen className="w-4 h-4 text-[#6B6861]" />
          <span>Explore all topics</span>
        </button>
      </div>

      {/* Understated restart option */}
      <button
        type="button"
        onClick={onRestartLesson}
        className="inline-flex items-center gap-1.5 text-xs text-[#9E9B93] hover:text-[#6B6861] transition-colors cursor-pointer"
      >
        <RotateCcw className="w-3 h-3" />
        <span>Review this lesson from the beginning</span>
      </button>
    </article>
  );
};
