import React from 'react'
import '../stylesheets/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import g from '../images/g.png'

function Login() {
  return (
    <div className='app'>
        <Header/>
        <div className='flex h-screen'>
            <div className='m-auto'>
                <span style={{fontSize: 32, marginLeft: 5}}>로그인</span><br/><br/>
                <button className='bg-blue-400 text-white w-44' style={{marginLeft: 5, marginBottom: 5}}><img src={g} height={24} width={24} style={{float: 'left', backgroundColor: 'white', borderRadius: 100, border: '3px solid'}}/>Google로 로그인</button>
            </div>
        </div>
    </div>
  );
}

export default Login