import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router'

//one section for mol dynamics, with pretty pictures
//one section for current work stuff

const RenderPart = (props) => {

    const text = props.text

    return(
        <div>
            <p>{props.text}</p>
            <img src={props.imgsrc} alt="..."></img>
        </div>
    )
}

const WorkExp = () => {

    const part1imgsrc="./WE1.png"
    const part1text = "Tiotropium"

    const part2imgsrc="./WE2.png"
    const part2text = "Transcription"

    return(
        <div>
            <RenderPart imgsrc={part1imgsrc} text={part1text} />
            <hr />
            <RenderPart imgsrc={part2imgsrc} text={part2text} />


            <Link to="/">Back to Home</Link>
        </div>
    )
}


export default WorkExp
