import React, { useState } from 'react'
import './colorSquare.scss'
// import PropTypes from 'prop-types'
function getRandomColor(){
    const colorArr = ['yellow', 'pink', 'orange', 'blue', 'purple']
    const random = Math.trunc(Math.random() * 5)
    //console.log(random)
    return colorArr[random]
}

function ColorSquare() {
    const initialState = localStorage.getItem("box_color") || 'green'
    console.log(initialState)
    const [color, setColor] = useState(initialState)
    function handleColor(){
        // get random color
        const newcolor = getRandomColor()
        //set color
        setColor(newcolor)
        //save newcolor in localStorge, setItem
        localStorage.setItem("box_color", newcolor)
    }
    return (
        <div className='color-page'>
            <h1>Click and then changing the color, let's try!</h1>
            <p style={{color: color}}>{localStorage.getItem("box_color")}</p>
            <div className = "color-square" style={{backgroundColor: color}} onClick={handleColor}></div>
        </div>
    )
}

// colorSquare.propTypes = {

// }

export default ColorSquare

