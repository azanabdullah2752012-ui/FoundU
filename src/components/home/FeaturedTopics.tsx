import React from 'react';
import type { Topic } from '../../types';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { TopicMiniVisual } from '../common/TopicMiniVisual';

interface FeaturedTopicsProps {
  topics: Topic[];
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onExploreAll: () => void;
}

const TOPIC_METAPHORS: Record<string, { label: string; number: string }> = {
  fractions: { label: 'Equal slices of a whole disc', number: '01' },
  decimals: { label: 'Base-10 units & 50p coins', number: '02' },
  percentages: { label: 'Battery charge out of 100', number: '03' },
  numbers: { label: 'Basement floors below ground', number: '04' },
  arithmetic: { label: 'Dot arrays & equal sharing', number: '05' },
  'early-algebra': { label: 'Two-pan balance scale', number: '06' },
  ratios: { label: 'Mixing tea & paint proportions', number: '07' },
  conversions: { label: 'Unit ladders & meter powers', number: '08' },
};

export const FeaturedTopics: React.FC<FeaturedTopicsProps> = ({
  topics,
  completedLessons,
  onSelectLesson,
  onExploreAll,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Section Header with Clear Baselines */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8E5DD]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D45B34] font-bold mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bedrock Curriculum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1917]">
            The 8 Foundation Modules
          </h2>
          <p className="text-sm text-[#6B6861] mt-1 max-w-xl">
            Every advanced calculation in science, technology, and finances builds upon these eight concepts.
          </p>
        </div>

        <button
          type="button"
          onClick={onExploreAll}
          className="btn-tactile self-start sm:self-auto text-xs sm:text-sm font-bold text-[#1C1917] hover:text-[#D45B34] transition-colors flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-xl border border-[#E8E5DD] shadow-2xs shrink-0"
        >
          <span>Curriculum View</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D45B34]" />
        </button>
      </div>

      {/* 8 Foundation Module Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {topics.map((topic) => {
          const availableLesson = topic.lessons.find((l) => l.isAvailable) || topic.lessons[0];
          const isDone = availableLesson ? completedLessons.includes(availableLesson.id) : false;
          const meta = TOPIC_METAPHORS[topic.id] || { label: 'Foundation block', number: '00' };

          return (
            <div
              key={topic.id}
              onClick={() => {
                if (availableLesson && availableLesson.isAvailable) {
                  onSelectLesson(availableLesson.id);
                } else {
                  onExploreAll();
                }
              }}
              className="card-atelier p-5 flex flex-col justify-between group cursor-pointer select-none"
            >
              {/* Card Header: Module Number & State */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E5DD]/60">
                  <span className="font-mono text-xs font-bold text-[#9E9B93] group-hover:text-[#D45B34] transition-colors">
                    MODULE {meta.number}
                  </span>

                  {isDone ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      MASTERED
                    </span>
                  ) : availableLesson?.isAvailable ? (
                    <span className="text-[10px] font-mono font-bold text-[#1E6B4F] bg-[#F0F9F5] px-2 py-0.5 rounded-full">
                      LAB READY
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#9E9B93] bg-[#F4F2EB] px-2 py-0.5 rounded-full">
                      IN STUDIO
                    </span>
                  )}
                </div>

                {/* Focal Visual Miniature Artifact */}
                <div className="py-4 my-2 flex items-center justify-center bg-[#FAF9F5] group-hover:bg-[#F5F2EA] rounded-2xl border border-[#E8E5DD]/70 transition-colors">
                  <div className="scale-110 sm:scale-120 transform transition-transform">
                    <TopicMiniVisual topicId={topic.id} />
                  </div>
                </div>

                {/* Topic Title & Core Metaphor */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#1C1917] group-hover:text-[#D45B34] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#D45B34] font-medium">
                    {meta.label}
                  </p>
                  <p className="text-xs text-[#6B6861] line-clamp-2 leading-relaxed pt-1">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* Bottom Baseline Action Button */}
              <div className="pt-4 mt-4 border-t border-[#E8E5DD]/60">
                <div className="w-full py-2.5 px-3 rounded-xl bg-[#FAF9F5] group-hover:bg-[#1C1917] text-[#1C1917] group-hover:text-white border border-[#E8E5DD] group-hover:border-[#1C1917] text-xs font-bold transition-all flex items-center justify-between shadow-2xs">
                  <span>{isDone ? 'Review Module' : availableLesson?.isAvailable ? 'Enter Module' : 'Preview'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
