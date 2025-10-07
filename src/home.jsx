import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'

const RenderExternalLinks = () => {

  //here put the links to Github, LinkedIn, etc...
}

const RenderHeading = () => {

    const headerMessage = "Welcome!"
    return(
      <div>
        <h1>{headerMessage}</h1>
      </div>
    )
  }

const RenderSections = () => {
  
    //sections I could have are: guitar stuff, interests, work experience
    const sections = [ {id: '1', tag: 'guitar stuff', link: '' }, 
                      {id: '2', tag: 'interests', link: '' },
                      {id: '3', tag: 'work experience', link: '' } ]
  
    return(
      <div>
        <ul>
          <Link to="guitar">guitar</Link>
          <br />
          <Link to="">interests</Link>
          <br />
          <Link to="work-exp">work experience</Link>
        </ul>
      </div>
    )
}

const Home = () => {

    return(
        <div>
            <RenderHeading />
            <RenderSections />
        </div>
    )
}

export default Home
