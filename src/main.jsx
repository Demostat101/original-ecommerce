import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CountDown } from './components/Home/HomeSubComponents/SecondComponent/CountDown.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountDown>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  </CountDown>
   
  </React.StrictMode>,
)
