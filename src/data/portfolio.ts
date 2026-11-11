/**
 * Central portfolio data — personalized for Deepak K from the supplied resume.
 * Keep this file as the single source of portfolio content.
 * Only resume-supported details are included; add further facts when verified.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Deepak K',
  displayName: 'Deepak K',
  firstName: 'DEEPAK',
  seriesTag: 'THE SERIES',
  originalLabel: 'A DEEPAK ORIGINAL',
  role: 'Data Analyst',
  tagline: ['Data Analyst', 'Python & SQL', 'Power BI'],
  intro:
    'A motivated B.Tech graduate with a foundation in Python, SQL, data cleaning, exploratory data analysis and visualization. Interested in turning data into clear insights through analytical problem-solving, dashboard development and business-focused reporting.',
  location: 'Chennai, Tamil Nadu',
  email: 'deepakkarthikeyan0408@gmail.com',
  links: {
  github: 'https://github.com/deepak-data04',
  linkedin: 'https://www.linkedin.com/in/deepak-k-195894263/',
},
  resumePdf: '/assets/Deepak_K_Resume.pdf',
  portrait: {
    src: '/assets/deepak.jpg',
    srcSet: '/assets/deep.jpg 1200w',
    alt: 'Deepak K - Data Analyst',
  },
  interests: ['Data Analytics', 'Business Intelligence', 'Data Visualization'],
};

export const education = [
  {
    school: 'Panimalar Engineering College',
    place: 'Poonamallee, Chennai',
    degree: 'B.Tech — Computer Science and Business System',
    period: '2026',
    score: 'Completed',
  },
  {
    school: 'FITA Academy',
    place: '',
    degree: 'Data Analytics',
    period: '2026',
    score: 'Completed',
  },
  {
    school: 'Revoor Padmanabha Matric Hr. Sec. School',
    place: 'Thiruvottiyur, Chennai',
    degree: '12th Standard',
    period: '2022',
    score: 'Completed',
  },
  {
    school: 'Shebha Matric Hr. Sec. School',
    place: 'Thiruvottiyur, Chennai',
    degree: '10th Standard',
    period: '2020',
    score: 'Completed',
  },
];

export const experience = [
  {
    company: 'Infotact Solutions',
    role: 'Data Analytics Intern',
    place: 'Bengaluru, Karnataka · Remote',
    period: 'May 2026 – August 2026',
    points: [
      'Performed data cleaning, exploratory data analysis (EDA) and SQL-based analysis using Python and SQL.',
      'Worked on dashboard development, cohort analysis, marketing attribution and demand forecasting.',
      'Contributed to a Multi-Touch Marketing Attribution & ROI Analysis project using Python and SQL to analyze customer journeys and evaluate marketing performance.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'deepfake-detection',
    title: 'Deepfake Detection System',
    year: '2026',
    genre: 'Machine Learning • Computer Vision',
    logline: 'A CNN-based image detection model deployed with Flask for real-time predictions.',
    stack: ['Python', 'CNN', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built a CNN-based deepfake image detection model and deployed it using Flask for real-time predictions.',
      'Applied image preprocessing, normalization and model inference to identify manipulated facial images.',
    ],
    features: [
      'CNN-based deepfake image classification',
      'Image preprocessing and normalization',
      'Flask deployment',
      'Real-time prediction workflow',
    ],
    metrics: [],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'marketing-attribution',
    title: 'Multi-Touch Marketing Attribution & ROI Analysis',
    year: '2026',
    genre: 'Data Analytics • Marketing Intelligence',
    logline: 'Analyzed campaign data and customer journey touchpoints to evaluate channel performance and ROI.',
    stack: ['Python', 'Pandas', 'SQL Server', 'SQL Window Functions', 'Marketing Analytics'],
    build: [
      'Cleaned and analyzed marketing campaign data using Python and SQL Server.',
      'Used SQL window functions to analyze customer journey touchpoints.',
      'Implemented First-Click and Linear Attribution models to evaluate channel performance, campaign ROI and revenue contribution.',
    ],
    features: [
      'Marketing campaign data cleaning and analysis',
      'Customer journey touchpoint analysis',
      'First-Click attribution model',
      'Linear attribution model',
      'Channel performance, ROI and revenue contribution analysis',
    ],
    metrics: [],
    github: undefined,
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'blinkit-dashboard',
    title: 'Blinkit Sales Analysis Dashboard',
    year: '2026',
    genre: 'Business Intelligence • Data Visualization',
    logline: 'An interactive Power BI dashboard exploring sales performance, outlet performance and customer purchasing trends.',
    stack: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Data Visualization', 'Microsoft Excel'],
    build: [
      'Developed an interactive Power BI dashboard to analyze sales performance, product categories, outlet performance and customer purchasing trends.',
      'Created key performance indicators (KPIs) and visualizations to generate business insights and support data-driven decision-making.',
    ],
    features: [
      'Sales and product category analysis',
      'Outlet performance analysis',
      'Customer purchasing trend analysis',
      'KPI reporting and interactive visualizations',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },

  {
    id: 'zepto-inventory-analysis',
    title: 'Zepto Inventory Analysis',
    year: '2026',
    genre: 'SQL Analytics • Business Intelligence',
    logline: 'Analyzed e-commerce inventory data using SQL and developed a Power BI dashboard to explore pricing, discounts and stock availability.',
    stack: ['MySQL', 'SQL', 'Power BI', 'Data Cleaning', 'Data Visualization'],
    build: [
      'Analyzed e-commerce inventory data using SQL to identify product pricing, discounts and stock availability.',
      'Developed an interactive Power BI dashboard to visualize inventory insights and support data-driven decisions.',
    ],
    features: [
      'Product pricing analysis',
      'Discount analysis',
      'Stock availability analysis',
      'Interactive Power BI dashboard',
      'Inventory insights visualization',
    ],
    metrics: [],
    palette: { from: '#12351f', via: '#287a45', to: '#07140c', accent: '#65d98b' },
    motif: 'tenants',
  },

];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys Springboard', name: 'Introduction to Data Science' },
  { issuer: 'Oracle', name: 'OCI Professional Generative AI' },
  { issuer: 'TCS iON', name: 'Artificial Intelligence' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Programming language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Programming' },
    ],
  },
  {
    id: 'databases',
    title: 'Database & SQL',
    subtitle: 'Querying and relational database concepts',
    skills: [
      { name: 'SQL', mono: 'Sq' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'RDBMS', mono: 'Rd' },
      { name: 'DDL', mono: 'Dd' },
      { name: 'DML', mono: 'Dm' },
      { name: 'DQL', mono: 'Dq' },
      { name: 'Joins', mono: 'Jn' },
      { name: 'Subqueries', mono: 'Sb' },
      { name: 'Aggregate Functions', mono: 'Ag' },
      { name: 'Window Functions', mono: 'Wf' },
      { name: 'SQL Server', mono: 'Ss' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Preparing, exploring and interpreting data',
    skills: [
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'Exploratory Data Analysis', mono: 'Ed' },
      { name: 'Statistical Analysis', mono: 'St' },
      { name: 'Marketing Analytics', mono: 'Ma' },
      { name: 'Cohort Analysis', mono: 'Ca' },
      { name: 'Demand Forecasting', mono: 'Df' },
    ],
  },
  {
    id: 'python-libraries',
    title: 'Python Libraries',
    subtitle: 'Analysis and visualization',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Seaborn', mono: 'Sb' },
    ],
  },
  {
    id: 'bi-visualization',
    title: 'BI & Visualization',
    subtitle: 'Dashboards and reporting',
    skills: [
      { name: 'Power BI', mono: 'Bi' },
      { name: 'Power Query', mono: 'Pq' },
      { name: 'DAX', mono: 'Dx' },
      { name: 'Data Modeling', mono: 'Dm' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'KPI Reporting', mono: 'Kp' },
    ],
  },
  {
    id: 'spreadsheets',
    title: 'Microsoft Excel',
    subtitle: 'Spreadsheet analysis',
    skills: [
      { name: 'Pivot Tables', mono: 'Pt' },
      { name: 'VLOOKUP', mono: 'Vl' },
      { name: 'HLOOKUP', mono: 'Hl' },
      { name: 'INDEX / MATCH', mono: 'Im' },
      { name: 'Charts', mono: 'Ch' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills & AI Tools',
    subtitle: 'Collaboration and productivity',
    skills: [
      { name: 'Communication', mono: 'Cm' },
      { name: 'Teamwork', mono: 'Tw' },
      { name: 'Problem-Solving', mono: 'Ps' },
      { name: 'Critical Thinking', mono: 'Ct' },
      { name: 'ChatGPT', mono: 'Cg' },
      { name: 'Claude', mono: 'Cl' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Deepfake Detection System', 'Marketing Attribution & ROI Analysis'],
  SQL: ['Marketing Attribution & ROI Analysis', 'Data Analytics Internship'],
  'SQL Server': ['Marketing Attribution & ROI Analysis'],
  Pandas: ['Marketing Attribution & ROI Analysis'],
  'Power BI': ['Blinkit Sales Analysis Dashboard'],
  'Power Query': ['Blinkit Sales Analysis Dashboard'],
  DAX: ['Blinkit Sales Analysis Dashboard'],
  'Data Modeling': ['Blinkit Sales Analysis Dashboard'],
  'Data Visualization': ['Blinkit Sales Analysis Dashboard'],
  'Exploratory Data Analysis': ['Data Analytics Internship'],
  'Data Cleaning': ['Data Analytics Internship', 'Marketing Attribution & ROI Analysis'],
  'Window Functions': ['Marketing Attribution & ROI Analysis'],
  'Marketing Analytics': ['Marketing Attribution & ROI Analysis'],
  'Cohort Analysis': ['Data Analytics Internship'],
  'Demand Forecasting': ['Data Analytics Internship'],
  Flask: ['Deepfake Detection System'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Academic Foundations',
    period: '2020 – 2026',
    synopsis: 'School education, B.Tech in Computer Science and Business System, and focused Data Analytics training.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Completed 10th and 12th Standard education in Chennai.',
        tags: ['10th Standard', '12th Standard'],
        runtime: '2020 – 2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Graduate',
        description: 'Completed B.Tech in Computer Science and Business System at Panimalar Engineering College.',
        tags: ['B.Tech', 'Computer Science and Business System'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S01 E03',
        title: 'The Analyst in Training',
        description: 'Completed Data Analytics training at FITA Academy.',
        tags: ['Data Analytics', 'FITA Academy'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Analytics Internship',
    period: 'May – August 2026',
    synopsis: 'Practical work in data preparation, SQL analysis, dashboards and business analytics.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Data Intern',
        description: 'Data Analytics Intern at Infotact Solutions, working remotely with the Bengaluru team.',
        tags: ['Python', 'SQL', 'EDA'],
        runtime: 'May 2026 – August 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Business Analyst',
        description: 'Worked on dashboard development, cohort analysis, marketing attribution and demand forecasting.',
        tags: ['Dashboards', 'Cohort Analysis', 'Forecasting'],
        runtime: 'Internship projects',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Analytics Projects',
    period: '2026',
    synopsis: 'Three academic projects applying machine learning, SQL analysis and business intelligence.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Detecting Deepfakes',
        description: 'Built a CNN-based deepfake image detection model and deployed it using Flask.',
        tags: ['Python', 'CNN', 'Flask'],
        runtime: 'Academic project',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Understanding Marketing ROI',
        description: 'Used First-Click and Linear Attribution models to evaluate marketing channels, ROI and revenue contribution.',
        tags: ['Python', 'SQL Server', 'Marketing Analytics'],
        runtime: 'Academic project',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Visualizing Blinkit Sales',
        description: 'Created an interactive Power BI dashboard with KPIs and visualizations for sales and outlet performance.',
        tags: ['Power BI', 'DAX', 'Power Query'],
        runtime: 'Academic project',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core language', title: 'Python', detail: 'Programming and data analysis', palette: amber },
  { label: 'Database strength', title: 'SQL', detail: 'Joins, subqueries and window functions', palette: ocean },
  { label: 'BI platform', title: 'Power BI', detail: 'Power Query, DAX and data modeling', palette: jade },
  { label: 'Featured dashboard', title: 'Blinkit Sales Analysis', detail: 'Interactive Power BI dashboard', palette: crimson },
  { label: 'Marketing insights', title: 'Attribution & ROI', detail: 'First-Click and Linear Attribution', palette: violet },
  { label: 'Python analysis', title: 'Pandas & NumPy', detail: 'Data analysis libraries', palette: amber },
  { label: 'Data preparation', title: 'Data Cleaning', detail: 'EDA and statistical analysis', palette: ocean },
  { label: 'Internship', title: 'Infotact Solutions', detail: 'Data Analytics Intern · 2026', palette: jade },
  { label: 'Academic background', title: 'B.Tech', detail: 'Computer Science and Business System', palette: crimson },
  { label: 'Additional project', title: 'Deepfake Detection', detail: 'CNN model deployed with Flask', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Data Analyst',
    lines: ['Deepak K', 'Python · SQL · Power BI · Excel'],
    chips: ['Data Analytics', 'Business Intelligence'],
  },
  {
    kicker: 'Skills',
    title: 'Analyze. Visualize. Explain.',
    lines: ['Python, Pandas, NumPy', 'SQL Server, Window Functions', 'Power BI, DAX, Power Query, Excel'],
    chips: ['Python', 'SQL', 'Power BI', 'Excel'],
  },
  {
    kicker: 'Experience',
    title: 'Data Analytics Internship',
    lines: ['Infotact Solutions · Remote', 'May 2026 – August 2026', 'Data cleaning · EDA · SQL · Dashboards'],
  },
  {
    kicker: 'Projects',
    title: 'Three Analytics Stories',
    lines: ['Deepfake Detection System', 'Multi-Touch Marketing Attribution & ROI Analysis', 'Blinkit Sales Analysis Dashboard'],
  },
  {
    kicker: 'Certified',
    title: 'Learning & Credentials',
    lines: ['Introduction to Data Science · Infosys Springboard', 'OCI Professional Generative AI · Oracle', 'Artificial Intelligence · TCS iON'],
  },
  {
    kicker: 'Current mission',
    title: 'Turning Data Into Insight',
    lines: ['Explore data · Find patterns · Build clear dashboards'],
  },
];

export type ProfileId = 'deepak' | 'recruiter' | 'analyst' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'deepak',
    name: 'Deepak',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'analyst',
    name: 'Analyst',
    blurb: 'Analytics projects & tools first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Certifications', meta: `${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
