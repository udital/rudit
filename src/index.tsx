import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './routes/PrivateRoute'
import GoogleLoginPage from './pages/GoogleLoginPage'
import DiscordLoginPage from './pages/DiscordLoginPage'

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
      <Route path="google_cb" element={<GoogleLoginPage/>}/>
      <Route path="discord_cb" element={<DiscordLoginPage/>}/>
    </Routes>
  </BrowserRouter>
)