import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './BackendDevResume.jsx'
import BackendDevResume from './BackendDevResume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackendDevResume />
  </StrictMode>,
)
