import React, { useState } from 'react';
import type { Topic } from '../../types';
import {
  Search,
  CheckCircle2,
  Lock,
  PieChart,
  Dot,
  Percent,
  Scale,
  RefreshCw,
  Binary,
  Calculator,
  Variable,
} from 'lucide-react';

interface TopicLibraryProps {
  topics: Topic[];
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onBackToHome?: () => void;
}

const topicIconMap: Record<string, React.ReactNode> = {
  fractions: <PieChart className="w-5 h-5 text-[#D45B34]" />,
  decimals: <Dot className="w-5 h-5 text-[#D45B34]" />,
  percentages: <Percent className="w-5 h-5 text-[#D45B34]" />,
  ratios: <Scale className="w-5 h-5 text-[#D45B34]" />,
  conversions: <RefreshCw className="w-5 h-5 text-[#D45B34]" />,
  numbers: <Binary className="w-5 h-5 text-[#D45B34]" />,
  arithmetic: <Calculator className="w-5 h-5 text-[#D45B34]" />,
  'early-algebra': <Variable className="w-5 h-5 text-[#D45B34]" />,
};

export const TopicLibrary: React.FC<TopicLibraryProps> = ({
  topics,
  completedLessons,
  onSelectLesson,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'available'>('all');

  const filteredTopics = topics
    .map((topic) => {
      const matchesTopic =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase());

      const filteredLessons = topic.lessons.filter((l) => {
        const matchesLesson =
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.description.toLowerCase().includes(searchQuery.toLowerCase());

        if (filterMode === 'available') {
          return (matchesTopic || matchesLesson) && l.isAvailable;
        }
        return matchesTopic || matchesLesson;
      });

      return {
        ...topic,
        lessons: filteredLessons,
      };
    })
    .filter((topic) => topic.lessons.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 animate-in fade-in duration-200">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D45B34]">
            Curriculum
          </span>
          <span className="text-[#9E9B93] text-xs">•</span>
          <span className="text-xs font-mono text-[#6B6861]">
            8 Foundation Areas
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-2">
          YOUR FOUNDATION
        </h1>
        <p className="text-base text-[#6B6861] max-w-2xl leading-relaxed">
          The essential concepts people are expected to know, broken down with zero jargon.
          Select any available lesson to start strengthening your understanding.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#9E9B93] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search concepts, e.g. fractions, decimals, place value..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8E5DD] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D45B34] text-[#1C1917] placeholder:text-[#9E9B93]"
          />
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#F4F2EB] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterMode === 'all'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#6B6861] hover:text-[#1C1917]'
            }`}
          >
            All Lessons
          </button>
          <button
            type="button"
            onClick={() => setFilterMode('available')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filterMode === 'available'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#6B6861] hover:text-[#1C1917]'
            }`}
          >
            Available Now
          </button>
        </div>
      </div>

      {/* Topic Grid */}
      <div className="space-y-8">
        {filteredTopics.map((topic) => (
          <section
            key={topic.id}
            className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 shadow-xs"
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#E8E5DD]/70">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E8E5DD]">
                  {topicIconMap[topic.id] || <PieChart className="w-5 h-5 text-[#D45B34]" />}
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[#1C1917]">
                    {topic.title}
                  </h2>
                  <p className="text-xs text-[#6B6861] mt-0.5">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Lessons List in Topic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topic.lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);

                return (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                      lesson.isAvailable
                        ? 'bg-[#FAF9F5] hover:bg-white hover:border-[#D5D1C7] border-[#E8E5DD] group cursor-pointer'
                        : 'bg-[#FAF9F5]/40 border-[#E8E5DD]/60 opacity-75'
                    }`}
                    onClick={() => {
                      if (lesson.isAvailable) {
                        onSelectLesson(lesson.id);
                      }
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-[#1C1917] group-hover:text-[#D45B34] transition-colors flex items-center gap-1.5">
                          {isCompleted && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F]" />
                          )}
                          <span>{lesson.title}</span>
                        </span>

                        {lesson.isAvailable ? (
                          <span className="text-[10px] font-mono font-medium text-[#1E6B4F] bg-[#F0F9F5] border border-[#B7E4D3] px-2 py-0.5 rounded">
                            {isCompleted ? 'COMPLETED' : 'AVAILABLE'}
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[#9E9B93] bg-[#F4F2EB] px-2 py-0.5 rounded">
                            COMING SOON
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#6B6861] line-clamp-2 mb-3 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#9E9B93] pt-2 border-t border-[#E8E5DD]/40">
                      <span>{lesson.estimatedMinutes} min</span>
                      {lesson.isAvailable ? (
                        <span className="text-[#D45B34] font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                          {isCompleted ? 'Review' : 'Start lesson'} →
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[#9E9B93]">
                          <Lock className="w-3 h-3" />
                          In creation
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 bg-white border border-[#E8E5DD] rounded-2xl p-8">
            <p className="text-sm text-[#6B6861] mb-3">
              No matching lessons found for “{searchQuery}”.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setFilterMode('all');
              }}
              className="text-xs font-medium text-[#D45B34] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
