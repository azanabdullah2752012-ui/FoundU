// Browser Speech Synthesis Utility for Universal Visual-First Accessibility
// Allows non-fluent English readers and young learners across India to listen to concepts aloud

class SpeechNarrator {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSupported: boolean = false;
  private onStateChangeCallbacks: Set<(speaking: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
    }
  }

  public getSupported(): boolean {
    return this.isSupported;
  }

  public subscribe(callback: (speaking: boolean) => void): () => void {
    this.onStateChangeCallbacks.add(callback);
    return () => this.onStateChangeCallbacks.delete(callback);
  }

  private notify(speaking: boolean) {
    this.onStateChangeCallbacks.forEach((cb) => cb(speaking));
  }

  public isSpeaking(): boolean {
    return !!(this.synth && (this.synth.speaking || this.currentUtterance !== null));
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.notify(false);
    }
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth) return;

    // Stop any ongoing speech first
    this.stop();

    // Clean text: strip markdown symbols, slashes, and jargon
    const cleanText = text
      .replace(/[#*_`]/g, '')
      .replace(/(\d+)\/(\d+)/g, '$1 over $2')
      .replace(/÷/g, 'divided by')
      .replace(/×/g, 'times')
      .replace(/≠/g, 'is not equal to')
      .replace(/=/g, 'equals')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.92; // Slightly slower, calm and articulate
    utterance.pitch = 1.0;

    // Pick best available English voice, preferring Indian English (en-IN) or natural clear voices
    const voices = this.synth.getVoices();
    const preferredVoice =
      voices.find((v) => v.lang === 'en-IN') ||
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google'))) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      this.notify(false);
      onEnd?.();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      this.notify(false);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public toggle(text: string) {
    if (this.isSpeaking()) {
      this.stop();
    } else {
      this.speak(text);
    }
  }
}

export const speech = new SpeechNarrator();
