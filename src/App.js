import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'

import Signup from './pages/signup/Signup'

const App = () => {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App