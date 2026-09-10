import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import type { Skill } from '@/data/mockData';
import * as Icons from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon] || Icons.Code2;

  return (
    <div
      className="card group p-5 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.gradient}`} />
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
          <IconComp className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
          {skill.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{skill.name}</h3>
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
        <Users className="w-4 h-4" />
        <span>{skill.learners.toLocaleString()} learners</span>
      </div>
      <Link
        to="/explore"
        className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-300"
      >
        Explore <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
