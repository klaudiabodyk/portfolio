import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Home from './pages/Home'
import SoftwareEngineer from './pages/SoftwareEngineer'
import WebDevOffer from './pages/WebDevOffer'
import AiWorkshops from './pages/AiWorkshops'
import InstagramBeauty from './pages/InstagramBeauty'
import './App.css'

function AppContent() {
  const { i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const langParam = searchParams.get('lang')
    if (langParam && (langParam === 'pl' || langParam === 'en')) {
      if (i18n.language !== langParam) {
        void i18n.changeLanguage(langParam)
      }
    }

    const themeParam = searchParams.get('theme')
    if (themeParam && (themeParam === 'light' || themeParam === 'dark')) {
      if (theme !== themeParam) {
        setTheme(themeParam)
      }
    }
  }, [searchParams, i18n, theme, setTheme])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/software-engineer" element={<SoftwareEngineer />} />
      <Route path="/web-development" element={<WebDevOffer />} />
      <Route path="/ai-workshops" element={<AiWorkshops />} />
      <Route path="/instagram-beauty" element={<InstagramBeauty />} />
    </Routes>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
