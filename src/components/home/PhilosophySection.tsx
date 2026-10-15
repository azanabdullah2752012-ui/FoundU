import React from 'react';
import { Sparkles, X, Check } from 'lucide-react';
import { PickleCorpLogo } from '../brand/PickleCorpLogo';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-[#E8E5DD]">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-[#D45B34] font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The FoundU Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1917]">
          Why school failed you (and how we fix it).
        </h2>
        <p className="text-sm sm:text-base text-[#6B6861] mt-2">
          You were never bad at math. You were just handed formulas before you were allowed to see the shape.
        </p>
      </div>

      {/* Side-by-Side Comparison: The Formula Trap vs. The FoundU Way */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 1: The Formula Trap */}
        <div className="rounded-3xl bg-[#1C1917] text-white p-7 sm:p-8 flex flex-col justify-between shadow-md">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="font-sans text-xs uppercase tracking-wider text-[#F3C3B2] font-bold">
                The School Method
              </span>
              <span className="text-xs font-sans text-white/60 font-medium">Abstract Rules</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">
              The Formula Trap
            </h3>
            <p className="text-xs sm:text-sm text-[#D5D1C7] leading-relaxed mb-6">
              Dry chalkboards, memorizing arbitrary recipes like “invert and multiply” or “borrow from the next column” with zero physical grounding.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#D5D1C7]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 text-[#F3C3B2] flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>Taught that speed and memorization equal intelligence.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 text-[#F3C3B2] flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>One slight twist in a test question causes complete panic.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white/10 text-[#F3C3B2] flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </span>
                <span>Left millions of adults believing they “just don’t have a math brain.”</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-sans text-white/60">
            Outcome: Forgotten within days of the exam.
          </div>
        </div>

        {/* Card 2: The FoundU Method */}
        <div className="rounded-3xl bg-white border-2 border-[#D45B34]/30 p-7 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E5DD] mb-5">
              <span className="font-sans text-xs uppercase tracking-wider text-[#D45B34] font-bold">
                The FoundU Way
              </span>
              <span className="text-xs font-sans text-[#1E6B4F] font-bold">Physical Intuition</span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-[#1C1917]">
              Sight, Touch &amp; Balance
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6861] leading-relaxed mb-6">
              Before seeing a single equation, you touch the slices, watch the balance scale tip, and see the liquid pour. The rule becomes self-evident.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#1C1917]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Fractions are slices of a disc; negative numbers are basement floors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Zero timers, zero synthetic coins, zero streak guilt. Pure calm clarity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Builds genuine mental bedrock you can visualize for the rest of your life.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-[#E8E5DD] text-xs font-sans text-[#D45B34] font-bold">
            Outcome: Permanent intuition that never leaves you.
          </div>
        </div>
      </div>

      {/* Pickle Corp Brand Sign-Off */}
      <div className="mt-12 p-6 rounded-2xl bg-[#FAF9F5] border border-[#E8E5DD] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <PickleCorpLogo variant="compact" showMascot={true} gummyColor="terracotta" />
          <div className="text-left">
            <span className="font-bold text-xs text-[#1C1917] block">Built by Pickle Corp</span>
            <span className="text-[11px] text-[#6B6861]">Dedicated to dignity, craftsmanship, and human clarity.</span>
          </div>
        </div>
        <span className="text-xs font-sans text-[#9E9B93] font-medium">Always Free &bull; Open Web</span>
      </div>
    </section>
  );
};
