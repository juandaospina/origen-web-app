import React from 'react'
import ReactDOM from 'react-dom/client'
import { OrigenApp } from './routes/OrigenApp'
import '../src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrigenApp />
  </React.StrictMode>
)
