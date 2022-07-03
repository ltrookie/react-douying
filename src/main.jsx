import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/styles/reset.css'
import './assets/font/iconfont.css'
// import './modules/rem'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
