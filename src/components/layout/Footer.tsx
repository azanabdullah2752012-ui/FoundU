import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8E5DD] bg-[#FAF9F5] mt-auto py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-[#1C1917]">
                FOUNDU
              </span>
              <span className="text-[#9E9B93] text-xs font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B6861]">
                Understand the basics
              </span>
            </div>
            <p className="text-sm text-[#6B6861] leading-relaxed max-w-md">
              Foundu is a calm learning space dedicated strictly to foundational
              knowledge. No gamified clutter, no badges, no embarrassment. Just
              clear, patient intuition.
            </p>
          </div>

          <div className="md:col-span-6 space-y-3 md:text-right">
            <blockquote className="text-sm font-medium text-[#1C1917] italic">
              “That’s okay. Let’s start from the beginning.”
            </blockquote>
            <p className="text-xs text-[#9E9B93]">
              Foundation + U &nbsp;•&nbsp; Found + U &nbsp;•&nbsp; Client-side local
              storage progress
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E8E5DD]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E9B93] gap-2">
          <span>
            © {new Date().getFullYear()} Foundu. Build everything else from there.
          </span>
          <span>Designed with restraint & clarity.</span>
        </div>
      </div>
    </footer>
  );
};
