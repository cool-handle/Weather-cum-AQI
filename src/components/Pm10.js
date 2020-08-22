import React from 'react'

function Pm10(props) {
    
    if(props.loading){
        var {name ,color, aqi, text} = props.pm10
        if(color[color.length-1] === ";")
        color= color.slice(0, -1)
        console.log(color)
        console.log(typeof color)
        return (
            <div className="A">
                <h2 style={{color: `${color}`}}>{name}- {aqi} AQI {text}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default Pm10
