const translation = {
  languageSwitcher: {
    label: 'Choose language',
    polish: 'Polish',
    english: 'English',
  },
  ariaLabels: {
    hero: 'Hero section',
    about: 'About me section',
    projects: 'Projects section',
    lecturer: 'Lecturer section',
    solutions: 'Digital solutions section',
    skills: 'Skills section',
    contact: 'Contact section',
  },
  hero: {
    cta: 'Contact me',
    titlePrimary: 'PURE CODE',
    titleBy: 'by',
    titleName: 'Klaudia Bodyk',
    description:
      'Software Engineer merging frontend with AI. I build scalable React/TypeScript interfaces and ship language-model features that genuinely speed up product teams.',
    subtitle: 'Software Engineer & AI Trainer',
  },
  about: {
    headingLinePrimary: 'Software Engineer',
    headingLineAccent: 'Frontend & AI',
    meta: '6+ years of experience',
    description:
      'I am a Software Engineer specializing in frontend and AI-powered solutions. I design scalable applications in React and TypeScript with a focus on performance, accessibility, and user experience. I bridge UI with AI services—from LLM-based copilots to cloud integrations—to accelerate product teams and shorten the time-to-market of new features.',
    visualAlt: 'Abstract graphic in purple and orange shades',
  },
  projects: {
    headingTop: 'My',
    headingBottom: 'Projects',
    note:
      'Carousel placeholder – with pop-ups and short descriptions of each project. Examples: Maja, Asia, Kmaja, PanTulipan, Dashboard.',
  },
  lecturer: {
    headingPrimary: 'AI Lecturer',
    headingAccent: 'at the University of Economics',
    description:
      'I teach how to apply artificial intelligence in business at the University of Economics. I show students and professionals how to translate the capabilities of language models and AI tools into real processes—from data analysis and task automation to digital product design. My workshops focus on practice, so participants leave with ready-to-run scenarios and materials they can implement at work.',
    visualAlt: 'Neuron illustration symbolizing artificial intelligence',
  },
  solutions: {
    title: 'Digital solutions for business',
    subtitle: '(websites and systems you can manage yourself)',
    description:
      'I design and implement modern websites and lightweight systems for managing content, offers, and online sales. I rely on proven content management platforms (CMS) so clients can update their sites without code—from editing copy and images, through publishing articles, to handling forms and simple marketing integrations.',
    primaryAlt: 'Set of icons representing modules of digital solutions',
    secondaryAlt: 'Network of connections illustrating automation and integrations',
  },
  skills: {
    title: 'My skills',
    visualAlt: 'Set of technology icons representing skills',
    items: {
      cloud: {
        label: 'Cloud & DevOps',
        description:
          'Azure (Blob Storage, Functions, Monitor, App Insights), Azure DevOps, GitHub Actions, AWS SageMaker, LangFlow, Azure AI Foundry',
      },
      infrastructure: {
        label: 'Infrastructure & Automation',
        description: 'Terraform (basics), IaC, CI/CD pipelines',
      },
      frontend: {
        label: 'Frontend',
        description: 'React 18/19, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS',
      },
      containers: {
        label: 'Containers & Systems',
        description: 'Docker, Kubernetes (AKS familiarity), RESTful API integration',
      },
      backend: {
        label: 'Data & Backend',
        description: 'Java (REST API), MySQL, Cosmos DB (intro level)',
      },
      scripting: {
        label: 'Scripting',
        description: 'PowerShell, YAML, Bash (automation basics)',
      },
      security: {
        label: 'Security',
        description: 'Identity management, secure storage handling, access policies',
      },
    },
  },
  contact: {
    heading: 'Get in touch',
  },
} as const

export default translation

