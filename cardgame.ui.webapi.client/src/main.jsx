import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './styles/index.css'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
