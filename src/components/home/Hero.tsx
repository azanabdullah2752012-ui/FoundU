import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PickleCorpLogo } from '../brand/PickleCorpLogo';
import { HeroVisualPlayground } from './HeroVisualPlayground';
import { TRANSLATIONS, type Language } from '../../utils/language';

interface HeroProps {
  language: Language;
  onStartLearning: () => void;
  onExploreTopics: () => void;
  onStartLesson: (lessonId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onStartLearning,
  onExploreTopics,
  onStartLesson,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section className="py-8 sm:py-16 text-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Pickle Corp Official Logo & Gummy Mascot Pill */}
        <div className="flex flex-col items-center justify-center mb-5">
          <PickleCorpLogo variant="badge" showMascot={true} gummyColor="terracotta" />
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C1917] mb-3 leading-[1.15]">
          {t.heroHeadline}
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#6B6861] mb-6 max-w-xl mx-auto leading-relaxed">
          {t.heroSubheadline}
        </p>

        {/* Interactive Visual Manipulative Playground */}
        <HeroVisualPlayground
          language={language}
          onStartLesson={onStartLesson}
        />

        {/* Big Clear Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={onStartLearning}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1C1917] hover:bg-[#D45B34] text-white px-8 py-4 rounded-2xl font-bold text-base transition-colors shadow-sm group cursor-pointer active:scale-98"
          >
            <span>{t.startLearning}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onExploreTopics}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-[#E8E5DD] hover:bg-[#FAF9F5] text-[#1C1917] px-7 py-4 rounded-2xl font-bold text-base transition-colors shadow-xs cursor-pointer active:scale-98"
          >
            <BookOpen className="w-4 h-4 text-[#D45B34]" />
            <span>{t.exploreTopics}</span>
          </button>
        </div>

        {/* Supporting quiet reassurance */}
        <div className="mt-8 pt-6 border-t border-[#E8E5DD]/70 max-w-lg mx-auto">
          <p className="text-xs text-[#9E9B93] italic">
            {t.heroQuote}
          </p>
        </div>
      </div>
    </section>
  );
};
