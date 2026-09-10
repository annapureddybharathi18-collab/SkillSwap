import { Link } from 'react-router-dom';
import { ArrowRightLeft, Twitter, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    Platform: [
      { label: 'About', path: '/#about' },
      { label: 'Explore Skills', path: '/explore' },
      { label: 'How It Works', path: '/#how-it-works' },
      { label: 'Community', path: '/community' },
    ],
    Resources: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Find Your Match', path: '/match' },
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Contact', path: '/#contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/#privacy' },
      { label: 'Terms of Service', path: '/#terms' },
      { label: 'Cookie Policy', path: '/#cookies' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                <ArrowRightLeft className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                Skill<span className="text-primary-400">Swap</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Learn. Think. Exchange. The peer-to-peer platform where your knowledge becomes someone else's opportunity.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4.5 h-4.5 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2026 SkillSwap. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Learn. Think. Exchange.
          </p>
        </div>
      </div>
    </footer>
  );
}
