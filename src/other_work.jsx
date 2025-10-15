import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'


const RenderPart = (props) => {

    if(!props.wexObj){
        //useEffect runs after first render
        return
    }

    let {period, role, description, imgsrc, notes} = props.wexObj
    //console.log(description)

    return(
        <div>
            <h2>{role}</h2>
            <h3>{period}</h3>

            <p>{description}</p>

            {imgsrc.map( el => <img src={el} alt="..." /> )}
            <p>{notes}</p>

        </div>
    )
}

const OtherWork = () => {
    
    const [wex, setWex] = useState([])

    useEffect( () => {
        fetch('src/work_ex.json')
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



