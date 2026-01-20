import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="app-theme">
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
