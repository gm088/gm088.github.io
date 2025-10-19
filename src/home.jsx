import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import { useNavigate } from "react-router";
import { footerClickHander } from './App';

const ShowOther = (props) => {

    //render a footer with links (LinkedIn, Github, Youtube)
    const githubLink = "https://github.com/gm088"
    const LinkedInLink = "https://www.linkedin.com/in/gm271828/"
    const YoutubeLink = "https://www.youtube.com/@gauravmandana"
  
    return(
      <div className="footer">
        <p>Find me on: 
  
        <img className="imgbutton" src="./gitlogo.png" 
        alt="github-link" onClick={ props.Clickhandler(githubLink) } />
        <img className="imgbutton" src="./linlogo.jpg" 
        alt="github-link" onClick={ props.Clickhandler(LinkedInLink) } />
        <img className="imgbutton" src="./ytlogo.webp" 
        alt="github-link" onClick={ props.Clickhandler(YoutubeLink) } />
  
        </p>
        <p className="contactPiece">contact: gauravmandana@gmail.com</p>
      </div>
    )
  
  }

const RenderHeading = () => {

    const headerMessage = "Hello!"
    return(
      <div>
        <h1>{headerMessage}</h1>
        <p>I'm Gaurav. I am a computational scientist with a strong foundation in Python, R, 
            machine learning, and statistical analysis. 
            Experienced in building end-to-end data pipelines, 
            performing complex analyses on large datasets, 
            and effectively communicating results to audiences both within 
            and out of the field. 
        </p>
        <p>Welcome to my webpage, which I built with JavaScript, 
            using the React framework (source code
             <a href="https://github.com/gm088/gm088.github.io"> here</a>).
        </p>

        <p>I plan to continue developing this page by continually updating the 
            different sections you see below.
        </p>
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
        <div className="home">
            <div>
              <img className='profPic' src='jjj2.png' alt='me' />
            </div>

            <RenderHeading />
            <br />
            <RenderSections />

            <ShowOther Clickhandler={footerClickHander} />

        </div>
    )
}

export default Home
