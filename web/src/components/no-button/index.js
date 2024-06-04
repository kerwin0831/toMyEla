import React, { useState} from "react"
import { Button } from 'react-bootstrap'

const NoButton = () => {
    
        
    const [cssButtonNo, setCSSButtonNo] = useState({})

    const onMoveNoButton = () => {
    setCSSButtonNo({
        position: "absolute",
        left: `${Math.floor(Math.random() * window.innerWidth) + 1}px`,
        bottom: `${Math.floor(Math.random() * window.innerHeight) + 1}px`,
        top: `${Math.floor(Math.random() * window.innerHeight) + 1}px`,
    })
    }
    return (
        <Button className="button-pink button-no" style={cssButtonNo} onClick={onMoveNoButton} onMouseEnter={onMoveNoButton} >NO</Button>
    )
}

export default NoButton;