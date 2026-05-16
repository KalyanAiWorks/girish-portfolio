import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Sales Management',
    icon: frontend,
  },
  {
    title: 'Team Leadership',
    icon: backend,
  },
  {
    title: 'Customer Relations',
    icon: ux,
  },
  {
    title: 'Process Optimization',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Sales Strategy',
    icon: html,
  },
  {
    name: 'Team Management',
    icon: css,
  },
  {
    name: 'Customer Service',
    icon: javascript,
  },
  {
    name: 'Voice Process',
    icon: typescript,
  },
  {
    name: 'B2B Sales',
    icon: reactjs,
  },
  {
    name: 'Excel',
    icon: redux,
  },
  {
    name: 'PowerPoint',
    icon: tailwind,
  },
  {
    name: 'English',
    icon: nodejs,
  },
  {
    name: 'Hindi',
    icon: rubyrails,
  },
  {
    name: 'Telugu',
    icon: graphql,
  },
  {
    name: 'Escalation Handling',
    icon: postgresql,
  },
  {
    name: 'Sales Conversion',
    icon: git,
  },
  {
    name: 'CRM Tools',
    icon: figma,
  },
  {
    name: 'Analytics',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Sales Manager',
    company_name: 'SkylineAI Nexus',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Present',
    description: 'Leading sales team and managing client relationships for AI solutions platform.',
  },
  {
    title: 'Subject Matter Expert',
    company_name: 'Tele text India Ltd',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2017 - Aug 2019',
    description: 'Expert in voice process operations and customer care excellence.',
  },
  {
    title: 'Operations Executive',
    company_name: 'AEGIS BPO Services',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2016 - May 2017',
    description: 'Managed operations for business process outsourcing services.',
  },
  {
    title: 'Rollout Executive',
    company_name: 'Ben Franklin Opticians',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2014 - Jun 2015',
    description: 'Led rollout operations and customer engagement initiatives.',
  },
  {
    title: 'Tele-Caller',
    company_name: 'Hansa Research Group',
    icon: dcc,
    iconBg: '#333333',
    date: 'Nov 2010 - Nov 2011',
    description: 'Started career in voice process and customer interaction.',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sales Team Leadership',
    description: 'Led high-performing sales teams at SkylineAI Nexus, driving revenue growth and customer acquisition through strategic sales initiatives and team management.',
    tags: [
      {
        name: 'Sales Management',
        color: 'blue-text-gradient',
      },
      {
        name: 'Team Leadership',
        color: 'green-text-gradient',
      },
      {
        name: 'B2B Sales',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'Customer Care Excellence',
    description:
      'Implemented customer care best practices at Tele text India Ltd, optimizing voice process operations and achieving superior customer satisfaction metrics.',
    tags: [
      {
        name: 'Customer Service',
        color: 'blue-text-gradient',
      },
      {
        name: 'Voice Process',
        color: 'green-text-gradient',
      },
      {
        name: 'Operations',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'BPO Operations Management',
    description: 'Managed operations at AEGIS BPO Services, streamlining processes and ensuring compliance with service level agreements.',
    tags: [
      {
        name: 'Operations',
        color: 'blue-text-gradient',
      },
      {
        name: 'Process Optimization',
        color: 'green-text-gradient',
      },
      {
        name: 'Management',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Escalation & Resolution',
    description: 'Specialized in handling complex customer escalations and delivering effective resolutions across multiple communication channels.',
    tags: [
      {
        name: 'Problem Solving',
        color: 'blue-text-gradient',
      },
      {
        name: 'Escalation Handling',
        color: 'green-text-gradient',
      },
      {
        name: 'Communication',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-5',
    name: 'Sales Conversion Optimization',
    description:
      'Developed and implemented sales conversion strategies resulting in significant revenue improvement and customer retention.',
    tags: [
      {
        name: 'Sales Strategy',
        color: 'blue-text-gradient',
      },
      {
        name: 'Analytics',
        color: 'green-text-gradient',
      },
      {
        name: 'Performance',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
