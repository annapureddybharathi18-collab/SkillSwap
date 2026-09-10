import { useState, useMemo } from 'react';
import { ArrowLeftRight, Search, Sparkles, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import UserCard from '@/components/UserCard';
import { users, allSkillNames } from '@/data/mockData';

export default function Match() {
  const [teachSkill, setTeachSkill] = useState('React');
  const [learnSkill, setLearnSkill] = useState('Python');
  const [searched, setSearch] = useState(false);

  const matches = useMemo(() => {
    if (!searched) return [];
    return users
      .map((u) => {
        const teachesWanted = u.wantToLearn.includes(teachSkill);
        const learnsWhatYouTeach = u.canTeach.includes(learnSkill);
        let percent = 50;
        if (teachesWanted && learnsWhatYouTeach) percent = 95;
        else if (teachesWanted || learnsWhatYouTeach) percent = 78;
        else if (u.canTeach.some((s) => s === learnSkill) || u.wantToLearn.some((s) => s === teachSkill)) percent = 65;
        else percent = 55 + Math.floor(Math.random() * 15);
        return { user: u, percent };
      })
      .sort((a, b) => b.percent - a.percent);
  }, [teachSkill, learnSkill, searched]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Find Your Match"
            title={<>Discover your <span className="text-gradient">perfect learning partner</span></>}
            subtitle="Tell us what you can teach and what you want to learn. We will find the best matches for you."
          />
        </ScrollReveal>

        {/* Selectors */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="glass rounded-3xl p-8 shadow-xl">
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                {/* I Can Teach */}
                <div>
                  <label className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    I Can Teach
                  </label>
                  <div className="relative">
                    <select
                      value={teachSkill}
                      onChange={(e) => setTeachSkill(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 cursor-pointer"
                    >
                      {allSkillNames.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Exchange icon */}
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                    <ArrowLeftRight className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* I Want to Learn */}
                <div>
                  <label className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    I Want to Learn
                  </label>
                  <div className="relative">
                    <select
                      value={learnSkill}
                      onChange={(e) => setLearnSkill(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-medium focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200 cursor-pointer"
                    >
                      {allSkillNames.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setSearch(true)}
                  className="btn-primary group"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Find Matches
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Results */}
        {searched && (
          <div className="mt-16">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-primary-500" />
                <h3 className="text-2xl font-bold text-slate-900">
                  {matches.length} matches for <span className="text-primary-600">{teachSkill}</span> ↔ <span className="text-secondary-600">{learnSkill}</span>
                </h3>
              </div>
            </ScrollReveal>

            {/* Best match highlight */}
            {matches[0] && matches[0].percent >= 90 && (
              <ScrollReveal delay={100}>
                <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 p-8 text-white">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative flex items-center gap-6">
                    <img src={matches[0].user.avatar} alt="" className="w-20 h-20 rounded-2xl ring-4 ring-white/30" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-5 h-5 text-amber-300" />
                        <span className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Best Match</span>
                      </div>
                      <h4 className="text-2xl font-bold">{matches[0].user.name}</h4>
                      <p className="text-white/80 text-sm mt-1">
                        {matches[0].user.canTeach.join(', ')} → {matches[0].user.wantToLearn.join(', ')}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold">{matches[0].percent}%</div>
                      <p className="text-sm text-white/70 mt-1">Match</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((m, i) => (
                <ScrollReveal key={m.user.id} delay={i * 80}>
                  <UserCard user={m.user} matchPercent={m.percent} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {!searched && (
          <ScrollReveal delay={200}>
            <div className="text-center mt-16 text-slate-400">
              <ArrowLeftRight className="w-12 h-12 mx-auto mb-4 text-primary-200" />
              <p>Select your skills above and click "Find Matches" to see your perfect learning partners.</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
