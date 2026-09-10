import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Zap } from 'lucide-react';
import type { UserProfile } from '@/data/mockData';

interface UserCardProps {
  user: UserProfile;
  matchPercent?: number;
  index?: number;
}

export default function UserCard({ user, matchPercent, index = 0 }: UserCardProps) {
  return (
    <div
      className="card group p-6 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary-100"
          />
          {matchPercent !== undefined && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {matchPercent}%
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 text-lg leading-tight">{user.name}</h3>
          <div className="flex items-center gap-1 text-sm text-slate-500 mt-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{user.location}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-slate-700">{user.rating}</span>
            <span className="text-sm text-slate-400">({user.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{user.bio}</p>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Can Teach</p>
          <div className="flex flex-wrap gap-1.5">
            {user.canTeach.slice(0, 3).map((s) => (
              <span key={s} className="skill-tag bg-primary-50 text-primary-700 border border-primary-100">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Wants to Learn</p>
          <div className="flex flex-wrap gap-1.5">
            {user.wantToLearn.slice(0, 3).map((s) => (
              <span key={s} className="skill-tag bg-secondary-50 text-secondary-700 border border-secondary-100">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
        <span className="inline-flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-primary-500" />
          {user.experience}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-secondary-500" />
          {user.availability}
        </span>
      </div>

      <div className="flex gap-2">
        <Link
          to={`/profile/${user.id}`}
          className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
        >
          View Profile
        </Link>
        <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all duration-200 active:scale-95">
          Connect
        </button>
      </div>
    </div>
  );
}
