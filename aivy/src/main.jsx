import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="92193001677-mqaq5rgr0llqi9kvgaujaknjr6d5oidf.apps.googleusercontent.com">
  <React.StrictMode>
    <Router>
   
    <App />
    </Router>
  </React.StrictMode></GoogleOAuthProvider>,
)
