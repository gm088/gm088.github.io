import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'


const RenderPart = (props) => {

    if(!props.wexObj){
        //useEffect runs after first render
        return
    }

    let {title, description, imgsrc, notes} = props.wexObj
    //console.log(description)

    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>

            {imgsrc.map( el => <img src={el} alt="..." /> )}
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
            <RenderPart wexObj={wex[0]} />
            <hr />
            <RenderPart wexObj={wex[1]} />

            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default OtherWork



