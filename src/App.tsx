import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import SoftwareEngineer from './pages/SoftwareEngineer'
import WebDevOffer from './pages/WebDevOffer'
import AiWorkshops from './pages/AiWorkshops'
import './App.css'

function AppContent() {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const langParam = searchParams.get('lang')
    if (langParam && (langParam === 'pl' || langParam === 'en')) {
      if (i18n.language !== langParam) {
        void i18n.changeLanguage(langParam)
      }
    }
  }, [searchParams, i18n])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/software-engineer" element={<SoftwareEngineer />} />
      <Route path="/web-development" element={<WebDevOffer />} />
      <Route path="/ai-workshops" element={<AiWorkshops />} />
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
