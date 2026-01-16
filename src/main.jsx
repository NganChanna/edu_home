import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider defaultTheme="dark" storageKey="app-theme">
    <App />
  </ThemeProvider>
  </StrictMode>,
)
