const translation = {
  languageSwitcher: {
    label: 'Choose language',
    polish: 'Polish',
    english: 'English',
  },
  navigation: {
    home: 'Home',
  },
  ariaLabels: {
    hero: 'Hero section',
    services: 'Services section',
    about: 'About me section',
    projects: 'Projects section',
    lecturer: 'Lecturer section',
    solutions: 'Digital solutions section',
    skills: 'Skills section',
    experience: 'Professional experience section',
    certifications: 'Certifications section',
    education: 'Education section',
    languages: 'Languages section',
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
  services: {
    heading: 'My Services',
    aiWorkshops: {
      title: 'AI Workshops',
      description: 'Practical workshops on applying artificial intelligence in business and software development.',
      cta: 'View workshops',
    },
    softwareEngineer: {
      title: 'Software Engineer',
      description: 'Development of scalable frontend applications in React/TypeScript with AI integrations.',
      cta: 'View offer',
    },
    webDevOffer: {
      title: 'Web Development Offer',
      description: 'Modern websites and CMS systems for self-managed content.',
      cta: 'View offer',
    },
  },
  about: {
    headingLinePrimary: 'Senior Software Engineer',
    headingLineAccent: 'Frontend & Cloud',
    meta: '5 years of experience',
    description:
      'Seasoned engineer with 5 years of experience building cloud-integrated web applications using React and TypeScript. Skilled in designing Azure-based architectures, automating deployments, and developing AI-powered and scalable web solutions. Proven record of improving performance and reliability through infrastructure modernization, CI/CD pipelines, and code optimization. Certified in Microsoft AI Fundamentals, with foundational experience across Azure DevOps, Blob Storage, AWS SageMaker, and container-based pipelines.',
    visualAlt: 'Abstract graphic in purple and orange shades',
  },
  projects: {
    headingTop: 'My',
    headingBottom: 'Projects',
    note:
      'My latest projects',
    items: {
      manianaa: 'https://manianaa.com/',
      joannaadamek: 'https://joannaadamek.com.pl/',
      dashboardmaniany: 'https://dashboardmaniany.netlify.app',
      salazabawdiggers: 'https://salazabawdiggers.pl',
    },
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
  experience: {
    title: 'Professional Experience',
    visualAlt: 'Professional experience timeline',
    items: {
      airslate: {
        company: 'AIRSLATE',
        position: 'FRONTEND & CLOUD ENGINEER',
        period: '05/2025 - PRESENT',
        description: 'Designed and led the development of a self-hosted document restoration pipeline, integrating multiple AI models (auto-cropping, lighting correction, de-warping) into a scalable, observable workflow used by engineers. Leveraged AWS services, including SageMaker for deploying AI models, along with other AWS tools for document processing and automation. Conducted comprehensive code reviews, elevating code quality and enforcing best practices across the engineering team. Delivered multiple high-impact frontend features on schedule, improving user engagement and application functionality. Participated in creating and optimizing CI/CD workflows using GitHub Actions along with infrastructure monitoring. Ensured security considerations, including data and network management in the cloud environment.',
      },
      eygds: {
        company: 'EY GDS POLAND',
        position: 'WEB DEVELOPER (REACT + TYPESCRIPT + AZURE)',
        period: '04/2020 - 12/2024',
        description: 'Led cloud-integrated LangFlow + Azure AI chatbot development for a leading U.S. banking client. Developed TypeScript-based async task queue to support backend service scalability across Azure cloud infrastructure. Implemented Azure Blob Storage screenshot solution, ensuring secure and fault-tolerant data retention. Conducted regular DevOps integration reviews, collaborating on environment consistency and CI/CD optimization. Reduced application load times by 20% via static caching and CDN deployment strategies. Resolved over 214 critical bugs through structured refactoring, increasing maintainability and reliability.',
      },
    },
  },
  certifications: {
    title: 'Certifications',
    visualAlt: 'Certification badges and achievements',
    items: {
      ai900: {
        name: 'AI-900 Microsoft AI Fundamentals',
        description: 'Certified in Microsoft AI Fundamentals',
        link: 'https://learn.microsoft.com/api/credentials/share/pl-pl/KlaudiaBodyk-3797/6D5B9A78D68337F4?sharingId=355DDBCA7BA42366',
      },
      architecture: {
        name: 'Frontend Architecture Course',
        description: 'Completed advanced frontend architecture course completion',
        link: 'https://architekturanafroncie.pl',
      },
      modernArchitect: {
        name: 'Modern Architect Course',
        description: 'Completed modern software architecture course',
        link: 'https://droganowoczesnegoarchitekta.pl',
      },
    },
  },
  education: {
    title: 'Education',
    visualAlt: 'Education and academic achievements',
    degree: 'Bachelor\'s Degree in Computer Science Engineering',
    university: 'University of Humanities and Economics in Lodz, Lodz, Poland',
  },
  languages: {
    title: 'Languages',
    visualAlt: 'Language proficiency indicators',
    items: {
      english: {
        name: 'English',
        level: 'B2',
      },
      german: {
        name: 'German',
        level: 'B2',
      },
      polish: {
        name: 'Polish',
        level: 'Native',
      },
    },
  },
  contact: {
    heading: 'Get in touch',
  },
  aiWorkshops: {
    hero: {
      title: 'AI Workshops',
      description: 'Practical workshops on applying artificial intelligence in business and software development.',
      subtitle: 'AI Training & Workshops',
    },
  },
  softwareEngineer: {
    hero: {
      title: 'Software Engineer',
      subtitle: 'Software Engineer & AI Trainer',
    },
  },
  webDevOffer: {
    hero: {
      title: 'Web Development',
      description: 'Modern websites and CMS systems for self-managed content.',
      subtitle: 'Websites & Digital Solutions',
    },
  },
} as const

export default translation

