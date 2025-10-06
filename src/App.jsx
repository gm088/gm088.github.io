
import { useState } from 'react'
import './App.css'
import GuitarMain from './guitar'
import WorkExp from './work_exp'
import Home from './home'
import { Route, Routes, BrowserRouter, Link } from 'react-router'


const App = () => {

  return(
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="guitar" element={<GuitarMain />} />
        <Route path="work-exp" element={<WorkExp />} />
      </Routes>
    </div>
  )
}

export default App

