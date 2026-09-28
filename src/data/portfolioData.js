export const personalInfo = {
  name: "Shakti Singh Thakur",
  role: "Frontend Developer & Aspiring Data Analyst",
  subRole: "AI-Assisted Engineering • C++ Systems • Power BI",
  shortBio: "IT Student at Bansal Institute of Science & Technology specializing in Frontend Development (React, Modern JS, UI/UX), AI-driven workflows & prompt engineering, C/C++ systems, Power BI analytics, and Oracle Cloud Infrastructure (OCI).",
  email: "ssthakur6262@gmail.com",
  phone: "+91 6262079884",
  location: "Bhopal, MP, India",
  github: "https://github.com/Shaktithakur",
  linkedin: "https://www.linkedin.com/in/shakti-singh--thakur",
  resumeUrl: "/resume.pdf",
  profilePhoto: "/profile.png",
  careerObjective: "To obtain a challenging Frontend Developer or Data Analyst position in a forward-thinking organization where I can leverage my modern web development skills, AI-assisted productivity, structured C++ programming, and data analytics."
};

export const education = {
  institution: "Bansal Institute of Science & Technology",
  location: "Bhopal, Madhya Pradesh",
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
  duration: "2024 – 2028",
  status: "Undergraduate Cohort",
  highlights: [
    "Frontend Web Development & Modern Component Architecture",
    "Data Structures, Algorithms & Structured C/C++ Systems Logic",
    "Database Management Systems & Business Intelligence Modeling",
    "Cloud Computing & Oracle OCI Infrastructure"
  ]
};

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "Layout",
    accent: "cyan",
    skills: [
      { name: "Frontend Engineering", level: 90, badge: "Core", detail: "Component-driven design, responsive layouts, modern interactive UI & state management" },
      { name: "HTML5 & Modern CSS", level: 95, badge: "Mastery", detail: "Semantic web architecture, accessible markup, flexbox/grid, animations & glassmorphism" },
      { name: "JavaScript (ES6+)", level: 85, badge: "Proficient", detail: "DOM manipulation, asynchronous operations, event architecture & dynamic data handling" }
    ]
  },
  {
    title: "AI Tools & Prompt Engineering",
    icon: "Sparkles",
    accent: "indigo",
    skills: [
      { name: "Using AI for Development", level: 92, badge: "Advanced", detail: "AI-assisted coding, LLM integration, workflow acceleration & automated problem solving" },
      { name: "Prompt Engineering", level: 90, badge: "Specialist", detail: "Structured system prompting, context optimization, code generation & iterative refinement" },
      { name: "AI Productivity Stack", level: 88, badge: "Modern", detail: "GitHub Copilot, Claude/GPT developer tooling, code auditing & automated testing" }
    ]
  },
  {
    title: "Systems Programming",
    icon: "Code2",
    accent: "indigo",
    skills: [
      { name: "C++ Programming", level: 85, badge: "Certified", detail: "OOP logic, memory manipulation, conditional flows & console system architecture" },
      { name: "C Language", level: 80, badge: "Core", detail: "Pointers, procedural algorithms, structured logic and systems fundamentals" }
    ]
  },
  {
    title: "Analytics & Cloud",
    icon: "BarChart3",
    accent: "violet",
    skills: [
      { name: "Microsoft Power BI", level: 85, badge: "Certified", detail: "Interactive business intelligence dashboards, DAX calculations & data modeling" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: 80, badge: "Certified", detail: "Virtual Cloud Networks (VCN), compute infrastructure, storage & cloud security" },
      { name: "Data Validation & Hygiene", level: 90, badge: "Core Discipline", detail: "Strict input sanitization, error boundaries, edge-case checking & data integrity" }
    ]
  }
];

export const projects = [
  {
    id: "mini-atm",
    title: "Mini ATM System",
    subtitle: "C++ Console Application",
    type: "Featured C++ System",
    category: "Systems & Security Logic",
    description: "Developed a secure console-based Mini ATM system simulating banking operations including PIN authentication, cash withdrawal, deposit management, and balance inquiries using structured C++ programming logic and strict data validation.",
    githubUrl: "https://github.com/Shaktithakur",
    tags: ["C++", "Data Validation", "OOP", "Security Logic", "CLI Architecture"],
    hasLiveDemo: true,
    features: [
      { title: "PIN Authentication", desc: "Multi-attempt credential verification with security lockout protocol." },
      { title: "Cash Withdrawal", desc: "Real-time balance checks, boundary validation & overdraft prevention." },
      { title: "Deposit Management", desc: "Positive numeric data validation and immediate ledger recalculation." },
      { title: "Balance Inquiries", desc: "Formatted monetary reporting and live ledger state tracking." }
    ]
  },
  {
    id: "sales-dashboard",
    title: "Interactive Sales & Data Analytics Dashboard",
    subtitle: "Frontend Web Application",
    type: "Frontend & Data Analytics",
    category: "Web & Data Visualization",
    description: "Built an interactive web analytics dashboard converting raw sales datasets into actionable business intelligence. Features live KPI metric cards, dynamic category charts, date range filtering, and clean responsive data tables.",
    githubUrl: "https://github.com/Shaktithakur",
    tags: ["Frontend", "HTML5", "Modern CSS", "JavaScript", "Data Visualization", "Responsive UI"],
    hasLiveDemo: true,
    features: [
      { title: "Live KPI Cards", desc: "Tracks total revenue, order volume, and average order value with trend indicators." },
      { title: "Dynamic Visual Charts", desc: "Visual bar charts and progress breakdowns representing sales distribution." },
      { title: "Search & Filter Engine", desc: "Fast client-side dataset filtering by product category, date, and status." },
      { title: "Responsive Layout", desc: "Adaptive mobile and desktop viewports built with semantic HTML5 and clean CSS." }
    ]
  },
  {
    id: "student-tracker",
    title: "Student Academic & Attendance Tracker",
    subtitle: "Frontend Web Portal",
    type: "Frontend Web Application",
    category: "Web Development",
    description: "Engineered a practical frontend web application for university students to track semester coursework, subject-wise attendance percentages, and internal marks with strict input validation and local persistence.",
    githubUrl: "https://github.com/Shaktithakur",
    tags: ["Frontend Dev", "HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive UI"],
    hasLiveDemo: true,
    features: [
      { title: "Attendance Threshold Calculator", desc: "Real-time status check calculating margin required to maintain 75% attendance." },
      { title: "Coursework & Marks Tracker", desc: "Dynamic subject entry with weighted score calculation and status flags." },
      { title: "Instant Persistence", desc: "Automated browser local state synchronization ensuring zero data loss on refresh." },
      { title: "Responsive Design", desc: "Optimized mobile-friendly user experience across all smartphone and laptop displays." }
    ]
  }
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Foundations",
    issuer: "Oracle University",
    date: "Nov 2025",
    color: "violet",
    credentialId: "OCI-FND-2025",
    skills: ["Cloud Architecture", "Compute & Storage", "Networking & VCN", "Cloud Security"]
  },
  {
    title: "Microsoft Power BI Data Analyst Specialization",
    issuer: "Microsoft / Coursera",
    date: "Nov 2024",
    color: "cyan",
    credentialId: "MS-PBI-4902",
    skills: ["DAX Queries", "Data Modeling", "Executive Dashboards", "ETL Pipelines"]
  },
  {
    title: "C++ Programming Masterclass",
    issuer: "Udemy",
    date: "Nov 2024",
    color: "indigo",
    credentialId: "UC-CPP-8812",
    skills: ["Object-Oriented Programming", "Memory Management", "Pointers", "Data Validation"]
  }
];
