import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Download,
  BookOpen,
  PieChart,
  Dot,
  Percent,
  Scale,
  RefreshCw,
  Binary,
  Calculator,
  Variable,
  Compass,
} from 'lucide-react';
import type { UserProgress } from '../../types';
import { FOUNDATION_TOPICS } from '../../data/topics';
import { PEDAGOGY_REGISTRY } from '../../data/pedagogyData';

interface MasteryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  onResetProgress?: () => void;
}

const topicIconMap: Record<string, React.ReactNode> = {
  fractions: <PieChart className="w-4 h-4 text-[#D45B34]" />,
  decimals: <Dot className="w-4 h-4 text-[#D45B34]" />,
  percentages: <Percent className="w-4 h-4 text-[#D45B34]" />,
  ratios: <Scale className="w-4 h-4 text-[#D45B34]" />,
  conversions: <RefreshCw className="w-4 h-4 text-[#D45B34]" />,
  numbers: <Binary className="w-4 h-4 text-[#D45B34]" />,
  arithmetic: <Calculator className="w-4 h-4 text-[#D45B34]" />,
  'early-algebra': <Variable className="w-4 h-4 text-[#D45B34]" />,
  geometry: <Compass className="w-4 h-4 text-[#D45B34]" />,
};

export const MasteryDrawer: React.FC<MasteryDrawerProps> = ({
  isOpen,
  onClose,
  progress,
  onSelectLesson,
  onResetProgress,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isOpen) return null;

  const totalLessons = FOUNDATION_TOPICS.reduce(
    (acc, topic) => acc + topic.lessons.length,
    0
  );
  const completedCount = progress.completedLessons.length;
  const overallPercent = Math.round((completedCount / totalLessons) * 100);

  // Count conquered Brain Traps
  const conqueredTrapsCount = progress.completedLessons.filter(
    (id) => PEDAGOGY_REGISTRY[id]?.brainTrap
  ).length;

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `foundu_mastery_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleConfirmReset = () => {
    if (onResetProgress) {
      onResetProgress();
      setShowResetConfirm(false);
      onClose();
    } else {
      localStorage.removeItem('foundu_user_progress_v1');
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Drawer Panel */}
      <aside className="relative w-full max-w-md bg-[#FAF9F5] border-l border-[#E8E5DD] shadow-2xl h-full flex flex-col z-10 overflow-hidden">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E5DD] bg-white flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#9E9B93]">
              Personal Learning Ledger
            </div>
            <h2 className="text-xl font-black text-[#1C1917] tracking-tight">
              Foundational Mastery
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#9E9B93] hover:text-[#1C1917] hover:bg-[#FAF9F5] rounded-xl transition-colors cursor-pointer"
            aria-label="Close mastery ledger"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Milestone Metrics Box */}
          <div className="bg-white border border-[#E8E5DD] rounded-2xl p-4 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#6B6861] uppercase tracking-wider font-semibold">
                Overall Progress
              </span>
              <span className="font-mono text-sm font-bold text-[#D45B34]">
                {completedCount} / {totalLessons} ({overallPercent}%)
              </span>
            </div>

            {/* Quiet baseline progress bar */}
            <div className="w-full h-2 bg-[#FAF9F5] rounded-full overflow-hidden border border-[#E8E5DD]">
              <div
                className="h-full bg-[#D45B34] transition-all duration-300"
                style={{ width: `${overallPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8E5DD]/60">
              <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E8E5DD]">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6B6861] mb-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#B45309]" />
                  <span>Traps Busted</span>
                </div>
                <div className="font-mono text-lg font-black text-[#1C1917]">
                  {conqueredTrapsCount}
                </div>
              </div>

              <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-[#E8E5DD]">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6B6861] mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F]" />
                  <span>Mental Models</span>
                </div>
                <div className="font-mono text-lg font-black text-[#1C1917]">
                  {completedCount}
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown By Topic Domain */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E9B93]">
              Curriculum Domains
            </div>

            <div className="space-y-2">
              {FOUNDATION_TOPICS.map((topic) => {
                const topicLessons = topic.lessons;
                const completedInTopic = topicLessons.filter((l) =>
                  progress.completedLessons.includes(l.id)
                ).length;
                const topicPercent = Math.round(
                  (completedInTopic / topicLessons.length) * 100
                );

                return (
                  <div
                    key={topic.id}
                    className="bg-white border border-[#E8E5DD] rounded-xl p-3 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E5DD]">
                          {topicIconMap[topic.id] || <BookOpen className="w-3.5 h-3.5 text-[#D45B34]" />}
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-[#1C1917]">
                          {topic.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#6B6861]">
                        {completedInTopic}/{topicLessons.length}
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-[#FAF9F5] rounded-full overflow-hidden border border-[#E8E5DD]">
                      <div
                        className="h-full bg-[#1C1917] transition-all duration-200"
                        style={{ width: `${topicPercent}%` }}
                      />
                    </div>

                    {/* Lesson Status Dots */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {topicLessons.map((lesson) => {
                        const isDone = progress.completedLessons.includes(lesson.id);
                        const isInProgress = progress.inProgressLessonId === lesson.id;
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => {
                              onSelectLesson(lesson.id);
                              onClose();
                            }}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer flex items-center gap-1 ${
                              isDone
                                ? 'bg-[#F0F9F5] text-[#1E6B4F] border border-[#B7E4D3] font-semibold'
                                : isInProgress
                                ? 'bg-[#FDF4F0] text-[#D45B34] border border-[#F3C3B2] font-semibold'
                                : 'bg-[#FAF9F5] text-[#9E9B93] border border-[#E8E5DD] hover:text-[#1C1917]'
                            }`}
                            title={lesson.title}
                          >
                            {isDone && <CheckCircle2 className="w-2.5 h-2.5" />}
                            <span className="truncate max-w-[120px]">{lesson.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backup & Data Freedom */}
          <div className="bg-white border border-[#E8E5DD] rounded-xl p-3 shadow-2xs space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E9B93]">
              Data Freedom & Backup
            </div>
            <p className="text-xs text-[#6B6861] leading-relaxed">
              Your progress is stored locally in your browser without accounts or trackers. You can export a backup anytime.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleExportData}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FAF9F5] hover:bg-[#F4F2EB] border border-[#E8E5DD] text-[#1C1917] px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#6B6861]" />
                <span>Export JSON</span>
              </button>

              {!showResetConfirm ? (
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#9E9B93] hover:text-[#D45B34] hover:bg-[#FDF4F0] border border-transparent hover:border-[#F3C3B2] transition-colors cursor-pointer"
                >
                  Reset Progress
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleConfirmReset}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-[#D45B34] text-white font-bold cursor-pointer"
                  >
                    Confirm Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(false)}
                    className="px-2 py-1.5 text-xs text-[#6B6861] cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-white border-t border-[#E8E5DD] text-center text-[11px] font-mono text-[#9E9B93]">
          Foundu • Understand the basics. Build everything else from there.
        </div>
      </aside>
    </div>
  );
};
