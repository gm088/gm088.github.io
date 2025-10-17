import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'

//one section for mol dynamics, with pretty pictures
//one section for current work stuff

//lazy way to structure my text - I use XXXX as delimiter in the JSON file
const parseDescription = (desc) => desc.split("XXXX")

const RenderPart = (props) => {

    if(!props.wexObj){
        console.log('not yet')
        return
    }

    let {period, role, description, images, notes} = props.wexObj
    //console.log(description)
    const parsedDescr = parseDescription(description)

    return(
        <div>
            <h2>{role}</h2>
            <h3>{period}</h3>

            {parsedDescr.map( el => 
            <>
            <p>{el}</p>
            <br />
            </>
            )}

            {images.map( el => 
            <>
            <p className="caption">Below: {el.description}</p>
            <img src={el.src} alt="..." /> 
            </>
            )}
            
            <p>{notes}</p>

        </div>
    )
}

const WorkExp = () => {
    
    const [wex, setWex] = useState([])

    useEffect( () => {
        fetch('src/data/work_ex.json')
        .then(res => res.json())
        .then(data => setWex(data))
        .catch(err => console.log(err))
    }, [])
    //console.log(wex)

    return(
        <div>
            <Link to='/'>Home</Link>
            <RenderPart wexObj={wex[1]} />
            <hr />
            <RenderPart wexObj={wex[0]} />

            <Link to="/">Back to Homepage</Link>
        </div>
    )
}


export default WorkExp
