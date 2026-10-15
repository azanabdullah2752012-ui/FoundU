import React from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { PickleCorpLogo } from '../brand/PickleCorpLogo';
import { HeroVisualPlayground } from './HeroVisualPlayground';

interface HeroProps {
  onStartLearning: () => void;
  onExploreTopics: () => void;
  onStartLesson?: (lessonId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreTopics,
}) => {
  return (
    <section className="pt-8 pb-14 sm:pt-14 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Authoritative Editorial Manifesto */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Brand Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E5DD] shadow-2xs">
              <PickleCorpLogo variant="compact" showMascot={false} />
              <span className="w-1 h-1 rounded-full bg-[#D45B34]" />
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#6B6861] uppercase">
                Foundations Atelier
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.08]">
              Math was meant to be{' '}
              <span className="text-[#D45B34] underline decoration-[#F3C3B2] decoration-2 underline-offset-8">
                seen
              </span>
              , not memorized.
            </h1>

            {/* Reassuring Subtitle */}
            <p className="text-base sm:text-lg text-[#6B6861] leading-relaxed max-w-lg">
              Touch the pieces, balance the scales, and feel how numbers physically work.
              No abstract Greek symbols, no test anxiety, and zero embarrassment.
            </p>

            {/* Actions: Confident Primary CTA with secondary anchor */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onStartLearning}
                className="btn-tactile inline-flex items-center justify-center gap-2.5 bg-[#1C1917] hover:bg-[#D45B34] text-white px-7 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-sm group cursor-pointer"
              >
                <span>Start with Fractions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F3C3B2]" />
              </button>

              <button
                type="button"
                onClick={onExploreTopics}
                className="btn-tactile inline-flex items-center justify-center gap-2 bg-white border border-[#E8E5DD] hover:bg-[#FAF9F5] hover:border-[#D5D1C7] text-[#1C1917] px-6 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-2xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D45B34]" />
                <span>All 8 Topics</span>
              </button>
            </div>

            {/* Reassurance quote */}
            <p className="text-xs text-[#9E9B93] italic pt-1">
              “I never really got this in school.” &nbsp;—&nbsp; That’s completely okay. We start from real objects.
            </p>

            {/* Quiet craft signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 border-t border-[#E8E5DD]/70 text-xs text-[#6B6861] font-mono">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1E6B4F]" />
                100% Visual Manipulatives
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1E6B4F]" />
                Zero Academic Jargon
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1E6B4F]" />
                Free for Every Mind
              </span>
            </div>
          </div>

          {/* Right Column: Signature Interactive Manipulative Workbench */}
          <div className="lg:col-span-6">
            <HeroVisualPlayground />
          </div>
        </div>
      </div>
    </section>
  );
};
