import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const api_key = import.meta.env.VITE_GOOGLE_API_KEY || process.env.VITE_GOOGLE_API_KEY


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={api_key}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
