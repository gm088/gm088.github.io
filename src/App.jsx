
import { useState } from 'react'
import './App.css'
import GuitarMain from './guitar'
import WorkExp from './work_exp'
import Home from './home'
import { Route, Routes, BrowserRouter, Link } from 'react-router'

const footerClickHander = (link) => {

  return () => {
    //follow the link
    window.open(link)
  }
  
}

const RenderFooter = (props) => {

  //render a footer with links (LinkedIn, Github, Youtube)
  const githubLink = "https://github.com/gm088"
  const LinkedInLink = "https://www.linkedin.com/in/gm271828/"
  const YoutubeLink = "https://www.youtube.com/@gauravmandana"

  return(
    <div className="footer">

      <img className="imgbutton" src="./gitlogo.png" 
      alt="github-link" onClick={ props.Clickhandler(githubLink) } />
      <img className="imgbutton" src="./linlogo.jpg" 
      alt="github-link" onClick={ props.Clickhandler(LinkedInLink) } />
      <img className="imgbutton" src="./ytlogo.webp" 
      alt="github-link" onClick={ props.Clickhandler(YoutubeLink) } />

    </div>
  )

}


const App = () => {

  return(
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="guitar" element={<GuitarMain />} />
        <Route path="work-exp" element={<WorkExp />} />
      </Routes>
      
      <RenderFooter Clickhandler={footerClickHander} />
    </div>
  )
}

export default App

