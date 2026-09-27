import React, { useState, useEffect, useRef } from 'react';
import type { LessonData } from '../../types';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  FileText,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

interface LessonVideoProps {
  lesson: LessonData;
  onNext: () => void;
  onPrev: () => void;
}

export const LessonVideo: React.FC<LessonVideoProps> = ({
  lesson,
  onNext,
  onPrev,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showCustomUrlInput, setShowCustomUrlInput] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [activeExternalUrl, setActiveExternalUrl] = useState<string | null>(null);

  const duration = lesson.video.durationSeconds || 160;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying && !activeExternalUrl) {
      const interval = 250;
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + (interval / 1000) * playbackSpeed;
          if (next >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return next;
        });
      }, interval);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed, duration, activeExternalUrl]);

  const togglePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Determine animation phase for interactive visual playback simulation
  const progressRatio = currentTime / duration;
  let activePhase = 1;
  let captionText = lesson.video.transcript[0] || '';

  if (progressRatio < 0.25) {
    activePhase = 1;
    captionText = lesson.video.transcript[0] || 'A whole unit before any divisions.';
  } else if (progressRatio < 0.5) {
    activePhase = 2;
    captionText =
      lesson.video.transcript[1] ||
      lesson.video.transcript[2] ||
      'Cutting into two equal parts: each is 1/2.';
  } else if (progressRatio < 0.75) {
    activePhase = 3;
    captionText =
      lesson.video.transcript[3] ||
      lesson.video.transcript[4] ||
      'Four equal parts: each piece is 1/4. Smaller slices!';
  } else {
    activePhase = 4;
    captionText =
      lesson.video.transcript[5] ||
      lesson.video.transcript[6] ||
      '2 of the quarter pieces match 1 half piece perfectly.';
  }

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 1200);
  };

  const setSpeedWithToast = (speed: number, keyHint?: string) => {
    setPlaybackSpeed(speed);
    showToast(`Speed: ${speed}x${keyHint ? ` [${keyHint}]` : ''}`);
  };

  const seekRelative = (deltaSeconds: number, keyHint?: string) => {
    setCurrentTime((prev) => {
      const next = Math.max(0, Math.min(duration, prev + deltaSeconds));
      showToast(`${deltaSeconds > 0 ? '+' : ''}${deltaSeconds}s (${formatSeconds(next)})${keyHint ? ` [${keyHint}]` : ''}`);
      return next;
    });
  };

  // Keyboard shortcuts for video & speed control
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in a form or input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
        showToast(isPlaying ? 'Paused [Space]' : 'Playing [Space]');
      } else if (e.key === '0') {
        e.preventDefault();
        setSpeedWithToast(0.75, '0');
      } else if (e.key === '1') {
        e.preventDefault();
        setSpeedWithToast(1, '1');
      } else if (e.key === '2') {
        e.preventDefault();
        setSpeedWithToast(1.25, '2');
      } else if (e.key === '3') {
        e.preventDefault();
        setSpeedWithToast(1.5, '3');
      } else if (e.key === '4') {
        e.preventDefault();
        setSpeedWithToast(2, '4');
      } else if (e.key === ']' || e.key === '>') {
        e.preventDefault();
        const currentIndex = SPEED_OPTIONS.indexOf(playbackSpeed);
        if (currentIndex < SPEED_OPTIONS.length - 1) {
          const nextSpeed = SPEED_OPTIONS[currentIndex + 1];
          setSpeedWithToast(nextSpeed, ']');
        }
      } else if (e.key === '[' || e.key === '<') {
        e.preventDefault();
        const currentIndex = SPEED_OPTIONS.indexOf(playbackSpeed);
        if (currentIndex > 0) {
          const prevSpeed = SPEED_OPTIONS[currentIndex - 1];
          setSpeedWithToast(prevSpeed, '[');
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'j') {
        e.preventDefault();
        seekRelative(-5, e.key === 'j' ? 'j' : '←');
      } else if (e.key === 'ArrowRight' || e.key === 'l') {
        e.preventDefault();
        seekRelative(5, e.key === 'l' ? 'l' : '→');
      } else if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleRestart();
        showToast('Restarted [R]');
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        setShowTranscript((prev) => !prev);
        showToast('Toggled Transcript [T]');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, [isPlaying, playbackSpeed, duration]);

  return (
    <article className="max-w-3xl mx-auto py-8 sm:py-12 animate-in fade-in duration-200">
      {/* Stage Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-[#D45B34] bg-[#FDF4F0] border border-[#F3C3B2] px-2 py-0.5 rounded">
            STAGE 03
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#9E9B93]">
            Explanation Video
          </span>
        </div>
        <span className="text-xs font-mono text-[#6B6861] bg-white border border-[#E8E5DD] px-2.5 py-0.5 rounded-full">
          Duration: {lesson.video.duration}
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-2">
        {lesson.video.title}
      </h1>
      <p className="text-base text-[#6B6861] mb-6 leading-relaxed">
        {lesson.video.description}
      </p>

      {/* Video Player Container */}
      <div className="bg-[#1C1917] text-white rounded-2xl overflow-hidden shadow-xl border border-black/10 mb-8 relative">
        {activeExternalUrl ? (
          <div className="aspect-video w-full bg-black">
            <video
              src={activeExternalUrl}
              controls
              className="w-full h-full object-contain"
              autoPlay
            />
          </div>
        ) : (
          /* Interactive Animated Concept Video Surface */
          <div className="relative aspect-video w-full flex flex-col justify-between p-6 sm:p-8 bg-linear-to-b from-[#24211E] to-[#161413]">
            {/* Top Bar inside Video */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#D45B34] animate-pulse" />
                <span>Foundu Visual Concept Breakdown</span>
              </div>
              <button
                type="button"
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-xs text-white/80 hover:text-white flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-md transition-colors"
                title="Toggle transcript"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Transcript</span>
              </button>
            </div>

            {/* Central Animated Illustration based on active phase */}
            <div className="my-auto py-4 flex flex-col items-center justify-center text-center">
              {activePhase === 1 && (
                <div className="w-full max-w-md animate-in fade-in duration-300">
                  <div className="text-xs font-mono uppercase text-[#F3C3B2] tracking-widest mb-3">
                    Step 1: The Whole Unit (1)
                  </div>
                  <div className="h-16 w-full bg-white/10 rounded-xl border border-white/20 flex items-center justify-center shadow-inner">
                    <span className="font-mono text-sm font-semibold tracking-wider text-white">
                      1 WHOLE STRIP
                    </span>
                  </div>
                </div>
              )}

              {activePhase === 2 && (
                <div className="w-full max-w-md animate-in fade-in duration-300">
                  <div className="text-xs font-mono uppercase text-[#F3C3B2] tracking-widest mb-3">
                    Step 2: Split into 2 Equal Parts (Halves)
                  </div>
                  <div className="h-16 w-full flex gap-2">
                    <div className="flex-1 bg-[#D45B34] text-white rounded-xl flex items-center justify-center font-mono font-bold shadow-md">
                      1/2
                    </div>
                    <div className="flex-1 bg-white/10 border border-white/20 text-white/60 rounded-xl flex items-center justify-center font-mono text-sm">
                      1/2
                    </div>
                  </div>
                </div>
              )}

              {activePhase === 3 && (
                <div className="w-full max-w-md animate-in fade-in duration-300">
                  <div className="text-xs font-mono uppercase text-[#F3C3B2] tracking-widest mb-3">
                    Step 3: Split into 4 Equal Parts (Quarters)
                  </div>
                  <div className="h-16 w-full flex gap-1.5">
                    <div className="flex-1 bg-[#D45B34] text-white rounded-xl flex items-center justify-center font-mono font-bold shadow-md">
                      1/4
                    </div>
                    <div className="flex-1 bg-white/10 border border-white/20 text-white/60 rounded-xl flex items-center justify-center font-mono text-xs">
                      1/4
                    </div>
                    <div className="flex-1 bg-white/10 border border-white/20 text-white/60 rounded-xl flex items-center justify-center font-mono text-xs">
                      1/4
                    </div>
                    <div className="flex-1 bg-white/10 border border-white/20 text-white/60 rounded-xl flex items-center justify-center font-mono text-xs">
                      1/4
                    </div>
                  </div>
                </div>
              )}

              {activePhase === 4 && (
                <div className="w-full max-w-md animate-in fade-in duration-300 space-y-2">
                  <div className="text-xs font-mono uppercase text-[#F3C3B2] tracking-widest mb-2">
                    Step 4: Equivalence (2/4 = 1/2)
                  </div>
                  {/* Half bar */}
                  <div className="h-10 w-full flex gap-2">
                    <div className="w-1/2 bg-[#D45B34] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
                      1/2
                    </div>
                    <div className="w-1/2 bg-white/10 rounded-lg flex items-center justify-center font-mono text-xs text-white/40">
                      1/2
                    </div>
                  </div>
                  {/* Quarter bar */}
                  <div className="h-10 w-full flex gap-1.5">
                    <div className="w-1/4 bg-[#D45B34] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
                      1/4
                    </div>
                    <div className="w-1/4 bg-[#D45B34] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
                      1/4
                    </div>
                    <div className="w-1/4 bg-white/10 rounded-lg flex items-center justify-center font-mono text-xs text-white/40">
                      1/4
                    </div>
                    <div className="w-1/4 bg-white/10 rounded-lg flex items-center justify-center font-mono text-xs text-white/40">
                      1/4
                    </div>
                  </div>
                </div>
              )}

              {/* Toast Feedback for Speed / Seek */}
              {toastMessage && (
                <div className="absolute top-4 right-4 z-30 bg-black/85 backdrop-blur-md text-white border border-[#D45B34]/60 px-3 py-1.5 rounded-lg text-xs font-mono font-medium shadow-lg animate-in fade-in duration-150 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D45B34] animate-pulse" />
                  <span>{toastMessage}</span>
                </div>
              )}

              {/* Central Big Play Button Overlay when paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 hover:bg-[#D45B34] text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </button>
              )}
            </div>

            {/* Live Subtitle / Voiceover caption */}
            <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 text-center text-xs sm:text-sm text-white/90 border border-white/10 shadow-md">
              <span className="italic">“{captionText}”</span>
            </div>
          </div>
        )}

        {/* Video Scrubber & Controls Bar */}
        <div className="bg-[#141211] p-3 sm:p-4 border-t border-white/10 space-y-2">
          {/* Progress Timeline Scrubber */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-white/70 w-11 text-right">
              {formatSeconds(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D45B34]"
              aria-label="Video scrubber"
            />
            <span className="font-mono text-xs text-white/50 w-11">
              {formatSeconds(duration)}
            </span>
          </div>

          {/* Bottom control buttons */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                title="Play/Pause (Space)"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white" />
                )}
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Restart (R)"
                aria-label="Restart video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-1 text-xs text-white/60 ml-2">
                <Volume2 className="w-4 h-4" />
                <span>Audio narration simulation</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Playback speed toggle with shortcut hints */}
              <div className="flex items-center bg-white/10 rounded-lg p-0.5 text-xs font-mono">
                {SPEED_OPTIONS.map((spd) => {
                  const keyMap: Record<number, string> = {
                    0.75: '0',
                    1: '1',
                    1.25: '2',
                    1.5: '3',
                    2: '4',
                  };
                  const shortcutKey = keyMap[spd];
                  const isCurrent = playbackSpeed === spd;

                  return (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setSpeedWithToast(spd, shortcutKey)}
                      title={`Set speed to ${spd}x (Press '${shortcutKey}')`}
                      className={`px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                        isCurrent
                          ? 'bg-[#D45B34] text-white font-semibold shadow-xs'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{spd}x</span>
                      <span className="text-[9px] opacity-60 hidden md:inline">
                        [{shortcutKey}]
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Developer / Video insertion option */}
              <button
                type="button"
                onClick={() => setShowCustomUrlInput(!showCustomUrlInput)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                title="Configure custom video source"
                aria-label="Configure video source"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Speed & Playback Shortcut Quick Reference */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-[#6B6861] bg-[#FAF9F5] border border-[#E8E5DD] px-3.5 py-2 rounded-xl mb-8 gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[#D45B34] font-semibold">Speed shortcuts:</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">0</kbd> 0.75x</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">1</kbd> 1x</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">2</kbd> 1.25x</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">3</kbd> 1.5x</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">4</kbd> 2x</span>
        </div>
        <div className="flex items-center gap-2 text-[#9E9B93]">
          <span><kbd className="px-1.5 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">Space</kbd> Play</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">←</kbd><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] ml-0.5">→</kbd> ±5s</span>
          <span><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px]">[</kbd><kbd className="px-1 py-0.2 bg-white border border-[#D5D1C7] rounded font-mono text-[10px] ml-0.5">]</kbd> Step</span>
        </div>
      </div>

      {/* Video Source Configuration Modal/Drawer (if user or developer has video file) */}
      {showCustomUrlInput && (
        <div className="p-4 bg-white border border-[#E8E5DD] rounded-xl mb-6 text-xs space-y-2">
          <div className="font-semibold text-[#1C1917]">
            Connect an External Video Source
          </div>
          <p className="text-[#6B6861]">
            For production, provide a direct URL to an mp4 file or web stream.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="https://example.com/lesson-video.mp4"
              value={customVideoUrl}
              onChange={(e) => setCustomVideoUrl(e.target.value)}
              className="flex-1 px-3 py-1.5 border border-[#E8E5DD] rounded-lg font-mono text-xs focus:outline-none focus:ring-1 focus:ring-[#D45B34]"
            />
            <button
              type="button"
              onClick={() => {
                if (customVideoUrl.trim()) {
                  setActiveExternalUrl(customVideoUrl.trim());
                } else {
                  setActiveExternalUrl(null);
                }
              }}
              className="px-3 py-1.5 bg-[#1C1917] text-white rounded-lg font-medium hover:bg-[#D45B34] transition-colors"
            >
              Apply
            </button>
            {activeExternalUrl && (
              <button
                type="button"
                onClick={() => {
                  setActiveExternalUrl(null);
                  setCustomVideoUrl('');
                }}
                className="px-3 py-1.5 border border-[#E8E5DD] rounded-lg text-[#6B6861] hover:bg-[#F4F2EB]"
              >
                Reset to Built-in Visualizer
              </button>
            )}
          </div>
        </div>
      )}

      {/* Key points covered in video */}
      <div className="bg-white border border-[#E8E5DD] rounded-2xl p-6 sm:p-7 shadow-xs mb-8">
        <h3 className="font-semibold text-base text-[#1C1917] mb-3">
          Key takeaways from this explanation
        </h3>
        <ul className="space-y-2.5">
          {lesson.video.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B6861]">
              <CheckCircle className="w-4 h-4 text-[#1E6B4F] shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsible Transcript */}
      {showTranscript && (
        <div className="bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl p-6 mb-8 text-xs text-[#6B6861] space-y-2 leading-relaxed">
          <div className="font-mono font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
            Full Lesson Transcript
          </div>
          {lesson.video.transcript.map((line, idx) => (
            <p key={idx} className="font-sans">
              <span className="font-mono text-[#9E9B93] mr-2">[{idx + 1}]</span>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-[#E8E5DD] flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B6861] hover:text-[#1C1917] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to examples</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-xs group"
        >
          <span>Answer practice questions</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
