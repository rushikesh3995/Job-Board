import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Navbar from './Navbar.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
 
  
  
)
