
import { useState } from 'react'
import './App.css'
import GuitarMain from './guitar'
import Home from './home'
import { Route, Routes, BrowserRouter, Link } from 'react-router'


const App = () => {

  return(
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="guitar" element={<GuitarMain />} />
      </Routes>
    </div>
  )
}

export default App

