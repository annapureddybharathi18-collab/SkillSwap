import { useState } from 'react';
import { ChevronDown, HelpCircle, Search, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { faqItems } from '@/data/mockData';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);
  const [search, setSearch] = useState('');

  const filtered = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
            subtitle="Everything you need to know about SkillSwap, how matching works, teaching, learning, and more."
          />
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal delay={100}>
          <div className="relative mt-8 mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white shadow-md text-slate-800 placeholder-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200"
            />
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-4">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 50}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-500 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        openId === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-13 text-slate-500 leading-relaxed text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400">
              <p>No questions found matching your search.</p>
            </div>
          )}
        </div>

        {/* Still have questions */}
        <ScrollReveal delay={200}>
          <div className="mt-12 text-center card p-8">
            <MessageCircle className="w-10 h-10 text-primary-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-500 text-sm mb-6">We are here to help. Reach out and we will get back to you.</p>
            <Link to="/signup" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
