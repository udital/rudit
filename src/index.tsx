import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <PrivateRoute token="" outlet={<App />}/>
      }/>
      <Route path="login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
)