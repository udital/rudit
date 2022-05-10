import React from 'react'
import '../stylesheets/App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import g from '../images/g.png'
import discord from '../images/Discord-Logo-Color.png'
import Modal, { ModalOptions } from '../components/Modal'
import qs from 'qs'

function Login() {
  const navigate = useNavigate()

  return (
    <div className='app'>
        <Header/>
        <div className='flex h-screen'>
            <div className='m-auto'>
                <span style={{fontSize: 32, marginLeft: 5}}>로그인</span><br/><br/>
                <button onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?" + qs.stringify({
                  client_id: process.env.REACT_APP_GOOGLE_API_KEY,
                  redirect_uri: process.env.REACT_APP_ENDPOINT + '/google_cb',
                  response_type: 'code',
                  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
                  access_type: 'offline'
                })} className='bg-blue-400 text-white w-44' style={{marginLeft: 5, marginBottom: 5}}><img src={g} height={24} width={24} style={{float: 'left', backgroundColor: 'white', borderRadius: 100, border: '3px solid'}}/>Google로 로그인</button><br/>
                <button onClick={() => window.location.href = "https://discord.com/api/oauth2/authorize?" + qs.stringify({
                  client_id: process.env.REACT_APP_DISCORD_ID,
                  redirect_uri: process.env.REACT_APP_ENDPOINT + '/discord_cb',
                  response_type: 'code',
                  scope: 'identify email'
                })} className='discord-bg text-white w-46' style={{marginLeft: 5, marginBottom: 5}}><img src={discord} height={24} width={24} style={{float: 'left', backgroundColor: 'white', borderRadius: 100, border: '3px solid'}}/>Discord로 로그인</button>
            </div>
        </div>
    </div>
  );
}

export default Login