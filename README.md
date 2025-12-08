# Klaudia Bodyk - Portfolio

A modern, responsive personal portfolio website built with React 19, TypeScript, and Vite. This project showcases my skills, projects, and experience as a Software Engineer and AI Trainer.

https://klaudiabodyk.netlify.app

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for fast performance.
- **Internationalization (i18n)**: Full support for English and Polish languages using `react-i18next`.
- **Dark & Light Mode**: Themed interface with seamless switching via CSS variables.
- **Interactive Carousel**: 3D Coverflow project showcase using `swiper`.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Animations**: Smooth fade-in effects and floating elements for an engaging user experience.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Pure CSS (CSS Variables, Flexbox/Grid, Animations)
- **Internationalization**: i18next, react-i18next
- **Carousel**: Swiper.js
- **Linting**: ESLint

## 📦 Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/klaudiabodyk/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173`.

## 🏗️ Project Structure

```text
src/
├── assets/          # Images and icons
├── components/      # Reusable UI components (ProjectCarousel, ThemeToggle, etc.)
├── context/         # React Context (ThemeContext)
├── hooks/           # Custom hooks
├── locales/         # Translation files (en/pl)
├── App.tsx          # Main application component
├── App.css          # Global and component-specific styles
└── main.tsx         # Entry point
```

## 🎨 Customization

### Adding New Projects
To add new projects to the carousel:
1.  Add your project image to `src/assets/`.
2.  Update `src/components/ProjectCarousel.tsx` to import the image and add a new entry to the `projects` array.

### Updating Translations
Translation files are located in `src/locales/`. Update `en/translation.ts` and `pl/translation.ts` to modify text content.

## 📬 Contact

- **Email**: [klaudia.bodyk@icloud.com](mailto:klaudia.bodyk@icloud.com)
- **LinkedIn**: [Klaudia Bodyk](https://www.linkedin.com/in/klaudia-bodyk/)
- **GitHub**: [klaudiabodyk](https://github.com/klaudiabodyk)
