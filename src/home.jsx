import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import { useNavigate } from "react-router";

const RenderHeading = () => {

    const headerMessage = "Hello!"
    return(
      <div>
        <h1>{headerMessage}</h1>
        <p>Welcome to my webpage, which I built with JavaScript, using the React framework (source code <a>here</a>)</p>
      </div>
    )
  }

const RenderSections = (props) => {

    //return three buttons
    let nav = useNavigate()
  
    return(
      <div>
        <button className='hpButton' onClick={ () => {nav('work-exp')} }>
          Work Experience
        </button>
        <button className='hpButton' onClick={ () => {nav('interests')} }>
          Interests
        </button>
        <button className='hpButton' onClick={ () => {nav('other-work')} }>
          Assorted Projects
        </button>
      </div>
    )
}

const Home = () => {

    return(
        <div>
            <div>
              <img className='profPic' src='jjj.jpeg' alt='me' />
            </div>

            <RenderHeading />
            <RenderSections />

            <p>Here is my motherfucking CV</p>
        </div>
    )
}

export default Home
