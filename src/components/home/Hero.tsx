import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { PickleCorpLogo } from '../brand/PickleCorpLogo';

interface HeroProps {
  onStartLearning: () => void;
  onExploreTopics: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreTopics,
}) => {
  return (
    <section className="py-12 sm:py-20 text-center px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Pickle Corp Official Logo & Gummy Mascot Pill */}
        <div className="flex flex-col items-center justify-center mb-6">
          <PickleCorpLogo variant="badge" showMascot={true} gummyColor="green" />
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1C1917] mb-6 leading-[1.1]">
          UNDERSTAND THE BASICS.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#6B6861] mb-10 max-w-2xl mx-auto leading-relaxed">
          Foundu helps you understand the foundations that everything else is built on.
          No embarrassment, no fake rewards, no assumed knowledge. Just clear, patient intuition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onStartLearning}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1C1917] hover:bg-[#D45B34] text-white px-7 py-3.5 rounded-xl font-medium text-base transition-colors shadow-xs group"
          >
            <span>START LEARNING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onExploreTopics}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-[#E8E5DD] hover:bg-[#FAF9F5] text-[#1C1917] px-6 py-3.5 rounded-xl font-medium text-base transition-colors shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-[#6B6861]" />
            <span>EXPLORE TOPICS</span>
          </button>
        </div>

        {/* Supporting quiet reassurance */}
        <div className="mt-12 pt-8 border-t border-[#E8E5DD]/70 max-w-lg mx-auto">
          <p className="text-xs text-[#9E9B93] italic">
            “I somehow never really understood this.” &nbsp;—&nbsp; That’s okay. Let’s start from the beginning.
          </p>
        </div>
      </div>
    </section>
  );
};
