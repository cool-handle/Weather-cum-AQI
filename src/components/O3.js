import React from 'react'

function O3(props) {

    if(props.loading){
        var {name ,color, aqi, text} = props.o3
        if(color[color.length-1] === ";")
        color= color.slice(0, -1)
        console.log(color)
        console.log(typeof color);
        return (
            <div className="A">
                <h2 style={{color: color}}>{name}- {aqi} AQI {text}</h2>
            </div>
        )
    }
    else{
        return null
    }
}

export default O3
