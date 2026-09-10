import { Link } from 'react-router-dom';
import { Quote, Star, ArrowRight, Heart, Users, BookOpen, Handshake, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import Counter from '@/components/Counter';
import { testimonials, stats } from '@/data/mockData';

const successStories = [
  {
    title: 'From Designer to Full-Stack Developer',
    name: 'Raj Mehta',
    avatar: 'https://i.pravatar.cc/200?img=68',
    skill: 'Figma ↔ Node.js',
    text: 'I traded my Figma expertise for Node.js lessons. Within 4 months, I was building full-stack apps. SkillSwap gave me a career pivot I could never afford with traditional courses.',
    tag: 'Career Change',
  },
  {
    title: 'Learning Python Opened New Doors',
    name: 'Sophie Martin',
    avatar: 'https://i.pravatar.cc/200?img=20',
    skill: 'React ↔ Python',
    text: 'I always wanted to learn Python for data analysis but bootcamps were too expensive. Teaching React on SkillSwap let me learn Python for free while helping someone else.',
    tag: 'Skill Exchange',
  },
  {
    title: 'From Shy to Confident Public Speaker',
    name: 'Olivia Brown',
    avatar: 'https://i.pravatar.cc/200?img=48',
    skill: 'Marketing ↔ Public Speaking',
    text: 'I improved my public speaking by teaching digital marketing. My match and I practiced weekly, and I now lead presentations at work with confidence.',
    tag: 'Personal Growth',
  },
];

export default function Community() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Community"
            title={<>Our community of <span className="text-gradient">learners and teachers</span></>}
            subtitle="SkillSwap is more than a platform — it is a thriving community of people helping each other grow through skill exchange."
          />
        </ScrollReveal>

        {/* Stats with animated counters */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => {
              const icons = [Users, BookOpen, Handshake, Clock];
              const Icon = icons[stats.indexOf(stat)];
              return (
                <div key={stat.label} className="card p-6 text-center group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Success Stories */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Success <span className="text-gradient">Stories</span>
            </h3>
          </ScrollReveal>

          <div className="space-y-6">
            {successStories.map((story, i) => (
              <ScrollReveal key={story.title} delay={i * 100}>
                <div className="card p-6 lg:p-8 group hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <img src={story.avatar} alt="" className="w-14 h-14 rounded-2xl ring-2 ring-primary-100" />
                        <div>
                          <p className="font-bold text-slate-900">{story.name}</p>
                          <span className="inline-block mt-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                            {story.tag}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-medium">
                        {story.skill}
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{story.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">"{story.text}"</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
              What our <span className="text-gradient">members say</span>
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 80}>
                <div className="card p-6 h-full flex flex-col group hover:-translate-y-1">
                  <Quote className="w-8 h-8 text-primary-200 mb-4 group-hover:text-primary-300 transition-colors" />
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

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-20 text-center bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <Heart className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Join our growing community</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Become part of a community where everyone has something to teach and something to learn.
              </p>
              <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary-700 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                Join SkillSwap
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
