import React from 'react'

function Alert(props) {
    if(props.alert){
        if(props.color[props.color.length-1] === ";")
        var color1= props.color.slice(0, -1)
        return (
            <div className="welcome">
                <h2 style={{color: color1}}>Air Description- {props.alert}</h2>
            </div>
        )
        }
    else{
        return null
    }
}

export default Alert
