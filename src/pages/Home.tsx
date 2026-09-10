import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeftRight, Sparkles, Code2, Terminal, PenTool,
  Cloud, Brain, Users, Star, Quote, ChevronDown, Search,
  UserPlus, Handshake, GraduationCap, TrendingUp, CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import Counter from '@/components/Counter';
import SkillCard from '@/components/SkillCard';
import { skills, testimonials, stats, faqItems, users } from '@/data/mockData';
import { useState } from 'react';

const floatingSkills = [
  { name: 'React', icon: Code2, color: 'from-cyan-400 to-blue-500', top: '10%', left: '5%', delay: '0s' },
  { name: 'Python', icon: Terminal, color: 'from-blue-500 to-yellow-400', top: '20%', right: '5%', delay: '1s' },
  { name: 'Figma', icon: PenTool, color: 'from-orange-400 to-pink-500', top: '55%', left: '8%', delay: '2s' },
  { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-amber-400', top: '65%', right: '8%', delay: '1.5s' },
  { name: 'ML', icon: Brain, color: 'from-cyan-500 to-teal-500', top: '35%', left: '15%', delay: '0.5s' },
  { name: 'UI/UX', icon: PenTool, color: 'from-purple-400 to-pink-500', top: '75%', right: '15%', delay: '2.5s' },
];

const howItWorksSteps = [
  { icon: UserPlus, title: 'Create Your Profile', desc: 'Sign up and build your SkillSwap profile with your interests and goals.', color: 'from-primary-500 to-secondary-500' },
  { icon: Sparkles, title: 'Add Skills You Can Teach', desc: 'List the skills you are confident sharing with others in the community.', color: 'from-secondary-500 to-primary-400' },
  { icon: GraduationCap, title: 'Add Skills You Want to Learn', desc: 'Tell us what you want to learn and we will find the right partners.', color: 'from-primary-400 to-teal-400' },
  { icon: Handshake, title: 'Find Your Perfect Match', desc: 'Get matched with peers who want to learn what you teach and vice versa.', color: 'from-teal-400 to-secondary-500' },
];

const teachLearnSteps = ['Teach', 'Match', 'Learn', 'Grow'];
const teachLearnIcons = [Sparkles, ArrowLeftRight, GraduationCap, TrendingUp];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0].id);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Floating skill cards */}
        {floatingSkills.map((skill, i) => (
          <div
            key={i}
            className="hidden md:flex absolute z-10 animate-float items-center gap-2 glass rounded-2xl px-4 py-3 shadow-xl"
            style={{
              top: skill.top,
              left: skill.left,
              right: skill.right,
              animationDelay: skill.delay,
            }}
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
              <skill.icon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-primary-100 text-primary-700 text-sm font-semibold mb-6 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  Peer-to-Peer Skill Exchange
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Your Skill Can Be Someone Else's{' '}
                  <span className="text-gradient">Learning Opportunity</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  SkillSwap connects you with people who want to learn what you know and know what you want to learn. No expensive courses — just real, collaborative skill exchange.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/match" className="btn-primary group">
                    Find Your Match
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/signup" className="btn-secondary group">
                    Share Your Skill
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {users.slice(0, 4).map((u) => (
                      <img key={u.id} src={u.avatar} alt={u.name} className="w-10 h-10 rounded-full ring-2 ring-white" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-bold text-slate-900">48,200+</span> active learners
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Animated visual */}
            <ScrollReveal delay={200} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/40 to-secondary-200/40 rounded-[3rem] blur-2xl" />

                {/* Left person card */}
                <div className="absolute top-8 left-0 w-48 glass rounded-3xl p-5 shadow-2xl animate-float">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={users[0].avatar} alt="" className="w-12 h-12 rounded-xl" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{users[0].name}</p>
                      <p className="text-xs text-slate-500">Teaches React</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="skill-tag bg-primary-50 text-primary-700">React</span>
                  </div>
                </div>

                {/* Right person card */}
                <div className="absolute bottom-8 right-0 w-48 glass rounded-3xl p-5 shadow-2xl animate-float-delayed">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={users[1].avatar} alt="" className="w-12 h-12 rounded-xl" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{users[1].name}</p>
                      <p className="text-xs text-slate-500">Teaches Python</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="skill-tag bg-secondary-50 text-secondary-700">Python</span>
                  </div>
                </div>

                {/* Center exchange icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-xl animate-pulse-slow" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-2xl">
                      <ArrowLeftRight className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Match badge */}
                <div className="absolute top-1/2 left-1/2 translate-x-16 -translate-y-16 glass rounded-2xl px-4 py-2 shadow-xl animate-bounce-subtle">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                    <span className="text-sm font-bold text-slate-900">95% Match</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="About SkillSwap"
              title={<>Learn. <span className="text-gradient">Think.</span> Exchange.</>}
              subtitle="SkillSwap is a peer-to-peer platform where learning is collaborative, not transactional. We believe everyone has something to teach and something to learn."
            />
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="card p-6 border-l-4 border-l-primary-500">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">The Problem</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Online courses are expensive and often one-size-fits-all. Finding a suitable learning partner who matches your goals, schedule, and skill level is nearly impossible on your own.
                  </p>
                </div>
                <div className="card p-6 border-l-4 border-l-secondary-500">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Our Solution</h3>
                  <p className="text-slate-500 leading-relaxed">
                    SkillSwap makes learning collaborative through skill exchange. You teach what you know, and in return, someone teaches you what you want to learn — completely free.
                  </p>
                </div>
                <div className="card p-6 border-l-4 border-l-teal-400">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Why It Works</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Teaching reinforces your own knowledge while helping others. The exchange model creates a fair, motivated, and mutually beneficial learning experience for everyone involved.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Teach → Match → Learn → Grow visual */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 gap-6 p-8">
                  {teachLearnSteps.map((step, i) => (
                    <div
                      key={step}
                      className="relative flex flex-col items-center text-center group"
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                        i === 0 ? 'from-primary-500 to-secondary-500' :
                        i === 1 ? 'from-secondary-500 to-primary-400' :
                        i === 2 ? 'from-teal-400 to-primary-500' :
                        'from-primary-400 to-teal-400'
                      } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                        {(() => {
                          const Icon = teachLearnIcons[i];
                          return <Icon className="w-9 h-9 text-white" />;
                        })()}
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg">{step}</h4>
                      {i < teachLearnSteps.length - 1 && (
                        <div className="hidden md:block absolute top-10 -right-3 text-primary-400">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              title={<>Get started in <span className="text-gradient">4 simple steps</span></>}
              subtitle="From signing up to your first learning session — it takes just minutes to start exchanging skills."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {howItWorksSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 150}>
                <div className="relative group">
                  <div className="card p-6 h-full hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-5xl font-bold text-slate-100 group-hover:text-primary-100 transition-colors duration-300">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-primary-300" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Skills Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Explore Skills"
              title={<>Discover <span className="text-gradient">in-demand skills</span></>}
              subtitle="Browse through hundreds of skills across categories. Find the one that matches your goals."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {skills.slice(0, 8).map((skill, i) => (
              <ScrollReveal key={skill.id} delay={i * 80}>
                <SkillCard skill={skill} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link to="/explore" className="btn-primary group">
                Explore All Skills
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Find Your Match Preview */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="text-white">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-white text-sm font-semibold mb-6">
                  <Handshake className="w-4 h-4" />
                  Smart Matching
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Find your perfect <br />learning partner
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                  Our matching algorithm connects you with peers whose teaching needs align with your learning goals. Get a match percentage and start learning.
                </p>
                <Link to="/match" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                  Try Match Finder
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid gap-4">
                {[
                  { user: users[0], teach: 'React', learn: 'Python', percent: 95 },
                  { user: users[2], teach: 'Figma', learn: 'JavaScript', percent: 88 },
                  { user: users[3], teach: 'AWS', learn: 'Go', percent: 82 },
                ].map((m, i) => (
                  <div key={i} className="glass rounded-2xl p-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <img src={m.user.avatar} alt="" className="w-12 h-12 rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{m.user.name}</p>
                      <p className="text-xs text-slate-500">{m.teach} ↔ {m.learn}</p>
                    </div>
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle
                          cx="18" cy="18" r="15" fill="none" stroke="#14b8a6" strokeWidth="3"
                          strokeDasharray={`${(m.percent / 100) * 94.2} 94.2`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary-700">{m.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community / Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Community"
              title={<>Success stories from <span className="text-gradient">our learners</span></>}
              subtitle="Real people, real exchanges, real growth. See what SkillSwap has done for our community."
            />
          </ScrollReveal>

          {/* Stats with counters */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
              {stats.map((stat) => (
                <div key={stat.label} className="card p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 100}>
                <div className="card p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  <p className="text-slate-600 leading-relaxed flex-1 text-sm">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-xl" />
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title={<>Frequently asked <span className="text-gradient">questions</span></>}
              subtitle="Everything you need to know about SkillSwap, matching, teaching, and learning."
            />
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {faqItems.slice(0, 6).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 60}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-slate-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openFaq === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openFaq === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-slate-500 leading-relaxed text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <Link to="/faq" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Have a skill? <span className="text-primary-400">Share it.</span> <br />
              Want to learn? <span className="text-secondary-400">Find your match.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Join thousands of learners and teachers exchanging skills every day. It is free, collaborative, and community-driven.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary-700 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                Join SkillSwap
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/explore" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur text-white font-semibold border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
                Explore Skills
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
