import { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({
  show,
  onClose,
  title = 'Account Created!',
  message = 'Welcome to SkillSwap! Your account has been created successfully.',
}: SuccessModalProps) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transition-all duration-400 ${
          animateIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        <div className="relative mx-auto w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-success-100 rounded-full animate-ping opacity-60" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-success-500 to-primary-500 flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="btn-primary w-full"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
}
