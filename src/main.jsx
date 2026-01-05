import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  // Changed from App to SuyaApp

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)