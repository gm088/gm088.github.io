import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'
import { parseDescription } from './work_exp'

const RenderPart = (props) => {

    if(!props.secObj){
        //useEffect runs after first render
        return
    }

    let {title, description, imgsrc, notes, ytLinks} = props.secObj
    //console.log(description)
    
    const embeddedVidLinks = ytLinks.map(link => {
        return `https://www.youtube.com/embed/${link}`
    })
    const parsedDescr = parseDescription(description)

    return(
        <div>
            <h2>{title}</h2>
            {parsedDescr.map( el => <p>{el}</p> )}

            {/* imgsrc.map( el => <img src={el} alt="..." /> ) */}
            {embeddedVidLinks.map( link => 
                <iframe
                src={link}
                frameBorder="0" width="640" height="360"
                allow='autoplay; encrypted-media'
                title='video' />
            )}
            <dl>
                {notes.map(note => 
                <>
                <dt className="cusList1" key={note.name}> {note.name} </dt>
                <dd> {note.description} </dd>
                <br />
                </>
                )}
            </dl>

        </div>
    )
}

const InterestsMain = () => {
    
    const [ints, setInts] = useState([])

    //get the metadata from the json file
    useEffect( () => {
        fetch('src/data/interests.json')
        .then(res => res.json())
        .then(data => setInts(data))
        .catch(err => console.log(err))
    }, [])


    return(
        <div>
            <Link to='/'>Home</Link>
            <RenderPart secObj={ints[0]} />
            <hr />
            <RenderPart secObj={ints[1]} />

            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default InterestsMain
