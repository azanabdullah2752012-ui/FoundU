import React, { useState } from 'react';
import { X, Check, Sparkles, User, ShieldCheck, LogOut } from 'lucide-react';
import { Gummy, type GummyColor } from './Gummy';
import { sound } from '../../utils/sound';

export interface PickleCorpUser {
  name: string;
  gummyColor: GummyColor;
  isLoggedIn: boolean;
  favorCount: number;
  joinedAt: string;
}

interface PickleCorpLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: PickleCorpUser;
  onSaveUser: (user: PickleCorpUser) => void;
}

const COLOR_OPTIONS: { id: GummyColor; label: string; swatch: string }[] = [
  { id: 'taupe', label: 'Oatmeal Taupe', swatch: '#ab947e' },
  { id: 'green', label: 'Mint Pickle', swatch: '#84ab8c' },
  { id: 'caramel', label: 'Caramel Biscuit', swatch: '#c2976b' },
  { id: 'blue', label: 'Sky Lavender', swatch: '#7ea4ab' },
  { id: 'rose', label: 'Berry Plum', swatch: '#ab7e8a' },
  { id: 'amber', label: 'Amber Gold', swatch: '#c9a35d' },
];

export const PickleCorpLoginModal: React.FC<PickleCorpLoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSaveUser,
}) => {
  const [name, setName] = useState(currentUser.name || 'Azan');
  const [selectedColor, setSelectedColor] = useState<GummyColor>(currentUser.gummyColor || 'taupe');
  const [speechText, setSpeechText] = useState('Hi! I’m Gummy!');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    sound.playSuccess();
    onSaveUser({
      name: name.trim(),
      gummyColor: selectedColor,
      isLoggedIn: true,
      favorCount: currentUser.favorCount || 1,
      joinedAt: currentUser.joinedAt || new Date().toISOString(),
    });
    onClose();
  };

  const handleLogout = () => {
    sound.playTap();
    onSaveUser({
      name: '',
      gummyColor: 'taupe',
      isLoggedIn: false,
      favorCount: 0,
      joinedAt: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md bg-[#FAF9F5] border border-[#E8E5DD] rounded-2xl shadow-2xl p-6 z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8E5DD] mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DD] flex items-center justify-center shadow-2xs">
              <Gummy size="sm" color={selectedColor} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#1C1917]">
                  Pickle Corp™
                </span>
                <span className="text-[9px] font-mono font-bold bg-[#FDF4F0] border border-[#F3C3B2] text-[#D45B34] px-1 rounded uppercase">
                  Studio ID
                </span>
              </div>
              <p className="text-xs text-[#6B6861] font-mono">
                {currentUser.isLoggedIn ? 'Manage your learner profile' : 'Sign in to sync your intuition'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#9E9B93] hover:text-[#1C1917] hover:bg-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mascot Center Preview */}
        <div className="text-center py-3 bg-white rounded-xl border border-[#E8E5DD] shadow-2xs mb-5 flex flex-col items-center justify-center relative">
          <Gummy
            size="hero"
            color={selectedColor}
            speechText={speechText}
            onClick={() => setSpeechText('Let’s master math! ✨')}
          />
          <span className="text-[11px] font-mono text-[#9E9B93] mt-2">
            Click Gummy to test companion reaction
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#6B6861] mb-1.5">
              Learner Name
            </label>
            <div className="flex items-center gap-2 bg-white border border-[#E8E5DD] rounded-xl px-3 py-2 shadow-2xs focus-within:border-[#D45B34] focus-within:ring-1 focus-within:ring-[#D45B34]/20 transition-all">
              <User className="w-4 h-4 text-[#9E9B93]" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name (e.g. Azan)"
                className="flex-1 bg-transparent text-sm text-[#1C1917] outline-none font-sans"
                required
              />
            </div>
          </div>

          {/* Color Switcher */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#6B6861] mb-1.5">
              Gummy Companion Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {COLOR_OPTIONS.map((opt) => {
                const isSelected = selectedColor === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedColor(opt.id);
                      setSpeechText(`Nice ${opt.label}!`);
                      sound.playTap();
                    }}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#1C1917] shadow-xs ring-1 ring-[#1C1917]'
                        : 'bg-white/80 border-[#E8E5DD] hover:bg-white text-[#6B6861]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                      style={{ backgroundColor: opt.swatch }}
                    />
                    <span className="truncate text-[11px]">{opt.label.split(' ')[0]}</span>
                    {isSelected && <Check className="w-3 h-3 text-[#1C1917] ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pickle Corp Barter Note */}
          <div className="p-3 bg-[#FAF9F5] border border-[#E8E5DD] rounded-xl text-xs text-[#6B6861] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#1C1917]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E6B4F]" />
              <span>Pickle Corp Studio Ledger Protocol</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              No passwords or payment cards required. Your learning progress stays linked to your local Pickle Corp ID marker.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-between gap-3">
            {currentUser.isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D45B34] hover:bg-[#FDF4F0] rounded-xl transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            ) : (
              <span className="text-xs font-mono text-[#9E9B93]">
                Free &amp; Zero Fiat
              </span>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#D45B34] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer ml-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentUser.isLoggedIn ? 'Save Changes' : 'Log In with Studio ID'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
