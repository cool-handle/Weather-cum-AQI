import React from 'react'
import './styles.css'
function Text(props) {
    if(props.text){
        if(props.color[props.color.length-1] === ";")
        var color1= props.color.slice(0, -1)
        return (
            <div className="welcome">
                <h2 style={{color: color1}}>Air Quality- {props.text}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default Text
