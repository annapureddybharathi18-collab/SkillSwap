import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightLeft, Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = 'Please enter your email';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!password.trim()) newErrors.password = 'Please enter your password';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white relative">
        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
              <ArrowRightLeft className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-slate-900">
              Skill<span className="text-primary-600">Swap</span>
            </span>
          </Link>
        </div>

        <div className="w-full max-w-md animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back!</h1>
          <p className="text-slate-500 mb-8">Log in to continue your skill exchange journey.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              {errors.email && (
                <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: undefined }); }}
                  placeholder="Enter your password"
                  className={`input-field pl-12 pr-12 ${errors.password ? 'border-error-500 ring-4 ring-error-50' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-sm text-error-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.password}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <button
                  type="button"
                  onClick={() => setRemember(!remember)}
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                    remember ? 'bg-primary-600 border-primary-600' : 'border-slate-300'
                  }`}
                >
                  {remember && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </button>
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary-600 font-semibold hover:underline">Forgot Password?</a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full group disabled:opacity-70"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Login
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-1 border-t border-slate-200" />
              <span className="px-4 text-sm text-slate-400">or continue with</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95"
              >
                <Chrome className="w-5 h-5" />
                Google
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95"
              >
                <Github className="w-5 h-5" />
                GitHub
              </button>
            </div>
          </form>

          <p className="text-center mt-8 text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-600 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>

      {/* Right side - Animated illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden p-12">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse-slow" />
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
            Learn. Think. Exchange.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Your skill can be someone else's learning opportunity. Join the community and start exchanging today.
          </p>

          <div className="space-y-3">
            {['Teach what you know', 'Learn what you want', 'Grow together'].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 justify-center text-white/90 animate-fade-in-up"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {['https://i.pravatar.cc/80?img=5', 'https://i.pravatar.cc/80?img=8', 'https://i.pravatar.cc/80?img=15', 'https://i.pravatar.cc/80?img=22'].map((src, i) => (
                <img key={i} src={src} alt="" className="w-10 h-10 rounded-full ring-2 ring-white/30" />
              ))}
            </div>
            <p className="text-sm text-white/70">48,200+ active learners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
