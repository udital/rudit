import React from 'react'
import '../stylesheets/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Header() {
  return (
    <div className="header w-full pb-4 absolute">
        <div className='rounded-3xl primary-bg w-16 h-16 mt-2 ml-2'>&ensp;</div>
    </div>
  );
}

export default Header