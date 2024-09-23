import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ServiceProvider } from './ServiceContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServiceProvider>
      <Router>
      <App />
      </Router>
    </ServiceProvider>
  </StrictMode>,
)
