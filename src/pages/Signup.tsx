import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRightLeft, Eye, EyeOff, User, Mail, Lock, ArrowRight,
  Github, Chrome, CheckCircle2, AlertCircle, X, Plus,
} from 'lucide-react';
import SuccessModal from '@/components/SuccessModal';
import { allSkillNames } from '@/data/mockData';

const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [experience, setExperience] = useState('Beginner');
  const [canTeach, setCanTeach] = useState<string[]>([]);
  const [wantToLearn, setWantToLearn] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSkill = (skill: string, list: string[], setter: (v: string[]) => void) => {
    if (list.includes(skill)) setter(list.filter((s) => s !== skill));
    else setter([...list, skill]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!password.trim()) newErrors.password = 'Please enter a password';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (canTeach.length === 0) newErrors.canTeach = 'Select at least one skill you can teach';
    if (wantToLearn.length === 0) newErrors.wantToLearn = 'Select at least one skill you want to learn';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Animated illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-secondary-600 via-primary-700 to-primary-600 relative overflow-hidden p-12">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 text-center max-w-md">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="relative w-32 h-32 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl animate-float">
                <ArrowRightLeft className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Start your skill exchange journey
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Join thousands of learners and teachers. Share what you know, learn what you want — for free.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '48K+', label: 'Learners' },
              { value: '15K+', label: 'Skills' },
              { value: '23K+', label: 'Matches' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white relative overflow-y-auto">
        <div className="absolute top-6 right-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
              <ArrowRightLeft className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-slate-900">
              Skill<span className="text-primary-600">Swap</span>
            </span>
          </Link>
        </div>

        <div className="w-full max-w-lg py-20 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Your Account</h1>
          <p className="text-slate-500 mb-8">Join SkillSwap and start exchanging skills today.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: undefined }); }}
                  placeholder="John Doe"
                  className={`input-field pl-12 ${errors.name ? 'border-error-500 ring-4 ring-error-50' : ''}`}
                />
              </div>
              {errors.name && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: undefined }); }}
                  placeholder="you@example.com"
                  className={`input-field pl-12 ${errors.email ? 'border-error-500 ring-4 ring-error-50' : ''}`}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.email}</p>}
            </div>

            {/* Password + Confirm */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: undefined }); }}
                    placeholder="Min 6 characters"
                    className={`input-field pl-12 pr-12 ${errors.password ? 'border-error-500 ring-4 ring-error-50' : ''}`}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); setErrors({ ...errors, confirmPassword: undefined }); }}
                    placeholder="Re-enter password"
                    className={`input-field pl-12 ${errors.confirmPassword ? 'border-error-500 ring-4 ring-error-50' : ''}`}
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Experience Level</label>
              <div className="grid grid-cols-4 gap-2">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setExperience(level)}
                    className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      experience === level
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-primary-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills to Teach */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Skills You Can Teach {canTeach.length > 0 && <span className="text-primary-600">({canTeach.length})</span>}
              </label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
                {allSkillNames.map((skill) => {
                  const selected = canTeach.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill, canTeach, setCanTeach)}
                      className={`skill-tag border transition-all duration-200 ${
                        selected
                          ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300'
                      }`}
                    >
                      {selected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {skill}
                      {selected && <X className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
              {errors.canTeach && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.canTeach}</p>}
            </div>

            {/* Skills to Learn */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Skills You Want to Learn {wantToLearn.length > 0 && <span className="text-secondary-600">({wantToLearn.length})</span>}
              </label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
                {allSkillNames.map((skill) => {
                  const selected = wantToLearn.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill, wantToLearn, setWantToLearn)}
                      className={`skill-tag border transition-all duration-200 ${
                        selected
                          ? 'bg-secondary-600 text-white border-secondary-600 shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-secondary-300'
                      }`}
                    >
                      {selected ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      {skill}
                    </button>
                  );
                })}
              </div>
              {errors.wantToLearn && <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.wantToLearn}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full group disabled:opacity-70"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Social */}
            <div className="relative flex items-center py-1">
              <div className="flex-1 border-t border-slate-200" />
              <span className="px-4 text-sm text-slate-400">or sign up with</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" onClick={() => setShowSuccess(true)} className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95">
                <Chrome className="w-5 h-5" /> Google
              </button>
              <button type="button" onClick={() => setShowSuccess(true)} className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95">
                <Github className="w-5 h-5" /> GitHub
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>

      <SuccessModal
        show={showSuccess}
        onClose={() => { setShowSuccess(false); navigate('/dashboard'); }}
        title="Account Created!"
        message="Welcome to SkillSwap! Your account has been created successfully. Let's find your first match!"
      />
    </div>
  );
}
