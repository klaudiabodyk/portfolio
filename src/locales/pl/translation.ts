const translation = {
  languageSwitcher: {
    label: 'Wybierz język',
    polish: 'Polski',
    english: 'Angielski',
  },
  ariaLabels: {
    hero: 'Sekcja bohatera',
    about: 'Sekcja o mnie',
    projects: 'Sekcja projektów',
    lecturer: 'Sekcja wykładowcy',
    solutions: 'Sekcja rozwiązań',
    skills: 'Sekcja umiejętności',
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
  about: {
    headingLinePrimary: 'Software Engineer',
    headingLineAccent: 'Frontend & AI',
    meta: 'ponad 6 lat doświadczenia',
    description:
      'Jestem Software Engineer ze specjalizacją we frontendzie i rozwiązaniach opartych na sztucznej inteligencji. Buduję skalowalne aplikacje w React i TypeScript, dbając o wydajność, dostępność i doświadczenie użytkownika. Łączę warstwę UI z usługami AI – od asystentów opartych na LLM po integracje z chmurą – tak, aby realnie przyspieszać pracę zespołów produktowych i skracać time-to-market nowych funkcji.',
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
  contact: {
    heading: 'Skontaktuj się',
  },
} as const

export default translation

