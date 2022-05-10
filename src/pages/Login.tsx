import React from 'react'
import '../stylesheets/App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import g from '../images/g.png'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import Modal, { ModalOptions } from '../components/Modal'
import { onSuccess } from '../login/google'

function Login() {
  const navigate = useNavigate()

  return (
    <div className='app'>
        <Header/>
        <div className='flex h-screen'>
            <div className='m-auto'>
                <span style={{fontSize: 32, marginLeft: 5}}>로그인</span><br/><br/>
                <GoogleLogin
                  uxMode='redirect'
                  clientId={process.env.REACT_APP_GOOGLE_API_KEY as string}
                  render={renderProps => {
                    return <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='bg-blue-400 text-white w-44' style={{marginLeft: 5, marginBottom: 5}}><img src={g} height={24} width={24} style={{float: 'left', backgroundColor: 'white', borderRadius: 100, border: '3px solid'}}/>Google로 로그인</button>
                  }}
                  onSuccess={(response: GoogleLoginResponse | GoogleLoginResponseOffline) => {onSuccess(response, navigate)}}
                  onFailure={(error) => {
                    console.log(error)
                  }}
                />
            </div>
        </div>
    </div>
  );
}

export default Login