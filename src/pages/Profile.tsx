import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Zap, Globe, Calendar, ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { users } from '@/data/mockData';

export default function Profile() {
  const { id } = useParams();
  const user = users.find((u) => u.id === id) || users[0];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Link to="/match" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 font-medium text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Matches
          </Link>
        </ScrollReveal>

        {/* Profile header */}
        <ScrollReveal delay={50}>
          <div className="card p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <div className="relative flex flex-col sm:flex-row items-start gap-6 pt-16">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-28 h-28 rounded-3xl object-cover ring-4 ring-white shadow-xl"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary-500" /> {user.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-secondary-500" /> Joined {user.joinedDate}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {user.rating} ({user.reviews} reviews)
                  </span>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{user.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {user.interests.map((interest) => (
                    <span key={interest} className="skill-tag bg-slate-100 text-slate-600">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button className="btn-primary text-sm">Connect</button>
                <button className="btn-secondary text-sm">Start Learning</button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Skills I Can Teach */}
          <ScrollReveal delay={100}>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                Skills I Can Teach
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.canTeach.map((s) => (
                  <span key={s} className="skill-tag bg-primary-50 text-primary-700 border border-primary-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills I Want to Learn */}
          <ScrollReveal delay={150}>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary-500" />
                Skills I Want to Learn
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.wantToLearn.map((s) => (
                  <span key={s} className="skill-tag bg-secondary-50 text-secondary-700 border border-secondary-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Experience & Availability */}
          <ScrollReveal delay={200}>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Experience</p>
                    <p className="font-semibold text-slate-800">{user.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Availability</p>
                    <p className="font-semibold text-slate-800">{user.availability}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                    <p className="font-semibold text-slate-800">{user.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Learning Progress */}
          <ScrollReveal delay={250}>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Learning Progress</h3>
              <div className="space-y-4">
                {user.progress.map((p) => (
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
        </div>

        {/* Reviews */}
        <ScrollReveal delay={300}>
          <div className="card p-6 mt-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4">Reviews</h3>
            <div className="space-y-4">
              {[
                { name: 'Jamie Lee', avatar: 'https://i.pravatar.cc/100?img=11', text: 'Amazing teacher! Explained React concepts clearly and was always patient. Highly recommend.', rating: 5 },
                { name: 'Tom Garcia', avatar: 'https://i.pravatar.cc/100?img=13', text: 'Great learning partner. Very knowledgeable and flexible with scheduling.', rating: 5 },
              ].map((r, i) => (
                <div key={i} className="flex gap-4 pb-4 last:pb-0 last:border-0 border-b border-slate-100">
                  <img src={r.avatar} alt="" className="w-10 h-10 rounded-xl" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-slate-800 text-sm">{r.name}</p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
