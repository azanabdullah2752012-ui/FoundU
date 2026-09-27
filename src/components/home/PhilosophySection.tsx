import React from 'react';
import { Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-[#E8E5DD]/70 my-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D45B34] mb-2">
          THE FOUNDU PHILOSOPHY
        </h2>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
          Designed for understanding, not judgment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center text-[#D45B34] mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base text-[#1C1917] mb-2">
            Foundation + U
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
            Everything in math and science builds in layers. If a foundation is shaky, higher concepts collapse. We rebuild the bedrock.
          </p>
        </div>

        <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center text-[#D45B34] mb-4">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base text-[#1C1917] mb-2">
            Found + U
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
            Finding the clarity you may have missed in school. There is zero embarrassment here: no patronizing timers, no leaderboard pressure.
          </p>
        </div>

        <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD] flex items-center justify-center text-[#D45B34] mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base text-[#1C1917] mb-2">
            No Gamified Noise
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed">
            No synthetic coins, no loss-aversion streak mechanics, no cartoon distractions. Pure, clear, dignified education for human minds.
          </p>
        </div>
      </div>
    </section>
  );
};
