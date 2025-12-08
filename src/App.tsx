import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import SoftwareEngineer from './pages/SoftwareEngineer'
import WebDevOffer from './pages/WebDevOffer'
import AiWorkshops from './pages/AiWorkshops'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-engineer" element={<SoftwareEngineer />} />
          <Route path="/web-development" element={<WebDevOffer />} />
          <Route path="/ai-workshops" element={<AiWorkshops />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
