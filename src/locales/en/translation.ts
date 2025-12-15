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
    emailSubject: 'Inquiry - Pure Code',
    emailBody: 'Hello,\n\nI would like to discuss your offer. I am interested in collaboration and would like to know more details.\n\nBest regards',
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
    instagramBeauty: {
      title: 'Instagram Beauty',
      description: 'Websites with online booking for beauty businesses – turn your Instagram into a full-fledged business.',
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
      '• I build apps and websites that sell for you 24/7.\n• I automate sales, payments and newsletters – you don\'t worry about technical stuff.\n• Portfolio in 24h - quick start, mobile, integrated with Instagram.',
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
    emailSubject: 'Inquiry about your offer - Pure Code Portfolio',
    emailBody: 'Hello,\n\nI would like to discuss your offer. Please contact me to discuss the details.\n\nBest regards',
  },
  aiWorkshops: {
    hero: {
      title: 'AI Workshops',
      description: 'Practical workshops on applying artificial intelligence in business and software development.',
      subtitle: 'AI Training & Workshops',
      emailSubject: 'Inquiry about AI Workshops',
      emailBody: 'Hello,\n\nI would like to discuss your AI workshops. I am interested in organizing training for my company/team. Please contact me to discuss the details.\n\nBest regards',
    },
    upcomingTrainings: {
      heading: 'Upcoming Trainings',
      course: {
        title: 'Law of New Technologies',
        subtitle: 'Postgraduate Studies at University of Economics in Wrocław',
        description: 'Comprehensive postgraduate program on legal aspects of new technologies, focusing on artificial intelligence, digital data, and IT services. The program provides practical knowledge for legal professionals and technology experts.',
        subject: 'Subject: AI Tools in Legal Practice',
        details: {
          duration: '2 semesters, 156 hours',
          recruitmentDeadline: 'Recruitment until February 14, 2026',
          startDate: 'Starts February 28, 2026',
          price: '8,500 PLN',
          format: 'Weekend classes, in-person at the university',
        },
        featuresTitle: 'Program Features:',
        features: [
          'Practical and interdisciplinary approach',
          'Legal regulations for AI, data protection, and IT contracts',
          'Risk management and compliance',
          'Microsoft 365 platform access',
          'Library resources and consulting',
        ],
        cta: 'Learn More',
        link: 'https://www.podyplomowe.ue.wroc.pl/114,2381,prawo_nowych_technologii.html',
      },
    },
  },
  softwareEngineer: {
    hero: {
      title: 'Software Engineer',
      subtitle: 'Software Engineer & AI Trainer',
      emailSubject: 'Inquiry about collaboration - Software Engineer',
      emailBody: 'Hello,\n\nI would like to discuss collaboration as a Software Engineer. I am interested in your experience in React/TypeScript and AI integration. Please contact me to discuss the details.\n\nBest regards',
    },
  },
  webDevOffer: {
    hero: {
      title: 'Web Development',
      description: 'Modern websites and CMS systems for self-managed content.',
      subtitle: 'Websites & Digital Solutions',
      emailSubject: 'Inquiry about website development',
      emailBody: 'Hello,\n\nI would like to discuss creating a website. I am interested in a modern website with the ability to self-manage content. Please contact me to discuss the project details.\n\nBest regards',
    },
  },
  instagramBeauty: {
    hero: {
      title: 'Turn Your Instagram into a Full Business',
      description: 'No more booking clients through DMs or Booksy. Your website will work as your own booking platform – with portfolio, pricing, online booking, and 24/7 sales capability.',
      cta: 'Schedule a Consultation',
      emailSubject: 'Consultation - Beauty Business Website',
      emailBody: 'Hello,\n\nI would like to schedule a consultation about creating a website for my beauty business. I am interested in a website with online booking and sales capabilities. Please contact me to discuss the details.\n\nBest regards',
    },
    services: {
      heading: 'Services',
      portfolio: {
        title: 'Portfolio Website + Online Booking',
        description: 'Your website will look like a professional business card: portfolio with transformations, pricing, service descriptions, and online booking calendar. Clients choose the service and time themselves, and you save time on organization.',
      },
      landingPage: {
        title: 'Mini-App / Landing Page',
        description: 'Landing page for a specific product or package – fast, intuitive, and optimized for sales. Clients book or contact through a form, and you focus on what matters most.',
      },
      shop: {
        title: 'Website + Online Shop',
        description: 'Sell cosmetics, packages, styling, and services online – without the need for 1:1 contact. Clients buy, pay, and confirm online, and you earn 24/7.',
      },
      ai: {
        title: 'Website + AI Integration',
        description: 'Bring AI to your business: chatbot answers questions, automates bookings, and helps select packages. Your website will work like an intelligent assistant.',
      },
      cta: 'Want to know how this will work for your business? Let\'s talk.',
      emailSubject: 'Question about services - Beauty Website',
      emailBody: 'Hello,\n\nI would like to discuss services for my beauty business. I am interested in how your solutions can help with booking automation and online sales. Please contact me.\n\nBest regards',
    },
    target: {
      heading: 'Who is this for?',
      who: {
        title: 'Who?',
        description: 'Beauty business owners who already have clients on Instagram but want to look professional, have their own website, and sell online.',
      },
      needs: {
        title: 'What do they need?',
        items: [
          'A professional business card that\'s not limited to an Instagram profile.',
          'Fast online booking and sales.',
          'Time savings on appointment organization and communication.',
          'Ability to sell packages, cosmetics, and services without 1:1 contact.',
        ],
      },
    },
    process: {
      heading: 'How I Work',
      steps: [
        {
          title: 'Brief',
          description: 'We discuss your needs and expectations.',
        },
        {
          title: 'Consultation',
          description: 'We select the best solutions.',
        },
        {
          title: 'Visual Design',
          description: 'Your website will match your style.',
        },
        {
          title: 'Implementation',
          description: 'I build the website according to your requirements.',
        },
        {
          title: 'Testing & Launch',
          description: 'We check everything together.',
        },
        {
          title: 'Support',
          description: 'I help you at every stage.',
        },
      ],
      cta: 'Fill out the form or send a message',
      emailSubject: 'Question about collaboration process',
      emailBody: 'Hello,\n\nI would like to learn more about the collaboration process when creating a website. I am interested in how the project implementation looks from start to finish. Please contact me.\n\nBest regards',
      meetingInfo: {
        online: 'Meetings are mainly online – we discuss everything from anywhere in the world.',
        wroclaw: 'If you want, we can also meet in person in Wrocław.',
      },
    },
    quiz: {
      heading: 'Is This for You?',
      questions: [
        'Do you have many clients, but they always have to DM you before booking an appointment?',
        'Would you like to be able to sell packages, cosmetics, or services online without 1:1 contact?',
        'Do you dream of your own website that works like your booking platform – with calendar, clients, and payments?',
      ],
      cta: 'This is what I do. Send me a message.',
      emailSubject: 'This is for me! - Beauty Website',
      emailBody: 'Hello,\n\nI answered "yes" to the quiz questions and would like to learn more about your offer. I need a website with online booking for my beauty business. Please contact me.\n\nBest regards',
    },
  },
} as const

export default translation

