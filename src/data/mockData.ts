export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string;
  learners: number;
  color: string;
  gradient: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  interests: string[];
  canTeach: string[];
  wantToLearn: string[];
  experience: SkillLevel;
  availability: string;
  rating: number;
  reviews: number;
  location: string;
  joinedDate: string;
  progress: { skill: string; percent: number }[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Activity {
  id: string;
  type: 'match' | 'session' | 'skill' | 'review';
  text: string;
  time: string;
}

export const categories = [
  'All',
  'Programming',
  'Web Development',
  'UI/UX',
  'AI & ML',
  'Cloud & DevOps',
  'Languages',
  'Marketing',
  'Photography',
  'Music',
  'Communication',
];

export const skills: Skill[] = [
  { id: 's1', name: 'React', category: 'Web Development', icon: 'Code2', learners: 12400, color: '#61dafb', gradient: 'from-cyan-400 to-blue-500' },
  { id: 's2', name: 'Python', category: 'Programming', icon: 'Terminal', learners: 28300, color: '#3776ab', gradient: 'from-blue-500 to-yellow-400' },
  { id: 's3', name: 'Figma', category: 'UI/UX', icon: 'PenTool', learners: 9800, color: '#f24e1e', gradient: 'from-orange-400 to-pink-500' },
  { id: 's4', name: 'AWS', category: 'Cloud & DevOps', icon: 'Cloud', learners: 15600, color: '#ff9900', gradient: 'from-orange-500 to-amber-400' },
  { id: 's5', name: 'UI/UX Design', category: 'UI/UX', icon: 'Palette', learners: 11200, color: '#a855f7', gradient: 'from-purple-400 to-pink-500' },
  { id: 's6', name: 'JavaScript', category: 'Web Development', icon: 'Braces', learners: 24100, color: '#f7df1e', gradient: 'from-yellow-400 to-amber-500' },
  { id: 's7', name: 'Machine Learning', category: 'AI & ML', icon: 'Brain', learners: 18700, color: '#00b4d8', gradient: 'from-cyan-500 to-teal-500' },
  { id: 's8', name: 'Docker', category: 'Cloud & DevOps', icon: 'Container', learners: 8900, color: '#2496ed', gradient: 'from-blue-500 to-sky-400' },
  { id: 's9', name: 'Spanish', category: 'Languages', icon: 'Languages', learners: 7300, color: '#dc2626', gradient: 'from-red-500 to-orange-400' },
  { id: 's10', name: 'Digital Marketing', category: 'Marketing', icon: 'Megaphone', learners: 6700, color: '#16a34a', gradient: 'from-green-500 to-emerald-400' },
  { id: 's11', name: 'Photography', category: 'Photography', icon: 'Camera', learners: 5400, color: '#0ea5e9', gradient: 'from-sky-400 to-indigo-400' },
  { id: 's12', name: 'Guitar', category: 'Music', icon: 'Music', learners: 4200, color: '#f59e0b', gradient: 'from-amber-500 to-orange-500' },
  { id: 's13', name: 'Public Speaking', category: 'Communication', icon: 'Mic', learners: 6100, color: '#8b5cf6', gradient: 'from-violet-500 to-purple-400' },
  { id: 's14', name: 'Node.js', category: 'Web Development', icon: 'Server', learners: 13900, color: '#83cd29', gradient: 'from-green-500 to-lime-400' },
  { id: 's15', name: 'Deep Learning', category: 'AI & ML', icon: 'Cpu', learners: 9200, color: '#ec4899', gradient: 'from-pink-500 to-rose-400' },
  { id: 's16', name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'Boxes', learners: 7800, color: '#326ce5', gradient: 'from-blue-600 to-indigo-500' },
  { id: 's17', name: 'French', category: 'Languages', icon: 'Languages', learners: 5800, color: '#6366f1', gradient: 'from-indigo-500 to-blue-400' },
  { id: 's18', name: 'SEO', category: 'Marketing', icon: 'Search', learners: 4900, color: '#059669', gradient: 'from-emerald-500 to-teal-400' },
  { id: 's19', name: 'Video Editing', category: 'Photography', icon: 'Video', learners: 3600, color: '#7c3aed', gradient: 'from-violet-500 to-fuchsia-400' },
  { id: 's20', name: 'Piano', category: 'Music', icon: 'Music', learners: 3100, color: '#0891b2', gradient: 'from-cyan-600 to-sky-400' },
  { id: 's21', name: 'TypeScript', category: 'Web Development', icon: 'FileCode2', learners: 16700, color: '#3178c6', gradient: 'from-blue-600 to-sky-500' },
  { id: 's22', name: 'Go', category: 'Programming', icon: 'Terminal', learners: 6300, color: '#00add8', gradient: 'from-cyan-400 to-teal-400' },
  { id: 's23', name: 'Rust', category: 'Programming', icon: 'Terminal', learners: 4100, color: '#dea584', gradient: 'from-orange-400 to-red-400' },
  { id: 's24', name: 'Tailwind CSS', category: 'Web Development', icon: 'Wind', learners: 8200, color: '#06b6d4', gradient: 'from-cyan-500 to-sky-400' },
];

export const users: UserProfile[] = [
  {
    id: 'u1',
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/200?img=47',
    bio: 'Full-stack developer with 6 years of experience. I love teaching React and learning new backend technologies.',
    interests: ['Web Dev', 'Open Source', 'Coffee'],
    canTeach: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
    wantToLearn: ['Python', 'Machine Learning'],
    experience: 'Expert',
    availability: 'Weekdays 6-9 PM EST',
    rating: 4.9,
    reviews: 127,
    location: 'San Francisco, CA',
    joinedDate: 'Jan 2024',
    progress: [
      { skill: 'Python', percent: 45 },
      { skill: 'Machine Learning', percent: 20 },
    ],
  },
  {
    id: 'u2',
    name: 'Marcus Johnson',
    avatar: 'https://i.pravatar.cc/200?img=12',
    bio: 'Data scientist passionate about Python and ML. Looking to improve my frontend skills for building data dashboards.',
    interests: ['AI', 'Data Science', 'Chess'],
    canTeach: ['Python', 'Machine Learning', 'Deep Learning'],
    wantToLearn: ['React', 'UI/UX Design'],
    experience: 'Advanced',
    availability: 'Weekends 10 AM - 4 PM EST',
    rating: 4.8,
    reviews: 93,
    location: 'New York, NY',
    joinedDate: 'Feb 2024',
    progress: [
      { skill: 'React', percent: 60 },
      { skill: 'UI/UX Design', percent: 15 },
    ],
  },
  {
    id: 'u3',
    name: 'Elena Rodriguez',
    avatar: 'https://i.pravatar.cc/200?img=44',
    bio: 'UX designer turned developer. I bridge the gap between beautiful design and functional code.',
    interests: ['Design', 'Typography', 'Travel'],
    canTeach: ['Figma', 'UI/UX Design'],
    wantToLearn: ['JavaScript', 'Tailwind CSS'],
    experience: 'Advanced',
    availability: 'Mon-Wed 2-6 PM EST',
    rating: 5.0,
    reviews: 156,
    location: 'Austin, TX',
    joinedDate: 'Dec 2023',
    progress: [
      { skill: 'JavaScript', percent: 35 },
      { skill: 'Tailwind CSS', percent: 50 },
    ],
  },
  {
    id: 'u4',
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/200?img=33',
    bio: 'DevOps engineer specializing in cloud infrastructure. I can help you master AWS and Docker.',
    interests: ['Cloud', 'Automation', 'Hiking'],
    canTeach: ['AWS', 'Docker', 'Kubernetes'],
    wantToLearn: ['Go', 'Rust'],
    experience: 'Expert',
    availability: 'Weekdays 7-10 PM PST',
    rating: 4.7,
    reviews: 78,
    location: 'Seattle, WA',
    joinedDate: 'Mar 2024',
    progress: [
      { skill: 'Go', percent: 30 },
      { skill: 'Rust', percent: 10 },
    ],
  },
  {
    id: 'u5',
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/200?img=45',
    bio: 'Marketing strategist and content creator. I teach digital marketing and want to learn photography.',
    interests: ['Marketing', 'Content', 'Yoga'],
    canTeach: ['Digital Marketing', 'SEO', 'Public Speaking'],
    wantToLearn: ['Photography', 'Video Editing'],
    experience: 'Advanced',
    availability: 'Tue-Thu 5-8 PM IST',
    rating: 4.9,
    reviews: 112,
    location: 'Bangalore, India',
    joinedDate: 'Jan 2024',
    progress: [
      { skill: 'Photography', percent: 40 },
      { skill: 'Video Editing', percent: 25 },
    ],
  },
  {
    id: 'u6',
    name: 'Alex Turner',
    avatar: 'https://i.pravatar.cc/200?img=53',
    bio: 'Musician and language enthusiast. I teach guitar and piano, and I am learning Spanish and French.',
    interests: ['Music', 'Languages', 'Cooking'],
    canTeach: ['Guitar', 'Piano'],
    wantToLearn: ['Spanish', 'French'],
    experience: 'Intermediate',
    availability: 'Weekends 9 AM - 12 PM GMT',
    rating: 4.6,
    reviews: 64,
    location: 'London, UK',
    joinedDate: 'Apr 2024',
    progress: [
      { skill: 'Spanish', percent: 55 },
      { skill: 'French', percent: 30 },
    ],
  },
  {
    id: 'u7',
    name: 'Nina Patel',
    avatar: 'https://i.pravatar.cc/200?img=49',
    bio: 'Frontend developer who loves clean, accessible interfaces. I teach TypeScript and want to explore ML.',
    interests: ['Accessibility', 'TypeScript', 'Tea'],
    canTeach: ['TypeScript', 'React', 'Tailwind CSS'],
    wantToLearn: ['Machine Learning', 'Python'],
    experience: 'Advanced',
    availability: 'Mon-Fri 8-11 PM EST',
    rating: 4.8,
    reviews: 89,
    location: 'Toronto, Canada',
    joinedDate: 'Feb 2024',
    progress: [
      { skill: 'Python', percent: 50 },
      { skill: 'Machine Learning', percent: 15 },
    ],
  },
  {
    id: 'u8',
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/200?img=15',
    bio: 'Backend engineer specializing in Go and Rust. Looking to improve my public speaking and UI skills.',
    interests: ['Systems', 'Algorithms', 'Gaming'],
    canTeach: ['Go', 'Rust', 'Docker'],
    wantToLearn: ['Public Speaking', 'UI/UX Design'],
    experience: 'Expert',
    availability: 'Wed-Fri 6-9 PM EST',
    rating: 4.7,
    reviews: 71,
    location: 'Chicago, IL',
    joinedDate: 'Mar 2024',
    progress: [
      { skill: 'Public Speaking', percent: 65 },
      { skill: 'UI/UX Design', percent: 20 },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophie Martin',
    avatar: 'https://i.pravatar.cc/200?img=20',
    role: 'Frontend Developer',
    text: 'SkillSwap completely changed how I learn. I traded my React expertise for Python lessons and landed a full-stack role within 3 months. The matching system found me the perfect partner.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Raj Mehta',
    avatar: 'https://i.pravatar.cc/200?img=68',
    role: 'Product Designer',
    text: 'I always wanted to learn backend development but could not afford bootcamps. Teaching Figma on SkillSwap let me learn Node.js for free while helping someone else level up.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Emma Schmidt',
    avatar: 'https://i.pravatar.cc/200?img=31',
    role: 'ML Engineer',
    text: 'The community here is incredible. I have taught Python to five people and learned AWS in return. It feels like a collaborative learning ecosystem, not just a platform.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Carlos Santos',
    avatar: 'https://i.pravatar.cc/200?img=60',
    role: 'DevOps Specialist',
    text: 'I was skeptical at first, but the match percentage feature is spot on. My learning partner and I have been meeting weekly for four months now. Highly recommend!',
    rating: 4,
  },
  {
    id: 't5',
    name: 'Yuki Tanaka',
    avatar: 'https://i.pravatar.cc/200?img=23',
    role: 'UX Researcher',
    text: 'As someone switching careers into tech, SkillSwap was a game-changer. I taught photography and learned UI/UX design. The exchange model made learning feel reciprocal and fair.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Olivia Brown',
    avatar: 'https://i.pravatar.cc/200?img=48',
    role: 'Marketing Lead',
    text: 'I improved my public speaking by teaching digital marketing. The platform made it so easy to find someone who matched my learning goals and schedule.',
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'What is SkillSwap?',
    answer: 'SkillSwap is a peer-to-peer skill exchange platform where you can trade skills you know for skills you want to learn. Instead of paying for expensive courses, you teach someone what you know and they teach you what they know — it is a win-win.',
  },
  {
    id: 'f2',
    question: 'How does the matching system work?',
    answer: 'When you list skills you can teach and skills you want to learn, our algorithm finds users whose teaching needs match your learning needs and vice versa. Each match shows a compatibility percentage based on skill overlap, experience level, and availability.',
  },
  {
    id: 'f3',
    question: 'Is SkillSwap free to use?',
    answer: 'Yes! SkillSwap is completely free. The core idea is that you pay with your knowledge, not your wallet. You teach a skill in exchange for learning a skill. No subscriptions, no hidden fees, no paywalls.',
  },
  {
    id: 'f4',
    question: 'What if I am a beginner — can I still teach?',
    answer: 'Absolutely. You do not need to be an expert to teach. If you know the basics of a skill, there is always someone who is just starting out and would love to learn from you. Teaching also reinforces your own understanding.',
  },
  {
    id: 'f5',
    question: 'How do I start teaching on SkillSwap?',
    answer: 'Create an account, add the skills you can teach to your profile, and set your availability. When someone who wants to learn your skill matches with you, you will be notified. You can then connect and schedule your first session.',
  },
  {
    id: 'f6',
    question: 'How do learning sessions work?',
    answer: 'Once you connect with a match, you and your partner decide how to run sessions — video calls, chat, or in-person. SkillSwap provides the matching and scheduling tools, but the learning format is entirely up to you and your partner.',
  },
  {
    id: 'f7',
    question: 'Can I learn multiple skills at the same time?',
    answer: 'Yes! You can add as many skills as you want to your "Want to Learn" list. You can have multiple learning partners simultaneously — one for each skill. Your dashboard tracks progress across all your active learning paths.',
  },
  {
    id: 'f8',
    question: 'What if my match does not work out?',
    answer: 'No worries — not every match is a perfect fit. You can disconnect from any match at any time and search for a new partner. Our system will help you find someone who better aligns with your learning style and goals.',
  },
];

export const stats = [
  { label: 'Active Learners', value: 48200, suffix: '+' },
  { label: 'Skills Shared', value: 15600, suffix: '+' },
  { label: 'Successful Matches', value: 23400, suffix: '+' },
  { label: 'Learning Sessions', value: 67800, suffix: '+' },
];

export const recentActivities: Activity[] = [
  { id: 'a1', type: 'match', text: 'New match: You and Sarah Chen (React ↔ Python)', time: '2 hours ago' },
  { id: 'a2', type: 'session', text: 'Completed session with Marcus Johnson on Python basics', time: 'Yesterday' },
  { id: 'a3', type: 'skill', text: 'Added "Tailwind CSS" to skills you can teach', time: '2 days ago' },
  { id: 'a4', type: 'review', text: 'Elena Rodriguez left you a 5-star review', time: '3 days ago' },
  { id: 'a5', type: 'match', text: 'New match: You and David Kim (Docker ↔ Go)', time: '5 days ago' },
  { id: 'a6', type: 'session', text: 'Scheduled session with Priya Sharma for Friday 6 PM', time: '1 week ago' },
];

export const allSkillNames = skills.map((s) => s.name);
