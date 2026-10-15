import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speech } from '../../utils/speech';
import { sound } from '../../utils/sound';

interface VoiceListenButtonProps {
  text: string;
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const VoiceListenButton: React.FC<VoiceListenButtonProps> = ({
  text,
  label = 'Listen',
  size = 'sm',
  className = '',
}) => {
  const [isSpeakingThis, setIsSpeakingThis] = useState(false);

  useEffect(() => {
    const unsubscribe = speech.subscribe((globalSpeaking) => {
      if (!globalSpeaking) {
        setIsSpeakingThis(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playTap();
    if (isSpeakingThis) {
      speech.stop();
      setIsSpeakingThis(false);
    } else {
      setIsSpeakingThis(true);
      speech.speak(text, () => {
        setIsSpeakingThis(false);
      });
    }
  };

  if (!speech.getSupported()) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isSpeakingThis ? 'Stop voice reading' : `Listen: ${label}`}
      title={isSpeakingThis ? 'Stop speaking' : 'Listen to this concept aloud'}
      className={`inline-flex items-center gap-1.5 rounded-full font-sans font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D45B34] focus-visible:ring-offset-2 ${
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      } ${
        isSpeakingThis
          ? 'bg-[#D45B34] text-white shadow-xs animate-pulse ring-1 ring-[#BC4B26]'
          : 'bg-[#FAF9F5] hover:bg-[#F3EFE6] text-[#6B6861] hover:text-[#1C1917] border border-[#E8E5DD]'
      } ${className}`}
    >
      {isSpeakingThis ? (
        <>
          <VolumeX className="w-3.5 h-3.5 shrink-0" />
          <span>Stop</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D45B34] shrink-0" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
