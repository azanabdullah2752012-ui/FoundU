import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  BookOpen,
  AlertTriangle,
  Wrench,
  Sparkles,
  ArrowRight,
  X,
  CornerDownLeft,
} from 'lucide-react';
import { FOUNDATION_TOPICS } from '../../data/topics';
import { PEDAGOGY_REGISTRY } from '../../data/pedagogyData';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lessonId: string) => void;
}

type ResultCategory = 'lesson' | 'trap' | 'tool' | 'metaphor';

interface SearchResultItem {
  id: string;
  lessonId: string;
  title: string;
  subtitle: string;
  category: ResultCategory;
  categoryLabel: string;
  topicTitle: string;
  badge?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState<'all' | ResultCategory>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSelectedIndex(0);
  };

  const handleFilterCategoryChange = (cat: 'all' | ResultCategory) => {
    setFilterCategory(cat);
    setSelectedIndex(0);
  };

  // Aggregate searchable items
  const allSearchItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    FOUNDATION_TOPICS.forEach((topic) => {
      topic.lessons.forEach((lesson) => {
        const pedagogy = PEDAGOGY_REGISTRY[lesson.id];

        // 1. Direct Lesson Entry
        items.push({
          id: `lesson-${lesson.id}`,
          lessonId: lesson.id,
          title: lesson.title,
          subtitle: lesson.description,
          category: 'lesson',
          categoryLabel: 'Lesson',
          topicTitle: topic.title,
          badge: `${lesson.estimatedMinutes} min`,
        });

        if (pedagogy) {
          // 2. Brain Trap (Misconception Buster)
          if (pedagogy.brainTrap) {
            items.push({
              id: `trap-${lesson.id}`,
              lessonId: lesson.id,
              title: pedagogy.brainTrap.title,
              subtitle: `Trap: "${pedagogy.brainTrap.trapStatement}". ${pedagogy.brainTrap.whyItTricksUs}`,
              category: 'trap',
              categoryLabel: 'Brain Trap',
              topicTitle: topic.title,
              badge: 'Misconception',
            });
          }

          // 3. Visual Lab Tool & Physical Challenge
          if (pedagogy.challenge) {
            const toolLabel = pedagogy.challenge.type.replace(/-/g, ' ');
            items.push({
              id: `tool-${lesson.id}`,
              lessonId: lesson.id,
              title: `${toolLabel.charAt(0).toUpperCase() + toolLabel.slice(1)} Lab`,
              subtitle: `Challenge: ${pedagogy.challenge.prompt}`,
              category: 'tool',
              categoryLabel: 'Visual Tool',
              topicTitle: topic.title,
              badge: 'Interactive Lab',
            });
          }

          // 4. Real-World Metaphor (ELI8)
          if (pedagogy.metaphor) {
            items.push({
              id: `metaphor-${lesson.id}`,
              lessonId: lesson.id,
              title: `${pedagogy.metaphor.emoji} ${pedagogy.metaphor.title}`,
              subtitle: `Intuition Anchor: ${pedagogy.metaphor.kidExplanation}`,
              category: 'metaphor',
              categoryLabel: 'Metaphor',
              topicTitle: topic.title,
              badge: 'Intuition Anchor',
            });
          }
        }
      });
    });

    return items;
  }, []);

  // Filter items based on query and active category chip
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return allSearchItems.filter((item) => {
      if (filterCategory !== 'all' && item.category !== filterCategory) {
        return false;
      }
      if (!trimmed) return true;

      return (
        item.title.toLowerCase().includes(trimmed) ||
        item.subtitle.toLowerCase().includes(trimmed) ||
        item.topicTitle.toLowerCase().includes(trimmed) ||
        item.categoryLabel.toLowerCase().includes(trimmed)
      );
    });
  }, [allSearchItems, query, filterCategory]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < filteredResults.length ? prev + 1 : 0));
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredResults.length - 1));
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          const selected = filteredResults[selectedIndex];
          onSelectLesson(selected.lessonId);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onSelectLesson, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const categoryIcons: Record<ResultCategory, React.ReactNode> = {
    lesson: <BookOpen className="w-3.5 h-3.5 text-[#D45B34]" />,
    trap: <AlertTriangle className="w-3.5 h-3.5 text-[#B45309]" />,
    tool: <Wrench className="w-3.5 h-3.5 text-[#0F766E]" />,
    metaphor: <Sparkles className="w-3.5 h-3.5 text-[#4338CA]" />,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[82vh]">
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-4 border-b border-[#E8E5DD] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#9E9B93] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search lessons, misconceptions, visual tools, or metaphors..."
            className="flex-1 bg-transparent text-[#1C1917] placeholder-[#9E9B93] text-sm sm:text-base outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => handleQueryChange('')}
              className="p-1 text-[#9E9B93] hover:text-[#1C1917] transition-colors rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#9E9B93] bg-[#FAF9F5] border border-[#E8E5DD] rounded">
            Esc
          </kbd>
        </div>

        {/* Filter Category Chips */}
        <div className="px-4 py-2 bg-[#FAF9F5] border-b border-[#E8E5DD] flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-[11px] font-mono text-[#9E9B93] mr-1 uppercase">Filter:</span>
          {(
            [
              { id: 'all', label: 'All Results' },
              { id: 'lesson', label: 'Lessons' },
              { id: 'trap', label: 'Brain Traps' },
              { id: 'tool', label: 'Visual Tools' },
              { id: 'metaphor', label: 'Metaphors' },
            ] as const
          ).map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => handleFilterCategoryChange(filter.id)}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                filterCategory === filter.id
                  ? 'bg-[#1C1917] text-white shadow-2xs'
                  : 'bg-white border border-[#E8E5DD] text-[#6B6861] hover:text-[#1C1917]'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] font-mono text-[#9E9B93] shrink-0">
            {filteredResults.length} {filteredResults.length === 1 ? 'match' : 'matches'}
          </span>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="overflow-y-auto divide-y divide-[#E8E5DD]/60 flex-1 p-2 space-y-1"
        >
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[#6B6861]">
              <p className="text-sm font-medium mb-1">No matching concepts found</p>
              <p className="text-xs text-[#9E9B93]">
                Try searching for “fractions”, “elevator”, “odd numbers”, or “balance scale”
              </p>
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-selected={isSelected}
                  onClick={() => {
                    onSelectLesson(item.lessonId);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-white border border-[#D45B34]/30 shadow-xs ring-1 ring-[#D45B34]/20'
                      : 'hover:bg-white/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div className="mt-0.5 p-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E5DD] shrink-0">
                      {categoryIcons[item.category]}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="font-semibold text-sm text-[#1C1917] truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 bg-[#FAF9F5] border border-[#E8E5DD] rounded text-[#6B6861]">
                          {item.topicTitle}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#FDF4F0] border border-[#F3C3B2] text-[#D45B34] rounded">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#6B6861] line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 pt-1">
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D45B34] font-medium bg-[#FDF4F0] px-2 py-0.5 rounded-md border border-[#F3C3B2]">
                        <span>Jump</span>
                        <CornerDownLeft className="w-3 h-3" />
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-[#9E9B93]" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Key Legend */}
        <div className="px-4 py-2.5 bg-white border-t border-[#E8E5DD] flex items-center justify-between text-[11px] font-mono text-[#9E9B93]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-[#FAF9F5] border border-[#E8E5DD] rounded text-[#1C1917]">
                ↑
              </kbd>{' '}
              <kbd className="px-1 py-0.5 bg-[#FAF9F5] border border-[#E8E5DD] rounded text-[#1C1917]">
                ↓
              </kbd>{' '}
              navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-[#FAF9F5] border border-[#E8E5DD] rounded text-[#1C1917]">
                ↵
              </kbd>{' '}
              select
            </span>
          </div>
          <span>Foundu Concept Index</span>
        </div>
      </div>
    </div>
  );
};
