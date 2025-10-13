import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import { useNavigate } from "react-router";

const RenderExternalLinks = () => {

  //here put the links to Github, LinkedIn, etc...
}

const RenderHeading = () => {

    const headerMessage = "Hello!"
    return(
      <div>
        <h1>{headerMessage}</h1>
        <p>Welcome to my webpage, made with React + JS</p>
      </div>
    )
  }

const hpButtonClickHandler = (link) => {
  console.log(link)

  return () => {
    useNavigate(link)
  }

}

const RenderSections = (props) => {

    //return three buttons
    let nav = useNavigate()
  
    return(
      <div>
        <button className='hpButton' onClick={ () => {nav('work-exp')} }>
          Work Experience
        </button>
        <button className='hpButton' onClick={ () => {nav('guitar')} }>
          Interests
        </button>
        <button className='hpButton' onClick={ () => {nav('work-exp')} }>
          Personal Projects
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
            <RenderSections clickhandler={hpButtonClickHandler}/>
        </div>
    )
}

export default Home
