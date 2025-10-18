import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import { parseDescription } from './work_exp'

const RenderPart = (props) => {

    if(!props.wexObj){
        //useEffect runs after first render
        return
    }

    let {title, description, images, notes, links} = props.wexObj
    //console.log(description)
    const parsedDescr = parseDescription(description)

    return(
        <div>
            <h2>{title}</h2>
            {parsedDescr.map( el => <p>{el}</p> )}

            {links.map( el => 
            <>
            <a href={el.src} target="_blank"> {el.label} </a>
            <br />
            </>
            )}

            {images.map( el => 
            <>
            <p className="caption">Below: {el.description}</p>
            <img src={el.src} alt="..." height="320" /> 
            </>
            )}

            <p>{notes}</p>

        </div>
    )
}

const OtherWork = () => {
    
    const [wex, setWex] = useState([])

    //get the metadata from the json file
    useEffect( () => {
        fetch('src/data/other_work.json')
        .then(res => res.json())
        .then(data => setWex(data))
        .catch(err => console.log(err))
    }, [])
    //console.log(wex)

    return(
        <div>
            <Link to='/'>Home</Link>
            <RenderPart wexObj={wex[2]} />
            <hr />
            <RenderPart wexObj={wex[0]} />

            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default OtherWork



