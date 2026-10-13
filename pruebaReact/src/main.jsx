import { StrictMode } from 'react'
// La API createRoot crea un punto en el DOM que React pasa a administrar
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
