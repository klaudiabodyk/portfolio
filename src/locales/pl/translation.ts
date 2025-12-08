const translation = {
  languageSwitcher: {
    label: 'Wybierz język',
    polish: 'Polski',
    english: 'Angielski',
  },
  navigation: {
    home: 'Strona główna',
  },
  ariaLabels: {
    hero: 'Sekcja bohatera',
    services: 'Sekcja usług',
    about: 'Sekcja o mnie',
    projects: 'Sekcja projektów',
    lecturer: 'Sekcja wykładowcy',
    solutions: 'Sekcja rozwiązań',
    skills: 'Sekcja umiejętności',
    experience: 'Sekcja doświadczenia zawodowego',
    certifications: 'Sekcja certyfikatów',
    education: 'Sekcja edukacji',
    languages: 'Sekcja języków',
    contact: 'Sekcja kontaktu',
  },
  hero: {
    cta: 'Skontaktuj się',
    titlePrimary: 'PURE CODE',
    titleBy: 'by',
    titleName: 'Klaudia Bodyk',
    description:
      'Software Engineer łącząca frontend z AI. Tworzę skalowalne interfejsy w React/TypeScript i wdrażam funkcje oparte na modelach językowych, które realnie przyspieszają pracę zespołów produktowych.',
    subtitle: 'Software Engineer & AI Trainer',
  },
  services: {
    heading: 'Moje Usługi',
    aiWorkshops: {
      title: 'Warsztaty AI',
      description: 'Praktyczne warsztaty z zastosowań sztucznej inteligencji w biznesie i rozwoju oprogramowania.',
      cta: 'Zobacz warsztaty',
    },
    softwareEngineer: {
      title: 'Software Engineer',
      description: 'Rozwój skalowalnych aplikacji frontendowych w React/TypeScript z integracjami AI.',
      cta: 'Zobacz ofertę',
    },
    webDevOffer: {
      title: 'Oferta Web Development',
      description: 'Nowoczesne strony internetowe i systemy CMS do samodzielnego zarządzania treścią.',
      cta: 'Zobacz ofertę',
    },
  },
  about: {
    headingLinePrimary: 'Senior Software Engineer',
    headingLineAccent: 'Frontend & Cloud',
    meta: '5 lat doświadczenia',
    description:
      'Doświadczony inżynier z 5-letnim doświadczeniem w tworzeniu aplikacji webowych zintegrowanych z chmurą przy użyciu React i TypeScript. Specjalizuję się w projektowaniu architektur opartych na Azure, automatyzacji wdrożeń oraz tworzeniu skalowalnych rozwiązań opartych na AI. Udowodniony dorobek w poprawie wydajności i niezawodności poprzez modernizację infrastruktury, pipeline\'y CI/CD oraz optymalizację kodu. Certyfikowana w Microsoft AI Fundamentals, z podstawowym doświadczeniem w Azure DevOps, Blob Storage, AWS SageMaker oraz kontenerowych pipeline\'ach.',
    visualAlt: 'Abstrakcyjna grafika w odcieniach fioletu i pomarańczu',
  },
  projects: {
    headingTop: 'Moje',
    headingBottom: 'Projekty',
    note:
      'Moje najnowsze projekty',
    items: {
      manianaa: 'https://manianaa.com/',
      joannaadamek: 'https://joannaadamek.com.pl/',
      dashboardmaniany: 'https://dashboardmaniany.netlify.app',
      salazabawdiggers: 'https://salazabawdiggers.pl',
    },
  },
  lecturer: {
    headingPrimary: 'Wykładowca AI',
    headingAccent: 'na Uniwersytecie Ekonomicznym',
    description:
      'Prowadzę zajęcia z zastosowań sztucznej inteligencji w biznesie na Uniwersytecie Ekonomicznym. Pokazuję studentom i profesjonalistom, jak przekładać możliwości modeli językowych i narzędzi AI na konkretne procesy: od analizy danych, przez automatyzację zadań, po projektowanie produktów cyfrowych. Stawiam na praktyczne warsztaty, w których uczestnicy wychodzą z gotowymi scenariuszami użycia i materiałami do wdrożenia w pracy.',
    visualAlt: 'Ilustracja neuronu symbolizującego sztuczną inteligencję',
  },
  solutions: {
    title: 'Rozwiązania cyfrowe dla biznesu',
    subtitle: '(strony i systemy do samodzielnego zarządzania)',
    description:
      'Projektuję i wdrażam nowoczesne strony oraz proste systemy do samodzielnego zarządzania treściami, ofertą i sprzedażą online. Tworzę rozwiązania oparte na sprawdzonych systemach zarządzania treścią (CMS), dzięki którym klienci mogą łatwo aktualizować swoje serwisy bez znajomości kodu – od edycji tekstów i zdjęć, przez publikację artykułów, po obsługę formularzy i prostych integracji z narzędziami marketingowymi.',
    primaryAlt: 'Zestaw ikon symbolizujących moduły cyfrowych rozwiązań',
    secondaryAlt: 'Sieć połączeń obrazująca automatyzację i integracje',
  },
  skills: {
    title: 'Moje umiejętności',
    visualAlt: 'Zestaw ikon technologicznych reprezentujących umiejętności',
    items: {
      cloud: {
        label: 'Chmura i DevOps',
        description:
          'Azure (Blob Storage, Functions, Monitor, App Insights), Azure DevOps, GitHub Actions, AWS SageMaker, LangFlow, Azure AI Foundry',
      },
      infrastructure: {
        label: 'Infrastruktura i automatyzacja',
        description: 'Terraform (podstawy), IaC, pipeline’y CI/CD',
      },
      frontend: {
        label: 'Frontend',
        description: 'React 18/19, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS',
      },
      containers: {
        label: 'Kontenery i systemy',
        description:
          'Docker, Kubernetes (AKS w stopniu podstawowym), integracja z REST API',
      },
      backend: {
        label: 'Dane i backend',
        description: 'Java (REST API), MySQL, Cosmos DB (poziom podstawowy)',
      },
      scripting: {
        label: 'Skrypty',
        description: 'PowerShell, YAML, Bash (proste automatyzacje)',
      },
      security: {
        label: 'Bezpieczeństwo',
        description:
          'Zarządzanie tożsamością, bezpieczne przechowywanie danych, polityki dostępu',
      },
    },
  },
  experience: {
    title: 'Doświadczenie zawodowe',
    visualAlt: 'Oś czasu doświadczenia zawodowego',
    items: {
      airslate: {
        company: 'AIRSLATE',
        position: 'INŻYNIER FRONTEND & CLOUD',
        period: '05/2025 - OBECNIE',
        description: 'Zaprojektowałem i prowadziłem rozwój samoobsługowego potoku przywracania dokumentów, integrując wiele modeli AI (auto-cropping, korekcja oświetlenia, de-warping) w skalowalny, obserwowalny workflow używany przez inżynierów. Wykorzystałem usługi AWS, w tym SageMaker do wdrażania modeli AI, wraz z innymi narzędziami AWS do przetwarzania dokumentów i automatyzacji. Przeprowadziłem kompleksowe przeglądy kodu, podnosząc jakość kodu i egzekwując najlepsze praktyki w zespole inżynierskim. Dostarczyłem wiele kluczowych funkcji frontendowych zgodnie z harmonogramem, poprawiając zaangażowanie użytkowników i funkcjonalność aplikacji. Uczestniczyłem w tworzeniu i optymalizacji workflow CI/CD przy użyciu GitHub Actions wraz z monitoringiem infrastruktury. Zapewniłem uwzględnienie aspektów bezpieczeństwa, w tym zarządzania danymi i siecią w środowisku chmurowym.',
      },
      eygds: {
        company: 'EY GDS POLAND',
        position: 'DEWELOPER WEB (REACT + TYPESCRIPT + AZURE)',
        period: '04/2020 - 12/2024',
        description: 'Prowadziłem rozwój zintegrowanego z chmurą czatbota LangFlow + Azure AI dla czołowego amerykańskiego klienta bankowego. Opracowałem kolejkę zadań asynchronicznych opartą na TypeScript do wsparcia skalowalności usług backendowych w infrastrukturze chmurowej Azure. Zaimplementowałem rozwiązanie Azure Blob Storage do przechwytywania zrzutów ekranu, zapewniając bezpieczne i odporne na awarie przechowywanie danych. Przeprowadzałem regularne przeglądy integracji DevOps, współpracując przy spójności środowisk i optymalizacji CI/CD. Zmniejszyłem czas ładowania aplikacji o 20% poprzez strategie statycznego buforowania i wdrażania CDN. Rozwiązałem ponad 214 krytycznych błędów poprzez ustrukturyzowane refaktoryzacje, zwiększając łatwość utrzymania i niezawodność.',
      },
    },
  },
  certifications: {
    title: 'Certyfikaty',
    visualAlt: 'Odznaki certyfikacyjne i osiągnięcia',
    items: {
      ai900: {
        name: 'AI-900 Microsoft AI Fundamentals',
        description: 'Certyfikowana w Microsoft AI Fundamentals',
        link: 'https://learn.microsoft.com/api/credentials/share/pl-pl/KlaudiaBodyk-3797/6D5B9A78D68337F4?sharingId=355DDBCA7BA42366',
      },
      architecture: {
        name: 'Architektura Na Froncie',
        description: 'Ukończenie zaawansowanego kursu architektury frontendowej',
        link: 'https://architekturanafroncie.pl',
      },
      modernArchitect: {
        name: 'Droga Nowoczesnego Architekta',
        description: 'Ukończenie kursu nowoczesnej architektury oprogramowania',
        link: 'https://droganowoczesnegoarchitekta.pl',
      },
    },
  },
  education: {
    title: 'Wykształcenie',
    visualAlt: 'Wykształcenie i osiągnięcia akademickie',
    degree: 'Licencjat z Inżynierii Informatycznej',
    university: 'Uniwersytet Humanistyczno-Ekonomiczny w Łodzi, Łódź, Polska',
  },
  languages: {
    title: 'Języki',
    visualAlt: 'Wskaźniki biegłości językowej',
    items: {
      english: {
        name: 'Angielski',
        level: 'B2',
      },
      german: {
        name: 'Niemiecki',
        level: 'B2',
      },
      polish: {
        name: 'Polski',
        level: 'Ojczysty',
      },
    },
  },
  contact: {
    heading: 'Skontaktuj się',
  },
  aiWorkshops: {
    hero: {
      title: 'Warsztaty AI',
      description: 'Praktyczne warsztaty z zastosowań sztucznej inteligencji w biznesie i rozwoju oprogramowania.',
      subtitle: 'Szkolenia AI i Warsztaty',
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
      description: 'Nowoczesne strony internetowe i systemy CMS do samodzielnego zarządzania treścią.',
      subtitle: 'Strony internetowe i rozwiązania cyfrowe',
    },
  },
} as const

export default translation

