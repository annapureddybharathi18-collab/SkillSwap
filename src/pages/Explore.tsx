import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';
import { skills, categories } from '@/data/mockData';

export default function Explore() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'learners' | 'name'>('learners');

  const filtered = useMemo(() => {
    let result = skills.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    if (sortBy === 'learners') {
      result = [...result].sort((a, b) => b.learners - a.learners);
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [search, activeCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Explore Skills"
            title={<>Find your next <span className="text-gradient">learning adventure</span></>}
            subtitle="Search through hundreds of skills, filter by category, and find the perfect skill to learn or teach."
          />
        </ScrollReveal>

        {/* Search bar */}
        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto mt-12 mb-8">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for a skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded-2xl border border-slate-200 bg-white shadow-md text-slate-800 placeholder-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Category filters */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Sort and count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            <span className="font-bold text-slate-900">{filtered.length}</span> skills found
          </p>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'learners' | 'name')}
              className="text-sm font-medium text-slate-600 bg-transparent border-none outline-none cursor-pointer"
            >
              <option value="learners">Most Popular</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Skill grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((skill, i) => (
              <ScrollReveal key={skill.id} delay={i * 50}>
                <SkillCard skill={skill} index={i} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No skills found matching your search.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-4 text-primary-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
