import { Link } from 'react-router-dom';
import {
  Search, UserCog, TrendingUp, Handshake, ArrowRight, Star,
  Clock, Zap, Activity, Sparkles, BookOpen, GraduationCap, Users,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { users, recentActivities, skills } from '@/data/mockData';

const currentUser = users[0];

const quickActions = [
  { icon: Handshake, label: 'Find Match', path: '/match', color: 'from-primary-500 to-secondary-500' },
  { icon: Search, label: 'Explore Skills', path: '/explore', color: 'from-secondary-500 to-primary-400' },
  { icon: UserCog, label: 'Edit Profile', path: '/profile/u1', color: 'from-teal-400 to-primary-500' },
];

const activityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  match: Handshake,
  session: BookOpen,
  skill: Sparkles,
  review: Star,
};

export default function Dashboard() {
  const profileCompletion = 85;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome header */}
        <ScrollReveal>
          <div className="card p-6 mb-6 bg-gradient-to-br from-primary-600 to-secondary-600 border-0 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative flex items-center gap-5">
              <img src={currentUser.avatar} alt="" className="w-16 h-16 rounded-2xl ring-4 ring-white/30" />
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {currentUser.name.split(' ')[0]}!</h1>
                <p className="text-white/80 text-sm mt-1">Let's continue your learning journey today.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile completion */}
            <ScrollReveal delay={50}>
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Profile Completion</h3>
                  <span className="text-2xl font-bold text-primary-600">{profileCompletion}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
                <p className="text-sm text-slate-500">
                  Add a bio and set your availability to reach 100% and get better matches.
                </p>
              </div>
            </ScrollReveal>

            {/* Recommended matches */}
            <ScrollReveal delay={100}>
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary-500" />
                    Recommended Matches
                  </h3>
                  <Link to="/match" className="text-sm text-primary-600 font-semibold hover:underline">View all</Link>
                </div>
                <div className="space-y-3">
                  {users.slice(1, 4).map((u, i) => (
                    <div key={u.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <img src={u.avatar} alt="" className="w-12 h-12 rounded-xl" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">{u.name}</p>
                        <p className="text-xs text-slate-500">{u.canTeach[0]} ↔ {u.wantToLearn[0]}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-600">{[95, 88, 82][i]}%</div>
                        <p className="text-xs text-slate-400">match</p>
                      </div>
                      <Link to={`/profile/${u.id}`} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Learning progress */}
            <ScrollReveal delay={150}>
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-secondary-500" />
                  Learning Progress
                </h3>
                <div className="space-y-4">
                  {currentUser.progress.map((p) => (
                    <div key={p.skill}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-slate-700">{p.skill}</span>
                        <span className="text-sm font-bold text-primary-600">{p.percent}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000"
                          style={{ width: `${p.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Skills being taught */}
            <ScrollReveal delay={200}>
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                  Skills You're Teaching
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentUser.canTeach.map((skill) => {
                    const skillData = skills.find((s) => s.name === skill);
                    const studentCount = Math.floor(Math.random() * 5) + 1;
                    return (
                      <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-primary-50 transition-colors">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillData?.gradient || 'from-primary-400 to-secondary-400'} flex items-center justify-center`}>
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{skill}</p>
                          <p className="text-xs text-slate-500">{studentCount} active student{studentCount > 1 ? 's' : ''}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Quick actions */}
            <ScrollReveal delay={50}>
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.path}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-slate-700 text-sm flex-1">{action.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Stats summary */}
            <ScrollReveal delay={100}>
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 mb-4">Your Stats</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Users, label: 'Students', value: '7', color: 'text-primary-600 bg-primary-50' },
                    { icon: BookOpen, label: 'Learning', value: '2', color: 'text-secondary-600 bg-secondary-50' },
                    { icon: Star, label: 'Rating', value: '4.9', color: 'text-amber-600 bg-amber-50' },
                    { icon: Clock, label: 'Sessions', value: '34', color: 'text-teal-600 bg-teal-50' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-slate-50">
                      <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                        <stat.icon className="w-4.5 h-4.5" />
                      </div>
                      <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Recent activity */}
            <ScrollReveal delay={150}>
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-primary-500" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivities.map((act) => {
                    const Icon = activityIcons[act.type];
                    return (
                      <div key={act.id} className="flex gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-slate-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-slate-700 leading-snug">{act.text}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
