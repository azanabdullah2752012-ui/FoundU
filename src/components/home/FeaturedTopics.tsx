import React from 'react';
import type { Topic } from '../../types';
import { ArrowRight, PieChart, Dot, Percent, Scale, RefreshCw, CheckCircle2 } from 'lucide-react';

interface FeaturedTopicsProps {
  topics: Topic[];
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onExploreAll: () => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  fractions: <PieChart className="w-5 h-5 text-[#D45B34]" />,
  decimals: <Dot className="w-5 h-5 text-[#D45B34]" />,
  percentages: <Percent className="w-5 h-5 text-[#D45B34]" />,
  ratios: <Scale className="w-5 h-5 text-[#D45B34]" />,
  conversions: <RefreshCw className="w-5 h-5 text-[#D45B34]" />,
};

export const FeaturedTopics: React.FC<FeaturedTopicsProps> = ({
  topics,
  completedLessons,
  onSelectLesson,
  onExploreAll,
}) => {
  // Filter for the 5 MVP focus areas
  const mvpTopicIds = ['fractions', 'decimals', 'percentages', 'ratios', 'conversions'];
  const mvpTopics = topics.filter((t) => mvpTopicIds.includes(t.id));

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1917]">
            Core Foundation Areas
          </h2>
          <p className="text-sm text-[#6B6861]">
            Start with the basic building blocks. Each lesson builds a permanent intuition.
          </p>
        </div>
        <button
          type="button"
          onClick={onExploreAll}
          className="text-xs sm:text-sm font-medium text-[#D45B34] hover:text-[#BC4B26] transition-colors flex items-center gap-1"
        >
          <span>View all 8 topics</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mvpTopics.map((topic) => {
          const availableLesson = topic.lessons.find((l) => l.isAvailable);

          return (
            <div
              key={topic.id}
              className="bg-white border border-[#E8E5DD] hover:border-[#D5D1C7] rounded-2xl p-5 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD]">
                    {topicIcons[topic.id] || <PieChart className="w-5 h-5 text-[#D45B34]" />}
                  </div>
                  <span className="text-[11px] font-mono text-[#9E9B93]">
                    {topic.lessons.length} lessons
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1917] mb-1">
                  {topic.title}
                </h3>
                <p className="text-xs text-[#6B6861] mb-4 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Lessons preview */}
              <div className="border-t border-[#E8E5DD]/70 pt-3 space-y-2">
                {topic.lessons.slice(0, 2).map((lesson) => {
                  const isDone = completedLessons.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F] shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5D1C7] shrink-0" />
                        )}
                        <span
                          className={`truncate ${
                            lesson.isAvailable
                              ? 'text-[#1C1917] font-medium'
                              : 'text-[#9E9B93]'
                          }`}
                        >
                          {lesson.title}
                        </span>
                      </div>

                      {lesson.isAvailable ? (
                        <button
                          type="button"
                          onClick={() => onSelectLesson(lesson.id)}
                          className="text-[11px] font-mono font-medium text-[#D45B34] hover:underline shrink-0"
                        >
                          {isDone ? 'Review' : 'Start'}
                        </button>
                      ) : (
                        <span className="text-[10px] font-mono text-[#9E9B93] bg-[#F4F2EB] px-1.5 py-0.5 rounded shrink-0">
                          SOON
                        </span>
                      )}
                    </div>
                  );
                })}

                {availableLesson && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectLesson(availableLesson.id)}
                      className="w-full py-2 bg-[#FAF9F5] hover:bg-[#F4F2EB] text-[#1C1917] border border-[#E8E5DD] rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Learn {availableLesson.title}</span>
                      <ArrowRight className="w-3 h-3 text-[#D45B34]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
